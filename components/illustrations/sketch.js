const Sketch = () => (
  <div>
    <svg width="85px" height="72px" viewBox="0 0 85 72">
      <defs>
        <rect id="path-1" x="32" y="20" width="52" height="51" />
        <mask
          id="mask-2"
          maskContentUnits="userSpaceOnUse"
          maskUnits="objectBoundingBox"
          x="0"
          y="0"
          width="52"
          height="51"
          fill="white"
        >
          <use href="#path-1" />
        </mask>
      </defs>
      <g
        id="sketch"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <path
          d="M25.5,51 C39.5832611,51 51,39.5832611 51,25.5 C51,11.4167389 39.5832611,0 25.5,0 C11.4167389,0 0,11.4167389 0,25.5 C0,39.5832611 11.4167389,51 25.5,51 Z"
          id="sketch--oval"
          stroke="#000000"
          strokeDasharray="4,5"
        />
        <use
          id="sketch--rect"
          stroke="#000000"
          mask="url(#mask-2)"
          strokeWidth="2"
          strokeDasharray="4,5"
          href="#path-1"
        />
        <path
          d="M50.4053487,20 C50.7947521,21.7713336 51,23.6116977 51,25.5 C51,37.3369173 42.9348429,47.2901162 32,50.1641255 L32,20 L50.4053487,20 Z"
          id="sketch--combined"
          fill="#999999"
        />
      </g>
    </svg>
    <style jsx>
      {`
        #sketch--oval {
          opacity: 0;
          animation-name: example;
          animation-duration: 1s;
          animation-fill-mode: forwards;
          position: relative;
          transform: translate(0px, -30px);
        }

        #sketch--combined {
          opacity: 0;
          animation-delay: 1s;
          animation-duration: 1s;
          animation-fill-mode: forwards;
          animation-name: example-2;
        }

        #sketch--rect {
          opacity: 0;
          animation-name: example;
          animation-duration: 1s;
          animation-fill-mode: forwards;
          position: relative;
          transform: translate(30px, 0px);
        }

        @keyframes example {
          to {
            opacity: 1;
            transform: translate(0px, 0px);
          }
        }

        @keyframes example-1 {
          to {
            opacity: 1;
            transform: translate(0px, 0px);
          }
        }

        @keyframes example-2 {
          to {
            opacity: 1;
          }
        }
      `}
    </style>
  </div>
);

export default Sketch;
