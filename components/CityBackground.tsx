import React from 'react';

const CityBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none select-none bg-[#0D0D12]">
      {/* Sky Gradients & Atmosphere */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#13131F] to-[#0D0D12]" />
      <div className="absolute top-[-20%] right-[-10%] w-[80vw] h-[80vw] bg-primary/5 blur-[120px] rounded-full mix-blend-screen animate-pulse-slow" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[60vw] h-[60vw] bg-indigo-900/10 blur-[100px] rounded-full mix-blend-screen" />
      
      {/* Stars */}
      <div className="absolute inset-0 opacity-30" style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, white 1px, transparent 1px)', backgroundSize: '50px 50px' }}></div>

      {/* Vector Illustration */}
      <svg
        className="absolute bottom-0 left-0 w-full h-[85vh] min-h-[500px] object-cover object-bottom"
        viewBox="0 0 1440 800"
        preserveAspectRatio="xMidYMax slice"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="window-warm" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#FCD34D" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#FCD34D" stopOpacity="0.1" />
          </linearGradient>
          <linearGradient id="window-cool" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#A881FF" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#A881FF" stopOpacity="0.1" />
          </linearGradient>
          <linearGradient id="bldg-far" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#15151E" />
            <stop offset="100%" stopColor="#0D0D12" />
          </linearGradient>
          <linearGradient id="bldg-mid" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#1A1A24" />
            <stop offset="100%" stopColor="#0E0E14" />
          </linearGradient>
          <filter id="glow-lamp">
            <feGaussianBlur stdDeviation="6" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {/* --- Layer 1: Distant City Skyline (Far Background) --- */}
        <path d="M0 800 V500 L100 480 L200 520 L300 450 L450 500 L600 420 L800 480 L1000 400 L1200 450 L1440 400 V800 H0Z" fill="#111116" opacity="0.6" />
        
        {/* --- Layer 2: Mid-Ground Buildings (Hostel Blocks) --- */}
        
        {/* Left Hostel Block */}
        <path d="M-100 800 V350 L150 330 L350 350 V800 H-100Z" fill="url(#bldg-far)" />
        {/* Rooftop elements */}
        <rect x="20" y="310" width="30" height="20" fill="#1A1A22" />
        <line x1="35" y1="310" x2="35" y2="280" stroke="#2D2D3A" strokeWidth="2" /> {/* Antenna */}
        
        {/* Windows Left Block */}
        <g opacity="0.7">
            <rect x="50" y="400" width="40" height="60" rx="2" fill="#1F1F2A" />
            <rect x="120" y="400" width="40" height="60" rx="2" fill="url(#window-cool)" />
            <rect x="190" y="400" width="40" height="60" rx="2" fill="#1F1F2A" />
            
            <rect x="50" y="500" width="40" height="60" rx="2" fill="url(#window-warm)" />
            <rect x="120" y="500" width="40" height="60" rx="2" fill="#1F1F2A" />
            <rect x="190" y="500" width="40" height="60" rx="2" fill="#1F1F2A" />
        </g>

        {/* Right Hostel Block */}
        <path d="M1000 800 V300 H1300 V350 H1500 V800 H1000Z" fill="url(#bldg-mid)" />
        {/* Water Tank */}
        <rect x="1050" y="260" width="60" height="40" rx="4" fill="#1F1F2A" />
        <path d="M1060 260 V300 M1080 260 V300 M1100 260 V300" stroke="#2D2D3A" />
        {/* Windows Right Block */}
        <g opacity="0.8">
            <rect x="1050" y="380" width="50" height="70" fill="#252530" />
            <rect x="1150" y="380" width="50" height="70" fill="url(#window-cool)" />
            
            <rect x="1050" y="500" width="50" height="70" fill="url(#window-warm)" />
            <rect x="1150" y="500" width="50" height="70" fill="#252530" />
            
            <rect x="1050" y="620" width="50" height="70" fill="#252530" />
            <rect x="1150" y="620" width="50" height="70" fill="url(#window-cool)" />
        </g>

        {/* --- Layer 3: Street Level Details --- */}
        
        {/* Vending Machine (Right) */}
        <g transform="translate(1250, 650)">
          <rect width="70" height="150" rx="4" fill="#1A1A24" stroke="#2D2D3A" strokeWidth="2" />
          <rect x="10" y="10" width="50" height="90" fill="rgba(168, 129, 255, 0.05)" />
          {/* Glowing Shelves */}
          <rect x="15" y="25" width="40" height="4" rx="2" fill="#A881FF" fillOpacity="0.5" />
          <rect x="15" y="45" width="40" height="4" rx="2" fill="#A881FF" fillOpacity="0.5" />
          <rect x="15" y="65" width="40" height="4" rx="2" fill="#A881FF" fillOpacity="0.5" />
          <rect x="15" y="85" width="40" height="4" rx="2" fill="#A881FF" fillOpacity="0.5" />
          
          <rect x="10" y="110" width="50" height="30" rx="2" fill="#0D0D12" />
          <circle cx="60" cy="135" r="3" fill="#00FF94" filter="url(#glow-lamp)" />
        </g>

        {/* Street Lamp (Left Mid) */}
        <g transform="translate(800, 400)">
           <path d="M0 400 V0" stroke="#252530" strokeWidth="6" />
           <path d="M-30 30 H30" stroke="#252530" strokeWidth="4" />
           <path d="M0 0 Q50 0 80 50" stroke="#252530" strokeWidth="5" fill="none" />
           <circle cx="80" cy="55" r="10" fill="#FCD34D" filter="url(#glow-lamp)" opacity="0.9"/>
           {/* Light Cone */}
           <path d="M80 55 L-20 400 H180 L80 55" fill="url(#window-warm)" opacity="0.1" />
        </g>

        {/* Balcony Railings (Left Building) */}
        <path d="M40 460 H240" stroke="#373745" strokeWidth="3" opacity="0.8" />
        <path d="M50 460 V480 M120 460 V480 M190 460 V480" stroke="#373745" strokeWidth="2" opacity="0.8"/>

        <path d="M40 560 H240" stroke="#373745" strokeWidth="3" opacity="0.8" />
        <path d="M50 560 V580 M120 560 V580 M190 560 V580" stroke="#373745" strokeWidth="2" opacity="0.8" />

        {/* --- Layer 4: Foreground --- */}
        {/* Tree Silhouette Left */}
        <path d="M-50 800 Q0 650 -20 550 Q30 500 80 580 Q100 520 150 600 Q120 700 80 800" fill="#08080C" opacity="0.9" />
        
        {/* Tree Silhouette Right */}
        <path d="M1490 800 Q1440 650 1460 550 Q1410 500 1360 580 Q1340 520 1290 600 Q1320 700 1360 800" fill="#08080C" opacity="0.9" />

        {/* Ground */}
        <rect x="0" y="780" width="1440" height="20" fill="#0D0D12" />
      </svg>
      
      {/* Bottom Fade to match website footer/scroll */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#0D0D12] via-[#0D0D12]/90 to-transparent" />
    </div>
  );
};

export default CityBackground;