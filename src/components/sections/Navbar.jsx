import React, { useState } from 'react';
import { Dice1, Menu, X } from 'lucide-react';
import PillNav from '../gsap/PillNav';
import logo from '../../img/logo.png';

export default function Navbar() {

  // const [open, setOpen] = useState(false);

  return (
    <nav className='flex justify-center'>
      <PillNav
        logo={logo}
        logoAlt="Company Logo"
        items={[
          { label: 'Home', href: '#inicio' },
          { label: 'About', href: '#aboutme' },
          { label: 'Skills', href: '#skills' },
          { label: 'Projects', href: '#projects' },
          { label: 'Contact', href: '#contact' }
        ]}
        activeHref="#inicio"
        className="custom-nav"
        ease="power2.easeOut"
        baseColor="var(--primary)"
        pillColor="#ffffffff"
        hoveredPillTextColor="#ffffff"
        pillTextColor="#000000"
      />
    </nav>
  )
}

