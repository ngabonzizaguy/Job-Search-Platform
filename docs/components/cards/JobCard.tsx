// This file makes the job cards that you can click
// Each card shows:
// - Company logo
// - Company name
// - Job position
// - Location
// - Job type
// - Salary
// - Apply button
// - Bookmark button

import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

// This tells TypeScript what information each job card needs
interface JobCardProps {
  id: string;                // Used to open the right job details
  company: string;           // Company name
  position: string;          // Job title
  location: string;          // Where the job is
  type: string;             // Full-time, Part-time, etc.
  salary: string;           // How much it pays
  logoIcon: string;         // Which icon to use for logo
  logoColor: string;        // What color the logo should be
  isHorizontal?: boolean;   // If the card should be wide or tall
}

// This makes the actual job card
export const JobCard = ({
  id,
  company,
  position,
  location,
  type,
  salary,
  logoIcon,
  logoColor,
  isHorizontal = false,  // By default, cards are tall
}: JobCardProps) => {
  const router = useRouter();

  // When someone clicks the card, show job details
  const handlePress = () => {
    router.push(`/job-details/${id}`);
  };

  return (
    <TouchableOpacity
      onPress={handlePress}
      style={[
        styles.container,
        // Make the card wide or tall based on isHorizontal
        isHorizontal ? styles.horizontalContainer : styles.verticalContainer,
      ]}>
      {/* TOP PART - Logo and Bookmark
          Shows company logo and bookmark button
          Want to change it?
          - Change the logo size
          - Change the bookmark icon
          - Adjust the spacing */}
      <View style={styles.header}>
        <View style={[styles.logoContainer, { backgroundColor: `${logoColor}20` }]}>
          <Ionicons name={logoIcon as any} size={24} color={logoColor} />
        </View>
        <TouchableOpacity 
          style={styles.bookmarkButton}
          onPress={(e) => {
            e.stopPropagation(); // Don't open job details when clicking bookmark
          }}>
          <Ionicons name="bookmark-outline" size={20} color="#83829A" />
        </TouchableOpacity>
      </View>

      {/* MIDDLE PART - Job Info
          Shows all the job information
          Want to change it?
          - Change text sizes
          - Change colors
          - Add more details */}
      <View style={styles.content}>
        <Text style={styles.company}>{company}</Text>
        <Text style={styles.position}>{position}</Text>
        
        <View style={styles.details}>
          <View style={styles.detailItem}>
            <Ionicons name="location-outline" size={16} color="#83829A" />
            <Text style={styles.detailText}>{location}</Text>
          </View>
          <View style={styles.detailItem}>
            <Ionicons name="time-outline" size={16} color="#83829A" />
            <Text style={styles.detailText}>{type}</Text>
          </View>
        </View>

        {/* BOTTOM PART - Salary and Apply
            Shows the salary and apply button
            Want to change it?
            - Change button color
            - Change text
            - Move things around */}
        <View style={styles.footer}>
          <Text style={styles.salary}>{salary}</Text>
          <TouchableOpacity 
            style={styles.applyButton}
            onPress={(e) => {
              e.stopPropagation(); // Don't open details when clicking apply
            }}>
            <Text style={styles.applyButtonText}>Apply Now</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};

// These styles control how the card looks
const styles = StyleSheet.create({
  // The main card container
  container: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,           // Round corners
    padding: 16,               // Space inside the card
    // Shadow for iOS
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    // Shadow for Android
    elevation: 3,
  },

  // For tall cards (default)
  verticalContainer: {
    width: '100%',            // Use full width
  },

  // For wide cards
  horizontalContainer: {
    width: 280,               // Fixed width
  },

  // Top part with logo and bookmark
  header: {
    flexDirection: 'row',     // Put things side by side
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },

  // Company logo circle
  logoContainer: {
    width: 40,
    height: 40,
    borderRadius: 8,         // Slightly round corners
    justifyContent: 'center',
    alignItems: 'center',
  },

  // Bookmark button
  bookmarkButton: {
    width: 32,
    height: 32,
    borderRadius: 16,        // Make it round
    backgroundColor: '#F3F2F2',
    justifyContent: 'center',
    alignItems: 'center',
  },

  // Middle part with job info
  content: {
    gap: 8,                  // Space between items
  },

  // Company name
  company: {
    fontSize: 14,
    color: '#83829A',
  },

  // Job title
  position: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000000',
  },

  // Container for location and type
  details: {
    flexDirection: 'row',    // Put items side by side
    gap: 16,                // Space between items
  },

  // Each detail item (location or type)
  detailItem: {
    flexDirection: 'row',    // Icon and text side by side
    alignItems: 'center',
    gap: 4,                 // Space between icon and text
  },

  // Text for details
  detailText: {
    fontSize: 14,
    color: '#83829A',
  },

  // Bottom part with salary and apply
  footer: {
    marginTop: 16,
    flexDirection: 'row',    // Put items side by side
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  // Salary text
  salary: {
    fontSize: 16,
    fontWeight: '600',
    color: '#4B7BE5',       // Blue color
  },

  // Apply button
  applyButton: {
    backgroundColor: '#4B7BE5',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
  },

  // Apply button text
  applyButtonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '500',
  },
});

/* HOW TO CHANGE THINGS IN THIS FILE:

1. Want to change the card shape?
   - Find the container style
   - Change borderRadius for more/less round corners
   - Change padding for more/less space inside
   - Adjust width in horizontalContainer for wider/narrower cards

2. Want to change the logo?
   - Find the logoContainer style
   - Change width and height for bigger/smaller logo
   - Change borderRadius for more/less round corners
   - Adjust the icon size in the Ionicons component

3. Want to change the text?
   - Find the style for the text you want to change
   - Change fontSize for bigger/smaller text
   - Change color for different colors
   - Change fontWeight for bolder/lighter text

4. Want to change the apply button?
   - Find the applyButton style
   - Change backgroundColor for different color
   - Change padding for bigger/smaller button
   - Change borderRadius for more/less round corners

5. Want to change shadows?
   - For iOS: adjust shadowOpacity and shadowRadius
   - For Android: change elevation number
   - Higher numbers = stronger shadow

Remember:
- Colors use # codes (like #4B7BE5 for blue)
- Sizes are in pixels (like 24 for icons)
- gap adds space between items
- borderRadius makes corners round
*/ 