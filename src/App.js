import './App.css';
import {BrowserRouter, Routes, Route } from 'react-router-dom'

import GetQuote from './Pages/GetQuote/GetQuote.js'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<GetQuote />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
