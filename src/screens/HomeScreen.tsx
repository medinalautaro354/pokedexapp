import React from 'react';
import { ActivityIndicator, Button, FlatList, Image, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { PokemonCard } from '../components/PokemonCard';
import { usePokemonPaginated } from '../hooks/usePokemonPaginated';
import { styles } from '../theme/appTheme';

export const HomeScreen = () => {
    const { top } = useSafeAreaInsets();

    const { pokemons, getPokemons } = usePokemonPaginated();

    return (
        <View>
            <Image
                source={require('../assets/pokebola.png')}
                style={styles.pokebolaBG}
            />
            <View style={{
                alignItems: 'center'
            }}>
                <FlatList
                    data={pokemons}
                    renderItem={({ item }) => (
                        <PokemonCard pokemon={item} />
                    )}
                    numColumns={2}
                    keyExtractor={(item) => item.id}
                    ListHeaderComponent={(
                        <Text style={{
                            ...styles.title,
                            ...styles.globalMargin,
                            top: top + 20,
                            marginBottom: top + 20,
                            paddingBottom: 10
                        }}>Pokedex</Text>
                    )}
                    onEndReached={getPokemons}
                    onEndReachedThreshold={0.4}
                    ListFooterComponent={(
                        <ActivityIndicator
                            style={{ height: 100, }}
                            size={20}
                            color='grey'
                        />)}
                />
            </View>


        </View>
    )
}