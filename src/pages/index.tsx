"use client";

import { useState } from 'react';
import Image from 'next/image';
import ShimmerButton from '@/components/magicui/shimmer-button';
import { Input } from '@/components/ui/input';

export default function Home() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted with email:', email);

    try {
      const response = await fetch('/api/join-waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setMessage("Thanks! We'll keep you updated.");
        setEmail('');
      } else {
        const { error } = await response.json();
        setMessage(error || 'Failed to join the waitlist. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      setMessage('An error occurred. Please try again.');
    }
  };

  return (
    <div className="flex flex-col items-center justify-between min-h-screen p-8">
      {/* Top center: App name and tagline */}
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold mb-2">Comet</h1>
        <p className="text-5xl md:text-5xl lg:text-7xl mb-4">It's written in the stars✨</p>
      </div>

      {/* Main content: Description and app mockup */}
      <div className="flex flex-col md:flex-row items-center justify-between w-full md:px-16 px-8">
        {/* Left side: Title and description */}
        <div className="w-full md:w-1/2 text-center md:text-left mb-8 md:mb-0">
        <p className="text-base md:text-lg lg:text-xl mb-4">
          Discover yourself, find out how your friends are feeling and match with someone special in insti every week.
        </p>
          <form
            onSubmit={handleSubmit}
            className="flex justify-center md:justify-start items-center space-x-2"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full max-w-xs p-2 border border-gray-300 focus:outline-none text-black"
              required
            />
            <ShimmerButton
              className="h-full p-2 bg-blue-500 text-white hover:bg-blue-600 shadow-2xl"
              borderRadius="5px"
            >
              <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                Join Waitlist
              </span>
            </ShimmerButton>
          </form>

          {message && <p className="mt-4 text-green-500">{message}</p>}
        </div>
        {/* Right side: App mockup image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <Image
            src="/hmm.png"
            alt="App mockup"
            width={300}
            height={600}
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
}
