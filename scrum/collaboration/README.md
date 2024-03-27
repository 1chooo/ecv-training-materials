# Collaboration Guide

## GitHub

### Push to the Repository

- No one is allowed to directly push to the main branch. All changes must be made through pull requests for merging (with or without code review).
- When merging a pull request, it is necessary to link related issues or tickets and include `#issue_number` in the commit message to provide context. It is also recommended to communicate the purpose of the pull request to the Product Owner (PO) for faster merging of the code.
- Each person should work on their own branch and before starting any development, they should pull the latest code from the main branch to keep their branch up to date.

The following is the workflow:

1. Fork the PO's repository.
2. Clone your forked repository.
3. Add the PO's repository as the upstream remote.
4. Create a new branch for your feature.
5. Push your code to the branch you created in your forked repository.
6. If no issues are found, create a pull request to the PO's repository's main branch.
7. Once the PO approves, merge the pull request.
8. Fetch the latest code from the PO's repository and merge it into your forked repository's main branch.

> [!IMPORTANT]
> If the PO's repository has been updated, you need to fetch the latest code from the PO's repository and merge it into your forked repository's main branch.

The Example of the workflow:

- PO's Repository: `PO/test-repo`
  - Main Branch: `main`
- Forked Repository: `YourName/test-repo`
  - Main Branch: `main`
  - Feature Branch: `feature/your-feature` <- Add your feature here
  - Upstream Remote: `PO/test-repo`
  - Upstream Branch: `main`
- Pull Request: `PO/test-repo:main <- YourName/test-repo:feature/your-feature`
- Merge: `PO/test-repo:main <- YourName/test-repo:feature/your-feature`
- Fetch: `YourName/test-repo:main <- PO/test-repo:main`
- Merged: `YourName/test-repo:feature/your-feature <- YourName/test-repo:main` or Create a new branch from `YourName/test-repo:main`

### Issue