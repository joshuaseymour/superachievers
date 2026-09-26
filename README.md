# Superachievers

Multi Family Office Rewards splash site. Synchronously Co-Create Our Super Puzzle.

## About

This is a Next.js 16 App Router project for Superachievers — a multi family office platform at [superachievers.xyz](https://superachievers.xyz).

The site features a minimalist splash page with:
- Four lines of content: name, descriptor, tagline, and plain statement
- Stone palette with fuchsia accent glow
- System light/dark mode support
- Fluid typography that responds to viewport dimensions

## Stack

- **Framework**: Next.js 16.3.6 (App Router)
- **React**: 19.3.0
- **Styling**: Tailwind CSS 4 + shadcn/ui (base-nova, stone palette)
- **Animation**: motion 13.4.1 (Framer Motion fork)
- **Fonts**: Geist + Geist Mono (via next/font/google)
- **Database**: Supabase (shared project: mdkruymhqtxiyaveqrul)

## Development

This project is developed on cloud VMs and Vercel preview deployments. Local development is not supported.

```bash
# Build the project
pnpm build

# Development server (cloud VMs only)
pnpm dev

# Lint
pnpm lint
```

## Deployment

Deployed on Vercel (team: supercivilization) from Origin main branch.

- Production: [superachievers.xyz](https://superachievers.xyz)
- Preview: Automatic on pull requests

## Documentation

- `AGENTS.md` — Project guide for AI agents
- `DESIGN.md` — Complete design system documentation
- `.cursor/mcp.json` — MCP server configuration (shadcn, Vercel, Supabase)

## License

Private project. All rights reserved.
