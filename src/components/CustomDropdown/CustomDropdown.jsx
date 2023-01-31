import React, { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import "./CustomDropdown.css";

function CustomDropdown({handleOptionClick, selectedOption, optionsContainerRef }) {
  const { i18n } = useTranslation();

  return (
    <div className='container'>
      <div className='select-box'>
          <div className='options-container' ref={optionsContainerRef}>
              <div className='option' onClick={() => handleOptionClick("English")} >
                  <input 
                    type="radio"
                    className='radio'
                    id='english' 
                    name='category'
                    value='en' 
                    onChange={(e) => i18n.changeLanguage(e.target.value)}
                  />
                  <label htmlFor="english">English</label>
              </div>

              <div className='option' onClick={() => handleOptionClick("German")} >
                  <input
                    type="radio"
                    className='radio'
                    id='german' 
                    name='category'
                    value='de'
                    onChange={(e) => i18n.changeLanguage(e.target.value)}
                  />
                  <label htmlFor="german">German</label>
              </div>
          </div>
          <div className='selected' 
               onClick={() => optionsContainerRef.current.classList.toggle("active")} >
             {selectedOption}
          </div>
      </div>
    </div>
  );
}

export default CustomDropdown
