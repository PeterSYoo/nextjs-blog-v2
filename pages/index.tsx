import { useState } from 'react';
import type { NextPage } from 'next';
import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';
import { Transition } from '@headlessui/react';
import { IoHomeSharp, IoBriefcase, IoMailSharp } from 'react-icons/io5';
import { SiGithub, SiLinkedin } from 'react-icons/si';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai';

const Home: NextPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Head>
        <title>Peter Yoo's Blog</title>
      </Head>

      <header>
        <nav className="p-5 bg-white border-b md:flex md:items-center md:justify-between">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold">
              Hi! <span>👋</span>
              <div className="text-2xl font-bold">I'm Peter</div>
            </div>

            <span className="text-3xl cursor-pointer md:hidden block">
              <button
                aria-controls="mobile-menu"
                aria-expanded="false"
                onClick={() => setIsOpen(!isOpen)}
                type="button"
              >
                {!isOpen ? <GiHamburgerMenu /> : <AiOutlineClose />}
              </button>
            </span>
          </div>

          <Transition
            show={isOpen}
            enter="transition ease-out duration-100 transform"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="transition ease-in duration-75 transform"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            {(ref) => (
              // handle the mobile menu tabs
              <div className="md:hidden id=mobile-menu flex justify-end">
                <div className="px-2 pt-2 pb-3 space-y-1 sml:px-3" ref={ref}>
                  <Link
                    href="/"
                    activeClass="home"
                    to="home"
                    smooth={true}
                    offset={50}
                    duration={500}
                    className="cursor-pointer"
                  >
                    Home
                  </Link>
                </div>
              </div>
            )}
          </Transition>

          <ul className="text-right md:flex md:items-center z-[-1] md:z-auto md:static absolute w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 opacity-0 top-[-400px] transition-all ease-in duration-500">
            <li className="mx-4 my-6 md:my-0">
              <Link href="/">
                <span className="text-2xl cursor-pointer hover:text-gray-200 duration-500">
                  HOME
                </span>
              </Link>
            </li>
            <li className="mx-4 my-6 md:my-0">
              <Link href="https://petersyoo.netlify.app/" passHref>
                <a target="_blank" rel="noopener noreferrer">
                  <span className="text-2xl cursor-pointer hover:text-gray-200 duration-500">
                    PORTFOLIO
                  </span>
                </a>
              </Link>
            </li>
            <li className="mx-4 my-6 md:my-0">
              <Link href="https://github.com/PeterSYoo">
                <a target="_blank" rel="noopener noreferrer">
                  <span className="text-2xl cursor-pointer hover:text-gray-200 duration-500">
                    GITHUB
                  </span>
                </a>
              </Link>
            </li>
            <li className="mx-4 my-6 md:my-0">
              <Link href="https://www.linkedin.com/in/petersyoo/">
                <a target="_blank" rel="noopener noreferrer">
                  <span className="text-2xl cursor-pointer hover:text-gray-200 duration-500">
                    LINKEDIN
                  </span>
                </a>
              </Link>
            </li>
            <li className="mx-4 my-6 md:my-0">
              <Link href="mailto:petersyoox@gmail.com">
                <a target="_blank" rel="noopener noreferrer">
                  <span className="text-2xl cursor-pointer hover:text-gray-200 duration-500">
                    EMAIL
                  </span>
                </a>
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <main></main>
    </>
  );
};

export default Home;
