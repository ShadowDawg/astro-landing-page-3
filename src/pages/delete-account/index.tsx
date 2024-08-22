import React from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const AccountDeletionPage = () => {
  return (
    <div className="flex flex-col items-center justify-between min-h-screen p-8">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold mb-2 font-custom">comet.</h1>
        <p className="text-4xl md:text-5xl mb-4">Account Deletion Instructions</p>
      </div>

      {/* Main content */}
      <div className="w-full max-w-3xl text-center">
        <p className="text-xl mb-8">
          We&apos;re sorry to see you go! Here&apos;s how you can delete your comet account:
        </p>

        <ol className="list-decimal text-left text-lg space-y-8 mb-8 pl-8">
          <li>Go to the Personal page in the comet app</li>
          <li>
            Click on the Settings icon
            <div className="mt-4">
              <Image
                src="/account_deletion/one.png"
                alt="Settings icon location"
                width={300}
                height={600}
                className="mx-auto rounded-lg shadow-md"
              />
            </div>
          </li>
          <li>Scroll to the bottom of the Settings page</li>
          <li>
            Click on the &quot;Delete Account&quot; button
            <div className="mt-4">
              <Image
                src="/account_deletion/two.png"
                alt="Delete Account button location"
                width={300}
                height={600}
                className="mx-auto rounded-lg shadow-md"
              />
            </div>
          </li>
          <li>
            A pop-up will appear confirming your decision. Click &quot;OK&quot; to permanently delete your account
            <div className="mt-4">
              <Image
                src="/account_deletion/three.png"
                alt="Confirmation pop-up"
                width={300}
                height={600}
                className="mx-auto rounded-lg shadow-md"
              />
            </div>
          </li>
        </ol>

        <div className="bg-gray-100 p-6 rounded-lg mb-8">
          <h2 className="text-2xl font-semibold mb-4">Data Deletion Policy</h2>
          <p className="text-lg mb-4">
            When you delete your account, the following actions will occur:
          </p>
          <ul className="list-disc text-left pl-6 space-y-2">
            <li>All personal information, including your profile data, will be permanently deleted</li>
            <li>Your matches and chat history will be removed from our servers</li>
            <li>Your astrological data and preferences will be erased</li>
          </ul>
          {/* <p className="mt-4 text-lg">
            Please note: Some data may be retained for a short period (up to 30 days) for legal and security purposes.
          </p> */}
        </div>

        <p className="text-lg mb-8">
          If you have any questions or need assistance with account deletion, please contact our support team at cometapp.official@gmail.com
        </p>
      </div>

      {/* Footer with social media links */}
      <div className="mt-12">
        <div className="flex justify-center space-x-4">
          <a href="https://www.instagram.com/comet.app" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} size="2x" className="text-black hover:text-gray-700 transition-colors duration-200" />
          </a>
          <a href="https://www.linkedin.com/in/comet-app-934400321/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} size="2x" className="text-black hover:text-gray-700 transition-colors duration-200" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default AccountDeletionPage;