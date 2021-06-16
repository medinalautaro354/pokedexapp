import { useEffect, useRef, useState } from "react"
import { pokemonApi } from "../api/pokemonApi";
import { IPokemonCompleteDto } from "../interfaces/IPokemon";

export const usePokemon = (id: string) => {
    const [isLoading, setIsLoading] = useState(true);
    const [pokemon, setPokemon] = useState<IPokemonCompleteDto>({} as IPokemonCompleteDto);
    const isMounted = useRef(true);

    useEffect(() => {
        getCompletePokemonById();
        return () => {
            isMounted.current = false;
        }
    }, [])

    const getCompletePokemonById = async () => {
        const response = await pokemonApi.get<IPokemonCompleteDto>(`https://pokeapi.co/api/v2/pokemon/${id}`)
        setPokemon(response.data);

        setIsLoading(false);
    }

    return {
        isLoading,
        pokemon
    }

}