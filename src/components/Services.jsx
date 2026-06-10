import React from 'react';
import { Quote } from 'lucide-react';
import person1 from "../assets/images/person1.png";
import person2 from "../assets/images/person2.png";
import person3 from "../assets/images/person3.png";
import person4 from "../assets/images/person4.png";
import person5 from "../assets/images/person5.png";
import person6 from "../assets/images/person6.png";
import person7 from "../assets/images/person7.png";
import person8 from "../assets/images/person8.png";
import person9 from "../assets/images/person9.png";

const avatarsData = [
  { id: 1, src: person1, alt: 'Man with glasses on the left', size: 'w-[140px] h-[140px]', className: 'top-[50%] left-[10%]' },
  { id: 2, src: person2, alt: 'A young man look confident', size: 'w-[80px] h-[80px]', className: 'top-[10%] left-[8%]' },
  { id: 3, src: person3, alt: 'Man in purple shirt', size: 'w-[100px] h-[100px]', className: 'top-[30%] left-[5%]' },
  { id: 4, src: person4, alt: 'Man smiling in a red shirt', size: 'w-[160px] h-[160px]', className: 'bottom-[5%] right-[5%]' },
  { id: 5, src: person5, alt: 'A bearded man in a red top', size: 'w-[110px] h-[110px]', className: 'top-[15%] right-[10%]' },
  { id: 6, src: person6, alt: 'Man looking to the side', size: 'w-[85px] h-[85px]', className: 'top-[35%] right-[20%]' },
  { id: 7, src: person7, alt: 'Man looking at camera on the right', size: 'w-[100px] h-[100px]', className: 'top-[60%] right-[15%]' },
  { id: 8, src: person8, alt: 'Man at the bottom left', size: 'w-[80px] h-[80px]', className: 'bottom-[15%] left-[5%]' },
];

const TestimonialSection = () => {
  return (
    <div className="relative w-full h-screen bg-white font-sans flex items-center justify-center p-4">
      {/* Central Content */}
      <div className="relative flex flex-col items-center justify-center text-center max-w-4xl z-10 space-y-12">
        
        {/* Heading */}
        <h2 className="text-5xl md:text-6xl font-light tracking-tight text-neutral-800 flex flex-col sm:flex-row sm:items-baseline sm:justify-center">
          <span className="bg-green-50 px-3 py-1 rounded-full text-neutral-900 mr-2 sm:mr-3 inline-flex items-center">
            What
          </span>
          <span className="relative">
            our customer says
          </span>
          <span className="sm:ml-3">About Us</span>
          {/* Underline SVG */}
          <div className="absolute -bottom-3 left-[calc(50%+30px)] sm:left-[calc(50%+70px)] md:left-[calc(50%+110px)] transform -translate-x-1/2 w-[220px] h-3 ml-20 hidden md:block">
            <svg width="220" height="15" viewBox="0 0 220 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 10C35 5 70 8 100 10C130 12 165 10 200 8C215 7.5 210 5.5 200 6" stroke="#FF6B6B" stroke-width="2.5" stroke-linecap="round"/>
            </svg>
          </div>
        </h2>

        {/* Testimonial Card */}
        <div className="relative bg-neutral-50 p-10 md:p-14 rounded-3xl border border-neutral-100 max-w-2xl text-center space-y-6">
          <Quote className="text-neutral-300 transform scale-x-[-1] absolute -top-5 -left-5" size={40} strokeWidth={1} />
          <p className="text-lg md:text-xl text-neutral-600 leading-relaxed text-center px-4 font-light">
            Elementum delivered the site with in the timeline as they requested. In the end, the client found a 50% increase in traffic with in days since its launch. They also had an impressive ability to use technologies that the company hasnt used, which have also proved to be easy to use and reliable.
          </p>
          <Quote className="text-neutral-300 absolute -bottom-5 -right-5" size={40} strokeWidth={1} />
        </div>
      </div>

      {/* Floating Avatars */}
      {avatarsData.map((avatar, index) => (
        <div
          key={avatar.id}
          className={`absolute ${avatar.size} ${avatar.className} rounded-full overflow-hidden border-2 border-white shadow-xl ${index % 2 === 0 ? 'scale-90' : 'scale-110'}`}
        >
          <img
            src={avatar.src}
            alt={avatar.alt}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
    </div>
  );
};

export default TestimonialSection;