import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Pressable, SafeAreaView, ScrollView, Alert } from 'react-native';
import theme from '../../../styled/theme';
import { router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { supabase } from '../../../lib/supabase';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

export default function Signup() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    async function handleSignUp() {
        if (loading) return;
        setLoading(true);
        console.log({ name, email, password });
        const { data, error } = await supabase.auth.signUp({
            email,
            password,
            options: {
                data: { name }
            }
        });
        if (error) {
            Alert.alert('Erro', error.message);
            setLoading(false);
            return;
        }
        setLoading(false);
        router.replace('/(auth)/signin/page');
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Pressable style={styles.backButton}
                    onPress={() => { router.back() }}>
                    <Ionicons name="arrow-back" size={24} color={theme.colors.textDefault} />
                </Pressable>
                <Text style={styles.logoText}>
                    Controle <Text style={{ color: theme.colors.primary }}>Finaneiro</Text></Text>
                <Text style={styles.slogan}>
                    Criar uma conta</Text>
            </View>
            <View style={styles.form}>
                <View>
                    <Text style={styles.label}>Nome</Text>
                    <TextInput
                        placeholder="Nome completo"
                        style={styles.input}
                        value={name}
                        onChangeText={setName} />
                </View>
                <View>
                    <Text style={styles.label}>Email</Text>
                    <TextInput
                        placeholder="Digite seu email"
                        style={styles.input}
                        value={email}
                        onChangeText={setEmail} />
                </View>
                <View>
                    <Text style={styles.label}>Senha</Text>
                    <TextInput
                        placeholder="Digite sua senha"
                        style={styles.input}
                        secureTextEntry
                        value={password}
                        onChangeText={setPassword} />
                </View>
                <Pressable style={styles.button} onPress={handleSignUp}>
                    <Text style={styles.buttonText}>
                        {loading ? 'Carregando...' : 'Criar conta'}
                    </Text>
                </Pressable>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.secondary50,
    },
    header: {
        paddingLeft: 14,
        paddingRight: 14
    },
    logoText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: theme.colors.textDefault,
        marginBottom: 8
    },
    slogan: {
        fontSize: 34,
        color: theme.colors.textneutral,
        marginBottom: 34
    },
    form: {
        flex: 1,
        backgroundColor: theme.colors.secondary100,
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
        paddingTop: 34,
        paddingLeft: 14,
        paddingRight: 14
    },
    label: {
        fontSize: 16,
        color: theme.colors.textDefault,
        marginBottom: 4
    },
    input: {
        backgroundColor: theme.colors.secondary50,
        borderWidth: 1,
        borderRadius: 8,
        marginBottom: 16,
        paddingHorizontal: 8,
        paddingTop: 14,
        paddingBottom: 14
    },
    button: {
        backgroundColor: theme.colors.primary,
        borderRadius: 8,
        paddingVertical: 14,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%'
    },
    buttonText: {
        color: theme.colors.textWhite,
        fontSize: 16,
        fontWeight: 'bold'
    },
    backButton: {
        alignSelf: 'flex-start',
        paddingVertical: 8,
    }
});
