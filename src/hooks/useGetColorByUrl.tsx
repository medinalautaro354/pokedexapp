import { useEffect, useRef, useState } from "react";
import ImageColors from "react-native-image-colors";


export const useGetColorByUrl = (url: string) => {

    const [bgColor, setBgColor] = useState('grey');

    const isMounted = useRef(true);

    useEffect(() => {
        //IOS background
        //ANDROID dominant
        getColorsByUrl();
        //cuando el componente se destruye tira esta callback
        return () =>{
            isMounted.current = false;
        }
    }, [])

    const getColorsByUrl = () => {
         ImageColors.getColors(url, { fallback: 'grey' })
         .then((colors) =>{
            if(!isMounted.current) return;
            
             (colors.platform === 'android') ?
                 setBgColor(colors.dominant || 'grey') :
                 setBgColor(colors.background);
         })
    }

    return {
        bgColor
    }
}