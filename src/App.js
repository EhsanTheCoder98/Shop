import React from 'react';
import {Route , Routes ,Navigate} from "react-router-dom";

// context
import ApiContext from './Context/ApiContext';

// Components
import Shop from './Components/Shop';
import Productdetails from './Components/Productdetails';

const App = () => {
  return (
    <ApiContext>
      <Routes>
        <Route path="/products" element={<Shop />} />
        <Route path="/products/:id" element={<Productdetails />} />
        <Route path="/*" element={<Navigate to="/products"/>} />
      </Routes>
    </ApiContext>
  );
};

export default App;