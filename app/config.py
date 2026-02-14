
import yaml


def load_label_config(path="examples/labels.yaml"):
    with open(path, "r") as f:
        return yaml.safe_load(f)