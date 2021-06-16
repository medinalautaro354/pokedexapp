import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Dimensions, FlatList, Platform, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Loading } from '../components/Loading';
import { PokemonCard } from '../components/PokemonCard';
import { SearchInput } from '../components/SearchInput';
import { usePokemonSearch } from '../hooks/usePokemonSearch';
import { IBasePokemonDto } from '../interfaces/IPokemon';
import { styles } from '../theme/appTheme';

const screenWidth = Dimensions.get('window').width;

export const SearchScreen = () => {
    const { top } = useSafeAreaInsets();

    const { isFetching, pokemons } = usePokemonSearch();
    const [pokemonsFiltered, setPokemonsFiletered] = useState<IBasePokemonDto[]>([]);
    const [term, setTerm] = useState('');

    useEffect(() => {
        if (term === '') {
            return setPokemonsFiletered([]);
        }

        if (isNaN(Number(term))) {
            setPokemonsFiletered(pokemons.filter(
                x => x.name.toLowerCase()
                    .includes(term.toLowerCase())));
        } else {
            // const pokemonById =setPokemonsFiletered([pokemons.find(
            //     x => x.id === term
            // )!]);
            const pokemonById = pokemons.find(x => x.id === term);
            setPokemonsFiletered((pokemonById) ? [pokemonById] : [])
        }


    }, [term])
    if (isFetching) {
        return (
            <Loading />
        )
    }
    return (
        <View style={{
            flex: 1,
            marginHorizontal: 20
        }}>

            <SearchInput
                onDebounce={setTerm}
                style={{
                    position: 'absolute',
                    zIndex: 999,
                    width: screenWidth - 40,
                    top: (Platform.OS === 'ios') ? top : top + 30
                }}
            />
            {
                (isFetching)
            }
            <FlatList
                data={pokemonsFiltered}
                renderItem={({ item }) => (
                    <PokemonCard pokemon={item} />
                )}
                numColumns={2}
                keyExtractor={(item) => item.id}
                ListHeaderComponent={(
                    <Text style={{
                        ...styles.title,
                        ...styles.globalMargin,
                        paddingBottom: 10,
                        marginTop: (Platform.OS === 'ios') ? top + 60 : top + 90
                    }}>{term}</Text>
                )}
            />
        </View>
    )
}