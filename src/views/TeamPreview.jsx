import React from 'react'
import { Link } from 'react-router-dom'

export default function TeamPreview({ id, name, teamtag, coach }) {


    return (
        <Link to = {`/teams/${id}`}>
        <div>
            <div className="container px-4 py-8">
                <h2 className="text-white font-bold text-3xl">
                    {teamtag}
                </h2>
                <h4 className="text-[#FF003D] mt-2">
                    {name}
                </h4>
                <h2>{coach}</h2>
            </div>
        </div>
        </Link>
    )
}
