import React, { useState, useEffect } from 'react';
import { getPople } from './apis/practice';
import axios from 'axios';
//import Home from './Home';
//import MyForm from './practice/MyForm';
//import PracticeAnimation from './PracticeAnimation';
//import BoxMain from './BoxMain';
//import Background from './Background';
//import Slider from './reactSlick';
//import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ApiNYCTimes from './ApiNYCTimes';

const App = () => {
  function isString(val) {
    return typeof val === 'string';
  }
  function getLocalData(url, method) {
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
  return (
    <>
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
      <div
        style={{
          display: 'flex',
          height: '100%',
          flexFlow: 'wrap',
          marginTop: '1rem',
          justifyContent: 'center',
        }}
      >
        <ApiNYCTimes />
        <ApiNYCTimes />
        <ApiNYCTimes />
        <ApiNYCTimes />
      </div>
    </>
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
