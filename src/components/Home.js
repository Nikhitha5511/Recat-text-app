import React, { useReducer, useRef } from 'react';

const initialState = {
  text: '',
  wordCount: 0,
  charCount: 0,
  readingTime: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_TEXT':
      return {
        ...state,
        text: action.payload,
        wordCount: countWords(action.payload),
        charCount: action.payload.length,
        readingTime: calculateReadingTime(action.payload),
      };
    case 'CONVERT_TO_UPPERCASE':
      return {
        ...state,
        text: state.text.toUpperCase(),
      };
    case 'CONVERT_TO_LOWERCASE':
      return {
        ...state,
        text: state.text.toLowerCase(),
      };
    case 'CLEAR_TEXT':
      return {
        ...state,
        text: '',
        wordCount: 0,
        charCount: 0,
        readingTime: 0,
      };
    case 'REMOVE_EXTRA_SPACES':
      return {
        ...state,
        text: state.text.replace(/\s+/g, ' ').trim(),
      };
    default:
      return state;
  }
};

const countWords = (text) => {
  const words = text.trim().split(/\s+/);
  return words.length;
};

const calculateReadingTime = (text) => {
  const wordsPerMinute = 200;
  const wordCount = countWords(text);
  return Math.ceil(wordCount / wordsPerMinute);
};

const Home = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const textAreaRef = useRef();

  const handleTextChange = (e) => {
    dispatch({ type: 'SET_TEXT', payload: e.target.value });
  };

  const handleConvertUpperCase = () => {
    dispatch({ type: 'CONVERT_TO_UPPERCASE' });
  };

  const handleConvertLowerCase = () => {
    dispatch({ type: 'CONVERT_TO_LOWERCASE' });
  };

  const handleClearText = () => {
    dispatch({ type: 'CLEAR_TEXT' });
  };

  const handleRemoveExtraSpaces = () => {
    dispatch({ type: 'REMOVE_EXTRA_SPACES' });
  };

  const handleCopyToClipboard = () => {
    textAreaRef.current.select();
    document.execCommand('copy');
    window.getSelection().removeAllRanges();
  };

  return (
     <div className='mainContainer'>
      <div>
        <h1 className='firstHeading'>TextUtils - Word Counter, Character Counter, Remove Extra Space</h1>
      </div>
      <div className='second'>
        <h2>Enter Your Text Here:</h2>
        <textarea
          rows='10'
          cols='120'
          value={state.text}
          onChange={handleTextChange}
          ref={textAreaRef}
        ></textarea>
        <div className='buttonContainer'>
          <button className='blue' onClick={handleConvertUpperCase}>Convert UpperCase</button>
          <button className='blue' onClick={handleConvertLowerCase}>Convert LowerCase</button>
          <button  className='red' onClick={handleClearText}>Clear Text</button>
          <button  className='green' onClick={handleCopyToClipboard}>Copy to Clipboard</button>
          <button className='blue' onClick={handleRemoveExtraSpaces}>Remove Extra Spaces</button>
        </div>
        </div>
        <div className='third'>
          <h1 className='summaryContainer'>Summary Of Your Text</h1>
          <p>Number of words: {state.wordCount}</p>
          <p>Number of characters: {state.charCount}</p>
          <p>Reading Time: {state.readingTime} minutes</p>
        </div>

        <div className='fourth'>
          <h1>Preview Document</h1>
          <textarea rows='6' cols='120' value={state.text}></textarea>
        </div>
      
    </div>
  );
};

export default Home;
