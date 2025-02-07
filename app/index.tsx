import { View, Text, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { SearchBar } from '../components/common/SearchBar';
import { RecommendedJobs } from '../components/home/RecommendedJobs';
import { RecentJobs } from '../components/home/RecentJobs';
import { Redirect } from 'expo-router';

export default function HomeScreen() {
  // Redirect to the tabs layout
  return <Redirect href="/(tabs)" />;
}
