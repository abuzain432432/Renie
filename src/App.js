import Layout from './Components/Layout/Layout'
import { BrowserRouter } from 'react-router-dom';
import React, { useEffect } from 'react'

function App() {
  useEffect(() => {
    console.log('ey')
  })
  return (
    <div className="App">
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    </div>
  );
}

export default App;
