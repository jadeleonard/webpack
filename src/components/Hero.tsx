import React from 'react'
import { Carousel, CarouselContent, CarouselItem } from './ui/carousel'
import Image from 'next/image'
import Link from 'next/link';






const navbar2 = [
  { name: "Today's Deal", url: "/todaysdeal" },
  { name: "Customer Service", url: "/customerservice" },
  { name: "Registry", url: "/registry" },
  { name: "Gift Cards", url: "/giftcards" },
];
const Hero = () => {
  return (
    <div className=''>
         <div className="flex items-center justify-between bg-slate-950 p-3 sticky top-0">
          <ul className="hidden sm:inline-flex gap-6 text-zinc-100 text-sm">
            {navbar2.map((item, index) => (
              <li key={index}>
                <Link href={item.url}>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

    
    </div>
  )
}

export default Hero
