import { View, Text, StyleSheet, TextInput, Pressable, Alert } from 'react-native';
import theme from '@/styled/theme';
import { Link, router } from 'expo-router';
import { useState } from 'react';
import { supabase } from '@/lib/supabase';

export default function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    async function handleSignIn() {
        if (loading) return;
        setLoading(true);
        console.log({ email, password });
        const { data, error } = await supabase.auth.signInWithPassword({
            email,
            password
        });
        if (error) {
            console.error(error);
            Alert.alert('Falha na autenticação', "Login inválido");
            setLoading(false);
            return;
        }
        setLoading(false);
        router.replace('/(tabs)');
    }
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.logoText}>
                    Controle <Text style={{ color: theme.colors.primary }}>Finaneiro</Text></Text>
                <Text style={styles.slogan}>
                    Seu futuro do controle financeiro</Text>
            </View>
            <View style={styles.form}>
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
                <Pressable style={styles.button} onPress={handleSignIn}>
                    <Text style={styles.buttonText}>
                        {loading ? 'Carregando...' : 'Entrar'}
                    </Text>
                </Pressable>

                <Link href="/(auth)/signup/page" style={styles.link}>
                    <Text
                        style={{ color: theme.colors.textDefault, marginTop: 16 }}>
                        Ainda não possui uma conta? Crie uma agora!
                    </Text>
                </Link>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.secondary50,
        paddingTop: 41
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
    link: {
        alignItems: 'center',
        textAlign: 'center',
        marginTop: 16
    }
});
