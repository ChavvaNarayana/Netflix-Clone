import React, { useEffect, useState } from 'react'
import '../styles/Header.css'


export default function Header() {

    const [movie, setMovie] = useState();





    function truncate(str, n) {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
    }

    return (
        <>
            <header className='banner'>

                <div className="banner_contents">
                    <h1>{movie?.title || movie?.name || movie?.original_name}</h1>

                    <div className="banner_buttons">
                        <button className="banner_button">Play</button>
                        <button className="banner_button">My List</button>
                    </div>

                    <h1>{truncate(movie?.overview, 200)}</h1>
                </div>

            </header>

        </>
    )
}
