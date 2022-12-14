import React, { FC } from 'react'

interface CoolProps{
    foo :number;
    bar?: string;
}

const Test:FC<CoolProps> = (props) => {
  return (
    <div>Test{props.foo}{props.bar}</div>
  )
}

export default Test