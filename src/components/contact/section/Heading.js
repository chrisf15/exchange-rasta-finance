import React from 'react'

export default function Heading(props) {
    return (
        <div className="w-full bg-gradient-to-t from-red-rasta via-black to-black pb-32">
            <div className="max-w-screen-xl text-white flex flex-col mx-auto py-56">
                <h1 className="text-5xl font-bold">{props.title}</h1>
                <p className="mt-8 leading-loose">{props.desc}</p>
                
            </div>
        </div>
    )
}
