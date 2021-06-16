import { useEffect, useRef, useState } from "react";
import { pokemonApi } from "../api/pokemonApi";
import { IBasePokemonDto, IPokemonDto, IPokemonPaginatedDto } from "../interfaces/IPokemon";

export const usePokemonSearch = () => {
    const [pokemons, setPokemons] = useState<IBasePokemonDto[]>([]);
    const [isFetching, setIsFetching] = useState(true);

    const getPokemons = async () => {
        const response = await pokemonApi.get<IPokemonPaginatedDto>('https://pokeapi.co/api/v2/pokemon?limit=1200');

        mapPokemonResultToBasePokemons(response.data.results);
    }

    const mapPokemonResultToBasePokemons = (pokemonsDto: IPokemonDto[]) => {
        const basePokemonsDto: IBasePokemonDto[] = pokemonsDto.map(({ name, url }) => {
            const urlSplitted = url.split('/');
            const id = urlSplitted[urlSplitted.length - 2];

            return {
                id,
                url: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`,
                name,
                color: ''
            }
        })
        setPokemons(basePokemonsDto);
        setIsFetching(false);
    }

    useEffect(() => {
        getPokemons();
    }, [])

    return {
        pokemons,
        isFetching
    }
}