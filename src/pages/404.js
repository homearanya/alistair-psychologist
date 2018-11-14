import React from 'react'
import { Link } from "gatsby"

export default function () {
    return (
        <div>
            <h1>Oops...</h1>
            <h2>Page Not Found!</h2>
            <p>Sorry the Page Could not be Found here.<br />
                Try using the button below to go to main page/<br />
                of the site</p>
            <Link to="/">Go to Home</Link>
        </div>
    )
}
