import React, { useContext } from 'react'
import { ThemeContext } from './ThemeContext/ThemeContext';

function Content() {
    const context = useContext(ThemeContext);
    console.log(context)

    return (
        <div className={context.theme} style={{ padding: 20 }}>
            <h1>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta fuga corrupti ratione voluptatibus reprehenderit officiis omnis quis pariatur, qui ab exercitationem amet voluptatem vitae nobis, nemo ea distinctio iusto ut?</p>
        </div>
    )
}

export default Content