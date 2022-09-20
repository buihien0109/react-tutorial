import React, { memo } from 'react'

function Section() {

    console.log("render")

    return (
        <h1>Section</h1>
    )
}

export default memo(Section)