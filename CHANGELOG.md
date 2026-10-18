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

- bump @react-navigation/native-stack from 7.19.2 to 7.21.0 ([#127](https://github.com/Ambixion-Corp/thrivo-mobile/pull/127))
- bump @react-navigation/bottom-tabs from 7.19.2 to 7.21.0 ([#125](https://github.com/Ambixion-Corp/thrivo-mobile/pull/125))
- bump @tanstack/react-query from 5.103.2 to 5.104.3 ([#134](https://github.com/Ambixion-Corp/thrivo-mobile/pull/134))
- bump react-native-reanimated from 4.7.0 to 4.7.1 ([#131](https://github.com/Ambixion-Corp/thrivo-mobile/pull/131))
- bump @expo/metro-runtime from 58.0.6 to 58.0.14 ([#135](https://github.com/Ambixion-Corp/thrivo-mobile/pull/135))
- bump babel-preset-expo from 57.0.13 to 57.0.14 ([#132](https://github.com/Ambixion-Corp/thrivo-mobile/pull/132))
- bump react-native-safe-area-context from 5.10.0 to 5.10.1 ([#130](https://github.com/Ambixion-Corp/thrivo-mobile/pull/130))
- bump react-native-web from 0.21.2 to 0.21.3 ([#128](https://github.com/Ambixion-Corp/thrivo-mobile/pull/128))
- bump @react-navigation/native from 7.4.1 to 7.5.0 ([#123](https://github.com/Ambixion-Corp/thrivo-mobile/pull/123))

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