import React from 'react';
import ReactDOM from 'react-dom'; /** normally it's 'react-dom/client' */
import App from './App';

/** for Client Side Rendering, we'd use the preset code commented out below (w/ ReactDOM from 'react-dom/client')  */
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);

/** for SSR we use HYDRATE */
ReactDOM.hydrate(<App />, document.getElementById('root'));
