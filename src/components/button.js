import React from 'react'
const getStyleName=(btn)=>{  /* Function uniquely sets operator value as CSS selector for styling */
    const className={
        '=':'equals',
        'x':'opt',
        '+':'opt',
        '-':'dopt',
        '/':'opt',
    }
    return className[btn]
}
const Button = ({value}) => {
  return (
    <button className={`${getStyleName(value)} button`}>{value}</button>
  )
}

export default Button