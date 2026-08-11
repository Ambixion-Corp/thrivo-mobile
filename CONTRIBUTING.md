# Contributing to Thrivo Mobile

Thanks for your interest in contributing. This document explains the workflow and conventions for the mobile (Expo) client.

## Prerequisites

- Node.js 20+ (CI uses Node 20)
- npm 10+ (node_modules is committed to .gitignore; install before development)
- A working Android Emulator / Xcode install for native testing, or use the web target

## Getting Started

1. Fork and clone your fork.
2. Create a feature branch:

       git checkout -b feature/<descriptive-name>

3. Install dependencies:

       npm install

4. Start the dev server:

       npm start

## Development Workflow

- Make changes on a feature branch named `feature/<descriptive-name>`.
- Keep changes focused: one feature or fix per pull request.
- Write type-safe code; this project uses TypeScript with strict mode.
- Run the type checker before opening a PR (it is the CI gate):

       npx tsc --noEmit

- Push to your fork and open a pull request against `master`.

## Code Style

- Use 2-space indentation.
- Use semicolons; do not rely on ASI.
- Prefer the existing component patterns; do not introduce new UI libraries.
- Style components with NativeWind (Tailwind className). Do not use inline styles unless unavoidable.
- Follow the existing navigation and state conventions (Zustand for client state, React Query for server state).

## Testing

There is no unit test runner configured yet. CI performs static type checking via `npx tsc --noEmit` (see .github/workflows/ci.yml). Before merging, ensure the type check passes. When a test framework is introduced, add tests for new features.

## Pull Requests

- Reference the issue your PR addresses in the description.
- Ensure CI is green on the pull request.
- Request a review from a code owner (see .github/CODEOWNERS).
- Squash-and-merge is the preferred merge strategy once approved.

## Dependencies

- Dependencies are managed with npm. The lockfile is package-lock.json.
- Bump dependencies in lockstep with their React Native / Expo peers.
- Do NOT accept a Dependabot PR that upgrades Tailwind to v4 without a coordinated manual migration of global.css (to the @import syntax) and tailwind.config.js (to CSS-first @theme). This is a breaking change and must be handled deliberately.
