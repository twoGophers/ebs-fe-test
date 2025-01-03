
import React from 'react';

interface IconProps {
  name: string;
}

const Icon: React.FC<IconProps> = ({ name }: any) => {
  return (
    <div>
      {
        name === 'cart' &&
        <svg  viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8.5 10.5H5L6.5 19.5H18.5L20 10.5H16.5M8.5 10.5L10.2721 5.18377C10.4082 4.77543 10.7903 4.5 11.2208 4.5H13.7792C14.2097 4.5 14.5918 4.77543 14.7279 5.18377L16.5 10.5M8.5 10.5H16.5" stroke="#fff" strokeWidth="1.2"/>
          <path d="M12.5 10.5V19.5" stroke="#fff" strokeWidth="1.2"/>
          <path d="M9.5 19.5L8.5 10.5" stroke="#fff" strokeWidth="1.2"/>
          <path d="M15.5 19.5L16.5 10.5" stroke="#fff" strokeWidth="1.2"/>
          <path d="M19.5 13.5H5.5" stroke="#fff" strokeWidth="1.2"/>
          <path d="M19 16.5H6" stroke="#fff" strokeWidth="1.2"/>
        </svg>
      }
    </div>
  )
}

export default Icon;
