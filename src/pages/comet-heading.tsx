// pages/comet-heading.js

"use client";

import Head from 'next/head';

export default function CometHeading() {
  return (
    <div className="flex flex-col items-end justify-center min-h-screen bg-[#0A0907] pr-32">
      <Head>
        <title>Comet</title>
      </Head>
      <h1 className="text-5xl font-custom text-[#FFED87] mb-4 text-right">
        It&apos;s written in the stars✨
      </h1>
      {/* <h1 className="text-9xl font-custom text-[#FFC46E] mb-4 text-right">
        comet.
      </h1> */}
      <p className="text-5xl font-manrope text-[#FFFEFF] text-right">
        created by IITM students for IITM students
      </p>
    </div>
  );
}
