import { useFonts } from 'expo-font';
import { router, Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import 'react-native-reanimated';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import theme from '@/styled/theme';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { AuthProvider, useAuth } from '@/contexts/AuthContext';
import { supabase } from '@/lib/supabase';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <AuthProvider>
      <MainLayout />
    </AuthProvider>
  );
}

function MainLayout() {

  const { setAuth } = useAuth();

  useEffect(() => {
    supabase.auth.onAuthStateChange((event, session) => {
      console.log('session_user', session?.user);
      if (session?.user) {
        setAuth(session.user);
        router.replace('/(tabs)');
        return;
      }
      setAuth(null);
      router.replace('/(auth)/signin/page');
    });
  }, []);



  return (
    <StyledThemeProvider theme={theme}>
      <SafeAreaProvider style={{ backgroundColor: theme.colors.secondary50 }}>
        <Stack>
          <Stack.Screen name="/app" options={{ headerShown: false, headerShadowVisible: false }} />
          <Stack.Screen name="(auth)/signin/page" options={{ headerShown: false }} />
          <Stack.Screen name="(auth)/signup/page" options={{ headerShown: false }} />
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="(modals)/transaction-insert" options={{
            presentation: "modal",
            title: "Inserir transação"
          }} />
        </Stack>
      </SafeAreaProvider>
      <StatusBar style="auto" />
    </StyledThemeProvider>
  )
}
