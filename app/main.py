import os
from app.config import load_label_config
from app.context.fetcher import fetch_files
from app.llm.agent import generate_patch
from app.patch.applier import apply_patch, create_commit


def run(issue_text, label):

    config = load_label_config()

    if label not in config:
        print(f"No configuration found for label: {label}")
        return

    directories = config[label]["directories"]

    files = fetch_files(".", directories)

    if not files:
        print("No files found for selected module")
        return

    patch = generate_patch(issue_text, files)

    apply_patch(patch)

    branch = f"modula/{label}-fix"
    create_commit(branch)


if __name__ == "__main__":
    issue_text = os.environ["ISSUE_TEXT"]
    label = os.environ["ISSUE_LABEL"]

    run(issue_text, label)
