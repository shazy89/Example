import React, { useState, useEffect } from 'react';
import './index.css';
import { getPople } from './apis/practice';
import axios from 'axios';
import { person } from './apis/index';
import myData from './apis/try.json';
//import Home from './Home';
//import MyForm from './practice/MyForm';
//import PracticeAnimation from './PracticeAnimation';
//import BoxMain from './BoxMain';
//import Background from './Background';
//import Slider from './reactSlick';

import ApiNYCTimes from './ApiNYCTimes';
import fs from 'fs';
import { Display } from './components/Display';
import { PracticeModal } from './PracticeModal.js';
import { DisplayOnTheModal } from './components/DisplayOnTheModal';
const App = () => {
  const [show, setShow] = useState(false);

  const handleModal = () => {
    show ? setShow(false) : setShow(true);
  };
  /*
  const [fetchPerson, setFetchPerson] = useState('');

  function isString(val) {
    return typeof val === 'string';
  }
  const newData = {
    person: 'Pipir',
  };
  const personsRequest = (select = 'me') => {
    return new Promise((resolve, reject) => {
      const mock = person[select];
      if (!mock) {
        reject('not found');
      }
      resolve(mock);
    });
  };

  const getData = () => {
    personsRequest()
      .then((results) => {
        setFetchPerson(results.person);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getData();
  }, [fetchPerson]);
*/
  return (
    <div className="main-div">
      {
        //    <Router>
        //     <Switch>
        //       <Route exact path="/" component={Home} />;
        //       <Route path="/myform" component={MyForm} />
        //       <Route path="/animation" component={PracticeAnimation} />
        //       <Route path="/background" component={Background} />
        //     </Switch>
        //   </Router>
      }
      {show && (
        <PracticeModal
          component={DisplayOnTheModal}
          handleModal={handleModal}
        />
      )}
      <button onClick={handleModal}>Trigger Modal</button>
    </div>
  );
};

export default App;

//const [nycTimesData, setNycTimesData] = useState([]);
//const api = axios.create({
//  baseURL:
//    'https://api.nytimes.com/svc/movies/v2/reviews/picks.json&api-key=aJRwPjhMkU0ybseTP7t2QEONpPa1pnkt', //http://localhost:5001/
//  headers: {
//    Accept: 'application/json',
//    'Content-Type': 'application/json',
//  },
//});
//
//const mostPopular = useCallback(async () => {
//  const data = await api.get();
//  setNycTimesData(data.data.results);
//}, [api]);
//
//useEffect(() => {
//  mostPopular();
//}, [mostPopular]);

/*  function getLocalData(url, method) {
    let data = null;
    if (url.includes('/getpeople')) data = getPople();

    return {
      status: 200,
      text: () => Promise.resolve(isString(data) ? data : JSON.stringify(data)),
      json: () => Promise.resolve(data),
    };
  }
  async function getUserData() {
    try {
      const response = await getLocalData('/getpeople', 'GET');
      debugger;
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    getUserData();
  }, []); 
  
  
  
          <ApiNYCTimes />
        <ApiNYCTimes />
        <ApiNYCTimes />
        <ApiNYCTimes />
  */
