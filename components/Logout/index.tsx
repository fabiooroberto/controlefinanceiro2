import { supabase } from '@/lib/supabase';
import React from 'react';
import { Button, Pressable, StyleSheet, Text } from 'react-native';
import { useAuth } from '@/contexts/AuthContext';
import { router } from 'expo-router';

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

    return <Pressable onPress={handlerSignout}>
        
    </Pressable>;
};

const styles = StyleSheet.create({
    logout: {
        marginRight: 10,
    },
});

export default LogoutButton;
