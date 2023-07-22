import React, { useState, useEffect } from 'react';
import '../colors.css';

import style from '../toogle.module.css';
import '../arrow/arrows.jsx';

function Dark() {
  const [theme, setTheme] = useState('dark');
  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <>
        <div className={`Dark ${theme}`} id="Darkbutton" style={{height:'18px', width:'18px',display:'flex'}}>
            <input
              type="checkbox"
              className={style.checkbox}
              id="chk"
              onClick={toggleTheme}
            />
            <label htmlFor="chk" className={style.label}>
            <svg xmlns="http://www.w3.org/2000/svg" htmlFor="chk"  viewBox="0 0 33 33"><path fill='' d="M16 0C7.163 0 0 7.163 0 16s7.163 16 16 16 16-7.163 16-16S24.837 0 16 0zM4 16C4 9.373 9.373 4 16 4v24C9.373 28 4 22.627 4 16z"/></svg>
            </label>
        </div>
    </>
  );
}

export default Dark;
