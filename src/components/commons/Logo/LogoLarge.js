import React from 'react'

export const LogoLarge = (props) => (
  <svg
    width={ 383.078 }
    height={ 112.182 }
    viewBox="58.461 18.909 383.078 112.182"
    style={ {
      background: '0 0',
    } }
    preserveAspectRatio="xMidYMid"
    { ...props }
  >
    <defs>
      <filter
        id="prefix__editing-extrusion"
        x="-100%"
        y="-100%"
        width="300%"
        height="300%"
      >
        <feFlood result="color1" floodColor="#0c381c" />
        <feConvolveMatrix
          order="5,5"
          divisor={ 1 }
          kernelMatrix="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1"
          in="SourceAlpha"
          result="extrude"
        />
        <feComposite
          in="color1"
          in2="extrude"
          result="comp-extrude"
          operator="in"
        />
        <feOffset dx={ 2.5 } dy={ 2.5 } in="comp-extrude" result="offset-extrude" />
        <feMerge>
          <feMergeNode in="offset-extrude" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
    <path
      d="M2.44-35.96q.81-1.62 2.58-2.52 1.77-.9 4.2-.9 3.83 0 6.12 2.75 2.29 2.76 2.29 8.79v20.71l13.28-31.09h6.85l1.56 29.35-.17 1.68 13.8-31.03h7.95L42.34 0H29.99l-1.16-17.63L21.17 0H7.19L5.45-27.84q-.17-3.13-1.01-5.19-.84-2.06-2-2.93zM80.91-9.8q1.45.98 1.45 3.16 0 2.17-1.1 3.57-1.1 1.39-2.9 2.32-3.71 1.91-7.72 1.91-4 0-6.35-.87-2.35-.87-3.91-2.49-3.08-3.08-3.08-8.7 0-8.76 4.76-14.1 5.1-5.74 13.98-5.74 5.51 0 8.23 2.32 2.03 1.74 2.03 4.58 0 10.21-17.63 10.21-.23 1.51-.23 2.78 0 2.67 1.19 3.69 1.19 1.01 3.39 1.01 2.21 0 4.56-1.01 2.34-1.02 3.33-2.64zm-11.83-6.32q4.12 0 6.49-2.56 2.38-2.43 2.38-6.32 0-1.33-.49-2.06-.49-.72-1.48-.72t-1.83.37q-.84.38-1.71 1.66-2.14 2.9-3.36 9.63zm33.06 12.93q-1.8 4.35-7.54 4.35-2.9 0-4.76-2.03-1.51-1.68-1.51-3.6 0-4.35 2.03-13.86L94.6-40.6l11.77-1.16-5.62 29.35q-.99 4.29-.99 5.8 0 3.3 2.38 3.42zm18.79 0q-1.8 4.35-7.54 4.35-2.9 0-4.76-2.03-1.5-1.68-1.5-3.6 0-4.35 2.03-13.86l4.23-22.27 11.77-1.16-5.62 29.35q-.99 4.29-.99 5.8 0 3.3 2.38 3.42zm42.57-20.88Q163.5.64 136.71.64q-4.3 0-11.37-1.05l6.49-34.27q.47-2.32.76-3.66 8.81-.64 12.73-.64 3.91 0 7.51.82 3.6.81 5.97 2.61 4.7 3.53 4.7 11.48zm-11.95-2.15q0-8.64-6.2-8.64h-.58q-.29 0-.58.06l-5.98 31.15q.24.11.47.11h.46q2.15 0 4.38-1.33 2.23-1.34 3.97-4.06 4.06-6.32 4.06-17.29zM179.1 1.16q-12.76 0-12.76-12.01 0-8.52 4.7-14.03 4.99-5.86 13.63-5.86 6.27 0 9.46 2.9 3.19 2.9 3.19 8.99 0 9.28-4.99 14.67-4.87 5.34-13.23 5.34zm1.51-25.23q-.69 1.57-1.24 3.91-.56 2.35-1.25 6.07-.7 3.71-.7 8.29 0 1.51.5 2.49.49.99 1.82.99 1.34 0 2.18-.64.84-.64 1.48-2.14 1.16-2.67 2.08-7.63.93-4.96 1.02-7.11.09-2.14.09-3.74 0-1.59-.47-2.64-.46-1.04-1.77-1.04-1.3 0-2.17.81-.87.81-1.57 2.38zm44.66 25.23q-7.02 0-7.02-5.45.06-1.51.53-4.06l1.04-5.34q1.57-7.54 1.57-9.22 0-3.36-1.98-3.36-3.3 0-5.04 8.64L210.95 0l-11.66 1.16 6.03-30.8 9.51-1.1-.93 5.68q2.73-5.68 11.08-5.68 4.06 0 5.77 1.71t1.71 5.54q0 3.6-1.85 12.01-.87 3.77-.87 5.19 0 1.42.78 2.23t1.94.93q-.58 1.97-2.58 3.13t-4.61 1.16zM260.59-9.8q1.45.98 1.45 3.16 0 2.17-1.1 3.57-1.1 1.39-2.9 2.32-3.71 1.91-7.71 1.91t-6.35-.87q-2.35-.87-3.92-2.49-3.07-3.08-3.07-8.7 0-8.76 4.75-14.1 5.11-5.74 13.98-5.74 5.51 0 8.24 2.32 2.03 1.74 2.03 4.58 0 10.21-17.63 10.21-.24 1.51-.24 2.78 0 2.67 1.19 3.69 1.19 1.01 3.4 1.01 2.2 0 4.55-1.01 2.35-1.02 3.33-2.64zm-11.83-6.32q4.12 0 6.5-2.56 2.38-2.43 2.38-6.32 0-1.33-.5-2.06-.49-.72-1.48-.72-.98 0-1.82.37-.84.38-1.71 1.66-2.15 2.9-3.37 9.63z"
      fill="#24911c"
      transform="translate(115.785 96.194)"
      filter="url(#prefix__editing-extrusion)"
    />
    <style />
  </svg>
)