import React from 'react';

const BreathingAnimation = () => {
  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 1200 800" 
        className="w-full h-auto"
        preserveAspectRatio="xMidYMid meet"
      >
        {/* Sage background */}
        <rect width="1200" height="800" fill="#2a3831"/>
        
        {/* Circular water flow with varying intensity */}
        <path 
          d="M 600 400 m -200,0 a 200,200 0 1,0 400,0 a 200,200 0 1,0 -400,0" 
          fill="none" 
          stroke="#a3d4e5" 
          strokeWidth="2"
        >
          <animate 
            attributeName="opacity" 
            values="0.2;0.5;0.2" 
            dur="12s" 
            repeatCount="indefinite"
          />
          <animate 
            attributeName="stroke-dasharray" 
            values="0,1000;1000,1000;0,1000" 
            dur="12s" 
            repeatCount="indefinite"
          />
        </path>

        {/* Expanding peach radiations */}
        <g id="peach-radiation">
          <circle cx="600" cy="400" r="10" fill="none" stroke="#ffb599">
            <animate 
              attributeName="r" 
              values="10;300;10" 
              dur="12s" 
              repeatCount="indefinite"
            />
            <animate 
              attributeName="opacity" 
              values="0;0.6;0" 
              dur="12s" 
              repeatCount="indefinite"
            />
          </circle>
          <circle cx="600" cy="400" r="10" fill="none" stroke="#ffd4c4">
            <animate 
              attributeName="r" 
              values="10;250;10" 
              dur="12s" 
              repeatCount="indefinite"
            />
            <animate 
              attributeName="opacity" 
              values="0;0.7;0" 
              dur="12s" 
              repeatCount="indefinite"
            />
          </circle>
        </g>

        {/* Enhanced peachy splashes */}
        <g id="splashes">
          <path 
            d="M 600 400 Q 800 300 900 400 T 1100 400" 
            fill="none" 
            stroke="#ff9977" 
            strokeWidth="2"
          >
            <animate 
              attributeName="opacity" 
              values="0;0.8;0" 
              dur="12s" 
              repeatCount="indefinite"
            />
            <animate 
              attributeName="d" 
              values="M 600 400 Q 800 300 900 400 T 1100 400;
                      M 600 400 Q 800 250 900 400 T 1100 400;
                      M 600 400 Q 800 300 900 400 T 1100 400" 
              dur="12s" 
              repeatCount="indefinite"
            />
          </path>
          <path 
            d="M 600 400 Q 400 500 300 400 T 100 400" 
            fill="none" 
            stroke="#ffb599" 
            strokeWidth="2"
          >
            <animate 
              attributeName="opacity" 
              values="0;0.8;0" 
              dur="12s" 
              repeatCount="indefinite"
            />
            <animate 
              attributeName="d" 
              values="M 600 400 Q 400 500 300 400 T 100 400;
                      M 600 400 Q 400 550 300 400 T 100 400;
                      M 600 400 Q 400 500 300 400 T 100 400" 
              dur="12s" 
              repeatCount="indefinite"
            />
          </path>
        </g>

        {/* Rotating central wheel */}
        <g id="wheel">
          <path 
            d="M 600 340 L 660 400 L 600 460 L 540 400 Z" 
            fill="none" 
            stroke="#d4e6d9" 
            strokeWidth="1.5"
          >
            <animate 
              attributeName="stroke-opacity" 
              values="0.5;1;0.5" 
              dur="12s" 
              repeatCount="indefinite"
            />
            <animateTransform 
              attributeName="transform"
              type="rotate"
              from="0 600 400"
              to="360 600 400"
              dur="12s"
              repeatCount="indefinite"
            />
          </path>
          <path 
            d="M 600 320 L 600 480 M 520 400 L 680 400" 
            stroke="#d4e6d9" 
            strokeWidth="1.5"
          >
            <animate 
              attributeName="stroke-opacity" 
              values="0.5;1;0.5" 
              dur="12s" 
              repeatCount="indefinite"
            />
            <animateTransform 
              attributeName="transform"
              type="rotate"
              from="0 600 400"
              to="360 600 400"
              dur="12s"
              repeatCount="indefinite"
            />
          </path>
        </g>

        {/* Central pulsing star */}
        <circle 
          cx="600" 
          cy="400" 
          r="2" 
          fill="#ffffff"
          opacity="0.8"
        >
          <animate 
            attributeName="r" 
            values="1;3;1" 
            dur="12s" 
            repeatCount="indefinite"
          />
          <animate 
            attributeName="opacity" 
            values="0.4;1;0.4" 
            dur="12s" 
            repeatCount="indefinite"
          />
        </circle>

        {/* Water droplets */}
        <g id="droplets">
          <circle cx="800" cy="400" r="4" fill="#a3d4e5">
            <animate 
              attributeName="opacity" 
              values="0.2;0.9;0.2" 
              dur="12s" 
              repeatCount="indefinite"
            />
            <animateTransform 
              attributeName="transform"
              type="rotate"
              from="0 600 400"
              to="360 600 400"
              dur="12s"
              repeatCount="indefinite"
            />
          </circle>
          <circle cx="600" cy="200" r="4" fill="#88c5e6">
            <animate 
              attributeName="opacity" 
              values="0.2;0.9;0.2" 
              dur="12s" 
              repeatCount="indefinite"
            />
            <animateTransform 
              attributeName="transform"
              type="rotate"
              from="120 600 400"
              to="480 600 400"
              dur="12s"
              repeatCount="indefinite"
            />
          </circle>
        </g>
      </svg>
    </div>
  );
};

export default BreathingAnimation;
