import React, { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'
import Posts from "./Components/Posts"
import Pagination from "./Components/Pagination"
import Search from './Components/Search'
import View from "./Components/View"
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Card from "./Components/Card"
var dragula = require('react-dragula');
require("dotenv").config()

const App = () => {

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1)
  const [postPerPage] = useState(10)
  const [getData, setGetData] = useState([]);


  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true)
      const res = await axios.get(`https://api.nomics.com/v1/currencies/ticker?key=${process.env.REACT_APP_NOMICS_KEY}`)
    
      setPosts(res.data);
      setLoading(false);
    }
    fetchPosts();
    const getPosts = async () => {
      const resData = await axios.get(`http://localhost:5000/recive`);

      setGetData(resData.data);
    };
    getPosts()
    let left = document.getElementById('left');
   
    dragula([left]);
  }, []);

  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)

  const paginate = (pageNumber) => setCurrentPage(pageNumber);






  return (
    <>
    
    {/* <Switch>
      <Route path="/view" component={View}/>
      </Switch> */}
    <div className="container main-container mx-auto">
    <div className="container">
      
    
          <div id="left" className="container">
            <Card title="BTC" body="$32511" url="https://s3.us-east-2.amazonaws.com/nomics-api/static/images/currencies/btc.svg"/>
            <Card title="ETH" body="$1890" url="https://s3.us-east-2.amazonaws.com/nomics-api/static/images/currencies/eth.svg"/>
            <Card title="DOGE" body="$0.28" url="https://s3.us-east-2.amazonaws.com/nomics-api/static/images/currencies/doge.svg" />
          </div>   
       
        </div>
      
      <Search posts={currentPosts} alldata={posts} loading={loading} />

          

      {/* <Posts posts={currentPosts} loading={loading} /> */}
      <Pagination postPerPage={postPerPage} totalPosts={posts.length} paginate={paginate} />
     
      {getData.map(crypt => {
      
                return(
                    <View keyName={crypt._id} name={crypt.title} symbol={crypt.symbol} price={crypt.price} marketcap={crypt.mCap} image={crypt.image} />)
                
            })}
     
    </div>
    </>
  )
}

export default App;