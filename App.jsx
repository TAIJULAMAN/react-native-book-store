import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import RNBootSplash from 'react-native-bootsplash';
import AsyncStorage from '@react-native-async-storage/async-storage';
import OnboardingScreen from './src/onboarding/Onboarding';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SignIn from './src/screens/SignIn';
import SignUp from './src/screens/SignUp';
import ForgotPassword from './src/screens/ForgotPassword';
import Verification from './src/screens/Verification';
import ResetPassword from './src/screens/ResetPassword';
import Congratulations from './src/screens/Congratulations';
import { enableScreens } from 'react-native-screens';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Home from './src/screens/Home';
import VendorsScreen from './src/screens/Vendors';
import AuthorsScreen from './src/screens/Authors';
import AuthorDetails from './src/screens/AuthorDetails';
import VendorDetails from './src/screens/VendorDetails';
import BookDetails from './src/screens/BookDetails';

enableScreens(true);

const App = () => {
  const [loading, setLoading] = React.useState(true);
  const [hasSeenOnboarding, setHasSeenOnboarding] = React.useState(false);
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();

  const TabNavigator = () => (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#54408C',
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
      }}
    >
      <Tab.Screen name="HomeTab" component={Home} options={{ title: 'Home' }} />
      <Tab.Screen
        name="VendorsTab"
        component={VendorsScreen}
        options={{ title: 'Vendors' }}
      />
      <Tab.Screen
        name="AuthorsTab"
        component={AuthorsScreen}
        options={{ title: 'Authors' }}
      />
    </Tab.Navigator>
  );
  const ONBOARDING_VERSION = '2';
  const SEEN_KEY = 'hasSeenOnboarding';
  const VERSION_KEY = 'onboarding_version';

  React.useEffect(() => {
    const init = async () => {
      try {
        const [seen, version] = await Promise.all([
          AsyncStorage.getItem(SEEN_KEY),
          AsyncStorage.getItem(VERSION_KEY),
        ]);

        if (version !== ONBOARDING_VERSION) {
          await AsyncStorage.setItem(VERSION_KEY, ONBOARDING_VERSION);
          await AsyncStorage.removeItem(SEEN_KEY);
          setHasSeenOnboarding(false);
        } else {
          setHasSeenOnboarding(seen === 'true');
        }
      } catch (e) {
        // ignore
      } finally {
        setLoading(false);
        RNBootSplash.hide({ fade: true });
      }
    };
    init();
  }, []);

  const handleOnboardingDone = async navigation => {
    try {
      await AsyncStorage.setItem(SEEN_KEY, 'true');
    } catch (e) {
      // ignore
    }
    setHasSeenOnboarding(true);
    navigation.reset({
      index: 0,
      routes: [{ name: 'SignIn' }],
    });
  };

  const handleSignInSuccess = navigation => {
    navigation.reset({
      index: 0,
      routes: [{ name: 'MainTabs' }],
    });
  };

  const handleSignIn = navigation => {
    navigation.navigate('SignIn');
  };
  if (loading) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName={'Onboarding'}
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="Onboarding">
            {({ navigation }) => (
              <OnboardingScreen
                onSkip={() => handleOnboardingDone(navigation)}
                onDone={() => handleOnboardingDone(navigation)}
                onSignIn={() => handleSignIn(navigation)}
              />
            )}
          </Stack.Screen>
          <Stack.Screen
            name="MainTabs"
            component={TabNavigator}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="VendorDetails"
            component={VendorDetails}
            options={{
              headerShown: true,
              title: 'Vendor',
              headerTintColor: '#54408C',
            }}
          />
          <Stack.Screen
            name="BookDetails"
            component={BookDetails}
            options={{
              headerShown: true,
              title: 'Book',
              headerTintColor: '#54408C',
            }}
          />
          <Stack.Screen name="SignIn">
            {({ navigation }) => (
              <SignIn onSignInSuccess={() => handleSignInSuccess(navigation)} />
            )}
          </Stack.Screen>
          <Stack.Screen
            name="SignUp"
            component={SignUp}
            options={{
              headerShown: true,
              title: 'Sign Up',
              headerTintColor: '#54408C',
            }}
          />
          <Stack.Screen
            name="ForgotPassword"
            component={ForgotPassword}
            options={{
              headerShown: true,
              title: 'Forgot Password',
              headerTintColor: '#54408C',
            }}
          />
          <Stack.Screen
            name="Verification"
            component={Verification}
            options={{
              headerShown: true,
              title: 'Verification',
              headerTintColor: '#54408C',
            }}
          />
          <Stack.Screen
            name="ResetPassword"
            component={ResetPassword}
            options={{
              headerShown: true,
              title: 'Reset Password',
              headerTintColor: '#54408C',
            }}
          />
          <Stack.Screen
            name="Congratulations"
            component={Congratulations}
            options={{
              headerShown: true,
              title: 'Success',
              headerTintColor: '#54408C',
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: { fontSize: 20, fontWeight: 'bold', color: '#000' },
});

export default App;
