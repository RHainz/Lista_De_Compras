import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


export function Home () {
    const [mercadorias, setMercadorias] = useState([]);

    useEffect(() => {
        async function fetchMercadorias() {
            try {
                const response = await axios.get(
                    "https://ironrest.herokuapp.com/listCompraAR"
                );
    
                setMercadorias([...response.data]);
            } catch (err) {
            console.log(err);
        }
        }
            fetchMercadorias();
        }, []);

    return (
        <>
            <h1>Home</h1>
                <Link to="/ListItens">
                    <button>Criar Mercadoria</button>
                </Link>
            {mercadorias.map((currentMer) => {
                return (
                    <Link to={`/${currentMer._id}`}>
                        <h2>{currentMer.productName}</h2>{" "}
                    </Link>
                );
            })}
        </>
    )
}


