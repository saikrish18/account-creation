import React from 'react';
import './SideBar.css';
import logo from './Icons/logo.svg';
import element from './Icons/element.svg';
import notification from './Icons/notification.svg'
import abstract from './Icons/abstract.svg';
import abstract1 from './Icons/abstract1.svg';
import people from './Icons/people.svg';
import exit from './Icons/exit.svg';
import  setting from './Icons/setting.svg';

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className="top-menu">
        <a href="/dashboard">
          <img src={element} alt="element" />
        </a>
      <div className='menu-item'>
        <a href="/notification">
          <img src={notification} alt="Notification" />
        </a>
        </div>

        <div className='menu-item'> 
        <a href="/abstract">
          <img src={abstract} alt="Abstract" />
        </a>
        </div>

        <div className='menu-item'>
        <a href="/abstract1">
          <img src={abstract1} alt="Abstract1" />
        </a>
        </div>

        <div className='menu-item'>
        <a href="/people">
          <img src={people} alt="People" />
        </a>
        </div>
      </div>
      <div className='bottom-menu'>
        <div className='menu-item'>
      <a href="/exit">
          <img src={exit} alt="Exit" />
        </a>
        </div>
        <div className='menu-item'>
        <a href="/setting">
          <img src={setting} alt="Setting" />
        </a>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
