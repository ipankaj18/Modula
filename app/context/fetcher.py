from pathlib import Path


def fetch_files(base_path, directories):
    files = []

    for d in directories:
        dir_path = Path(base_path) / d
        if not dir_path.exists():
            continue

        for file in dir_path.rglob("*.py"):
            try:
                with open(file, "r", encoding="utf-8") as f:
                    files.append({
                        "path": str(file),
                        "content": f.read()
                    })
            except Exception:
                pass

    return files