import * as React from "react";
import "../styles/app.css";
import Header from "./header" // ниже файл header.js
import Main from "./main"

function App() {
    let buttonnane = "sn"
    return (
            <>
                <Header buttonName="sn" />
                <Main/>
            </>);
    }
export default App;
