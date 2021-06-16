import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { IPokemonCompleteDto } from '../interfaces/IPokemon';
import { FadeInImage } from './FadeInImage';

interface Props {
    pokemon: IPokemonCompleteDto
}

export const PokemonDetails = ({ pokemon }: Props) => {
    return (
        <ScrollView

            style={{
                //para que el contenido se vaya atras del color
                //donde se encuentra el pokemon para darle una mejor
                //vista y por que el zIndex esta en 999
                ...StyleSheet.absoluteFillObject,

            }}
        >
            <View style={{
                ...styles.container,
                marginTop: 370,
                marginBottom: 100
            }}>
                <Text style={styles.title}>Types</Text>

                <View style={{ flexDirection: 'row' }}>
                    {
                        pokemon.types.map(({ type }) => (

                            <Text
                                style={{
                                    ...styles.regularText,
                                    marginRight: 10
                                }}
                                key={type.name}
                            >
                                {type.name}
                            </Text>
                        ))
                    }
                </View>
                <Text style={styles.title}>Peso</Text>
                <Text style={styles.regularText}>{pokemon.weight}kg</Text>


                <View>
                    <Text style={styles.title}>Sprites</Text>
                </View>
                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                >
                    <FadeInImage
                        uri={pokemon.sprites.front_default}
                        style={styles.basicSprite}
                    />
                    <FadeInImage
                        uri={pokemon.sprites.back_default}
                        style={styles.basicSprite}
                    />
                    <FadeInImage
                        uri={pokemon.sprites.front_shiny}
                        style={styles.basicSprite}
                    />
                    <FadeInImage
                        uri={pokemon.sprites.back_shiny}
                        style={styles.basicSprite}
                    />
                </ScrollView>

                <View >
                    <Text style={styles.title}>Habilidades base</Text>
                    <View style={{ flexDirection: 'row' }}>
                        {
                            pokemon.abilities.map(({ ability }) => (

                                <Text
                                    style={{
                                        ...styles.regularText,
                                        marginRight: 10
                                    }}
                                    key={ability.name}
                                >
                                    {ability.name}
                                </Text>
                            ))
                        }
                    </View>
                </View>
                <View >
                    <Text style={styles.title}>Movimientos</Text>
                    <View style={{ flexWrap: 'wrap', flexDirection: 'row' }}>
                        {
                            pokemon.moves.map(({ move }) => (

                                <Text
                                    style={{
                                        ...styles.regularText,
                                        marginRight: 10
                                    }}
                                    key={move.name}
                                >
                                    {move.name}
                                </Text>
                            ))
                        }
                    </View>
                </View>

                <View >
                    <Text style={styles.title}>Stats</Text>
                    <View style={{}}>
                        {
                            pokemon.stats.map((stat, index) => (

                                <View
                                    key={stat.stat.name + index}
                                    style={{ flexDirection: 'row' }}
                                >
                                    <Text
                                        style={{
                                            ...styles.regularText,
                                            marginRight: 10,
                                            width: 150
                                        }}
                                        key={stat.stat.name}
                                    >
                                        {stat.stat.name}
                                    </Text>
                                    <Text
                                        style={{
                                            ...styles.regularText,
                                            fontWeight: 'bold'
                                        }}
                                        key={stat.base_stat}
                                    >
                                        {stat.base_stat}
                                    </Text>
                                </View>
                            ))
                        }
                    </View>
                </View>

                <View style={{
                    alignItems:'center'
                }}>
                <FadeInImage
                        uri={pokemon.sprites.front_default}
                        style={styles.basicSprite}
                    />
                </View>
            </View>

        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 20
    },
    title: {
        fontWeight: 'bold',
        fontSize: 22,
        marginTop: 20,
    },
    regularText: {
        fontSize: 19
    },
    basicSprite: {
        width: 150,
        height: 150
    }
});