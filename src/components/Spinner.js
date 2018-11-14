import React from 'react'
import Loader from 'react-loader-spinner'

import '../assets/css/spinner.css'


export default function Spinner() {
    return (
        <div className='spinnerWrapper'>
            <div className='spinnerContainer'>
                <Loader
                    type="Circles"
                    color="#00BFFF"
                    height="100"
                    width="100"
                />
            </div>
        </div>
    )
}