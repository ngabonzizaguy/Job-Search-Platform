import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

interface JobCardProps {
  id: string;
  company: string;
  position: string;
  location: string;
  type: string;
  salary: string;
  logoIcon: string;
  logoColor: string;
  isHorizontal?: boolean;
}

export const JobCard = ({
  id,
  company,
  position,
  location,
  type,
  salary,
  logoIcon,
  logoColor,
  isHorizontal = false,
}: JobCardProps) => {
  const router = useRouter();

  const handlePress = () => {
    router.push(`/job-details/${id}`);
  };

  return (
    <TouchableOpacity
      onPress={handlePress}
      style={[
        styles.container,
        isHorizontal ? styles.horizontalContainer : styles.verticalContainer,
      ]}>
      <View style={styles.header}>
        <View style={[styles.logoContainer, { backgroundColor: `${logoColor}20` }]}>
          <Ionicons name={logoIcon as any} size={24} color={logoColor} />
        </View>
        <TouchableOpacity 
          style={styles.bookmarkButton}
          onPress={(e) => {
            e.stopPropagation(); // Prevent triggering the card's onPress
          }}>
          <Ionicons name="bookmark-outline" size={20} color="#83829A" />
        </TouchableOpacity>
      </View>

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

        <View style={styles.footer}>
          <Text style={styles.salary}>{salary}</Text>
          <TouchableOpacity 
            style={styles.applyButton}
            onPress={(e) => {
              e.stopPropagation(); // Prevent triggering the card's onPress
            }}>
            <Text style={styles.applyButtonText}>Apply Now</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  verticalContainer: {
    width: '100%',
  },
  horizontalContainer: {
    width: 280,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  logoContainer: {
    width: 40,
    height: 40,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bookmarkButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#F3F2F2',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    gap: 8,
  },
  company: {
    fontSize: 14,
    color: '#83829A',
  },
  position: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000000',
  },
  details: {
    flexDirection: 'row',
    gap: 16,
  },
  detailItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  detailText: {
    fontSize: 14,
    color: '#83829A',
  },
  footer: {
    marginTop: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  salary: {
    fontSize: 16,
    fontWeight: '600',
    color: '#4B7BE5',
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
});
