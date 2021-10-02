// import React from 'react'
import './style.scss'
import style from './stile.module.scss'

function App(): JSX.Element {
    console.log(process.env.TEST)
    return (
        <div className={style.classTest}>
            <h1>Welcome to Coffee Connect by Javalimos the best team ever</h1>
        </div>
    )
}

export default App
