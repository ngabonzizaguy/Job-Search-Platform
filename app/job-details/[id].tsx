import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useLocalSearchParams, useRouter } from 'expo-router';
import JobDetails, { Job } from '../../components/job/JobDetails';

// Mock data - in a real app, this would come from an API
const jobsData = {
  '1': {
    company: 'Pinterest, Inc.',
    position: 'Motion Designer',
    location: 'California, USA',
    type: 'Fulltime',
    salary: '$7K/Month',
    logoIcon: require('../../assets/icon_imgs/png/001-pinterest.png'),
    logoColor: '#E60023',
    level: 'Senior',
    description: [
      'Deliver a well-crafted design that follows standard for consistency in quality and experience.',
      'Design creative solutions that deliver not only value customer but also solve business objectives.',
      'You are also required to contribute to the design and critics, conceptual discussion, and also maintaining consistency of design system.',
    ],
    requirements: [
      'Lead',
      'UX Design',
      'Problem Solving',
      'Critical',
    ],
  },
  '2': {
    company: 'Facebook',
    position: 'UI Designer',
    location: 'California, USA',
    type: 'Fulltime',
    salary: '$8K/Month',
    logoIcon: require('../../assets/icon_imgs/png/004-facebook.png'),
    logoColor: '#1877F2',
    level: 'Senior',
    description: [
      'Deliver a well-crafted design that follows standard for consistency in quality and experience.',
      'Design creative solutions that deliver not only value customer but also solve business objectives.',
      'You are also required to contribute to the design and critics, conceptual discussion, and also maintaining consistency of design system.',
    ],
    requirements: [
      'Lead',
      'UX Design',
      'Problem Solving',
      'Critical',
    ],
  },
  '3': {
    company: 'Google',
    position: 'Product Designer',
    location: 'California, USA',
    type: 'Fulltime',
    salary: '$5K/Month',
    logoIcon: require('../../assets/icon_imgs/png/003-google.png'),
    logoColor: '#4285F4',
    level: 'Senior',
    description: [
      'Deliver a well-crafted design that follows standard for consistency in quality and experience.',
      'Design creative solutions that deliver not only value customer but also solve business objectives.',
      'You are also required to contribute to the design and critics, conceptual discussion, and also maintaining consistency of design system.',
    ],
    requirements: [
      'Lead',
      'UX Design',
      'Problem Solving',
      'Critical',
    ],
  },
  '4': {
    company: 'Apple',
    position: 'iOS Developer',
    location: 'California, USA',
    type: 'Fulltime',
    salary: '$6K/Month',
    logoIcon: 'logo-apple',
    logoColor: '#000000',
    level: 'Senior',
    description: 'Join our iOS development team to create amazing experiences for Apple users worldwide.',
    requirements: [
      '5+ years of iOS development experience',
      'Strong knowledge of Swift and SwiftUI',
      'Experience with Apples Human Interface Guidelines',
    ],
  },
};

// Update the Job interface to include logo
interface ExtendedJob extends Job {
  logoIcon: any;
  logoColor: string;
}

export default function JobDetailsScreen() {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const jobData = jobsData[id as keyof typeof jobsData];

  if (!jobData) {
    return (
      <SafeAreaView style={styles.container}>
        <Text>Job not found</Text>
      </SafeAreaView>
    );
  }

  // Transform the job data to match the Job interface
  const job: ExtendedJob = {
    title: jobData.position,
    company: jobData.company,
    location: jobData.location,
    responsibilities: Array.isArray(jobData.description) ? jobData.description : [jobData.description],
    skills: jobData.requirements,
    salary: jobData.salary,
    logoIcon: jobData.logoIcon,
    logoColor: jobData.logoColor,
  };

  const handleApply = () => {
    // In a real app, this would navigate to an application form or external link
    console.log('Apply clicked for job:', id);
  };

  const handleChat = () => {
    // In a real app, this would open a chat interface
    console.log('Chat clicked for job:', id);
  };

  const handleBack = () => {
    // Navigate back to the home tab
    router.push("/");
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity 
        style={styles.backButton} 
        onPress={handleBack}
      >
        <Ionicons name="arrow-back" size={24} color="#000" />
      </TouchableOpacity>
      <JobDetails 
        job={job}
        onApply={handleApply}
        onChat={handleChat}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#F3F2F2',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000000',
  },
  backButton: {
    position: 'absolute',
    top: 20,
    left: 20,
    zIndex: 10,
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
  },
  bookmarkButton: {
    padding: 8,
  },
  content: {
    flex: 1,
  },
  companyInfo: {
    alignItems: 'center',
    paddingVertical: 24,
    paddingHorizontal: 16,
  },
  logoContainer: {
    width: 64,
    height: 64,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  position: {
    fontSize: 24,
    fontWeight: '600',
    color: '#000000',
    marginBottom: 8,
  },
  companyMeta: {
    alignItems: 'center',
  },
  company: {
    fontSize: 16,
    color: '#83829A',
    marginBottom: 4,
  },
  location: {
    fontSize: 14,
    color: '#83829A',
  },
  metaContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 16,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#F3F2F2',
  },
  metaItem: {
    alignItems: 'center',
  },
  metaLabel: {
    fontSize: 12,
    color: '#83829A',
    marginBottom: 4,
  },
  metaValue: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000000',
  },
  section: {
    padding: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000000',
    marginBottom: 12,
  },
  description: {
    fontSize: 14,
    color: '#83829A',
    lineHeight: 22,
  },
  requirementsList: {
    gap: 12,
  },
  requirementItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  requirementText: {
    fontSize: 14,
    color: '#83829A',
    flex: 1,
  },
  footer: {
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: '#F3F2F2',
  },
  applyButton: {
    backgroundColor: '#4B7BE5',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  applyButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
});
