import React, { useState } from 'react';


const About = () => {
  const [showAnalysis, setShowAnalysis] = useState(false);
  const [showFreeToUse, setShowFreeToUse] = useState(false);
  const [showBrowserCompatible, setShowBrowserCompatible] = useState(false);

  const toggleAnalysisVisibility = () => {
    setShowAnalysis(!showAnalysis);
  };

  const toggleFreeToUseVisibility = () => {
    setShowFreeToUse(!showFreeToUse);
  };

  const toggleBrowserCompatibleVisibility = () => {
    setShowBrowserCompatible(!showBrowserCompatible);
  };

  return (
    <div>
      <h1 class='about'>About Us</h1>

      <div className="card-container">
        <div className="card-header" onClick={toggleAnalysisVisibility}>
          <h2>Analyze Your Text</h2>
          <div className={`arrow ${showAnalysis ? 'up' : 'down'}`}>&#9660;</div>
        </div>
        {showAnalysis && (
          <div className="card-content">
            <p>Textutils gives you a way to analyze your text quickly and efficently.It let you to count word, count charecters or reading time required.It has both light and dark mode for better compartable</p>
          </div>
        )}
      </div>

      <div className="card-container">
        <div className="card-header" onClick={toggleFreeToUseVisibility}>
          <h2>Free to Use</h2>
          <div className={`arrow ${showFreeToUse ? 'up' : 'down'}`}>&#9660;</div>
        </div>
        {showFreeToUse && (
          <div className="card-content">
          <p>TextUtils is a free charecter counter tool that provided instant charecter count and word count statics for a given text. TextUtils reports the number of words and charecter. Thus it is suitable for writing text with word / charecter limit.</p>
          </div>
        )}
      </div>

      <div className="card-container">
        <div className="card-header" onClick={toggleBrowserCompatibleVisibility}>
          <h2>Browser Compatible</h2>
          <div className={`arrow ${showBrowserCompatible ? 'up' : 'down'}`}>&#9660;</div>
        </div>
        {showBrowserCompatible && (
          <div className="card-content">
            <p>This word counter software works in any web browser such as Chrome , Firefox ,Internet Explorer ,Safari,Opera etc</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default About;
