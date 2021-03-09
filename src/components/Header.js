import React from 'react'




const Header = () => {
    const changeTheme = () => {
        const moon = document.querySelector('.fa-moon')

        moon.addEventListener('click', () => {
            document.body.classList.toggle('light-theme')
        })
    }

    return (
        <div>
            <header className="header">
                <h1>header</h1>
                <div>
                    <i className="fa fa-moon" onClick={() => changeTheme()}></i>
                </div>
            </header>
        </div>
    )
}

export default Header
