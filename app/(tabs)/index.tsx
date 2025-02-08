import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  SafeAreaView, 
  ScrollView, 
  TextInput,
  Image,
  Dimensions,
  Platform
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { RecommendedJobs } from '../../components/home/RecommendedJobs';
import { RecentJobs } from '../../components/home/RecentJobs';

const { width } = Dimensions.get('window');

export default function TabOneScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.mainContent}>
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
        </View>

        {/* Search Box */}
        <View style={styles.searchWrapper}>
          <View style={styles.searchContainer}>
            <View style={{ marginRight: 8 }}>
              <Image source={require('../../assets/icon_imgs/png/009-search.png')} style={{ width: 20, height: 20 }} />
            </View>
            <TextInput
              placeholder="Search job, company, etc.."
              placeholderTextColor="#83829A" 
              style={styles.searchInput}
            />
          </View>
        </View>

        {/* Scrollable Content */}
        <ScrollView 
          style={styles.scrollView}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollViewContent}
        >
          {/* Recommendation Section */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Recommendation</Text>
            <RecommendedJobs />
          </View>

          {/* Recent Job List Section */}
          <View style={[styles.section, { marginTop: 24 }]}>
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
  mainContent: {
    flex: 1,
  },
  headerSection: {
    backgroundColor: '#4B7BE5',
    paddingTop: Platform.OS === 'ios' ? 20 : 40,
    paddingHorizontal: 20,
    paddingBottom: 60,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  greeting: {
    color: '#FFFFFF',
    fontSize: 16,
    marginBottom: 8,
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
  searchWrapper: {
    paddingHorizontal: 20,
    marginTop: -30,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  searchInput: {
    flex: 1,
    color: '#83829A',
    fontSize: 16,
  },
  scrollView: {
    flex: 1,
    marginTop: 20,
  },
  scrollViewContent: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  section: {
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#000000',
  },
});
