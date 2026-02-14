from github import Github
import os


def get_github_client():
    token = os.environ["GITHUB_TOKEN"]
    return Github(token)


def get_repo(repo_name):
    gh = get_github_client()
    return gh.get_repo(repo_name)


def get_issue(repo_name, issue_number):
    repo = get_repo(repo_name)
    return repo.get_issue(number=issue_number)
