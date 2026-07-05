// components/sections/DigitalFootprintHeroSection.tsx
'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

export const DigitalFootprintHeroSection: React.FC = () => {
  const [currentView, setCurrentView] = useState<'text' | 'images'>('text');

  useEffect(() => {
    // Function to toggle between views
    const toggleView = () => {
      setCurrentView(prev => (prev === 'images' ? 'text' : 'images'));
    };

    // Initial delay before first transition
    const initialTimer = setTimeout(() => {
      toggleView();
    }, 6000);

    // Set up interval for continuous loop (every 6 seconds total - 3s each view)
    const interval = setInterval(() => {
      toggleView();
    }, 12000);

    return () => {
      clearTimeout(initialTimer);
      clearInterval(interval);
    };
  }, []);

  return (
    <section className="bg-[#1B1B1B] min-h-screen flex items-center justify-center py-20 px-6 overflow-hidden relative">
      <div className="max-w-7xl mx-auto w-full">
        {/* First View - Centered Text */}
        <div 
          className={`absolute inset-0 flex items-center justify-center px-6 transition-all duration-[1500ms] ease-in-out ${
            currentView === 'text' ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        >
          <div className="text-center max-w-5xl">
            <p className="text-white/90 text-lg md:text-xl lg:text-2xl leading-relaxed mb-6">
              I've always believed that sharing knowledge should feel simple, real, and relatable. That's why I create content around tech, software engineering, and lifestyle in a way that feels like you're learning from a friend, not a textbook.
            </p>
            <p className="text-white/80 text-base md:text-lg lg:text-xl leading-relaxed">
              Through videos, posts, and conversations, I break down complex topics into easy-to-digest pieces that people can understand, apply, and enjoy. Over time, this has helped me build an engaged community of learners, builders, and everyday people who just love to see how tech connects with daily life.
            </p>
          </div>
        </div>

        {/* Second View - Images with Title in Center */}
        <div 
          className={`transition-all duration-[1500ms] ease-in-out  ${
            currentView === 'images' ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="relative max-w-6xl mx-auto h-[600px] md:h-[700px] lg:h-[800px]">
            {/* Left Image - Bottom Left Position */}
            <div 
              className={`absolute left-0 bottom-0 w-56 md:w-72 lg:w-80 xl:w-96 aspect-[3/4] transform -rotate-6 hover:rotate-0 transition-all duration-500 ${
                currentView === 'images' ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
              }`}
              style={{
                transitionDelay: currentView === 'images' ? '200ms' : '0ms',
              }}
            >
              <div className="w-full h-full">
                <Image
                  src="/images/erin-one.png"
                  alt="Content creator lifestyle"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 224px, (max-width: 1024px) 288px, (max-width: 1280px) 320px, 384px"
                />
              </div>
            </div>

            {/* Center Title */}
            <div 
              className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center z-10 transition-all duration-1000 ${
                currentView === 'images' ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
              }`}
              style={{
                transitionDelay: currentView === 'images' ? '600ms' : '0ms',
              }}
            >
              <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-[#E8B67E] tracking-wider whitespace-nowrap">
                DIGITAL
                <br />
                FOOTPRINT
              </h1>
            </div>

            {/* Right Image - Top Right Position */}
            <div 
              className={`absolute right-0 top-0 w-56 md:w-72 lg:w-80 xl:w-96 aspect-[3/4] transform rotate-6 hover:rotate-0 transition-all duration-500 ${
                currentView === 'images' ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
              }`}
              style={{
                transitionDelay: currentView === 'images' ? '400ms' : '0ms',
              }}
            >
              <div className="w-full h-full">
                <Image
                  src="/images/erin-two.png"
                  alt="Digital content creation"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 224px, (max-width: 1024px) 288px, (max-width: 1280px) 320px, 384px"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// 'use client';

// import React, { useState, useEffect } from 'react';
// import Image from 'next/image';

// export const DigitalFootprintHeroSection: React.FC = () => {
//   const [currentView, setCurrentView] = useState<'images' | 'text'>('images');

//   useEffect(() => {
//     const toggleView = () => {
//       setCurrentView(prev => (prev === 'images' ? 'text' : 'images'));
//     };

//     const initialTimer = setTimeout(() => {
//       toggleView();
//     }, 6000); // Show images first for 6s

//     const interval = setInterval(() => {
//       toggleView();
//     }, 12000); // Full loop = 12s (6s each view)

//     return () => {
//       clearTimeout(initialTimer);
//       clearInterval(interval);
//     };
//   }, []);

//   return (
//     <section className="bg-[#1B1B1B] min-h-screen flex items-center justify-center py-20 px-6 overflow-hidden relative">
//       <div className="max-w-7xl mx-auto w-full relative">
//         {/* IMAGES + TITLE VIEW */}
//         <div
//           className={`transition-all duration-[1500ms] ease-in-out ${
//             currentView === 'images'
//               ? 'opacity-100 translate-y-0'
//               : 'opacity-0 translate-y-10 pointer-events-none'
//           } absolute inset-0 flex items-center justify-center`}
//         >
//           <div className="relative max-w-6xl mx-auto h-[600px] md:h-[700px] lg:h-[800px]">
//             {/* Left Image */}
//             <div
//               className={`absolute left-0 bottom-0 w-56 md:w-72 lg:w-80 xl:w-96 aspect-[3/4] transform -rotate-6 hover:rotate-0 transition-all duration-700 ${
//                 currentView === 'images'
//                   ? 'translate-x-0 opacity-100'
//                   : '-translate-x-full opacity-0'
//               }`}
//               style={{
//                 transitionDelay: currentView === 'images' ? '200ms' : '0ms',
//               }}
//             >
//               <Image
//                 src="/images/erin-one.png"
//                 alt="Content creator lifestyle"
//                 fill
//                 className="object-cover"
//                 priority
//                 sizes="(max-width: 768px) 224px, (max-width: 1024px) 288px, (max-width: 1280px) 320px, 384px"
//               />
//             </div>

//             {/* Center Title */}
//             <div
//               className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center z-10 transition-all duration-[1200ms] ${
//                 currentView === 'images'
//                   ? 'opacity-100 scale-100'
//                   : 'opacity-0 scale-90'
//               }`}
//               style={{
//                 transitionDelay: currentView === 'images' ? '600ms' : '0ms',
//               }}
//             >
//               <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-[#E8B67E] tracking-wider whitespace-nowrap">
//                 DIGITAL
//                 <br />
//                 FOOTPRINT
//               </h1>
//             </div>

//             {/* Right Image */}
//             <div
//               className={`absolute right-0 top-0 w-56 md:w-72 lg:w-80 xl:w-96 aspect-[3/4] transform rotate-6 hover:rotate-0 transition-all duration-700 ${
//                 currentView === 'images'
//                   ? 'translate-x-0 opacity-100'
//                   : 'translate-x-full opacity-0'
//               }`}
//               style={{
//                 transitionDelay: currentView === 'images' ? '400ms' : '0ms',
//               }}
//             >
//               <Image
//                 src="/images/erin-two.png"
//                 alt="Digital content creation"
//                 fill
//                 className="object-cover"
//                 priority
//                 sizes="(max-width: 768px) 224px, (max-width: 1024px) 288px, (max-width: 1280px) 320px, 384px"

//               />
//             </div>
//           </div>
//         </div>

//         {/* TEXT VIEW */}
//         <div
//           className={`absolute inset-0 flex items-center justify-center px-6 transition-all duration-[1500ms] ease-in-out ${
//             currentView === 'text'
//               ? 'opacity-100 translate-y-0'
//               : 'opacity-0 translate-y-10 pointer-events-none'
//           }`}
//         >
//           <div className="text-center max-w-5xl">
//             <p className="text-white/90 text-lg md:text-xl lg:text-2xl leading-relaxed mb-6">
//               I've always believed that sharing knowledge should feel simple,
//               real, and relatable. That's why I create content around tech,
//               software engineering, and lifestyle in a way that feels like
//               you're learning from a friend, not a textbook.
//             </p>
//             <p className="text-white/80 text-base md:text-lg lg:text-xl leading-relaxed">
//               Through videos, posts, and conversations, I break down complex
//               topics into easy-to-digest pieces that people can understand,
//               apply, and enjoy. Over time, this has helped me build an engaged
//               community of learners, builders, and everyday people who just love
//               to see how tech connects with daily life.
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };