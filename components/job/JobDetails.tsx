import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';

export interface Job {
  title: string;
  location: string;
  company: string;
  responsibilities: string[];
  skills: string[]; 
}

interface JobDetailsProps {
  job: Job; 
}

const JobDetails: React.FC<JobDetailsProps> = ({ job }) => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        {/* Header Section */}
        <View style={styles.header}>
          <Image
            source={require('../../assets/images/drops_leaf_brushes_129736_3840x2160.jpg')} 
            style={styles.backgroundImage}
          />
          <View style={styles.logoContainer}>
            <Image
              source={require('../../assets/icon_imgs/png/003-google.png')} 
              style={styles.logo}
            />
          </View>
        </View>

        {/* Job Title and Location */}
        <View style={styles.titleContainer}>
          <Text style={styles.jobTitle}>{job.title}</Text>
          <Text style={styles.location}>{job.location}</Text>
          <Text style={styles.companyName}>{job.company}</Text>
        </View>

        {/* Navigation Tabs */}
        <View style={styles.tabs}>
          {['Description', 'Company', 'Applicant', 'Salary'].map((tab, index) => (
            <TouchableOpacity key={index} style={styles.tab}>
              <Text style={styles.tabText}>{tab}</Text>
              {index === 0 && <View style={styles.activeTabIndicator} />}
            </TouchableOpacity>
          ))}
        </View>

        {/* Job Responsibilities Section */}
        <ScrollView style={styles.scrollView}>
          <Text style={styles.sectionTitle}>Job Responsibilities</Text>
          {job.responsibilities.map((resp, index) => (
            <View key={index} style={styles.responsibilityItem}>
              <Text style={styles.checkIcon}>✔️</Text>
              <Text style={styles.responsibility}>{resp}</Text>
            </View>
          ))}

          {/* Skills Needed Section */}
          <Text style={styles.sectionTitle}>Skills Needed</Text>
          <View style={styles.skillsContainer}>
            {job.skills.map((skill, index) => (
              <Text key={index} style={styles.skillTag}>{skill}</Text>
            ))}
          </View>
        </ScrollView>

        {/* Apply Button */}
        <TouchableOpacity style={styles.applyButton}>
          <Text style={styles.applyButtonText}>Apply Now</Text>
        </TouchableOpacity>
      </View>

      {/* Floating Chat Button */}
      <TouchableOpacity style={styles.chatButton}>
        <Text style={styles.chatButtonText}>💬</Text> {/* Placeholder for chat icon */}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5', 
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
    width: '100%',
    maxWidth: 600,
    padding: 16,
  },
  header: {
    position: 'relative',
    width: '100%',
    height: 150,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    overflow: 'hidden',
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
  },
  logoContainer: {
    position: 'absolute',
    bottom: -40, // Overlapping the header
    left: '50%',
    transform: [{ translateX: -40 }], // Center the logo
    backgroundColor: '#FFFFFF',
    borderRadius: 40,
    borderWidth: 2,
    borderColor: '#FFFFFF',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  logo: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  titleContainer: {
    alignItems: 'center',
    marginTop: 40, // Space below the logo
  },
  jobTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  location: {
    fontSize: 16,
    color: '#A0A0A0',
    textAlign: 'center',
  },
  companyName: {
    fontSize: 14,
    color: '#A0A0A0',
    textAlign: 'center',
  },
  tabs: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 16,
  },
  tab: {
    padding: 10,
    position: 'relative',
  },
  tabText: {
    fontSize: 16,
    color: '#4B7BE5',
  },
  activeTabIndicator: {
    height: 2,
    backgroundColor: '#4B7BE5',
    position: 'absolute',
    bottom: -5,
    left: 0,
    right: 0,
  },
  scrollView: {
    flex: 1,
    padding: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  responsibilityItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  checkIcon: {
    marginRight: 8,
  },
  responsibility: {
    fontSize: 14,
  },
  skillsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 16,
  },
  skillTag: {
    backgroundColor: '#E8F0FE',
    borderRadius: 20,
    paddingVertical: 6,
    paddingHorizontal: 12,
    fontSize: 14,
    color: '#4B7BE5',
    marginRight: 8,
    marginBottom: 8,
  },
  applyButton: {
    backgroundColor: '#4B7BE5',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 16,
  },
  applyButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '500',
  },
  chatButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: '#4B7BE5',
    borderRadius: 30,
    padding: 10,
  },
  chatButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
  },
});

export default JobDetails;
