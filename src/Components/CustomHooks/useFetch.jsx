import { useEffect, useState } from "react";

const useFetch = (url, name) => {
    const [data, setData] = useState( [] );

    useEffect( () => {getData() }, [] );

    const getData = async () => {
        const check = localStorage.getItem( name );
        if (check) {
            setData(JSON.parse(check))
        } else {
            const api = await fetch( url );
            const res = await api.json();
            localStorage.setItem(name, JSON.stringify(res.recipes));
            setData( res.recipes );
        }

    }

    return { data };
}

export default useFetch;