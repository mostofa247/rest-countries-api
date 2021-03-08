import React from 'react'

const Filter = () => {
    return (
        <div>
            <section className="filter">
                <form className="form-control" action="">
                    <input type="search" name="search" id="search" placeholder="Search  for a country" />
                </form>

                <div className="region-filter">
                    <select name="select" id="select" className="select">
                        <option value="Filter by region">Filter By Region</option>
                        <option value="Africa">Africa</option>
                        <option value="Asia">Asia</option>
                        <option value="America">America</option>
                        <option value="Europe">Europe</option>
                    </select>
                </div>
            </section>
        </div>
    )
}

export default Filter
