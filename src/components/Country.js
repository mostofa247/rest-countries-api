import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import '../Country.css'



const Country = () => {
    const [country, setCountry] = useState([])
    const { name } = useParams()

    useEffect(() => {
        const fetchCountryData = async () => {
            const response = await fetch(`https://restcountries.eu/rest/v2/name/${name}`)
            const country = await response.json()
            setCountry(country);
        }
        fetchCountryData()
    }, [])
    return (
        
        <section className="button">
            <div className="country">
            <Link to="/" className="btn btn-light"><i className="fa fa-arrow-left"></i>Back</Link>
            {country.map((c) => {
                const { numericCode, name, flag, nativeName, population,
                    region, subregion, capital, topLevelDomain, currencies, languages, borders } = c

                return (
                    <article key={numericCode}>
                        <div className="flag image-effect">
                            <img src={flag} alt={name} />
                        </div>

                        <div className="country-details">
                            <div className="inner-country">
                                <h3>{name}</h3>
                                <h5>NativeName: {nativeName}</h5>
                                <h5>Population: {population}</h5>
                                <h5>Region: {region}</h5>
                                <h5>Subregion: {subregion}</h5>
                                <h5>Capital: {capital}</h5>
                            </div>
                            <div className="out-details">
                                <h5>TopLevelDomain: {topLevelDomain}</h5>
                                <h5>Currencies: {currencies[0].name}</h5>
                                <h5>Languages: {languages[0].name}</h5>
                                <h5>Border: {borders}</h5>
                            </div>
                        </div>
                    </article>
                )
            })}
            </div>
        </section>
    )
}

export default Country
