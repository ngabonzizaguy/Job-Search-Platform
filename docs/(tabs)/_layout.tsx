// This file makes the bottom menu of our app
// It has 4 buttons: Home, Stats, Saved, and Profile
// Each button has an icon that lights up when you click it

import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function TabLayout() {
  return (
    <Tabs
      // These settings control how the bottom menu looks
      screenOptions={{
        // How the menu bar looks
        tabBarStyle: {
          backgroundColor: '#FFFFFF',     // The color is white
          borderTopWidth: 1,             // Makes a thin line at the top
          borderTopColor: '#EFEFEF',     // The line is light gray
          height: 60,                    // How tall the menu is
          paddingBottom: 8,              // Space at the bottom
          paddingTop: 8,                 // Space at the top
        },
        // Don't show text under the icons
        tabBarShowLabel: false,
        // Don't show the top bar
        headerShown: false,
      }}>

      {/* HOME BUTTON
          This is the main screen with job listings
          Want to change it?
          - Pick a different icon from Ionicons
          - Make the icon bigger or smaller (24 is the current size)
          - Change the blue color when selected or gray when not selected */}
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? 'home' : 'home-outline'}
              size={24}
              color={focused ? '#4B7BE5' : '#83829A'}
            />
          ),
        }}
      />

      {/* STATS BUTTON
          This shows charts and numbers
          You can change it just like the Home button */}
      <Tabs.Screen
        name="stats"
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? 'stats-chart' : 'stats-chart-outline'}
              size={24}
              color={focused ? '#4B7BE5' : '#83829A'}
            />
          ),
        }}
      />

      {/* SAVED BUTTON
          This shows jobs you've saved
          You can change it just like the Home button */}
      <Tabs.Screen
        name="saved"
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? 'heart' : 'heart-outline'}
              size={24}
              color={focused ? '#4B7BE5' : '#83829A'}
            />
          ),
        }}
      />

      {/* PROFILE BUTTON
          This shows your information
          You can change it just like the Home button */}
      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? 'person' : 'person-outline'}
              size={24}
              color={focused ? '#4B7BE5' : '#83829A'}
            />
          ),
        }}
      />
    </Tabs>
  );
}

/* HOW TO CHANGE THINGS IN THIS FILE:

1. Want to add a new button?
   - Copy one of the existing buttons (the parts between <Tabs.Screen> and />)
   - Change the name to your new screen name
   - Pick a new icon from Ionicons
   - Make a new file for your screen in the (tabs) folder

2. Want to change how the menu looks?
   In the tabBarStyle part:
   - Make it taller or shorter by changing 'height'
   - Change the color by changing 'backgroundColor'
   - Add more or less space with 'paddingBottom' and 'paddingTop'
   - Change the top line with 'borderTopWidth' and 'borderTopColor'

3. Want different icons?
   For each button:
   - Pick new icons from https://icons.expo.fyi/
   - Make them bigger or smaller with 'size'
   - Change their colors with the 'color' setting

4. Want text under the icons?
   - Change tabBarShowLabel: false to true
   - Add a label like this:
     options={{
       tabBarLabel: "Home",
       tabBarIcon: ...
     }}

5. Want to add a red dot with a number?
   Add this to any button:
   options={{
     tabBarBadge: "3",
     tabBarIcon: ...
   }}

Remember:
- 'focused' means the button is selected
- Colors use # codes (like #4B7BE5 for blue)
- Sizes are in pixels (like 24 for icon size)
*/ 