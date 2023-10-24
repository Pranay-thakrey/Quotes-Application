import axios from "axios";
import React, { useState } from "react";

const GetQuotes = () => {
  const [Quotes, setQuotes] = useState([])
    const btnClick = async () => {
      try{
      const Response = await axios.get('https://api.quotable.io/random');
      const QuotesData = (Response.data)
      setQuotes([QuotesData])
      console.log(Quotes)
      }catch(error){
console.error('Error while fetching')
      }
    };
  
    return (
      <>
      <div className="quotes-container">
        <h3 className="title"> Your Quotes will appear here</h3>
        <button className='button2' onClick={btnClick}>Click for Quotes</button>
        <div className="quote-list">
          {Quotes.map((elem,i)=>{
            return(<div className="quote-item" key={i}>
              <h4 className="quote-text">"{elem.content}"</h4>
              <h6 className="author">- {elem.author}</h6>

            </div>
            )
          })}
        </div>
        </div>
      </>
    );
  };

export default GetQuotes;