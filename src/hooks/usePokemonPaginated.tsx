import { useEffect, useRef, useState } from "react";
import { pokemonApi } from "../api/pokemonApi";
import { IBasePokemonDto, IPokemonDto, IPokemonPaginatedDto } from "../interfaces/IPokemon";

export const usePokemonPaginated = () => {
    const nextPageUrlRef = useRef(`https://pokeapi.co/api/v2/pokemon?limit=40`);
    const [pokemons, setPokemons] = useState<IBasePokemonDto[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    const getPokemons = async () => {
        const response = await pokemonApi.get<IPokemonPaginatedDto>(nextPageUrlRef.current);

        nextPageUrlRef.current = response.data.next;
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
        setPokemons([...pokemons, ...basePokemonsDto]);
        setIsLoading(false);
    }

    useEffect(() => {
        getPokemons();
    }, [])

    return {
        pokemons,
        isLoading,
        getPokemons
    }
}