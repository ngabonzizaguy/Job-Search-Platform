import React from 'react';
import { View, ScrollView, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const recommendedJobs = [
  {
    id: '1',
    company: 'Pinterest, Inc.',
    position: 'Motion Designer',
    location: 'California, USA',
    status: ['Senior', 'Fulltime', 'Remote'],
    salary: '$7K/Month',
    logoIcon: require('../../assets/icon_imgs/png/001-pinterest.png'),
    logoColor: '#E60023',
  },
  {
    id: '2',
    company: 'Facebook',
    position: 'UI Designer',
    location: 'California, USA',
    status: ['Senior', 'Fulltime', 'Remote'],
    salary: '$8K/Month',
    logoIcon: require('../../assets/icon_imgs/png/004-facebook.png'),
    logoColor: '#1877F2',
  },
];

export const RecommendedJobs = () => {
  const router = useRouter();

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.container}>
      {recommendedJobs.map((job) => (
        <TouchableOpacity
          key={job.id}
          style={styles.card}
          onPress={() => router.push(`/job-details/${job.id}`)}>
          <View style={styles.cardHeader}>
            <View style={styles.companyInfo}>
              <View style={styles.logoContainer}>
                <Image source={job.logoIcon} style={{ width: 30, height: 30 }} />
              </View>
              <View style={styles.companyDetails}>
                <Text style={styles.company}>{job.company}</Text>
                <Text style={styles.location}>{job.location}</Text>
              </View>
            </View>
            <TouchableOpacity style={styles.bookmarkButton}>
              <Image source={require('../../assets/icon_imgs/png/002-bookmark.png')} style={{ width: 20, height: 20 }} />
            </TouchableOpacity>
          </View>

          <View style={styles.jobInfo}>
            <Text style={styles.position}>{job.position}</Text>
            <View style={styles.statusContainer}>
              {job.status.map((item, index) => (
                <React.Fragment key={item}>
                  <Text style={styles.statusText}>{item}</Text>
                  {index < job.status.length - 1 && <Text style={styles.statusDot}>•</Text>}
                </React.Fragment>
              ))}
            </View>
          </View>

          <View style={styles.cardFooter}>
            <TouchableOpacity style={styles.applyButton}>
              <Text style={styles.applyButtonText}>Apply Now</Text>
            </TouchableOpacity>
            <Text style={styles.salary}>
              <Text style={styles.salaryAmount}>{job.salary.split('/')[0]}</Text>
              <Text style={styles.salaryText}>/{job.salary.split('/')[1]}</Text>
            </Text>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingRight: 24,
  },
  card: {
    width: 240,
    backgroundColor: '#F3F7FE',
    borderRadius: 16,
    padding: 16,
    marginRight: 16,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 45,
  },
  companyInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    marginRight: 12,
  },
  logoContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  companyDetails: {
    flex: 1,
  },
  company: {
    fontSize: 14,
    color: '#000',
    marginBottom: 4,
    fontWeight: 'bold',
  },
  location: {
    fontSize: 12,
    color: '#83829A',
  },
  bookmarkButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  jobInfo: {
    marginBottom: 14,
  },
  position: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000000',
    marginBottom: 8,
  },
  statusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statusText: {
    fontSize: 12,
    color: '#83829A',
  },
  statusDot: {
    fontSize: 12,
    color: '#83829A',
    marginHorizontal: 4,
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  applyButton: {
    backgroundColor: '#4B7BE5',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
  },
  applyButtonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '500',
  },
  salary: {
    fontSize: 14,
    fontWeight: '600',
    color: '#000000',
  },
  salaryAmount: {
    fontWeight: 'bold',
    color: '#000',
  },
  salaryText: {
    color: '#A0A0A0',
    fontSize: 12,
  },
});
