# Groups in schema

Requires ckanext_scheming.

Install:

* pip install ckanext-schema_field_groups

* Install into the ckan plugins list _before_ ckanext_scheming, so that the templates are correct.

* Add a section to your schema:

```
{
  "scheming_version": 1,
  "dataset_type": "dataset",
  "about": "A schema covering a number of useful fields and all fields needed for DCAT-AP, assuming a custom profile is written to do the mapping",
  "about_url": "http://github.com/ckan/ckanext-scheming",
  "dataset_field_group_sort_order": [
    "Description",
    "Provenance",
    "Ownership",
    "Location",
    "Security",
    "Retention",
    "Management"
  ],
  ...
```


  and in each field:

```
  "grouping": "Description"
```
