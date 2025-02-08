import { Tabs } from 'expo-router';
import { Image } from 'react-native';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          backgroundColor: '#FFFFFF',
          borderTopWidth: 1,
          borderTopColor: '#EFEFEF',
          height: 60,
          paddingBottom: 8,
          paddingTop: 8,
        },
        tabBarActiveTintColor: '#4B7BE5',
        tabBarInactiveTintColor: '#83829A',
        tabBarShowLabel: false,
        headerShown: false,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ focused }) => (
            <Image
              source={require('../../assets/icon_imgs/png/005-home.png')}
              style={{ 
                width: 24, 
                height: 24,
                opacity: focused ? 1 : 0.5
              }}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="stats"
        options={{
          title: 'Stats',
          tabBarIcon: ({ focused }) => (
            <Image
              source={require('../../assets/icon_imgs/png/006-bar-chart.png')}
              style={{ 
                width: 24, 
                height: 24,
                opacity: focused ? 1 : 0.5
              }}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="saved"
        options={{
          title: 'Saved',
          tabBarIcon: ({ focused }) => (
            <Image
              source={require('../../assets/icon_imgs/png/007-heart.png')}
              style={{ 
                width: 24, 
                height: 24,
                opacity: focused ? 1 : 0.5
              }}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ focused }) => (
            <Image
              source={require('../../assets/icon_imgs/png/008-user.png')}
              style={{ 
                width: 24, 
                height: 24,
                opacity: focused ? 1 : 0.5
              }}
            />
          ),
        }}
      />
    </Tabs>
  );
}
