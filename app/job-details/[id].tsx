import { View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useLocalSearchParams, useRouter } from 'expo-router';

// Mock data - in a real app, this would come from an API
const jobsData = {
  '1': {
    company: 'Pinterest, Inc.',
    position: 'Motion Designer',
    location: 'California, USA',
    type: 'Fulltime',
    salary: '$7K/Month',
    logoIcon: 'logo-pinterest',
    logoColor: '#E60023',
    level: 'Senior',
    description: 'We are looking for a Motion Designer to join our creative team. You will be responsible for creating engaging animations and visual effects for our platform.',
    requirements: [
      '5+ years of experience in Motion Design',
      'Proficiency in After Effects and other animation tools',
      'Strong portfolio demonstrating motion design skills',
    ],
  },
  '2': {
    company: 'Facebook',
    position: 'UI Designer',
    location: 'California, USA',
    type: 'Fulltime',
    salary: '$8K/Month',
    logoIcon: 'logo-facebook',
    logoColor: '#1877F2',
    level: 'Senior',
    description: 'Join our team as a UI Designer to create beautiful and intuitive interfaces for our products.',
    requirements: [
      '4+ years of UI/UX design experience',
      'Experience with Figma and design systems',
      'Strong portfolio of web and mobile designs',
    ],
  },
  '3': {
    company: 'Google',
    position: 'Product Designer',
    location: 'California, USA',
    type: 'Fulltime',
    salary: '$5K/Month',
    logoIcon: 'logo-google',
    logoColor: '#4285F4',
    level: 'Senior',
    description: 'We are looking for a Product Designer to join our team. You will be responsible for the user experience and interface design of our products.',
    requirements: [
      '5+ years of experience in Product Design',
      'Strong portfolio demonstrating UX/UI skills',
      'Experience with design systems',
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

export default function JobDetailsScreen() {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const job = jobsData[id as keyof typeof jobsData];

  if (!job) {
    return (
      <SafeAreaView style={styles.container}>
        <Text>Job not found</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Job Details</Text>
        <TouchableOpacity style={styles.bookmarkButton}>
          <Ionicons name="bookmark-outline" size={24} color="#000" />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.content}>
        {/* Company Info */}
        <View style={styles.companyInfo}>
          <View style={[styles.logoContainer, { backgroundColor: `${job.logoColor}20` }]}>
            <Ionicons name={job.logoIcon as any} size={32} color={job.logoColor} />
          </View>
          <Text style={styles.position}>{job.position}</Text>
          <View style={styles.companyMeta}>
            <Text style={styles.company}>{job.company}</Text>
            <Text style={styles.location}>{job.location}</Text>
          </View>
        </View>

        {/* Job Meta Info */}
        <View style={styles.metaContainer}>
          <View style={styles.metaItem}>
            <Text style={styles.metaLabel}>Salary</Text>
            <Text style={styles.metaValue}>{job.salary}</Text>
          </View>
          <View style={styles.metaItem}>
            <Text style={styles.metaLabel}>Type</Text>
            <Text style={styles.metaValue}>{job.type}</Text>
          </View>
          <View style={styles.metaItem}>
            <Text style={styles.metaLabel}>Level</Text>
            <Text style={styles.metaValue}>{job.level}</Text>
          </View>
        </View>

        {/* Description */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Description</Text>
          <Text style={styles.description}>{job.description}</Text>
        </View>

        {/* Requirements */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Requirements</Text>
          <View style={styles.requirementsList}>
            {job.requirements.map((requirement, index) => (
              <View key={index} style={styles.requirementItem}>
                <Ionicons name="checkmark-circle" size={20} color="#4B7BE5" />
                <Text style={styles.requirementText}>{requirement}</Text>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>

      {/* Apply Button */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.applyButton}>
          <Text style={styles.applyButtonText}>Apply Now</Text>
        </TouchableOpacity>
      </View>
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
    padding: 8,
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
