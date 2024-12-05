import ckan.plugins as plugins
import ckan.plugins.toolkit as toolkit
from ckan.common import current_user
import re

import logging
log = logging.getLogger(__name__)

# groupable schema
def list_of_groupings(schema):
    return schema.get('dataset_field_group_sort_order') or \
            schema.get('field_group_sort_order') or \
            list(set([field['grouping'] for field in schema['dataset_fields'] if 'grouping' in field]))

def user_is_admin_of_org(org_id):
    orgs_admins = toolkit.get_action('member_list')({}, {'id': org_id, 'object_type': 'user', 'capacity': 'admin'})
    orgs_admin_list = [m[0] for m in orgs_admins]
    return current_user.id in orgs_admin_list

slugify_pat = re.compile('[^a-zA-Z0-9]')
def slugify(s):
    return slugify_pat.sub('', s)
    
class SchemaFieldGroupsPlugin(plugins.SingletonPlugin):
    plugins.implements(plugins.IConfigurer)
    plugins.implements(plugins.ITemplateHelpers)

    # IConfigurer
    def update_config(self, config_):
        toolkit.add_template_directory(config_, 'templates')
        toolkit.add_public_directory(config_, 'public')
        toolkit.add_resource('public', 'schema_field_group')

    # ITemplateHelpers
    def get_helpers(self):
        #  groupable schema
        log.debug('adding helper')
        return {
                'schema_field_group_list_of_groupings': list_of_groupings,
                'slugify': slugify,
                'user_is_admin_of_org': user_is_admin_of_org
            }
