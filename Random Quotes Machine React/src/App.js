import React, {useEffect, useState} from 'react';
import './App.scss';
import COLOR_LIST from './colorList';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faAngleDoubleRight} from '@fortawesome/free-solid-svg-icons'
import {faTwitter} from '@fortawesome/free-brands-svg-icons'

const quotesJson = "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"
function App() {
    const [quote, setQuote] = useState('Cogito ergo sum');
    const [author, setAuthor] = useState('René Descartes');
    const [randomNumber, setRandomNumber] = useState(0);
    const [quotesList, setQuotesList] = useState(null);
    const [color, setColor] = useState('#77ecca');
    const fetchQuotes = async (url) => {
        const response = await fetch(url)
        const parsedList = await response.json()
        setQuotesList(parsedList.quotes)
    }
    useEffect(() => {
            fetchQuotes(quotesJson)
    });
    

    const generateRandomQuote = () => {
        let rng = Math.round(quotesList.length*Math.random());
         setRandomNumber(rng);
         setColor(COLOR_LIST[rng]);
         setQuote(quotesList[rng].quote)
         setAuthor(quotesList[rng].author)
    }

  return (   
    <div className="container" style={{backgroundColor: color, color: color}}>
        <div id="quote-box" className='quote-box'>
            <p id="text" className='quote-box__text' style={{color: color}}>
                {randomNumber} : "{quote}"
            </p>
            <p id='author' className='quote-box__author' style={{color: color}}>
                - {author}
            </p>
            <button id='new-quote' className='quote-box__new-quote' onClick={()=>generateRandomQuote()} 
            style={{backgroundColor: color}}><FontAwesomeIcon icon={faAngleDoubleRight}></FontAwesomeIcon>
            New Quote
            </button>
            <div className='quote-box__tweet-button'>
                <a id="tweet-quote" className='quote-box__tweet-button__tweet-quote' rel="noreferrer" 
                href={encodeURI(`http://www.twitter.com/intent/tweet?text=${quote}\n- ${author}`)} target={"_blank"} 
                style={{backgroundColor: color}}>
                <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
                </a>
            </div>
        </div>
    </div>
  );
}

export default App;
