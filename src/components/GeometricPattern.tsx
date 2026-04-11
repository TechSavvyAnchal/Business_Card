import React from "react";

export const GeometricPattern = () => (
  <svg
    width="100%"
    height="100%"
    viewBox="0 0 100 100"
    preserveAspectRatio="none"
    xmlns="http://www.w3.org/2000/svg"
    className="opacity-[0.4] text-indigo-400/30"
  >
    <path d="M0 0 L50 20 L100 0 V100 L50 80 L0 100 Z" fill="currentColor" />
    <path d="M0 30 L30 50 L0 70 Z" fill="currentColor" />
    <path d="M100 20 L70 40 L100 60 Z" fill="currentColor" />
    <path d="M50 0 L20 50 L50 100 L80 50 Z" fill="none" stroke="currentColor" strokeWidth="0.1" />
    <path d="M0 0 L100 100 M100 0 L0 100" stroke="currentColor" strokeWidth="0.05" />
    <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="0.05" strokeDasharray="1 2" />
  </svg>
);

export const LowPolyHeader = () => (
  <div className="absolute inset-0 z-0 opacity-10">
    <svg width="100%" height="100%" viewBox="0 0 1000 300" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,0 L400,0 L300,150 L0,200 Z" fill="currentColor" />
      <path d="M1000,0 L600,0 L700,180 L1000,120 Z" fill="currentColor" />
      <path d="M200,0 L500,100 L800,0 Z" fill="currentColor" opacity="0.5" />
      <path d="M0,300 L300,250 L500,300 L800,220 L1000,300 Z" fill="currentColor" opacity="0.3" />
    </svg>
  </div>
);
