import React from 'react'
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom'

export default function TeamPreview({ id, name, teamtag, coach }) {


    return (
        <Link to = {`/teams/${id}`}>
        <div className="bg-gradient-to-b from-[#121212] to-[#212020] w-full h-[276px] rounded-md p-4 text-center">
            <Icon icon="fluent:people-team-20-regular" width={"120"} height={"120"} className="mx-auto mt-4 mb-8" />
            <h2 className="mt-4 text-lg text-[#FF003D]">
                {teamtag}
            </h2>
            <h3 className="text-md font-semibold">
                {name}
            </h3>
        </div>
        </Link>
    )
}
