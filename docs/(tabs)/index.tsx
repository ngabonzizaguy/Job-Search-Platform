// This is the main screen of our app
// It shows:
// 1. A blue header with your name and a notification bell
// 2. A search box to find jobs
// 3. A list of recommended jobs that scrolls sideways
// 4. A list of recent jobs that scrolls up and down

import { View, Text, StyleSheet, SafeAreaView, ScrollView, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { RecommendedJobs } from '../../components/home/RecommendedJobs';
import { RecentJobs } from '../../components/home/RecentJobs';

export default function TabOneScreen() {
  return (
    <SafeAreaView style={styles.container}>
      {/* BLUE HEADER SECTION
          This shows your name and notification bell
          Want to change it?
          - Change the text for name and greeting
          - Change the notification dot color
          - Make the header taller or shorter */}
      <View style={styles.headerSection}>
        <View style={styles.header}>
          <View>
            <Text style={styles.greeting}>Hello</Text>
            <Text style={styles.name}>Leslie Alexander</Text>
          </View>
          <View style={styles.notificationIcon}>
            <Ionicons name="notifications-outline" size={24} color="#FFF" />
            <View style={styles.notificationBadge} />
          </View>
        </View>

        {/* SEARCH BOX
            This lets users search for jobs
            Want to change it?
            - Change the placeholder text
            - Make the box bigger or smaller
            - Change the icon or its color */}
        <View style={[styles.searchContainer, { 
          transform: [{ translateY: 40 }],  // This moves the box down
          elevation: 5,                     // This adds shadow on Android
          shadowColor: '#000',             // Shadow settings for iOS
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          zIndex: 1                        // This makes sure the box is on top
        }]}>
          <Ionicons name="search-outline" size={20} color="#83829A" style={styles.searchIcon} />
          <TextInput
            placeholder="Search job, company, etc.."
            placeholderTextColor="#83829A" 
            style={[styles.searchInput, { zIndex: 2 }]}
          />
        </View>
      </View>

      {/* SCROLLING CONTENT
          This holds the job lists and lets you scroll up and down
          Want to change it?
          - Add more sections
          - Change the background color
          - Add space between sections */}
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          {/* RECOMMENDED JOBS SECTION
              Shows jobs that scroll sideways
              Want to change it?
              - Change the title text
              - Add more space at top or bottom
              - Change text size or color */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Recomendation</Text>
            <RecommendedJobs />
          </View>

          {/* RECENT JOBS SECTION
              Shows latest jobs in a list
              Want to change it?
              - Change the title text
              - Add more space
              - Change how it looks */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Recent Job List</Text>
            <RecentJobs />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

// These are all the styles that make the screen look good
const styles = StyleSheet.create({
  // Main container - holds everything
  container: {
    flex: 1,                    // Takes up all available space
    backgroundColor: '#4B7BE5', // Blue background color
  },
  
  // Blue header section at the top
  headerSection: {
    backgroundColor: '#4B7BE5',
    paddingBottom: 20,
  },
  
  // Header with name and notification
  header: {
    flexDirection: 'row',           // Put things side by side
    justifyContent: 'space-between', // Space things out
    alignItems: 'center',           // Center things vertically
    paddingHorizontal: 24,          // Space on the sides
    paddingTop: 20,                 // Space at the top
    paddingBottom: 24,              // Space at the bottom
  },
  
  // "Hello" text
  greeting: {
    fontSize: 16,
    color: '#FFFFFF',
    opacity: 0.8,                   // Makes it slightly see-through
  },
  
  // Name text
  name: {
    fontSize: 24,
    fontWeight: '600',              // Makes text a bit bold
    color: '#FFFFFF',
    marginTop: 4,                   // Space above the name
  },
  
  // Round notification button
  notificationIcon: {
    position: 'relative',           // This helps position the red dot
    width: 40,
    height: 40,
    backgroundColor: 'rgba(255, 255, 255, 0.1)', // Slightly white background
    borderRadius: 20,               // Makes it round
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  // Red notification dot
  notificationBadge: {
    position: 'absolute',           // Places dot exactly where we want
    top: 10,
    right: 10,
    width: 8,
    height: 8,
    backgroundColor: '#FF0000',     // Red color
    borderRadius: 4,                // Makes it round
  },
  
  // Search box container
  searchContainer: {
    flexDirection: 'row',           // Put icon and input side by side
    alignItems: 'center',           // Center vertically
    backgroundColor: '#FFFFFF',
    borderRadius: 12,               // Rounded corners
    paddingHorizontal: 16,          // Space on sides
    paddingVertical: 12,            // Space top and bottom
    marginHorizontal: 24,           // Space from edges of screen
  },
  
  // Search icon
  searchIcon: {
    marginRight: 12,                // Space between icon and text
  },
  
  // Search input field
  searchInput: {
    flex: 1,                        // Takes up remaining space
    fontSize: 16,
    color: '#000000',
  },
  
  // White scrolling area
  scrollView: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  
  // Content inside scroll view
  content: {
    flex: 1,
    paddingTop: 24,                 // Space at the top
  },
  
  // Each section (Recommended and Recent)
  section: {
    paddingHorizontal: 24,          // Space on sides
    marginBottom: 24,               // Space below section
  },
  
  // Section titles
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',              // Makes text a bit bold
    color: '#000000',
    marginBottom: 16,               // Space below title
  },
});

/* HOW TO CHANGE THINGS IN THIS FILE:

1. Want to change the header?
   - Find the headerSection style
   - Change backgroundColor for a different color
   - Adjust padding for more or less space
   - Change the text in the greeting and name Text components

2. Want to change the search box?
   - Find the searchContainer style
   - Change borderRadius for more or less rounded corners
   - Adjust padding for a bigger or smaller box
   - Change the placeholder text in the TextInput

3. Want to change the sections?
   - Find the section style
   - Adjust paddingHorizontal for space on the sides
   - Change marginBottom for space between sections
   - Change the title text in the sectionTitle Text components

4. Want to change colors?
   - Look for backgroundColor in styles
   - Change the color codes (like '#4B7BE5' for blue)
   - For text, look for color in styles

5. Want to change spacing?
   - Look for padding and margin in styles
   - Make numbers bigger for more space
   - Make numbers smaller for less space

Remember:
- Colors use # codes (like #4B7BE5 for blue)
- Sizes are in pixels (like 24 for spacing)
- 'flex: 1' means "take up all available space"
- borderRadius makes corners round
*/ 