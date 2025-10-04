

import React from 'react';
import Onboarding from 'react-native-onboarding-swiper';
import { Image, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const OnboardingScreen = ({ onDone, onSkip, onSignIn }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.debugMarker}>Onboarding</Text>

      <Onboarding
        onSkip={onSkip}
        onDone={onDone}
        bottomBarHighlight={false}
        showSkip
        nextLabel="Continue"
        doneLabel="Get Started"
        imageContainerStyles={{ paddingBottom: 0 }}
        titleStyles={styles.title}
        subTitleStyles={styles.subtitle}
        pages={[
          {
            backgroundColor: '#FFFFFF',
            image: (
              <Image
                source={require('../../assets/onboarding1.png')}
                style={styles.image}
                resizeMode="contain"
              />
            ),
            title: 'Now reading books will be easier',
            subtitle:
              'Discover new worlds, join a reading community. Start your reading adventure effortlessly with us.',
          },
          {
            backgroundColor: '#FFFFFF',
            image: (
              <Image
                source={require('../../assets/onboarding2.png')}
                style={styles.image}
                resizeMode="contain"
              />
            ),
            title: 'Your Bookish Soulmate Awaits',
            subtitle:
              'Let us be your guide to the perfect read. Discover books tailored to your tastes for a truly rewarding experience.',
          },
          {
            backgroundColor: '#FFFFFF',
            image: (
              <Image
                source={require('../../assets/onboarding3.png')}
                style={styles.image}
                resizeMode="contain"
              />
            ),
            title: 'Start Your Adventure',
            subtitle:
              'Ready to embark on a quest for inspiration and knowledge? Your adventure begins now. Let’s go!',
          },
        ]}
      />

      <TouchableOpacity
        onPress={onSignIn ?? onSkip}
        style={styles.signInButton}
      >
        <Text style={styles.signInText}>Sign in</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingTop: 16,
    paddingBottom: 16,
  },
  debugMarker: { position: 'absolute', top: 8, left: 12, color: '#999' },
  image: { width: 300, height: 260, alignSelf: 'center', marginBottom: 8 },
  title: {
    color: '#1A1A1A',
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 8,
    paddingHorizontal: 24,
  },
  subtitle: {
    color: '#6B6B6B',
    fontSize: 16,
    textAlign: 'center',
    paddingHorizontal: 24,
  },
  signInButton: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 24,
    alignItems: 'center',
  },
  signInText: {
    color: '#54408C',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default OnboardingScreen;
