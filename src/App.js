import React from 'react';
import './style.css';
import React, { useState } from 'react';

export default function App() {
  const [selectedLanguage, setSelectedLanguage] = useState(null);

  const handleClick = (language) => {
    setSelectedLanguage(language);
  };
  return (
    <div>
     <div className="app-container">
      <div className="button-container">
        <button onClick={() => handleClick('HTML')} className={selectedLanguage === 'HTML' ? 'selected' : ''}>
          HTML
        </button>
        <button onClick={() => handleClick('CSS')} className={selectedLanguage === 'CSS' ? 'selected' : ''}>
          CSS
        </button>
        <button onClick={() => handleClick('JavaScript')} className={selectedLanguage === 'JavaScript' ? 'selected' : ''}>
          JavaScript
        </button>
      </div>

      {selectedLanguage && (
        <div className="description-container">
          <h2>{selectedLanguage}</h2>
          <p>
            {selectedLanguage === 'HTML' &&
              'The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser.'}
            {selectedLanguage === 'CSS' &&
              'Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML.'}
            {selectedLanguage === 'JavaScript' &&
              'JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS.'}
          </p>
        </div>
      )}
    </div>
    </div>
  );
}
