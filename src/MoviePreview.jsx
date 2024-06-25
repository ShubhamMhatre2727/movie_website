import React from 'react'
import "./MoviePreview.css"
import LatestRelease from './LatestRelease'

export const MoviePreview = ({movie, setIsPreview}) => {
  return (
    <div className='preview' style={{backgroundImage:`url(${movie.background})`}}>
        <div className='details'>
            <h1>{movie.title}</h1>
            <span className='small'>54min. | 2024 | {movie.genre.join(", ")}</span>
            <p>{movie.description}</p>
            <div>
                <span>
                    <button id='play-now'>Play Now</button>
                    <button id='watch-trailer'>Watch Trailer</button>
                </span>
                <span>
                    <button id='download'>Download</button>
                    <button id='share'>Share</button>
                    <button id='like'>Like</button>
                </span>
            </div>
        </div>
        <LatestRelease setIsPreview={setIsPreview}/>
    </div>
  )
}
