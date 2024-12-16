import theme from '@/styled/theme';
import { Stack } from 'expo-router';
import { View, StyleSheet, ActivityIndicator } from 'react-native';

export default function Index() {
    
    return (
        <View style={styles.container}>
            <Stack.Screen options={{ headerShown: false }} />
            <ActivityIndicator size="large" color={theme.colors.primary} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: theme.colors.secondary300,
        flex: 1,
        justifyContent: 'center',
    }
});
