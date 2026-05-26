import React from 'react';

interface TechIconProps {
  name: string;
}

export function TechIcon({ name }: TechIconProps) {
  switch (name.toLowerCase()) {
    case 'next.js':
      return (
        <svg viewBox="0 0 180 180" width="24" height="24">
          <mask height="180" id="nextjs_mask" maskUnits="userSpaceOnUse" width="180" x="0" y="0" style={{ maskType: 'alpha' }}>
            <circle cx="90" cy="90" fill="black" r="90" />
          </mask>
          <g mask="url(#nextjs_mask)">
            <circle cx="90" cy="90" data-circle="true" fill="black" r="90" />
            <path d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z" fill="url(#nextjs_paint0)" />
            <rect fill="url(#nextjs_paint1)" height="72" width="12" x="115" y="54" />
          </g>
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="nextjs_paint0" x1="109" x2="144.5" y1="116.5" y2="160.5">
              <stop stopColor="white" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="nextjs_paint1" x1="121" x2="120.799" y1="54" y2="106.875">
              <stop stopColor="white" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      );
    case 'react':
      return (
        <svg viewBox="0 0 100 100" width="24" height="24" fill="none" stroke="#61dafb" strokeWidth="4">
          <ellipse cx="50" cy="50" rx="11" ry="42" transform="rotate(0 50 50)" />
          <ellipse cx="50" cy="50" rx="11" ry="42" transform="rotate(60 50 50)" />
          <ellipse cx="50" cy="50" rx="11" ry="42" transform="rotate(120 50 50)" />
          <circle cx="50" cy="50" r="5" fill="#61dafb" />
        </svg>
      );
    case 'typescript':
      return (
        <svg viewBox="0 0 128 128" width="24" height="24" fill="#3178c6">
          <path d="M0 0h128v128H0zm103.7 82.5c0-6-2.5-10.4-7.5-13.3-5-2.9-12.7-5.5-22.9-7.8-7.3-1.7-12.5-3.5-15.6-5.4-3.1-1.9-4.7-4.8-4.7-8.6 0-3.9 1.6-7 4.9-9.2s7.9-3.3 13.9-3.3c5.8 0 10.6 1.4 14.3 4.2 3.7 2.8 5.9 6.8 6.5 12h17.9c-.8-9.9-4.9-17.5-12.1-22.9-7.2-5.4-16.7-8.1-28.5-8.1-12.5 0-22.3 3.1-29.3 9.4-7 6.3-10.5 14.5-10.5 24.7 0 6.6 2.3 11.9 7 15.9 4.7 4 12.1 7.2 22.3 9.7 9 2.2 15.3 4.5 18.8 6.9 3.5 2.4 5.3 5.9 5.3 10.5 0 4.6-1.9 8.2-5.6 10.9-3.7 2.7-9 4-15.9 4-7.9 0-14-1.8-18.4-5.3-4.4-3.5-6.9-9.1-7.5-16.8H21.5c.8 12.7 5.7 22.4 14.7 29.1 9 6.7 21.6 10.1 37.8 10.1 13.3 0 23.9-3.3 31.7-10 7.8-6.7 11.7-15.6 11.7-26.7zM22.5 22.2H61v16.1H41.8v67.5H22.5z" />
        </svg>
      );
    case 'tailwind':
      return (
        <svg viewBox="0 0 24 24" width="24" height="24" fill="#06b6d4">
          <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" />
        </svg>
      );
    case 'css modules':
      return (
        <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#330099" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
          <line x1="9" y1="3" x2="9" y2="21" />
          <line x1="15" y1="3" x2="15" y2="21" />
          <line x1="3" y1="9" x2="21" y2="9" />
          <line x1="3" y1="15" x2="21" y2="15" />
        </svg>
      );
    case 'framer motion':
      return (
        <svg viewBox="0 0 256 256" width="24" height="24">
          <defs>
            <linearGradient id="framer_gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ff00c8" />
              <stop offset="50%" stopColor="#7f00ff" />
              <stop offset="100%" stopColor="#00f0ff" />
            </linearGradient>
          </defs>
          <path d="M0 0h256v128H128L0 0zm0 128h128l128 128H0V128zm256-128v128H128L256 0z" fill="url(#framer_gradient)" />
        </svg>
      );
    case 'node.js':
      return (
        <svg viewBox="0 0 128 128" width="24" height="24" fill="#339933">
          <path d="M115.8 30.5L67.1 2.4c-2-.9-4.2-.9-6.2 0L12.2 30.5c-2.4 1.4-3.9 4-3.9 6.8v56.2c0 2.8 1.5 5.4 3.9 6.8l48.7 28.1c1 .6 2.1.9 3.1.9s2.1-.3 3.1-.9l48.7-28.1c2.4-1.4 3.9-4 3.9-6.8V37.3c0-2.8-1.5-5.4-3.9-6.8zM64 113.6L22.9 89.9V42.1L64 65.9v47.7zm0-56.1L22.9 33.7 64 10l41.1 23.7L64 57.5zm41.1 32.4L64 113.6V65.9l41.1-23.8v47.8z" />
        </svg>
      );
    case 'express':
      return (
        <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#252525" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
          <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
          <line x1="6" y1="6" x2="6.01" y2="6" />
          <line x1="6" y1="18" x2="6.01" y2="18" />
          <path d="M20 6h-6M20 18h-6" />
        </svg>
      );
    case 'firebase':
      return (
        <svg viewBox="0 0 116 160" width="24" height="24">
          <path d="M19 123.6l1 1.7L59.2 24.3c1-2.4 4.5-2.4 5.5 0L76 51.5l-57 72.1z" fill="#ffca28" />
          <path d="M99.2 122.9L86 16c-.9-3-4.9-3.7-6.8-1.2L16.2 121c-2 2.6-.7 6.6 2.7 7.4L95.5 142c3.4.9 6.2-2.3 3.7-5.1z" fill="#ffa000" />
        </svg>
      );
    case 'supabase':
      return (
        <svg viewBox="0 0 24 24" width="24" height="24" fill="#3ecf8e">
          <path d="M21.362 10.988l-9 11.5a1 1 0 0 1-1.68-.33l-2.5-8.5H3.638a1 1 0 0 1-.784-1.62l9-11.5a1 1 0 0 1 1.68.33l2.5 8.5h4.538a1 1 0 0 1 .784 1.62z" />
        </svg>
      );
    case 'mongodb':
      return (
        <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#47a248" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2C8.5 6 6 10 6 14c0 3.3 2.7 6 6 6s6-2.7 6-6c0-4-2.5-8-6-12z" />
          <path d="M12 2v18" />
        </svg>
      );
    case 'shopify':
      return (
        <svg viewBox="0 0 24 24" width="24" height="24" fill="#96bf48">
          <path d="M19.574 5.378a.956.956 0 0 0-.742-.376H14.82L13.882 1.9c-.176-.563-.7-.9-1.282-.9H5.4c-.58 0-1.106.337-1.282.9L.152 14.536a.952.952 0 0 0 .907 1.233h2.387v5.772c0 .914.743 1.659 1.658 1.659h13.79c.915 0 1.658-.745 1.658-1.659v-5.772h2.388a.956.956 0 0 0 .906-1.233L19.574 5.378zm-6.956-2.738h2.766l.722 2.362h-4.21L12.618 2.64zM5.042 20.641V15.77h3.816v4.871H5.042z" />
        </svg>
      );
    case 'wordpress':
      return (
        <svg viewBox="0 0 24 24" width="24" height="24" fill="#21759b">
          <path d="M12.158 12.786l-2.698-7.84h-.142c-.426 0-.852.057-.852.057-.227.028-.255-.312-.028-.34 0 0 .737-.057 1.616-.057.426 0 1.022.029 1.646.057.227.028.199.369-.028.34 0 0-.426-.057-.852-.057h-.142l1.96 5.679 1.675-4.884c-.284-.029-.568-.029-.852-.029-.426 0-.852.057-.852.057-.228.028-.256-.312-.029-.34 0 0 .739-.057 1.62-.057.85 0 1.76.057 2.726.057.227.028.199.369-.029.34 0 0-.426-.057-.823-.057l-1.647 4.799 1.931 5.623c.511-1.363.767-2.613.767-3.635 0-.852-.142-1.533-.397-2.13h-.029zM12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22.378c-1.846 0-3.55-.512-5.027-1.392l3.92-11.331c.256-.738.455-1.25.455-1.704 0-.568-.284-.966-.824-.966h-.028c.767-.227 1.704-.369 2.726-.369.937 0 1.761.114 2.414.312-.568.029-.852.426-.852.966 0 .397.199.937.426 1.533l2.272 6.899A10.315 10.315 0 0 1 12 22.378z" />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10" />
          <path d="M8 12h8" />
        </svg>
      );
  }
}
