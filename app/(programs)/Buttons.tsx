'use client'
import './button.css';

import { FC } from 'react';
interface Props{
  text:string;
  link:string;
}


const RectButton:FC<Props> = ({text,link}) =>  {

    // const [text, link] = props;

    const openLink = () =>{
        // alert(link)
        // Location.href=link;
        // window.open(link, "_blank");
        window.location.href = `${link}`;
    }
  return (
    
        <button className="rectButton" onClick={()=>openLink()}>
        {text}
        </button>
    
  )
}

export default RectButton