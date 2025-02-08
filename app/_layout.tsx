import { Stack } from "expo-router";
import { useCallback } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

// Prevent the splash screen from auto-hiding before we're ready
SplashScreen.preventAutoHideAsync();

/**
 * Root Layout Component
 * 
 * This component serves as the main layout wrapper for the entire application.
 * It handles:
 * 1. Font loading and initialization
 * 2. Splash screen management
 * 3. Navigation stack configuration
 * 
 * Navigation Structure:
 * - (tabs): Main tab navigation (Home, Messages, etc.)
 * - job-details/[id]: Modal screen for job details
 */
export default function RootLayout() {
  // Load any custom fonts here
  const [fontsLoaded] = useFonts({
    // DMSans: require('../assets/fonts/DMSans-Regular.ttf'),
    // Add more custom fonts as needed
  });

  // Handle layout ready callback
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      // Hide splash screen once fonts are loaded
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  // Don't render anything until fonts are loaded
  if (!fontsLoaded) {
    return null;
  }

  return (
    <Stack
      screenOptions={{
        headerShown: false, // Global header configuration
      }}
    >
      {/* Main Tab Navigation */}
      <Stack.Screen 
        name="(tabs)" 
        options={{ 
          headerShown: false 
        }} 
      />

      {/* Job Details Modal Screen */}
      <Stack.Screen 
        name="job-details/[id]" 
        options={{
          presentation: 'modal',
          animation: 'slide_from_bottom',
          // Add gesture enabled for better UX
          gestureEnabled: true,
          gestureDirection: 'vertical',
        }} 
      />
    </Stack>
  );
}
