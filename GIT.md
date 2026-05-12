

# Git Workflow Rules

## Branching
- Never work directly on main.
- For every new feature or task, create a new branch from the latest main branch.
- Before creating a branch:
  1. checkout main
  2. pull latest changes
  3. create new feature branch

Example branch names:
- feature/navbar-redesign
- feature/hero-section
- fix/mobile-layout
- refactor/button-system

---

## Commits
- Keep commits small and focused.
- Write clear commit messages.
- Do not commit unrelated changes together.

Examples:
- feat: add responsive navbar
- fix: improve mobile spacing
- refactor: simplify hero layout

---

## Remote

> ⚠️ **IMPORTANT: Never push to any remote branch without explicitly asking the user for confirmation first.** This applies to all branches including main, feature branches, and any other remote. Always stop and ask before running any `git push` command.

- Push feature branches to remote only after confirmation.
- Never force-push main.
- Never merge to main without approval.
- Never assume a push is implied by a merge or any other instruction.

---

## Safety
- Before major changes, summarize planned git actions.
- Never delete branches without approval.
- Never rewrite git history unless explicitly instructed.