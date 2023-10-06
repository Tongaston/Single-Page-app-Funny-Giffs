import React from "react";
import useForm from "./hook";
import { useLocation } from "wouter";


const RATINGS = ["g", "pg", "pg-13", "r"];

function SearchForm({
    initialKeyword = '',
    initialRating = 'g',
}) {
    const { keyword, rating, times, updateKeyword, updateRating } = useForm({
        initialKeyword,
        initialRating,
    });

    const [_, pushLocation] = useLocation()

    const handleChange = (evt) => {
        updateKeyword(evt.target.value)
    };

    const handleSubmit = (evt) => {
        evt.preventDefault()
        // navegar a otra ruta
        pushLocation(`/search/${keyword}/${rating}`)
    }

    const handleChangeRating = (evt) => {
        updateRating(evt.target.value)
    }

    return (
        <form onSubmit={handleSubmit} className="form-container">
            <input className='form-input'
                placeholder="search your favourite Gif!"
                onChange={handleChange}
                type="text"
                value={keyword}
            />
            <button className="form-btn" >Buscar</button>
            <select className="form-select" value={rating} onChange={handleChangeRating}>
                <option disabled>Rating type</option>
                {RATINGS.map((rating) => (
                    <option key={rating}>{rating}</option>
                ))}
            </select>
            <small>{times} veces</small>
        </form>
    )
}

export default React.memo(SearchForm)