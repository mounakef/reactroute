import React from 'react'

const MovieFilter = ({handelSearch}) => {
    return (
        <div>
            <input onChange={e=>handelSearch(e.target.value)} />
        </div>
    )
}

export default MovieFilter
