import React from 'react';
import baseUrl from './BaseUrl';
import './Book.css';

const book = (props) => {
  return (
    <li key={`${props.title}${props.author}`} className='Book'>
      <img src={`${baseUrl}${props.imageLink}`} className='Book img'/> 
        Author: {props.author} | Title: {props.title} | Year: {props.year}
    </li>
  )
};
export default book;
