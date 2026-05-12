<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->


# Agent Rules

## General Workflow

- Work incrementally.
- Prefer small focused changes.
- Before major implementation changes, explain the plan first.
- Do not rewrite unrelated files.
- Ask before introducing major dependencies.
- Do not add unnecesary files.

---

## Project Structure

- Prefer reusable components.
- Keep components small and composable.
- Avoid duplicate components.
- Reuse existing styles and utilities whenever possible.

---

## Styling

- Use Tailwind CSS for styling.
- Prefer clean and readable class structure.
- Follow the design direction defined in CLAUDE.md.
- Avoid generic SaaS or crypto-style UI patterns.

---

## Responsive Design

- Always consider mobile responsiveness.
- Mobile-first layouts are preferred.
- Avoid horizontal overflow.

---

## Code Quality

- Keep code clean and production-ready.
- Avoid unnecessary complexity.
- Prefer readability over cleverness.
- Use TypeScript best practices.

---

## Dependencies

- Do not install unnecessary packages.
- Prefer native Next.js or React solutions when possible.
- Ask before adding animation or UI libraries beyond the approved stack.

---

## Security

- Never expose secrets or environment variables.
- Do not modify `.env` files unless explicitly instructed.
- Do not add third-party tracking scripts without approval.

---

## Git Workflow

- Never work directly on main.
- Follow the rules defined in GIT.md.