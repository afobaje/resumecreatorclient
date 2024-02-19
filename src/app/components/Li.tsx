import React, { ReactNode } from 'react'

export default function Li({children}:{children:ReactNode}) {
  return (
   <li className='flex items-center gap-3'>
    <span><svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 58 54">
    <defs>
        {/* <style>
          .cls-1{fill:#333;}
          .cls-2{fill:#3f8a2c;}
          </style> */}
    </defs>
    <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_1-2" data-name="Layer 1">
            <path className="cls-1"
                d="M29,1.49C44.17,1.49,56.51,12.94,56.51,27S44.17,52.51,29,52.51,1.49,41.06,1.49,27,13.83,1.49,29,1.49M29,0C13,0,0,12.09,0,27S13,54,29,54,58,41.91,58,27,45,0,29,0Z" />
            <path className="cls-2"
                d="M26.72,29.78a.55.55,0,0,1,.12-.9l16.63-12a1,1,0,0,1,1.17,0l6.25,5.31a.56.56,0,0,1-.12.91l-16.63,12" />
            <path className="cls-2"
                d="M34.15,35c-.78-.09-1,0-1.07,0s.19.21.18.45A.75.75,0,0,1,33,36a45.22,45.22,0,0,1-7.68,5.53,1.2,1.2,0,0,1-.61.19.85.85,0,0,1-.56-.18c-7.57-5.18-9.56-7.29-13.54-11.5a.56.56,0,0,1-.18-.45.8.8,0,0,1,.3-.46,44,44,0,0,1,7.68-5.52,1.18,1.18,0,0,1,.61-.2.92.92,0,0,1,.56.18c.4.27,3.22,2.66,7,6" />
        </g>
    </g>
</svg></span>
<span>{children}</span>
   </li>
  )
}
