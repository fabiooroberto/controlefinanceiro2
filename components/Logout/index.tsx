import { supabase } from '@/lib/supabase';
import React from 'react';
import { Button, Pressable, StyleSheet, Text } from 'react-native';
import { useAuth } from '@/contexts/AuthContext';
import { router } from 'expo-router';
import theme from '@/styled/theme';
import { Ionicons } from '@expo/vector-icons';

const LogoutButton = () => {
    const { setAuth } = useAuth();

    async function handlerSignout() {
        const { error } = await supabase.auth.signOut();
        setAuth(null);

        if (error) {
            console.log('Erro ao deslogar', error.message);
            return;
        }
        router.replace('/(auth)/signin/page');
    };

    return <Pressable onPress={handlerSignout} style={styles.logout}>
        <Text style={styles.text}>
            <Ionicons name="log-out" size={24} color={theme.colors.secondary500} />
        </Text>
    </Pressable>;
};

const styles = StyleSheet.create({
    logout: {
        alignContent: 'flex-end',
        color: theme.colors.textWhite,
        borderRadius: 10,
        alignItems: 'flex-end',
    },
    text: {
        color: theme.colors.textWhite,
        textAlign: 'right',
        paddingVertical: 5
    },
});

export default LogoutButton;
