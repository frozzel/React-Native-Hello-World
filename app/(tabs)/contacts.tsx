import React, {useState, useEffect } from 'react';
import { StyleSheet, View, Text, FlatList} from 'react-native';
import * as Contacts from 'expo-contacts';
import Ionicons from '@expo/vector-icons/Ionicons';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';



export default function App() {
    const [contacts, setContacts] = useState([]);

    useEffect(() => {
        (async () => {
        const { status } = await Contacts.requestPermissionsAsync();
        if (status === 'granted') {
            const { data } = await Contacts.getContactsAsync({
            fields: [Contacts.Fields.PhoneNumbers, Contacts.Fields.Emails],
            });
            // console.log( data[0].phoneNumbers[0].digits );
            setContacts(data);

            // if (data.length > 0) {
            // const contact = data[0];
            // console.log(contact);
            // }
        }
        })();
    }, []);

    
    const renderContactItem = ({ item }) => (
      // console.log(item),
        <View style={styles.contactItem}>
            <ThemedText style={styles.contactName}>{item.name}</ThemedText>
            {item.phoneNumbers ?  (<Text style={styles.contactEmail}>Phone: {item.phoneNumbers[0].digits}</Text>
          ) : (
          <Text style={styles.contactEmail}>No Phone Number</Text>
          )}
          {item.emails ?  (<Text style={styles.contactEmail}>Email: {item.emails[0].email}</Text>
          ) : (
          <Text style={styles.contactEmail}>No Email</Text>
          )}
            {/* <Text style={styles.contactEmail}>{item.phoneNumbers[0].digits}</Text> */}
            {/* <Text style={styles.contactEmail}>test@dataSecure.com</Text> */}
    
        </View>
        );
  return (
    <ParallaxScrollView
      headerBackgroundColor={{light: '#4c768d', dark: '#1c2c4c' }}
      headerImage={<Ionicons size={310} name="people" style={styles.headerImage} />}>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">iOS Contacts</ThemedText>
      </ThemedView>
      <ThemedText>Connect to Native Contacts For iOS</ThemedText>
      <ThemedText></ThemedText>

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
    container: {
      // flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      padding: 20,
    },
    paragraph: {
      fontSize: 18,
      textAlign: 'center',
    },
  
  });