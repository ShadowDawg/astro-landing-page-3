/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/react-in-jsx-scope */
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import ShimmerButton from "@/components/magicui/shimmer-button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Home() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted with email:", email);

    try {
      const response = await fetch("/api/join-waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setMessage("Thanks! We will keep you updated.");
        setEmail("");
      } else {
        const { error } = await response.json();
        setMessage(error || "Failed to join the waitlist. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      setMessage("An error occurred. Please try again.");
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const sections = document.querySelectorAll('.full-page-section');

      sections.forEach((section, index) => {
        const sectionTop = section.getBoundingClientRect().top + scrollPosition;
        const sectionBottom = sectionTop + windowHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          section.classList.add('active');
        } else {
          section.classList.remove('active');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow flex flex-col">
      {/* First Section */}
<section className="full-page-section flex flex-col items-center justify-between min-h-screen p-4 md:p-8 bg-white">
  <div className="text-center mb-8 md:mb-12">
    <h1 className="text-3xl font-bold mb-2 font-custom">comet.</h1>
    <p className="text-3xl md:text-5xl lg:text-7xl mb-0">
      It&apos;s written in the stars✨
    </p>
  </div>
  
  <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-6xl mx-auto flex-grow">
    <div className="w-full md:w-1/2 text-center md:text-left mb-8 md:mb-0 md:pr-8 flex flex-col justify-center">
      <p className="text-base md:text-lg lg:text-xl mb-4">
        Discover yourself, find out how your friends are feeling and match with someone special every week.
      </p>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col sm:flex-row justify-center md:justify-start items-center space-y-2 sm:space-y-0 sm:space-x-2"
      >
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="w-full sm:w-auto max-w-xs p-2 border border-gray-300 focus:outline-none text-black"
          required
        />
        <ShimmerButton
          className="w-auto px-4 py-2 bg-blue-500 text-white hover:bg-blue-600 shadow-2xl"
          borderRadius="5px"
        >
          <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
            Join Waitlist
          </span>
        </ShimmerButton>
      </form>
      {message && <p className="mt-4 text-green-500">{message}</p>}
      <div className="flex justify-center md:justify-start space-x-4 mt-6">
        <a
          href="https://www.instagram.com/comet.app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            icon={faInstagram}
            size="2x"
            className="text-black hover:text-gray-700 transition-colors duration-200"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/comet-app-934400321/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            icon={faLinkedin}
            size="2x"
            className="text-black hover:text-gray-700 transition-colors duration-200"
          />
        </a>
      </div>
    </div>
    <div className="w-full md:w-1/2 flex justify-center items-center">
      <Image
        src="/hmm.png"
        alt="App mockup"
        width={300}
        height={600}
        className="object-contain"
      />
    </div>
  </div>
</section>

      {/* Second Section */}
<section className="full-page-section flex flex-col md:flex-row items-center justify-center min-h-screen p-4 md:p-8 bg-yellow-200">
  <div className="w-full md:w-1/2 text-center md:text-left mb-8 md:mb-0 md:pr-8">
    <h2 className="text-2xl md:text-3xl lg:text-4xl mb-4 font-bold font-custom">Discover Your Cosmic Connection</h2>
    <p className="text-base md:text-lg lg:text-xl mb-4">
      Comet brings the magic of astrology to your dating life. Our unique algorithm matches you with compatible partners based on your star sign and personality traits.
    </p>
    {/* <ShimmerButton
      className="w-auto px-4 py-2 bg-purple-500 text-white hover:bg-purple-600 shadow-2xl"
      borderRadius="5px"
    >
      <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
        Learn More
      </span>
    </ShimmerButton> */}
  </div>
  <div className="w-full md:w-1/2 flex justify-center items-center">
    <span className="text-9xl md:text-[200px] lg:text-[300px] animate-pulse">
      ❤️
    </span>
  </div>
</section>

      {/* Third Section - Friends */}
<section className="full-page-section flex flex-col md:flex-row items-center justify-center min-h-screen p-4 md:p-8 bg-blue-100">
  <div className="w-full md:w-1/2 text-center md:text-left mb-8 md:mb-0 md:pr-8 order-2 md:order-1">
    <h2 className="text-2xl md:text-3xl lg:text-4xl mb-4 font-bold font-custom">Everything's better with friends.</h2>
    <p className="text-base md:text-lg lg:text-xl mb-4">
      Stay connected with your friends on Comet. Share your cosmic journey, see how they're feeling, and support each other through life's ups and downs.
    </p>
    {/* <ShimmerButton
      className="w-auto px-4 py-2 bg-blue-500 text-white hover:bg-blue-600 shadow-2xl"
      borderRadius="5px"
    >
      <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
        Explore Friend Features
      </span>
    </ShimmerButton> */}
  </div>
  <div className="w-full md:w-1/2 flex justify-center items-center order-1 md:order-2">
    <span className="text-9xl md:text-[200px] lg:text-[300px] animate-bounce">
      🥰
    </span>
  </div>
</section>

{/* Fourth Section - Astrology */}
<section className="full-page-section flex flex-col md:flex-row items-center justify-center min-h-screen p-4 md:p-8 bg-purple-100">
  <div className="w-full md:w-1/2 flex justify-center items-center mb-8 md:mb-0">
    <span className="text-9xl md:text-[200px] lg:text-[300px] animate-spin-slow">
      🔮
    </span>
  </div>
  <div className="w-full md:w-1/2 text-center md:text-left md:pl-8">
    <h2 className="text-2xl md:text-3xl lg:text-4xl mb-4 font-bold font-custom">The stars are in your hand.</h2>
    <p className="text-base md:text-lg lg:text-xl mb-6">
      Dive deep into your personal astrology with Comet. Get daily horoscopes, compatibility readings, and discover how the stars influence your life and relationships.
    </p>
    {/* <ShimmerButton
      className="w-auto px-4 py-2 bg-purple-500 text-white hover:bg-purple-600 shadow-2xl"
      borderRadius="5px"
    >
      <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
        Discover Your Stars
      </span>
    </ShimmerButton> */}
  </div>
</section>

      {/* New Features Section */}


      </main>
      <footer className="bg-black py-4 px-8">
  <div className="max-w-6xl mx-auto flex flex-col items-center">
    <div className="text-xl font-bold mb-4 sm:mb-0 text-yellow-400 font-custom">
      comet
    </div>
  </div>
</footer>
    </div>
    



  );
}