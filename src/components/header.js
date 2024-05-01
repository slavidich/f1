import React from "react";

import "../styles/header.css";

function Header() { 
	let btnClass="btn";
	let [count, setNewCount] = React.useState(0)
	let clickbtn = ()=> {
		setNewCount(count+1);
	}
	return(
		<header> 
			<h1>its header</h1>
			<button className={btnClass} onClick={clickbtn}>btn {count}</button>
		</header>
	)
}
		
export default Header;