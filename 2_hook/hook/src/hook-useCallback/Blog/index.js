import React, { memo } from 'react'

function Blog({ user }) {
    console.log("render")
    return (
        <h1>Blog</h1>
    )
}

export default memo(Blog)