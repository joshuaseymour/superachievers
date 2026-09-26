<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Superachievers Project Guide

## Repository & Deployment

- **Source of Truth**: Origin main branch (`joshuaseymour/superachievers`)
  - Note: This Origin repo currently mirrors from GitHub (inbound mirror status) but Origin main is the authoritative branch
  - GitHub is reference only; never use `tmp-*` branches
- **Vercel Project**: `superachievers` (prj_BXDvP3qvK5eDApiLbHOEUKPgOAoR)
  - Team: supercivilization
  - Deploys from Origin (type: cursor-origin)
  - Domains: superachievers.xyz, www.superachievers.xyz
- **Commands**:
  - Build: `pnpm build`
  - Dev: `pnpm dev` (only on cloud VMs, never local)
  - Lint: `pnpm lint`

## Content & Design

This is a **splash-only** site with no CTA, form, or button. The splash displays exactly four lines:

1. **Superachievers** (name)
2. **Multi Family Office Rewards** (descriptor)
3. **Synchronously Co-Create Our Super Puzzle** (tagline)
4. **Ensure you are set to always win with others via our multi family office** (plain)

Do not alter this content, add interactive elements, or create additional pages beyond the splash and not-found.

### Color System

- **Base Palette**: Tailwind/shadcn stone (oklch color space)
- **Accent**: Fuchsia/pink for the central glow and interactive elements
- **Theme**: System light/dark mode support via next-themes
- **No Hard Black**: Use stone palette values, never `#000` or `oklch(0 0 0)`
- See `DESIGN.md` for complete design tokens

### Fonts

- Sans: Geist (via next/font/google)
- Mono: Geist Mono
- Both loaded with Latin subset

## Development Environment

Joshua's MacBook Air is a thin client. **Never suggest running local dev servers or local builds.** All development, building, and verification happens on:
- Cloud VMs (Cursor Cloud Agents)
- Vercel preview deployments

## Database

- **Supabase Project**: `mdkruymhqtxiyaveqrul` (read-only MCP configured in `.cursor/mcp.json`)
- **Shared Resource**: This Supabase project is shared with joshuaseymour.com and other sites
- **Replacement Pending**: May be replaced by a dedicated project soon
- **Impact**: Any schema or data change affects every site using this project

## Guardrails

One agent per task; no sub-agents or parallel agents unless Joshua asks. Stop and report after 3 failed attempts at the same step. Never merge to main, promote to production, or change env vars or secrets without Joshua's explicit approval. Work on a branch; a Vercel preview must be READY before asking to merge.
