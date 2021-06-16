import React from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';

export const Loading = () => {
    return (
        <View style={stylesScreen.activityContainer}>
            <ActivityIndicator
                size={50}
                color='grey'
            />
            <Text>Cargando...</Text>
        </View>
    );
}

const stylesScreen = StyleSheet.create({
    activityContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})