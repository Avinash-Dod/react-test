// import { connect } from 'react-redux';
import React from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import './App.css';
import Navigation from './components/Navigation';
import { fetchData } from './Redux/actions/action';


function App() {
  const dispatch=useDispatch()
     useEffect(() => {
      async function fetchApi() {        
        dispatch(fetchData());        
      }
      fetchApi()
    },[dispatch])
  
  return (
    <div className="App">
      <Navigation />
    </div>
  );
}


export default App 
