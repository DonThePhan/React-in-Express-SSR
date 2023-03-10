/**
 ** Creating React w/ Server Side Rendering (w/ Express)
 *  https://www.youtube.com/watch?v=NwyQONeqRXA
 *
 *  1.  npx-create-react-app
 *  2.  build react app (i.e. what we did below)
 *  3.  create server:
 *        1.  CREATE root > "server" > "server.js"
 *        2.  npm install express
 *        3.  refer to server/server.js for further instructions...
 *  4.  Use HYDRATE in index.js
 *  5.  add babel support
 *      1.  'npm install @babel/preset-env @babel/preset-react @babel/register ignore-styles'
 *      2.  CREATE root > "server" > "index.js"
 *  6.  add "ssr": "node server/index.js" to package.json script
 *
 *  7.  RUNNING THE CODE:
 **     A.  REACT ALONE (w/o Express) - LIVE:
 *          1.  Use the HYDRATE code in src/index.js (remember to use 'react-dom/client' for ReactDOM)
 *          2.  'npm start'
 **     B.  REACT SSR - STATIC:
 *          1.  Use the regular code in src/index.js (remember to use 'react-dom' for ReactDOM)
 *          2.  Run 'npm run build' to create new build file for code to run from
 *          3.  'npm run ssr'
 */

import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };
  return (
    <div className='App'>
      <p>{count}</p>
      <button onClick={decrement}>-</button>
      <button onClick={increment}>+</button>
    </div>
  );
}

export default App;
