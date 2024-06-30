import React, { useState } from 'react';

const Country = ({country, handleVisitedCountries ,handleFlag}) => {
    console.log(country)

    const {name ,flags,capital,population,area,cca3} = country;

    const [visited, setVisited] = useState(false)

    const handleVisited = () =>{
        setVisited(!visited)
    }

    return (
        <>
             <div className={`country ${visited===true ? 'visited' : 'not-visited'}`}> {/*conditional css rendering */}
                
                <div className='country-data'>
                    <h2>Country Name: {name.common} </h2> 
                    <h3>Capital: {capital}</h3>
                    <h3>Population: {population}</h3>
                    <h3>Area: {area}</h3>
                    <h3>Code: {cca3}</h3>
                    <img src={flags.png} alt="" />

                     <hr />

                    <button onClick={() => handleVisitedCountries(country)}>Mark Visited</button> <br />
                    <button onClick={()=> handleFlag(country.flags.png)}>Add Flag</button>
                    <button onClick={handleVisited}>{ visited ? 'Visited' : 'Going' }</button>
                    
                    {
                        visited===true ? 'Visited Done.' : 'I Want to Visit.' 
                    }
                    
                </div>   
            </div>
        </>
        
    );
};

export default Country;

// here we found name,flags,common,png console log of country props
