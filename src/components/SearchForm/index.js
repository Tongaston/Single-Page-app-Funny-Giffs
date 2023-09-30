import React, {useState} from "react";


function SearchForm({ onSubmit }) {
    const [keyword, setKeyword] = useState("");

    const handleSubmit = (evt) => {
        evt.preventDefault();
        onSubmit({ keyword })
    }

    const handleChange = (evt) => {
        setKeyword(evt.target.value)
    }

    return (
        <form onSubmit={handleSubmit} className="form-container">
            <input className='form-input' placeholder="search your favourite Gif!" 
            onChange={handleChange} type="text" value={keyword} />
            <button className="form-btn" >Buscar</button>
        </form>
    )
}

export default React.memo(SearchForm)