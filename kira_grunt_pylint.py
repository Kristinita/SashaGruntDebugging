"""Docstrings."""
import ruamel.yaml as yaml
YAMLCONFIG = yaml.safe_load(open('site_variables.yaml', encoding='utf-8'))
print(YAMLCONFIG)
