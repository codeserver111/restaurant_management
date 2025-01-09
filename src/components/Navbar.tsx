'use client'
import { FloatingNav } from './ui/floating-navbar';
import { Home, UtensilsCrossed, CalendarDays, Phone, Info, Wine } from 'lucide-react';

const navItems = [
  { 
    name: 'Home', 
    link: '/',
    icon: <Home className="h-4 w-4" />
  },
  { 
    name: 'Menu', 
    link: '/menu',
    icon: <UtensilsCrossed className="h-4 w-4" />
  },
  { 
    name: 'Events', 
    link: '/events',
    icon: <CalendarDays className="h-4 w-4" />
  },
  { 
    name: 'About', 
    link: '/about',
    icon: <Info className="h-4 w-4" />
  },
  { 
    name: 'Contact', 
    link: '/contact',
    icon: <Phone className="h-4 w-4" />
  }
];

export default function Navbar() {
  return (
    <div className='fixed top-0 left-0 right-0 z-50'>
      <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 via-red-500/20 to-purple-500/20 blur-[75px]" />
      <FloatingNav 
      navItems={navItems} 
      className="backdrop-blur-md bg-black/50 border-white/[0.1] shadow-lg" 
      />
    </div>
  );
}
