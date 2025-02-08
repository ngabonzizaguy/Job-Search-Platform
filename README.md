# Job Search UI Challenge

Mobile UI implementation for a job search platform using React Native and Expo.

## Prerequisites

1. Node.js LTS release - [Download](https://nodejs.org/en/)
2. Git - [Download](https://git-scm.com/)
3. Expo CLI: 
   ```bash
   npm install -g expo-cli
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
   npx expo start
   ```

2. Run on your device:
   - Scan QR code with Expo Go (Android) or Camera app (iOS)
   - Press 'a' for Android emulator
   - Press 'i' for iOS simulator

## Troubleshooting

If you encounter issues with Expo Go:

1. **Create a development build (Recommended)**
   ```bash
   npx expo prebuild
   npx expo run:android  # for Android
   npx expo run:ios      # for iOS
   ```

2. **Clean Project**
   ```bash
   npx expo start --clear
   ```

3. **Reset Cache**
   ```bash
   npm start -- --reset-cache
   ```

4. **Update Expo CLI**
   ```bash
   npm install -g expo-cli@latest
   ```

5. **Check Environment**
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

## License
MIT License

---
Challenge Implementation by Ngabonziza Guy
