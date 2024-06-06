import ckan.plugins as plugins
import ckan.plugins.toolkit as toolkit
import re

import logging
log = logging.getLogger(__name__)

# groupable schema
def list_of_groupings(schema):
    log.debug("list_of_groupings")
    if 'dataset_field_group_sort_order' in schema:
        log.debug("schema order: %s" % schema['dataset_field_group_sort_order'])
        return schema['dataset_field_group_sort_order']
    else:
        # unsorted
        return list(set([field['grouping'] for field in schema['dataset_fields'] if 'grouping' in field]))

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
        return {'schema_field_group_list_of_groupings': list_of_groupings,
                'slugify': slugify}
