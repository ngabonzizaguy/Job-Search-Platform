import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  SafeAreaView, 
  ScrollView, 
  TextInput,
  Image,
  Dimensions
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { RecommendedJobs } from '../../components/home/RecommendedJobs';
import { RecentJobs } from '../../components/home/RecentJobs';

const { width } = Dimensions.get('window');

export default function TabOneScreen() {
  return (
    <SafeAreaView style={styles.container}>
      {/* Blue Header Section */}
      <View style={styles.headerSection}>
        {/* Name and Notification */}
        <View style={styles.header}>
          <View>
            <Text style={styles.greeting}>Hello</Text>
            <Text style={styles.name}>Leslie Alexander</Text>
          </View>
          <View style={styles.notificationIcon}>
            <MaterialIcons name="notifications" size={24} color="#FFF" />
            <View style={styles.notificationBadge} />
          </View>
        </View>

        {/* Search Box - Centered and Overlapping */}
        <View style={styles.searchContainer}>
          <View style={{ marginRight: 8 }}>
            <Image source={require('../../assets/icon_imgs/png/009-search.png')} style={{ width: 20, height: 20 }} />
          </View>
          <TextInput
            placeholder="Search job, company, etc.."
            placeholderTextColor="#83829A" 
            style={[styles.searchInput, { flex: 1 }]}
          />
        </View>
      </View>

      {/* White Content Section */}
      <View style={styles.contentSection}>
        <ScrollView 
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollViewContent}
        >
          {/* Recommendation Section */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Recommendation</Text>
            <RecommendedJobs />
          </View>

          {/* Add space between sections */}
          <View style={{ marginBottom: 24 }} /> {/* Adjust this value for more or less space */}

          {/* Recent Job List Section */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Recent Job List</Text>
            <RecentJobs />
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  headerSection: {
    backgroundColor: '#4B7BE5',
    paddingTop: 50,
    paddingHorizontal: 20,
    paddingBottom: 40,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  greeting: {
    color: '#FFFFFF',
    fontSize: 16,
    marginBottom: 10,
  },
  name: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
  },
  notificationIcon: {
    position: 'relative',
  },
  notificationBadge: {
    position: 'absolute',
    top: -3,
    right: -3,
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: 'red',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 15,
    marginHorizontal: 20,
    marginTop: -35,
    position: 'absolute',
    bottom: '-15%',
    width: width - 40,
    alignSelf: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4, // Adjusted to create a bottom shadow
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    color: '#83829A',
    fontSize: 16,
  },
  contentSection: {
    flex: 1,
    zIndex: -1,
    backgroundColor: '#FFFFFF',
    paddingTop: 55,
  },
  scrollViewContent: {
    paddingHorizontal: 20,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});