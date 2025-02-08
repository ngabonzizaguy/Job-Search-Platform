# Job Search UI Challenge

Mobile UI implementation for a job search platform using React Native and Expo.

## Prerequisites

1. Node.js LTS release - [Download](https://nodejs.org/en/)
2. Git - [Download](https://git-scm.com/)
3. Expo CLI: 
   ```bash
   npm install -g expo-cli
   ```

### Platform-specific Requirements

#### Android Development
1. Install Android Studio - [Download](https://developer.android.com/studio)
2. Install Android SDK (via Android Studio)
3. Set up environment variables:
   - Add ANDROID_HOME to your Path (e.g., C:\Users\USERNAME\AppData\Local\Android\Sdk)
   - Add platform-tools to your Path (e.g., %ANDROID_HOME%\platform-tools)

#### iOS Development (macOS only)
1. Install Xcode from the Mac App Store
2. Install Xcode Command Line Tools:
   ```bash
   xcode-select --install
   ```

#### Web Development
1. Install webpack:
   ```bash
   npx expo install @expo/webpack-config
   ```

4. Expo Go app on your device - [Android](https://play.google.com/store/apps/details?id=host.exp.exponent) or [iOS](https://apps.apple.com/app/expo-go/id982107779)

## Setup

```bash
# Clone repository
git clone https://github.com/ngabonzizaguy/UIChallenge_mobile.git
cd UIChallenge_mobile

# Install dependencies
npm install

# Create development build (recommended)
npx expo prebuild
```

## Development

1. Start the development server:
   ```bash
   # For all platforms
   npx expo start

   # Platform specific
   npx expo start --android
   npx expo start --ios
   npx expo start --web
   ```

2. Run on your device:
   - Scan QR code with Expo Go (Android) or Camera app (iOS)
   - Press 'a' for Android emulator
   - Press 'i' for iOS simulator
   - Press 'w' for web browser

## Troubleshooting

### Android Issues
1. **SDK not found**:
   - Open Android Studio → Settings → Appearance & Behavior → System Settings → Android SDK
   - Note down the Android SDK Location
   - Set ANDROID_HOME environment variable to this path
   - Add platform-tools to Path: %ANDROID_HOME%\platform-tools

2. **Port 8081 in use**:
   ```bash
   # Kill the process using port 8081
   npx kill-port 8081
   ```

### iOS Issues
1. **Simulator not working**:
   ```bash
   sudo xcode-select -s /Applications/Xcode.app
   ```

### General Issues
1. **Clean Project**:
   ```bash
   npx expo start --clear
   ```

2. **Reset Cache**:
   ```bash
   npm start -- --reset-cache
   ```

3. **Update Expo CLI**:
   ```bash
   npm install -g expo-cli@latest
   ```

4. **Check Environment**:
   ```bash
   npx expo-env-info
   ```

## Project Structure
```
├── app/                # Navigation and screens
├── components/         # Reusable components
├── assets/            # Images and fonts
└── types/             # TypeScript definitions
```

## Features
- Home screen with recommended and recent jobs
- Detailed job listings with company info
- Interactive job cards with apply functionality
- Modern UI design with smooth animations

## Tech Stack
- React Native & Expo
- TypeScript
- Expo Router
- React Native Reanimated

## Resources
- [Expo Documentation](https://docs.expo.dev/)
- [React Native Documentation](https://reactnative.dev/)
- [Expo Router Documentation](https://docs.expo.dev/router/introduction/)
- [Android Studio Setup Guide](https://developer.android.com/studio/intro)
- [iOS Development Setup](https://docs.expo.dev/workflow/ios-simulator/)

## License
MIT License

---
Challenge Implementation by Ngabonziza Guy
