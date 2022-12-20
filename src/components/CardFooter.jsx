
import React from 'react'
import "../css/CardFooter.css"
import { useState } from 'react';

// create function to toggle dark and light mode using ToggleThemeBtn


export default function CardFooter() {
    const [theme, setTheme] = useState('light');

    function toggleTheme() {
        if (theme === 'light') {
          setTheme('dark');
          document.documentElement.style.setProperty('--colorSiteBgGray', 'rgba(35, 37, 44, 1)');
          document.documentElement.style.setProperty('--colorCardBodyBg', 'rgba(26, 27, 33, 1)');
          document.documentElement.style.setProperty('--colorCrdFooterBg', 'rgba(22, 22, 25, 1)');
          document.documentElement.style.setProperty('--colorH1HeaderColor', 'rgba(245, 245, 245, 1)');
          document.documentElement.style.setProperty('--colorPBodyColor', 'rgb(204, 202, 202)');
          document.documentElement.style.setProperty('--colorYellowHighlight', 'rgba(243, 191, 153, 1)');
          document.documentElement.style.setProperty('--colorYellowBtn', '243, 191, 153');
        } else {
          setTheme('light');
          document.documentElement.style.setProperty('--colorSiteBgGray', 'rgba(245, 245, 245, 1)');
          document.documentElement.style.setProperty('--colorCardBodyBg', 'rgba(255, 255, 255, 1)');
          document.documentElement.style.setProperty('--colorCrdFooterBg', 'rgba(213, 212, 216, 1)');
          document.documentElement.style.setProperty('--colorH1HeaderColor', 'rgba(35, 37, 44, 1)');
          document.documentElement.style.setProperty('--colorPBodyColor', 'rgb(35, 37, 44)');
          document.documentElement.style.setProperty('--colorYellowHighlight', 'rgba(243, 191, 153, 1)');
          document.documentElement.style.setProperty('--colorYellowBtn', '200, 191, 153');
        }

                // Add this code to toggle the "day" class on the ToggleThemeBtn element
  const toggleBtn = document.querySelector('.ToggleThemeBtn');
  if (theme === 'light') {
    toggleBtn.classList.add('blue');
    toggleBtn.classList.remove('day')
  } else {
    toggleBtn.classList.remove('blue')
    toggleBtn.classList.add('day');
  }
}
      
      

    return (
        <footer className="cardFooter">
            <div className='Footerlinks'>
                <a href="https://www.instagram.com/toonchavez/"  >
                    <img src="https://img.icons8.com/fluency/512/instagram-new.png" alt='Instagram icon' className='FooterIcon greyscale'/>
                </a>
                <a href="http://"  >
                    <img src="https://img.icons8.com/ios-glyphs/512/facebook.png" alt='facebook icon' className='FooterIcon inverted blue'/>
                </a>
                <a href="http://"  >
                    <img src="https://img.icons8.com/material-outlined/512/github.png" alt='github icon' className='FooterIcon inverted'/>
                </a>
                <a className='ToggleThemeBtn' onClick={toggleTheme}>
                    <img src="https://img.icons8.com/external-linear-outline-icons-papa-vector/512/external-Light-Mode-interface-linear-outline-icons-papa-vector.png" alt='Lightmode' className='FooterIcon disabled'/>
                </a>
            </div>
        </footer>
    )
}