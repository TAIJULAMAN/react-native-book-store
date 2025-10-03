import React from 'react';
import Onboarding from 'react-native-onboarding-swiper';
import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

const Slide = ({source, title, subtitle}) => {
  return (
    <View style={styles.slideContainer}>
      <Image source={source} style={styles.image} resizeMode="contain" />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
  );
};

const OnboardingScreen = ({onDone, onSkip, onSignIn}) => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Debug marker to ensure this screen is mounted */}
      <Text style={styles.debugMarker}>Onboarding</Text>
      <Onboarding
        onSkip={onSkip}
        onDone={onDone}
        bottomBarHighlight={false}
        showSkip
        nextLabel="Continue"
        doneLabel="Get Started"
        pages={[
          {
            backgroundColor: '#FFFFFF',
            image: (
              <Slide
                source={require('../../assets/onboarding1.png')}
                title="Now reading books will be easier"
                subtitle="Discover new worlds, join a reading community. Start your reading adventure effortlessly with us."
              />
            ),
            title: '',
            subtitle: '',
          },
          {
            backgroundColor: '#FFFFFF',
            image: (
              <Slide
                source={require('../../assets/onboarding2.png')}
                title="Your Bookish Soulmate Awaits"
                subtitle="Let us be your guide to the perfect read. Discover books tailored to your tastes for a truly rewarding experience."
              />
            ),
            title: '',
            subtitle: '',
          },
          {
            backgroundColor: '#FFFFFF',
            image: (
              <Slide
                source={require('../../assets/onboarding3.png')}
                title="Start Your Adventure"
                subtitle="Ready to embark on a quest for inspiration and knowledge? Your adventure begins now. Let’s go!"
              />
            ),
            title: '',
            subtitle: '',
          },
        ]}
      />

      <TouchableOpacity onPress={onSignIn ?? onSkip} style={styles.signInButton}>
        <Text style={styles.signInText}>Sign in</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#FFFFFF', paddingTop: 16, paddingBottom: 16},
  debugMarker: {position: 'absolute', top: 8, left: 12, color: '#999'},
  slideContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  image: {width: '100%', height: 260, marginBottom: 16},
  title: {
    color: '#1A1A1A',
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitle: {
    color: '#6B6B6B',
    fontSize: 16,
    textAlign: 'center',
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
