import React from "react";
import App from "./components/app";
import { createRoot } from 'react-dom/client';

const div = document.getElementById('root');
const root = createRoot(div); 
root.render(<App/>);

