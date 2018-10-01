import React from 'react';

const book = (props) => {
    
    const baseUrl = 'https://raw.githubusercontent.com/benoitvallon/100-best-books/master/static/'

    return (
        <li key={`${props.title}${props.author}`}>
            <img src={`${baseUrl}${props.imageLink}`}/>
            Author: {props.author} | Title: {props.title} | Year: {props.year}
            ></li>
    )
};

export default book;
