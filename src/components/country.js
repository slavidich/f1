import React from "react"
import PropTypes from "prop-types"

function Country(props){
    return(
    <tr>
        <td>{props.country.name.common}</td>
		<td>{props.country.capital}</td>
    </tr>
    )
}

Country.propTypes = {
    country: PropTypes.object
};
export default Country