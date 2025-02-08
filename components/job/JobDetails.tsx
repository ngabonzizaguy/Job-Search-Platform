import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  useWindowDimensions,
  ImageBackground,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

/**
 * Types and Interfaces
 */
export interface Job {
  title: string;
  company: string;
  location: string;
  responsibilities: string[];
  skills: string[];
  salary?: string;
  logoIcon?: any; // Company logo image source
  logoColor?: string; // Brand color for UI accents
}

interface JobDetailsProps {
  job: Job;
  onApply?: () => void; // Callback for apply button press
  onChat?: () => void;  // Callback for chat button press
}

/**
 * JobDetails Component
 * 
 * A detailed view of a job posting, including:
 * - Company logo and header image
 * - Job title and location
 * - Navigation tabs (Description, Company, etc.)
 * - Job responsibilities and required skills
 * - Action buttons (Apply, Chat)
 * 
 * @param {JobDetailsProps} props - Component props
 */
export default function JobDetails({ job, onApply, onChat }: JobDetailsProps) {
  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.headerContainer}>
        {/* Background Image */}
        <View style={styles.headerBackground}>
          <Image
            source={require('../../assets/images/drops_leaf_brushes_129736_3840x2160.jpg')}
            style={styles.headerImage}
          />
        </View>
        {/* Company Logo - Positioned to overlap header and content */}
        <View style={styles.logoContainer}>
          <View style={styles.logoWrapper}>
            <Image
              source={job.logoIcon || require('../../assets/icon_imgs/png/003-google.png')}
              style={styles.companyLogo}
              resizeMode="contain"
            />
          </View>
        </View>
      </View>

      {/* Job Information Section */}
      <View style={styles.jobInfo}>
        <Text style={styles.jobTitle}>{job.title}</Text>
        <Text style={styles.location}>{job.location}</Text>
      </View>

      {/* Navigation Tabs - Horizontally scrollable */}
      <View style={styles.tabsContainer}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <TouchableOpacity style={[styles.tab, styles.activeTab]}>
            <Text style={[styles.tabText, styles.activeTabText]}>Description</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tab}>
            <Text style={styles.tabText}>Company</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tab}>
            <Text style={styles.tabText}>Applicant</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tab}>
            <Text style={styles.tabText}>Salary</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>

      {/* Main Content - Scrollable */}
      <ScrollView style={styles.content}>
        {/* Responsibilities Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Job Responsibilities</Text>
          {job.responsibilities.map((resp, index) => (
            <View key={index} style={styles.bulletPoint}>
              <Text style={styles.bulletDot}>•</Text>
              <Text style={styles.bulletText}>{resp}</Text>
            </View>
          ))}
        </View>

        {/* Skills Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Skills Needed</Text>
          <View style={styles.skillsContainer}>
            {job.skills.map((skill, index) => (
              <React.Fragment key={index}>
                <Text style={styles.skillText}>{skill}</Text>
                {index < job.skills.length - 1 && (
                  <Text style={styles.skillDot}>•</Text>
                )}
              </React.Fragment>
            ))}
          </View>
        </View>
      </ScrollView>

      {/* Footer - Action Buttons */}
      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.applyButton}
          onPress={onApply}
          accessibilityLabel="Apply for this job"
        >
          <Text style={styles.applyButtonText}>Apply Now</Text>
        </TouchableOpacity>
        
        <TouchableOpacity
          style={styles.chatButton}
          onPress={onChat}
          accessibilityLabel="Chat about this job"
        >
          <View style={styles.chatIconContainer}>
            <Ionicons name="chatbubble-outline" size={24} color="#fff" />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

/**
 * Styles
 */
const styles = StyleSheet.create({
  // Container styles
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  
  // Header styles
  headerContainer: {
    height: 120,
    position: 'relative',
  },
  headerBackground: {
    height: '100%',
    width: '100%',
    backgroundColor: '#f5f5f5',
    overflow: 'hidden',
  },
  headerImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  
  // Logo styles
  logoContainer: {
    position: 'absolute',
    bottom: -25,
    width: '100%',
    alignItems: 'center',
  },
  logoWrapper: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  companyLogo: {
    width: 35,
    height: 35,
  },
  
  // Job info styles
  jobInfo: {
    marginTop: 35,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  jobTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: '#000',
    marginBottom: 8,
  },
  location: {
    fontSize: 16,
    color: '#83829A',
  },
  
  // Tab navigation styles
  tabsContainer: {
    marginTop: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#F3F2F2',
  },
  tab: {
    paddingHorizontal: 20,
    paddingVertical: 12,
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: '#4B7BE5',
  },
  tabText: {
    fontSize: 14,
    color: '#83829A',
  },
  activeTabText: {
    color: '#4B7BE5',
    fontWeight: '500',
  },
  
  // Content styles
  content: {
    flex: 1,
  },
  section: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
    marginBottom: 16,
  },
  
  // Bullet point styles
  bulletPoint: {
    flexDirection: 'row',
    marginBottom: 12,
    paddingRight: 16,
  },
  bulletDot: {
    marginRight: 8,
    color: '#83829A',
  },
  bulletText: {
    flex: 1,
    fontSize: 14,
    color: '#83829A',
    lineHeight: 20,
  },
  
  // Skills styles
  skillsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  skillText: {
    fontSize: 14,
    color: '#83829A',
  },
  skillDot: {
    color: '#83829A',
    marginHorizontal: 8,
  },
  
  // Footer styles
  footer: {
    flexDirection: 'row',
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: '#F3F2F2',
    backgroundColor: '#fff',
  },
  applyButton: {
    flex: 1,
    backgroundColor: '#4B7BE5',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginRight: 12,
  },
  applyButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  chatButton: {
    width: 56,
    height: 56,
  },
  chatIconContainer: {
    width: '100%',
    height: '100%',
    borderRadius: 12,
    backgroundColor: '#4B7BE5',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
