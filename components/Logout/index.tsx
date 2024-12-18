import { supabase } from '@/lib/supabase';
import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
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

    return (
        <View style={styles.view}>
            <View>
                <Pressable onPress={handlerSignout} style={styles.logout}>
                    <Text style={styles.text}>
                        <Ionicons name="log-out" size={24} color={theme.colors.secondary500} />
                    </Text>
                </Pressable>
            </View>
            <View>
                <Text style={styles.text}>
                    {useAuth().user?.user_metadata.name.split(' ')[0]}
                </Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    view: {
        flexDirection: 'row-reverse',
        alignItems: 'center',
        justifyContent: 'flex-start',
        alignContent: 'center',
        textAlign: 'center',
    },
    logout: {
        color: theme.colors.textWhite,
        borderRadius: 10,
    },
    text: {
        color: theme.colors.textDefault,
        paddingVertical: 5,
        textTransform: 'uppercase',
        padding: 5,
        textAlign: 'right'
    },
});

export default LogoutButton;
