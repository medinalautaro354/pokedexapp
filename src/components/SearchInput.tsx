import React, { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react';
import { StyleProp, StyleSheet, TextInput, View, ViewStyle } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useDebouncedValue } from '../hooks/useDebouncedValue';

interface Props{
    style?: StyleProp<ViewStyle>;
    onDebounce: (value:string) => void;
}

export const SearchInput = ({ style, onDebounce }:Props) => {

    const [pokemonName, setPokemonName] = useState('');

    const {debouncedValue} = useDebouncedValue(pokemonName, 1500);

    useEffect(() =>{
        onDebounce(debouncedValue);
    }, [debouncedValue])
    return (
        <View style={{
            ...styles.container, 
            ...style as any
            }}>
            <View style={styles.textBackground}>
                <TextInput
                    placeholder='Buscar pokemon'
                    placeholderTextColor="grey"
                    style={styles.textInput}
                    autoCapitalize='none'
                    autoCorrect={false}
                    value={pokemonName}
                    onChangeText={setPokemonName}
                />
                <Icon
                    name="search-outline"
                    size={30}
                    color='grey'
                />
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        top: 50
    },
    textBackground: {
        borderRadius: 50,
        backgroundColor: '#F3F1F3',
        height: 40,
        paddingHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    textInput: {
        flex: 1,
        fontSize: 18
    }
})