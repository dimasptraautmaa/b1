import React, { Component } from "react";

export default class BirthdayCake extends Component {
  render() {
    return (
      <svg
        viewBox="0 0 400 300"
        width="400"
        height="300"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-labelledby="title desc"
      >
        <title id="title">Animasi Kue Ulang Tahun</title>
        <desc id="desc">
          Kue ulang tahun dengan lilin menyala, asap tipis, serta konfeti
          bergerak.
        </desc>

        <defs>
          <radialGradient id="flameGrad" cx="50%" cy="40%" r="60%">
            <stop offset="0%" stopColor="#fff7ad" />
            <stop offset="50%" stopColor="#ffd166" />
            <stop offset="100%" stopColor="#f7971e" />
          </radialGradient>

          <linearGradient id="textGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ff8fab" />
            <stop offset="50%" stopColor="#ffd6a5" />
            <stop offset="100%" stopColor="#b9fbc0" />
            <animate
              attributeName="x1"
              values="0%;100%;0%"
              dur="4s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="x2"
              values="100%;0%;100%"
              dur="4s"
              repeatCount="indefinite"
            />
          </linearGradient>

          <clipPath id="cakeClip">
            <rect x="70" y="110" rx="14" ry="14" width="260" height="80" />
          </clipPath>
        </defs>

        <style>{`
          @keyframes fall {
            0% { transform: translateY(-40px) rotate(0deg); opacity: 0; }
            10% { opacity: 1; }
            100% { transform: translateY(340px) rotate(360deg); opacity: 0; }
          }
          .confetti > circle, .confetti > rect {
            animation: fall 4.5s linear infinite;
          }

          @keyframes flicker {
            0%, 100% { transform: scale(1) translateY(0); opacity: 0.95; }
            50% { transform: scale(1.12) translateY(-1px); opacity: 1; }
            70% { transform: scale(0.9) translateY(0.5px); opacity: 0.9; }
          }
          .flame {
            transform-origin: center;
            animation: flicker 0.7s ease-in-out infinite;
          }

          @keyframes smoke {
            0% { transform: translateY(0) scale(0.6); opacity: 0.2; }
            70% { opacity: 0.25; }
            100% { transform: translateY(-35px) scale(1); opacity: 0; }
          }
          .smoke { animation: smoke 2.4s ease-out infinite; }

          @keyframes popIn {
            0% { transform: translateY(10px) scale(0.95); opacity: 0; }
            60% { transform: translateY(0) scale(1.04); opacity: 1; }
            100% { transform: translateY(0) scale(1); opacity: 1; }
          }
          .title { animation: popIn 0.8s ease forwards; }

          @keyframes drip {
            0%, 100% { d: path("M70,110 h260 v18 c-12,10 -24,4 -36,6 -10,2 -18,10 -30,8 -14,-2 -18,-16 -32,-16 -16,0 -22,22 -38,22 -22,0 -28,-28 -50,-28 -14,0 -20,8 -22,10 v-20 z"); }
            50% { d: path("M70,110 h260 v18 c-10,12 -24,8 -36,10 -12,2 -22,8 -32,6 -12,-2 -20,-18 -34,-16 -14,2 -22,24 -40,24 -24,0 -30,-28 -50,-28 -14,0 -20,6 -22,8 v-22 z"); }
          }
          path.glaze { animation: drip 2.8s ease-in-out infinite; }
        `}</style>

        <rect x="0" y="0" width="400" height="300" fill="#0f0f14" />

        <g className="confetti" transform="translate(0,0)">
          <circle cx="30" cy="-10" r="3" />
          <rect x="80" y="-20" width="4" height="4" />
          <circle cx="140" cy="-15" r="2.5" />
          <rect x="200" y="-25" width="3.5" height="3.5" />
          <circle cx="260" cy="-18" r="2.8" />
          <rect x="320" y="-30" width="4" height="4" />
          <circle cx="370" cy="-12" r="3" />
          <g style={{ animationDelay: ".5s" }}>
            <circle cx="55" cy="-10" r="3" />
          </g>
          <g style={{ animationDelay: "1s" }}>
            <rect x="110" y="-20" width="4" height="4" />
          </g>
          <g style={{ animationDelay: "1.5s" }}>
            <circle cx="220" cy="-18" r="2.8" />
          </g>
          <g style={{ animationDelay: "2s" }}>
            <rect x="290" y="-28" width="4" height="4" />
          </g>
        </g>

        <ellipse cx="200" cy="205" rx="120" ry="16" fill="#2a2a35" />

        <rect x="70" y="110" rx="14" ry="14" width="260" height="80" fill="#f4b4c5" />

        <path
          className="glaze"
          fill="#ffe8f0"
          d="M70,110 h260 v18 c-12,10 -24,4 -36,6 -10,2 -18,10 -30,8 -14,-2 -18,-16 -32,-16 -16,0 -22,22 -38,22 -22,0 -28,-28 -50,-28 -14,0 -20,8 -22,10 v-20 z"
        />

        <rect x="70" y="170" width="260" height="10" fill="#ff89a9" opacity="0.6" />

        <g clipPath="url(#cakeClip)" opacity="0.9">
          <rect x="90" y="130" width="5" height="10" fill="#fff" />
          <rect x="120" y="145" width="5" height="10" fill="#ffd166" />
          <rect x="150" y="135" width="5" height="10" fill="#b9fbc0" />
          <rect x="190" y="150" width="5" height="10" fill="#cdb4db" />
          <rect x="230" y="140" width="5" height="10" fill="#fff" />
          <rect x="265" y="150" width="5" height="10" fill="#ffd166" />
          <rect x="300" y="135" width="5" height="10" fill="#b9fbc0" />
        </g>

        <g transform="translate(0,0)">
          <rect x="150" y="80" width="16" height="40" rx="3" fill="#7dd3fc" />
          <rect x="158" y="75" width="2" height="10" fill="#333" />
          <g transform="translate(159,72)">
            <ellipse className="flame" rx="6" ry="9" fill="url(#flameGrad)" />
            <circle
              className="smoke"
              cx="0"
              cy="-6"
              r="4"
              fill="#ffffff"
              opacity="0.15"
              style={{ animationDelay: ".3s" }}
            />
          </g>

          <rect x="192" y="78" width="16" height="42" rx="3" fill="#a78bfa" />
          <rect x="200" y="73" width="2" height="10" fill="#333" />
          <g transform="translate(201,70)">
            <ellipse
              className="flame"
              rx="6"
              ry="9"
              fill="url(#flameGrad)"
              style={{ animationDelay: ".1s" }}
            />
            <circle
              className="smoke"
              cx="0"
              cy="-6"
              r="4"
              fill="#ffffff"
              opacity="0.15"
              style={{ animationDelay: ".6s" }}
            />
          </g>

          <rect x="234" y="82" width="16" height="38" rx="3" fill="#fb7185" />
          <rect x="242" y="77" width="2" height="10" fill="#333" />
          <g transform="translate(243,74)">
            <ellipse
              className="flame"
              rx="6"
              ry="9"
              fill="url(#flameGrad)"
              style={{ animationDelay: ".2s" }}
            />
            <circle
              className="smoke"
              cx="0"
              cy="-6"
              r="4"
              fill="#ffffff"
              opacity="0.15"
              style={{ animationDelay: ".9s" }}
            />
          </g>
        </g>

        <g className="title" transform="translate(0,0)">
          <text
            x="200"
            y="245"
            textAnchor="middle"
            fontFamily="Georgia, 'Times New Roman', serif"
            fontSize="28"
            fill="url(#textGrad)"
            stroke="#ffffff"
            strokeWidth="0.6"
          >
            Happy Birthday!
          </text>
        </g>
      </svg>
    );
  }
}