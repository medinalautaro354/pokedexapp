import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Platform } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { Tab2Screen } from './Tab2';
import { Tab1 } from './Tab1';

const Tab = createBottomTabNavigator();

export const BottomTabNavigator = () => {
    return (
        <Tab.Navigator

            sceneContainerStyle={{
                backgroundColor: 'white'
            }}
            tabBarOptions={{
                activeTintColor: '#5856D6',
                labelStyle: {
                    marginBottom: (Platform.OS === 'ios') ? 0 : 10
                },
                style: {
                    borderWidth: 0,
                    elevation: 0,
                    height: (Platform.OS === 'ios') ? 80 : 50,
                    position: 'absolute',
                    backgroundColor: 'rgba(255,255,255,0.92)'
                }

            }}
        >
            <Tab.Screen
                options={{
                    tabBarLabel: 'Pokemones',
                    tabBarIcon: ({ color }) => <Icon name="list-outline" size={25} color={color} />
                }}
                name="HomeScreen"
                component={Tab1} />
            <Tab.Screen
                options={{
                    tabBarLabel: 'Buscar',
                    tabBarIcon: ({ color }) => <Icon name="search-outline" size={25} color={color} />
                }}
                name="SearchScreen"
                component={Tab2Screen} />
        </Tab.Navigator>
    );
}