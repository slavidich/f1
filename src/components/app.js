import React, { Fragment} from "react";
import "../styles/app.css";
import Header from "./header" // ниже файл header.js
import Main from "./main"

function App() {
    return (
            <Fragment>
                <Header />
                <Main/>
            </Fragment>);
    }
export default App;