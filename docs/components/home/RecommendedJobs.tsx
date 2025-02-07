// This file makes the row of recommended jobs that scroll sideways
// It shows job cards for Pinterest and Facebook jobs
// Each card has a company logo, job info, and an apply button

import React from 'react';
import { View, ScrollView, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

// This is our list of recommended jobs
// You can add more jobs by copying these and changing the details
const recommendedJobs = [
  {
    id: '1',                        // Unique ID for each job
    company: 'Pinterest, Inc.',     // Company name
    position: 'Motion Designer',    // Job title
    location: 'California, USA',    // Where the job is
    status: ['Senior', 'Fulltime', 'Remote'],  // Job details
    salary: '$7K/Month',           // How much it pays
    logoIcon: 'logo-pinterest',    // Which icon to use
    logoColor: '#E60023',         // Pinterest's red color
  },
  {
    id: '2',
    company: 'Facebook',
    position: 'UI Designer',
    location: 'California, USA',
    status: ['Senior', 'Fulltime', 'Remote'],
    salary: '$8K/Month',
    logoIcon: 'logo-facebook',
    logoColor: '#1877F2',         // Facebook's blue color
  },
];

export const RecommendedJobs = () => {
  const router = useRouter();

  return (
    <ScrollView
      horizontal                           // Makes it scroll sideways
      showsHorizontalScrollIndicator={false}  // Hides the scroll bar
      contentContainerStyle={styles.container}>
      {/* This goes through each job and makes a card for it */}
      {recommendedJobs.map((job) => (
        <TouchableOpacity
          key={job.id}
          style={styles.card}
          onPress={() => router.push(`/job-details/${job.id}`)}>
          
          {/* TOP PART - Company Info and Bookmark
              Shows logo, company name, location, and bookmark button */}
          <View style={styles.cardHeader}>
            <View style={styles.companyInfo}>
              <View style={[styles.logoContainer, { backgroundColor: `${job.logoColor}20` }]}>
                <Ionicons name={job.logoIcon as any} size={24} color={job.logoColor} />
              </View>
              <View style={styles.companyDetails}>
                <Text style={styles.company}>{job.company}</Text>
                <Text style={styles.location}>{job.location}</Text>
              </View>
            </View>
            <TouchableOpacity style={styles.bookmarkButton}>
              <Ionicons name="bookmark-outline" size={20} color="#83829A" />
            </TouchableOpacity>
          </View>

          {/* MIDDLE PART - Job Info
              Shows position and status (Senior, Fulltime, Remote) */}
          <View style={styles.jobInfo}>
            <Text style={styles.position}>{job.position}</Text>
            <View style={styles.statusContainer}>
              {job.status.map((item, index) => (
                <React.Fragment key={item}>
                  <Text style={styles.statusText}>{item}</Text>
                  {/* Add dots between status items, but not after the last one */}
                  {index < job.status.length - 1 && <Text style={styles.statusDot}>•</Text>}
                </React.Fragment>
              ))}
            </View>
          </View>

          {/* BOTTOM PART - Apply Button and Salary
              Shows the apply button and monthly salary */}
          <View style={styles.cardFooter}>
            <TouchableOpacity style={styles.applyButton}>
              <Text style={styles.applyButtonText}>Apply Now</Text>
            </TouchableOpacity>
            <Text style={styles.salary}>{job.salary}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

// These styles control how everything looks
const styles = StyleSheet.create({
  // The container that holds all cards
  container: {
    paddingRight: 24,    // Space on the right for the last card
  },

  // Each job card
  card: {
    width: 280,          // How wide each card is
    backgroundColor: '#F3F7FE',  // Light blue background
    borderRadius: 16,    // Round corners
    padding: 16,         // Space inside the card
    marginRight: 16,     // Space between cards
  },

  // Top part of the card
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 24,
  },

  // Company info section (logo and text)
  companyInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    marginRight: 12,
  },

  // Company logo circle
  logoContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,    // Makes it perfectly round
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },

  // Company name and location container
  companyDetails: {
    flex: 1,
  },

  // Company name text
  company: {
    fontSize: 14,
    color: '#83829A',
    marginBottom: 4,
  },

  // Location text
  location: {
    fontSize: 12,
    color: '#83829A',
  },

  // Bookmark button
  bookmarkButton: {
    width: 32,
    height: 32,
    borderRadius: 16,    // Makes it round
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },

  // Middle part with job info
  jobInfo: {
    marginBottom: 24,
  },

  // Job title
  position: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000000',
    marginBottom: 8,
  },

  // Container for status items (Senior • Fulltime • Remote)
  statusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  // Each status text
  statusText: {
    fontSize: 12,
    color: '#83829A',
  },

  // Dots between status items
  statusDot: {
    fontSize: 12,
    color: '#83829A',
    marginHorizontal: 4,
  },

  // Bottom part with button and salary
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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

  // Salary text
  salary: {
    fontSize: 14,
    fontWeight: '600',
    color: '#000000',
  },
});

/* HOW TO CHANGE THINGS IN THIS FILE:

1. Want to add more jobs?
   - Find the recommendedJobs array at the top
   - Copy one of the existing jobs
   - Change all the details (id, company, position, etc.)
   - Make sure each job has a unique id

2. Want to change how cards look?
   - Find the card style
   - Change width for wider/narrower cards
   - Change backgroundColor for different background color
   - Change borderRadius for more/less round corners
   - Change padding for more/less space inside

3. Want to change the company logo?
   - Find the logoContainer style
   - Change width and height for bigger/smaller logo
   - Change borderRadius to match half of width/height
   - In the job data, change logoIcon and logoColor

4. Want to change text sizes?
   - Find the style for the text you want to change
   - Change fontSize for bigger/smaller text
   - Change color for different colors
   - Change fontWeight for bolder/lighter text

5. Want to change the apply button?
   - Find the applyButton style
   - Change backgroundColor for different color
   - Change padding for bigger/smaller button
   - Change borderRadius for more/less round corners

6. Want to change spacing?
   - Change marginBottom for space between sections
   - Change marginRight for space between cards
   - Change padding for space inside elements

Remember:
- Colors use # codes (like #4B7BE5 for blue)
- Sizes are in pixels (like 24 for icons)
- Add '20' to a color (like #E6002320) to make it transparent
- borderRadius makes corners round
*/ 