import React from 'react'

export const Chips = ({ name = '', color = '' }) => {
    return (
        <div className={`border ${color} rounded-md inline-flex px-4 py-1 me-2 mb-3 cursor-pointer text-base font-normal`}>
            {name}
        </div>
    )
}
