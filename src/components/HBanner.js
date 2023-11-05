import { useState } from 'react';
import { ReactComponent as ArrowDown } from '../assets/images/hbanner/arrow-down.svg';
import { ReactComponent as ArrowUp } from '../assets/images/hbanner/arrow-up.svg';

import '../assets/css/hbanner.css';

const HBanner = (e) => {
  const [languages, setLanguages] = useState([
    {
      code: 'en',
      name: 'English',
    },
    {
      code: 'es',
      name: 'Spanish',
    },
    {
      code: 'fr',
      name: 'French',
    },
    {
      code: 'de',
      name: 'German',
    },
  ]);
  const [arrowCon, setArrowCon] = useState(true);
  const [languagePopup, setLanguagePopup] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('English');

  return (
    <div className="Hbanner">
      <div className="header-banner">
        <p className="medium-para">
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
        </p>
        <button className="e-com-button hbanner-button">Shop Now!</button>
      </div>
      <div className="langugage-popup">
        <div
          className="language-selected-cont"
          onClick={() => {
            setLanguagePopup(!languagePopup);
            setArrowCon(!arrowCon);
          }}
        >
          <b className="language-selected">{selectedLanguage}</b>
          <div className="language-selected-icon">
            {arrowCon ? <ArrowDown /> : <ArrowUp />}
          </div>
        </div>
        {languagePopup && (
          <ul className="languages-selector-cont">
            {languages.map((elem) => {
              return (
                <div className="languages-selector-option-cont">
                  <div className="languages-selector-option-code">
                    <i className="option-code-inner">{elem.code}</i>
                  </div>
                  <li
                    className="languages-selector-option"
                    onClick={() => {
                      setSelectedLanguage(elem.name);
                      setLanguagePopup(false);
                    }}
                  >
                    {elem.name}
                  </li>
                </div>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
};
export default HBanner;
