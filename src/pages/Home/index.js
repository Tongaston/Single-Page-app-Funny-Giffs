
import React, { useState } from "react";
import { useLocation } from "wouter";
import ListOfGifs from "../../components/ListOfGifs";
import { useGifs } from "../../hooks/useGifs";
import TrendingSearches from "../../components/TrendingSearches";


export default function Home() {
    const [keyword, setKeyword] = useState("");
    const [path, pushLocation] = useLocation()
    const { loading, gifs } = useGifs()

    const handleSubmit = (evt) => {
        evt.preventDefault();
        pushLocation(`/search/${keyword}`)
    }

    const handleChange = (evt) => {
        setKeyword(evt.target.value)
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input placeholder="search your favourite Gif!" onChange={handleChange} type="text" value={keyword} />
                <button>Buscar</button>
            </form>
            <div className="App-main">
                <div className="App-results">
                    <h3 className="App-title">Última búsqueda</h3>
                    <ListOfGifs gifs={gifs} />
                </div>
                <div className="App-category">
                    <TrendingSearches />
                </div>
            </div>
        </>
    )
}