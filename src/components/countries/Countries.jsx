import React, { useEffect, useState } from 'react';
import Country from '../country/Country';

const Countries = () => {
    const [countries, setCountries] = useState([]);

    const [visitedCountries, setVisitedCountries] = useState ([])

    const [visitedFlag, setVisitedFlag] = useState([])

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data))

    }, []);

    const handleVisitedCountries = (country) =>{
    
        const newVisitedCountreis = [...visitedCountries, country];
        setVisitedCountries(newVisitedCountreis);

    }

    const handleFlag = (flag) =>{
        const newFlag = [...visitedFlag, flag];
        setVisitedFlag(newFlag);
    }

    return (
        <>
            <h2>Total Countries: {countries.length}</h2>
            <div>
                <h3>Visited Countries: {visitedCountries.length}</h3>
                <ol className='visit-country'>
                    {
                        visitedCountries.map(country => <li key={country.cca3}> {country.name.common} </li> )
                    }
                </ol>
            </div>
            <div className='img'>
                {
                    visitedFlag.map(loop => <img src={loop} />)
                     
                }
            </div>
            <div className='countries'>
                
                {
                    countries.map(loop => <Country
                        key={loop.cca3}
                        country={loop} 
                        handleVisitedCountries={handleVisitedCountries}
                        handleFlag={handleFlag}>   
                        </Country>)
                }
            </div>
            
        </>
    );
};

export default Countries;