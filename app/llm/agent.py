from openai import OpenAI
import os

client = OpenAI(api_key=os.environ.get("OPENAI_API_KEY"))

PROMPT_TEMPLATE = """
You are Modula, an AI maintenance engineer.

GOAL:
Fix the issue with minimal and safe changes.

RULES:
- Modify only necessary files
- Keep patches small
- Do not refactor unrelated code
- Output ONLY unified diff format

ISSUE:
{issue}

FILES:
{files}
"""


def generate_patch(issue_text, files):

    file_blob = "\n\n".join(
        [f"FILE: {f['path']}\n{f['content']}" for f in files]
    )

    prompt = PROMPT_TEMPLATE.format(
        issue=issue_text,
        files=file_blob[:120000]
    )

    response = client.chat.completions.create(
        model="gpt-4.1",
        messages=[{"role": "user", "content": prompt}],
        temperature=0.1
    )

    return response.choices[0].message.content
