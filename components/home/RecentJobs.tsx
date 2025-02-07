import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const recentJobs = [
  {
    id: '3',
    company: 'Google',
    position: 'Product Designer',
    type: 'Senior • Fulltime • Remote',
    salary: '$5K/Month',
    logoIcon: require('../../assets/icon_imgs/png/003-google.png'),
    logoColor: '#4285F4',
    timeAgo: '12 Minutes Ago',
  },
];

export const RecentJobs = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {recentJobs.map((job) => (
        <TouchableOpacity
          key={job.id}
          style={styles.card}
          onPress={() => router.push(`/job-details/${job.id}`)}
        >
          <View style={styles.cardContent}>
            <View style={styles.leftContent}>
              <View style={styles.logoContainer}>
                <Image source={job.logoIcon} style={{ width: 40, height: 40 }} />
              </View>
              <View style={styles.jobInfo}>
                <Text style={styles.position}>{job.position}</Text>
                <Text style={styles.type}>{job.type}</Text>
              </View>
            </View>
            <View style={styles.rightContent}>
              <Image source={require('../../assets/icon_imgs/png/002-bookmark.png')} style={{ width: 20, height: 20 }} />
            </View>
          </View>
          <View style={styles.footer}>
            <Text style={styles.salary}>
              <Text style={styles.salaryAmount}>{job.salary.split('/')[0]}</Text>
              <Text style={styles.salaryText}>/{job.salary.split('/')[1]}</Text>
            </Text>
            <Text style={styles.timeAgo}>{job.timeAgo}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 16,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  cardContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  leftContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    flex: 1,
  },
  logoContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E8F0FE',
  },
  jobInfo: {
    gap: 4,
    flex: 1,
  },
  position: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000000',
  },
  type: {
    fontSize: 12,
    color: '#A0A0A0',
  },
  rightContent: {
    alignItems: 'flex-end',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 25, // Space between the main content and footer
  },
  salary: {
    fontSize: 14,
    fontWeight: '600',
    color: '#000',
    position: 'relative',
    left: 50,
  },
  salaryAmount: {
    fontWeight: 'bold', // Make the dollar amount bold
    color: '#000', // Color for the dollar amount
  },
  salaryText: {
    color: '#A0A0A0', // Lighter color for the "/Month" text
    fontSize: 11,
  },
  timeAgo: {
    fontSize: 12,
    color: '#A0A0A0',
  },
});
