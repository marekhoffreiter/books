import React from 'react';
import baseUrl from './BaseUrl'

const book = (props) => {
    
    return (
        <li key={`${props.title}${props.author}`}>
            <img src={`${baseUrl}${props.imageLink}`}/>
            Author: {props.author} | Title: {props.title} | Year: {props.year}
            ></li>
    )
};

export default book;
