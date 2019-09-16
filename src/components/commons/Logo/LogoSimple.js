import React from 'react'

export const LogoSimple = (props) => (
  <svg
    width={ 153.323 }
    height={ 112.182 }
    viewBox="173.339 18.909 153.323 112.182"
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
      d="M2.44-35.96q.81-1.62 2.58-2.52 1.77-.9 4.2-.9 3.83 0 6.12 2.75 2.29 2.76 2.29 8.79v20.71l13.28-31.09h6.85l1.56 29.35-.17 1.68 13.8-31.03h7.95L42.34 0H29.99l-1.16-17.63L21.17 0H7.19L5.45-27.84q-.17-3.13-1.01-5.19-.84-2.06-2-2.93zm93.61 11.89Q96.05.64 69.25.64q-4.29 0-11.37-1.05l6.5-34.27q.46-2.32.75-3.66 8.82-.64 12.74-.64 3.91 0 7.51.82 3.59.81 5.97 2.61 4.7 3.53 4.7 11.48zM84.1-26.22q0-8.64-6.21-8.64h-.58q-.29 0-.58.06L70.76-3.65q.23.11.46.11h.47q2.14 0 4.38-1.33 2.23-1.34 3.97-4.06 4.06-6.32 4.06-17.29z"
      fill="#24911c"
      transform="translate(200.755 94.744)"
      filter="url(#prefix__editing-extrusion)"
    />
    <style />
  </svg>
)
