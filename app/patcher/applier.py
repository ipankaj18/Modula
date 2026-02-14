import subprocess


def apply_patch(patch_text):
    with open("patch.diff", "w") as f:
        f.write(patch_text)

    subprocess.run(["git", "apply", "patch.diff"], check=True)


def create_commit(branch_name, message="Modula AI Fix"):
    subprocess.run(["git", "checkout", "-b", branch_name], check=True)
    subprocess.run(["git", "add", "."], check=True)
    subprocess.run(["git", "commit", "-m", message], check=True)
    subprocess.run(["git", "push", "origin", branch_name], check=True)
