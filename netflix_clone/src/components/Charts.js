import React, { useState } from 'react'

export default function Charts({ title, fetchUrl, isLargeRow }) {

    const [movies, setMovies] = useState([]);






    const handleClick = async (movie) => {

    };

    return (
        <>
            <div>
                <h2>{title}</h2>

                <div>
                    {movies.map(
                        (movie) =>
                            <img
                                className=''
                                alt={movie.name}
                                key={movie.id}
                                onClick={() => handleClick(movie)}
                            />
                    )}
                </div>

            </div>
        </>
    )
}
