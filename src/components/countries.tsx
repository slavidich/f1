import React from "react";
import axios from "axios"
import Country from "./country"

function Countries(){
    const [countries, setCountries] = React.useState(new Array())
	if (!countries.length){
		//axios.get('https://restcountries.com/v3.1/all').then(res=> { setCountries(res.data);})
		fetch('https://restcountries.com/v3.1/all').then(resp=> resp.json()).then(data=> { 
			console.log(data)
			setCountries(data)
		})
	}

    return(
        <table>
			<thead><tr><th>Name</th><th>Capital</th></tr></thead>
			<tbody>
				{countries.map(country => <Country key={country.cca3} country={country}/>)}
			</tbody>
		</table>
    )
};

export default Countries;