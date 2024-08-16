import React, { useState, useEffect } from 'react';
import {getContacts} from '@/api/contacts';
import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet,  View, FlatList, Text } from 'react-native';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function TabTwoScreen() {
    const [contacts, setContacts] = useState([]);

    const fetchContacts = async () => {
        const response = await getContacts();
        // console.log("Response",response.results);
        setContacts(response.results);
    }
    // console.log("SEt Contacts State",contacts);

    useEffect( () => {
        fetchContacts()
      }, []) 
    const renderContactItem = ({ item }) => (
    <View style={styles.contactItem}>
        <ThemedText style={styles.contactName}>{item.properties.firstname} {item.properties.lastname}</ThemedText>
        <Text style={styles.contactEmail}>{item.properties.email}</Text>
        {/* <Text style={styles.contactEmail}>test@dataSecure.com</Text> */}

    </View>
    );
  return (
    <ParallaxScrollView
      headerBackgroundColor={{light: '#4c768d', dark: '#1c2c4c' }}
      headerImage={<Ionicons size={310} name="cloud-outline" style={styles.headerImage} />}>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Api Connect</ThemedText>
      </ThemedView>
      <ThemedText>Connect to Node Js Api's for async Functions</ThemedText>
      <ThemedText>Displaying HubSpot Contacts from Api Fetch</ThemedText>

      <FlatList
        data={contacts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderContactItem}
        style={styles.contactList}
        scrollEnabled={false}
      />

    
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#88dded',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  contactList: {
    marginVertical: 20,
  },
  contactItem: {
    padding: 10,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
  },
  contactName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  contactEmail: {
    fontSize: 14,
    color: '#555',
  },
});
