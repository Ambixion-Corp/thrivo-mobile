# Changelog

All notable changes to this project are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

Entries are grouped by release. An `Unreleased` section at the top tracks
changes since the last tagged release and is updated automatically: a pull
request is opened on every merge to update it (see
`.github/workflows/update-changelog.yml`).

## [Unreleased]

### Added
- Initial project skeleton with Expo SDK 57, React Native 0.86, React 19.2, and
  TypeScript 7.0.
- Authentication flow (login + signup screens) backed by JWT stored in MMKV.
- Discovery feed screen with video-style items and like/unlike actions.
- Deal-flow / investor matching screen with swipe-to-pass and intro requests.
- Founder and creator profile screens.
- Bottom-tab navigation (Feed, Investor, Creator, Profile) with a
  native-stack root navigator for auth gating.
- Zustand client state stores (`authStore`, `useAppStore`) with MMKV persistence.
- React Query integration for server-state fetching and mutations.
- NativeWind (Tailwind CSS) styling with a custom brand color palette.
- CI workflow validating TypeScript (`npx tsc --noEmit`) on every pull request.

### Changed
- (No prior versions to record.)

## [1.0.0] - initial

### Added
- Project bootstrap: `feature/add-codeowners`, CODEOWNERS, Dependabot config.
- CI setup: `feature/ci-setup`, GitHub Actions, CodeQL, Dependabot.
- Express API integration: auth (signup/login), feed, and deals endpoints.
- Dependency updates (Dependabot): react-native 0.86.0 to 0.86.2, react-native-
  reanimated 4.5.0 to 4.5.3, react-native-screens 4.25.2 to 4.26.2, babel-preset-
  expo 57.0.4 to 57.0.5, expo-status-bar 57.0.0 to 57.0.1,
  @react-navigation/native 7.3.14, and the initial navigation stack.

[Unreleased]: https://github.com/Ambixion-Corp/thrivo-mobile/compare/v1.0.0...HEAD
[1.0.0]: https://github.com/Ambixion-Corp/thrivo-mobile/releases/tag/v1.0.0