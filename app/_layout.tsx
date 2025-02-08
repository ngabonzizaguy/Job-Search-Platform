import { Stack } from "expo-router";
import { useCallback } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { View } from "react-native";

// Keep the splash screen visible while fetching resources
SplashScreen.preventAutoHideAsync();

/**
 * Root Layout Component
 * 
 * component:  main layout wrapper for the entire application.
 * 1. Font loading and initialization
 * 2. Splash screen management
 * 3. Navigation stack configuration
 * 
 * Navigation Structure:
 * - (tabs): Main tab navigation (Home, Messages, etc.)
 * - job-details/[id]: Modal screen for job details
 */
export default function RootLayout() {
  // Load custom fonts
  const [fontsLoaded] = useFonts({
    // DMSans: require('../assets/fonts/DMSans-Regular.ttf'),
    // where custom fonts are stored
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
    <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
      <Stack
        screenOptions={{
          headerShown: false, // Global header configuration
          animation: 'fade',
          contentStyle: { backgroundColor: 'white' }
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
            presentation: 'card',
            animation: 'slide_from_right',
          }} 
        />
      </Stack>
    </View>
  );
}
