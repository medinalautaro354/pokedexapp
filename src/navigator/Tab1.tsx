import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens/HomeScreen';
import { PokemonScreen } from '../screens/PokemonScreen';
import { IBasePokemonDto } from '../interfaces/IPokemon';

export type RootStackParams = {
    HomeScreen: undefined;
    PokemonScreen: { basePokemonDto: IBasePokemonDto, color: string }
}

const Stack = createStackNavigator<RootStackParams>();

export const Tab1 = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
            <Stack.Screen name="PokemonScreen" component={PokemonScreen} />
        </Stack.Navigator>
    );
}