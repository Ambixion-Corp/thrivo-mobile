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

- bump react-native-gesture-handler from 3.1.0 to 3.2.1
- bump @expo/metro-runtime from 57.0.10 to 57.0.11
- bump @react-navigation/native-stack from 7.18.8 to 7.18.9
- bump @react-navigation/native from 7.3.16 to 7.3.17
- bump @react-navigation/bottom-tabs from 7.18.16 to 7.18.17

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