'use client'
import Link from 'next/link';
import Logo from './logo';
import MobileMenu from './mobile-menu';
import React, { useState, useEffect } from 'react';
export default function Header() {
  const [top, setTop] = useState<boolean>(true);
  const [showPricingCard, setShowPricingCard] = useState<boolean>(false);

  const scrollHandler = () => {
    window.pageYOffset > 10 ? setTop(false) : setTop(true);
  };

  const togglePricingCard = () => {
    setShowPricingCard(!showPricingCard);
  };

  useEffect(() => {
    scrollHandler();
    window.addEventListener('scroll', scrollHandler);
    return () => window.removeEventListener('scroll', scrollHandler);
  }, [top]);

  return (
    <header className={`fixed w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out ${!top ? 'bg-white backdrop-blur-sm shadow-lg' : ''}`}>
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className={`shrink-0 mr-4 transition-transform ${!top ? 'transform translate-x-1/2' : ''}`}>
            <Logo />
          </div>
          <span className="text-lg font-large text-black">BizLabs</span>
          <nav className="hidden md:flex md:grow">
            <ul className="flex grow justify-end flex-wrap items-center">
              <li>
                <a
                  href="#"
                  className="px-4 py-2 text-gray-600 hover:text-gray-900"
                  onClick={(e) => {
                    e.preventDefault();
                    togglePricingCard();
                  }}
                >
                  Pricing
                </a>
              </li>
              <li>
                <Link href="/about" className="px-4 py-2 text-gray-600 hover:text-gray-900">
                  About
                </Link>
              </li>
              <li>
                <button
                  className="rounded bg-black text-white py-2 px-4 hover:bg-black-900"
                  type="button"
                >
                  Get Started
                </button>
              </li>
            </ul>
          </nav>
          <MobileMenu />
        </div>
      </div>
      {showPricingCard && (
  <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-90 z-40">
    <div className="bg-white p-8 rounded-lg shadow-lg">
      {/* Pricing card content */}
      <h2 className="text-2xl font-semibold">Pricing</h2>
      <p>Choose the perfect plan for your needs.</p>

      {/* Pricing details */}
      <div className="mt-4">
        <h3 className="text-xl font-semibold">SheetIQ Pro</h3>
        <p className="text-gray-600">
          Full access to the platform including benefits:
        </p>
        <ul className="list-disc list-inside text-gray-600">
          <li>Unlimited Chats</li>
          <li>File Size Limit: 200 MB</li>
          {/* Add more features or details here */}
        </ul>
      </div>

      {/* Close button */}
      <button
        className="mt-4 rounded bg-black text-white py-2 px-4 hover:bg-black-900"
        onClick={() => togglePricingCard()}
      >
        Close
      </button>
          </div>
        </div>
      )}
    </header>
  );
}
