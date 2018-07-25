import ckan.plugins as plugins
import ckan.plugins.toolkit as toolkit


# groupable schema
def list_of_groupings(schema):
    if 'dataset_field_group_sort_order' in schema:
        return schema['dataset_field_group_sort_order']
    else:
        # unsorted
        return list(set([field['grouping'] for field in schema['dataset_fields'] if 'grouping' in field]))



class SchemaFieldGroupsPlugin(plugins.SingletonPlugin):
    plugins.implements(plugins.IConfigurer)
    plugins.implements(plugins.ITemplateHelpers)

    # IConfigurer
    def update_config(self, config_):
        toolkit.add_template_directory(config_, 'templates')
        toolkit.add_public_directory(config_, 'public')
        toolkit.add_resource('fanstatic', 'schema_field_group')

    # ITemplateHelpers
    def get_helpers(self):
        #  groupable schema
        return {'schema_field_group_list_of_groupings': list_of_groupings}
