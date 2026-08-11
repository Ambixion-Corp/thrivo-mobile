# Thrivo Mobile

Mobile application for Thrivo, built with Expo (SDK 57), React Native, and NativeWind (Tailwind CSS for React Native). The app connects startup founders, investors, and content creators for discovery, pitching, and deal flow.

## Project Status

Under active development. The current codebase targets Expo SDK 57 / React Native 0.86 / React 19.2.x / TypeScript 7.0.2.

## Requirements

- Node.js 20 or newer (the CI workflow pins Node 20)
- npm 10 or newer
- Expo CLI (optional, for running without npx)

Install the CLI globally:

    npm install -g expo-cli

## Getting Started

1. Clone and enter the project:

       git clone https://github.com/Ambixion-Corp/thrivo-mobile.git
       cd thrivo-mobile

2. Install dependencies:

       npm install

3. Start the development server:

       npm start
       expo start

4. Launch a target:
   - a - start the Android emulator (requires Android Studio / AVD)
   - i - start the iOS simulator (requires Xcode, macOS only)
   - w - serve the web build in a browser

> Android emulators reach the local API via http://10.0.2.2:5000. This is mapped automatically in src/config/api.ts. iOS and web use http://localhost:5000.

## Connecting to the Backend

The app calls the Thrivo backend API. Before running the app, start the backend on port 5000:

    cd ../thrivo-mobile-backend
    npm install
    npm run dev
    # API available on http://localhost:5000

The base URL is defined in src/config/api.ts.

## Available Scripts

    npm start        Start the Expo development server
    npm run android  Open the app on an Android device/emulator
    npm run ios      Open the app on the iOS simulator
    npm run web      Serve the app over web
    npx tsc --noEmit Type-check the project (same command run by CI)

Type checking is run with `npx tsc --noEmit`. This is the command executed by CI on every pull request; ensure it passes locally before opening a PR.

## Project Structure

    App.tsx            Root component: status bar, providers, navigation container
    index.ts           Expo entry point (registerRootComponent)
    global.css         NativeWind / Tailwind entry (base, components, utilities)
    babel.config.js    Babel config with NativeWind preset + Reanimated plugin
    metro.config.js    Metro bundler config with withNativeWind wrapper
    tailwind.config.js Tailwind config extending the brand color palette
    app.json           Expo app config (name, icon, splash, Android adaptive icons)
    tsconfig.json      TypeScript config extending expo/tsconfig.base

    src/
      config/api.ts        API base URL and route map for the backend
      navigation/
        RootNavigator.tsx   Auth-aware stack (auth flow vs app tabs)
        TabNavigator.tsx    Bottom tab navigator (Feed, Investor, Creator, Profile)
      features/
        auth/                Login and signup screens
        feed/                Discovery feed screen (video feed, likes)
        investors/           Deal-flow / investor matching screen
        profiles/            Founder and creator profile screens
      store/
        authStore.ts         JWT auth + user state (persisted via MMKV)
        useAppStore.ts       App UI state: onboarding, theme, category (MMKV)
      providers/
        QueryProvider.tsx    React Query client provider

## State Management

- Zustand powers two stores: authStore (JWT token, authenticated user, auth API calls) and useAppStore (onboarding, theme, active category). Both persist to MMKV.
- React Query (@tanstack/react-query) manages server state and API fetching with a 5-minute stale-time and automatic retry.

## Navigation

- A native-stack RootNavigator branches on isAuthenticated: the tab flow for authenticated users, or a modal auth flow (sign up / sign in) for unauthenticated users.
- The TabNavigator renders four tabs: Feed (DiscoveryFeed), Investor (InvestorMatch), Creator (CreatorProfile), and Profile (FounderProfile).

## Styling

- NativeWind v4 with Tailwind v3 powers all component styling via className.
- global.css imports the Tailwind base, components, and utilities layers; the brand palette (cyan, lime, pink, purple, dark) is defined in tailwind.config.js under theme.extend.colors.brand.
- NOTE: do not merge a Dependabot bump to Tailwind v4. v4 is a breaking, CSS-first rewrite that removes the @tailwind directives used in global.css and requires a manual migration of the nativewind/preset config. CI runs only tsc, so it cannot catch the breakage.

## Branch Convention

- Default branch: master
- Feature branches: feature/<descriptive-name>
- Each pull request runs CI: npm install && npx tsc --noEmit

## License

MIT License. See LICENSE for details.
