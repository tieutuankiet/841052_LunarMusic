import React from 'react';
import ReactDOM, { render } from 'react-dom/client';
import App from './App'; 
import GlobalStyles from './components/GlobalStyles';
// Tạo component App
// Render component App vào #root element
//ReactDOM.render(<App />, document.getElementById('root'))
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <React.StrictMode>
        <GlobalStyles >
            <App />
        </GlobalStyles >
    </React.StrictMode>
);

