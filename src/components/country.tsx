import * as React from "react"
import PropTypes from "prop-types"

function Country(props){
    return(
    <tr>
        <td>{props.name.common}</td>
		<td>{props.capital}</td>
    </tr>
    )
}
Country.defaultProps  = {
    capital: "not Available"
};
export default Country