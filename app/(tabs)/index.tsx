import { Image, StyleSheet, Platform } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Hello React Native!</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Axios Hubspot Example</ThemedText>
        <ThemedText>
        Demonstrates how to connect to an external API using Axios. The app is designed to fetch and display contact information from a HubSpot CRM account. 
        {/* <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText> to see changes. */}
          {/* Press{' '} */}
          {/* <ThemedText type="defaultSemiBold">
            {Platform.select({ ios: 'cmd + d', android: 'cmd + m' })}
          </ThemedText>{' '} */}
          {/* to open developer tools. */}
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Native Expo Contacts</ThemedText>
        <ThemedText>
        The Expo Contacts module in React Native allows developers to access and manage the device's contacts on iOS and Android. Using this module, you can query the user's contact list, retrieve detailed information such as names, phone numbers, and emails.
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Native Expo Maps</ThemedText>
        <ThemedText>
        The Expo Location module in React Native enables developers to integrate maps and detect the user's current location with ease. By leveraging this module, you can access the user's geographic coordinates and display their position on a map, allowing for real-time location tracking and interactive map experiences.
          {/* <ThemedText type="defaultSemiBold">npm run reset-project</ThemedText> to get a fresh{' '}
          <ThemedText type="defaultSemiBold">app</ThemedText> directory. This will move the current{' '}
          <ThemedText type="defaultSemiBold">app</ThemedText> to{' '}
          <ThemedText type="defaultSemiBold">app-example</ThemedText>. */}
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
