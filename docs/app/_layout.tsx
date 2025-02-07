/**
 * ROOT LAYOUT FILE
 * This is the main layout file that controls the overall app structure and navigation.
 * 
 * WHAT THIS FILE DOES:
 * 1. Handles font loading
 * 2. Controls the splash screen
 * 3. Sets up the main navigation structure
 * 
 * HOW TO MODIFY THIS FILE:
 */

import { Stack } from "expo-router";
import { useCallback } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

// This prevents the splash screen from hiding automatically
// MODIFY: Remove this line if you want the splash screen to hide automatically
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  // FONT LOADING
  // This loads any custom fonts your app needs
  // HOW TO MODIFY:
  // 1. To add a new font, add it to the object below like this:
  // const [fontsLoaded] = useFonts({
  //   'CustomFont-Bold': require('./assets/fonts/CustomFont-Bold.ttf'),
  //   'CustomFont-Regular': require('./assets/fonts/CustomFont-Regular.ttf'),
  // });
  const [fontsLoaded] = useFonts({
    // Add your custom fonts here
  });

  // SPLASH SCREEN HANDLER
  // This function hides the splash screen once fonts are loaded
  // HOW TO MODIFY:
  // 1. Add additional conditions before hiding splash screen
  // 2. Add additional setup code that needs to run before showing the app
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  // LOADING CHECK
  // Don't render anything until fonts are loaded
  // HOW TO MODIFY:
  // 1. Add additional loading conditions
  // 2. Change the loading state UI by returning a loading component instead of null
  if (!fontsLoaded) {
    return null;
  }

  // MAIN NAVIGATION STRUCTURE
  // This sets up the main stack navigation for the app
  // HOW TO MODIFY:
  // 1. Change global screen options in screenOptions
  // 2. Add new screens using Stack.Screen
  // 3. Modify screen-specific options in the options prop
  return (
    <Stack
      screenOptions={{
        // Global screen options - apply to all screens
        // MODIFY: Adjust these to change the global look of your navigation
        headerShown: false,
      }}
    >
      {/* TABS SCREEN
          This is the main tabs navigation
          HOW TO MODIFY:
          1. Change headerShown to true to show the header
          2. Add more options to customize the tabs screen */}
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />

      {/* JOB DETAILS SCREEN
          This is the modal screen that shows job details
          HOW TO MODIFY:
          1. Change presentation to 'card' for a different animation
          2. Change animation to 'slide_from_right' for horizontal sliding
          3. Add gestureEnabled: false to disable swipe-to-dismiss */}
      <Stack.Screen 
        name="job-details/[id]" 
        options={{
          presentation: 'modal',
          animation: 'slide_from_bottom',
        }} 
      />
    </Stack>
  );
}

/**
 * TIPS FOR MODIFYING THIS FILE:
 * 
 * 1. ADDING A NEW SCREEN:
 *    <Stack.Screen 
 *      name="new-screen" 
 *      options={{
 *        headerShown: true,
 *        title: "My New Screen"
 *      }} 
 *    />
 * 
 * 2. ADDING CUSTOM TRANSITIONS:
 *    options={{
 *      animation: 'fade',  // or 'flip', 'slide_from_right'
 *      presentation: 'card'  // or 'modal', 'transparentModal'
 *    }}
 * 
 * 3. ADDING CUSTOM HEADERS:
 *    options={{
 *      headerShown: true,
 *      headerStyle: { backgroundColor: '#4B7BE5' },
 *      headerTintColor: '#fff',
 *      headerTitle: "Custom Title"
 *    }}
 */ 