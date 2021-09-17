import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import Home from './Home';
import MyForm from './practice/MyForm';
import PracticeAnimation from './PracticeAnimation';
import BoxMain from './BoxMain';
import Background from './Background';
import Slider from './reactSlick';
import ApiNYCTimes from './ApiNYCTimes';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
//
const App = () => {
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
      <ApiNYCTimes />
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
