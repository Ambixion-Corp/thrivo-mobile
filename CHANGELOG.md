# Changelog

All notable changes to this project are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

Entries are grouped by release. An `Unreleased` section at the top tracks
changes since the last tagged release and is updated automatically: a pull
request is opened on every merge to update it (see
`.github/workflows/update-changelog.yml`).

## [Unreleased]

### Changed

- update package-lock.json
- bump expo-status-bar from 57.0.1 to 58.0.4
- bump react and react-dom to 19.3.1
- bump react from 19.3.0 to 19.3.1
- bump react-native-safe-area-context from 5.10.1 to 5.11.1
- bump react-native-screens from 4.30.0 to 4.30.1
- bump react-native-gesture-handler from 3.3.0 to 3.4.0
- bump zustand from 5.0.15 to 5.0.16
- bump react-native-screens from 4.28.0 to 4.30.0 ([#146](https://github.com/Ambixion-Corp/thrivo-mobile/pull/146))
- bump @shopify/flash-list from 2.3.2 to 2.3.3 ([#145](https://github.com/Ambixion-Corp/thrivo-mobile/pull/145))
- bump @expo/metro-runtime from 58.0.14 to 58.0.15 ([#148](https://github.com/Ambixion-Corp/thrivo-mobile/pull/148))
- bump react-native-web from 0.21.3 to 0.21.4 ([#149](https://github.com/Ambixion-Corp/thrivo-mobile/pull/149))
- bump @tanstack/react-query from 5.104.3 to 5.104.5 ([#152](https://github.com/Ambixion-Corp/thrivo-mobile/pull/152))

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