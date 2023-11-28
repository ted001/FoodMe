import React from 'react';

export default function Title({ title, fontSize, margin }) {
  const titleStyle = {
    fontSize,
    margin,
    color: 'black',
    fontWeight: 'bold', // Add this line to make the text bold
  };

  return <h1 style={titleStyle}>{title}</h1>;
}