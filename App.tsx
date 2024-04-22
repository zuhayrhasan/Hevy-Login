import React, {useState, useEffect} from 'react';

// Import props
import {
    StyleSheet,
    SafeAreaView,
    View,
    Text,
    TextInput,
    Button,
} from 'react-native';

function App(): React.JSX.Element {

    // Initialize variables
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [loading, isLoading] = React.useState(false);

    // Valid
    const isUsernameValid = username.length >= 3;
    const isPasswordValid = password.length >= 6;

    const validLogin = isUsernameValid && isPasswordValid;

    // User attempts to login
    // No need to check here because 'validLogin' already checks valid login
    const doLogin = () => {

        // Ignore if logging in while loading
        if (loading) return;

        // Otherwise simulate load for 3 seconds
        isLoading(true);
        setTimeout(() => {
            // After 3 seconds, set 'isLoading' back to false
            isLoading(false);

            // Opted against resetting fields here because it separates the issues
            // setUsername('');
            // setPassword('');
        }, 3000);
    }

    // If loading state has been changed...
    useEffect(() => {

        // and is now set to false (meaning done loading), reset fields
        if (!loading) {
            setUsername('');
            setPassword('');
        }

    }, [loading]);

    return (
        <SafeAreaView style={styles.background}>

            {/* Email/Username box */}
            <View style={styles.inputContainer}>
                <Text style={styles.inputBoxLabel}>Email or username</Text>
                <TextInput
                    style={styles.inputBox}
                    onChangeText={setUsername}
                    value={username}
                    color="white"
                    placeholder="Enter your username"
                    placeholderTextColor="#777777"
                />
            </View>

            {/* Password box */}
            <View style={styles.inputContainer}>
                <Text style={styles.inputBoxLabel}>Password</Text>
                <TextInput
                    style={styles.inputBox}
                    onChangeText={setPassword}
                    value={password}
                    color="white"
                    placeholder="Enter your password"
                    placeholderTextColor="#777777"
                />
            </View>

            {/* Login button */}
            <View style={styles.buttonContainer}>
                <Button
                    color="purple"
                    title={loading ? "Loading..." : "Login"}
                    onPress={doLogin}
                    disabled={!validLogin || loading}
                />
            </View>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({

    background: {
        flex: 1,
        backgroundColor: '#111111',
    },

    inputContainer: {
        padding: 0,
        margin: 10,
        marginHorizontal: 20,
        backgroundColor: 'transparent',
    },

    inputBoxLabel: {
        color: 'white',
    },

    inputBox: {
        borderBottomWidth: 1,
        borderBottomColor: '#777777',
        backgroundColor: 'transparent',
        color: 'white',
    },

    buttonContainer: {
        margin: 10,
        padding: 10,
    },

});

export default App;