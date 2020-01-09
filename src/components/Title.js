import React from 'react'

export default function Title({name}) {
    return (
        <div className="row">
            <div className="col-10 mx-auto my-2 text-center text-white">
                <h1 className="text-capitalize">
                    {name}
                </h1>
            </div>
        </div>
    )
}
