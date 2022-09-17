import React, { useState } from 'react';
import Post from './Post';
import About from './About';

function ApiOther() {
    const [page, setPage] = useState("post");

    const showPostPage = () => setPage("post");
    const showAboutPage = () => setPage("about");

    return (
        <div className="App">
            <button onClick={showPostPage}>
                Post Page
            </button>
            &nbsp;
            <button onClick={showAboutPage}>
                About Page
            </button>
            {page === "post" ? <Post /> : <About />}
        </div>
    );
}

export default ApiOther