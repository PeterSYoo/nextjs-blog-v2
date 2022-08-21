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
  const [homeHovering, setHomeHovering] = useState(false);
  const [portfolioHovering, setPortfolioHovering] = useState(false);
  const [liHovering, setLiHovering] = useState(false);
  const [gitHovering, setGitHovering] = useState(false);
  const [emailHovering, setEmailHovering] = useState(false);

  return (
    <>
      <Head>
        <title>Peter Yoo's Blog</title>
      </Head>

      <div className="p-5 px-10 xl:px-20 max-w-screen-2xl md:p-0 md:px-0 bg-white md:border-none md:grid md:m-auto md:grid-rows-1 md:grid-cols-4 md:w-auto md:h-screen">
        <div className="flex justify-between items-center md:flex-col md:items-end md:text-right md:justify-start md:p-5 md:pt-20 md:box md:col-span-1 md:row-span-2 md:border-r">
          <div className="text-2xl md:text-4xl font-bold">
            Hi! <span>👋</span>
            <div className="text-2xl md:text-4xl font-bold">I'm Peter</div>
          </div>
          <div className="invisible md:flex md:flex-col md:items-end md:gap-20 md:visible md:pt-20">
            <Link
              href="/"
              activeClass="home"
              to="home"
              className="cursor-pointer"
            >
              <div
                onMouseEnter={() => setHomeHovering(true)}
                onMouseLeave={() => setHomeHovering(false)}
              >
                {homeHovering ? (
                  <span className="text-2xl cursor-pointer font-bold px-10 ">
                    HOME
                  </span>
                ) : (
                  <IoHomeSharp className="text-3xl cursor-pointer" />
                )}
              </div>
            </Link>
            <Link
              href="https://petersyoo.netlify.app/"
              activeClass="portfolio"
              to="portfolio"
              className="cursor-pointer"
              passHref
            >
              <a target="_blank">
                <div
                  onMouseEnter={() => setPortfolioHovering(true)}
                  onMouseLeave={() => setPortfolioHovering(false)}
                >
                  {portfolioHovering ? (
                    <span className="text-2xl cursor-pointer font-bold px-10 ">
                      PORTFOLIO
                    </span>
                  ) : (
                    <IoBriefcase className="text-3xl cursor-pointer" />
                  )}
                </div>
              </a>
            </Link>
            <Link
              href="https://www.linkedin.com/in/petersyoo/"
              activeClass="linkedin"
              to="linkedin"
              className="cursor-pointer"
              passHref
            >
              <a target="_blank">
                <div
                  onMouseEnter={() => setLiHovering(true)}
                  onMouseLeave={() => setLiHovering(false)}
                >
                  {liHovering ? (
                    <span className="text-2xl cursor-pointer font-bold px-10 ">
                      LINKEDIN
                    </span>
                  ) : (
                    <SiLinkedin className="text-3xl cursor-pointer" />
                  )}
                </div>
              </a>
            </Link>
            <Link
              href="https://github.com/PeterSYoo"
              activeClass="github"
              to="github"
              className="cursor-pointer"
              passHref
            >
              <a target="_blank">
                <div
                  onMouseEnter={() => setGitHovering(true)}
                  onMouseLeave={() => setGitHovering(false)}
                >
                  {gitHovering ? (
                    <span className="text-2xl cursor-pointer font-bold px-10">
                      GITHUB
                    </span>
                  ) : (
                    <SiGithub className="text-3xl cursor-pointer" />
                  )}
                </div>
              </a>
            </Link>
            <Link
              href="mailto:petersyoox@gmail.com"
              activeClass="email"
              to="email"
              className="cursor-pointer"
              passHref
            >
              <a target="_blank">
                <div
                  onMouseEnter={() => setEmailHovering(true)}
                  onMouseLeave={() => setEmailHovering(false)}
                >
                  {emailHovering ? (
                    <span className="text-2xl cursor-pointer font-bold px-10 ">
                      EMAIL
                    </span>
                  ) : (
                    <IoMailSharp className="text-3xl cursor-pointer" />
                  )}
                </div>
              </a>
            </Link>
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
          enterTo="opacity-100 scale-100 md:hidden"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100 md:hidden"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            // handle the mobile menu tabs
            <div className="md:hidden id=mobile-menu flex justify-end">
              <div className="flex border-b w-full bg-white flex-col text-right text-2xl px-2 pb-10 space-y-4 sml:px-3">
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
                <Link
                  href="https://petersyoo.netlify.app/"
                  activeClass="portfolio"
                  to="portfolio"
                  smooth={true}
                  offset={50}
                  duration={500}
                  className="cursor-pointer"
                  passHref
                >
                  <a target="_blank">Portfolio</a>
                </Link>
                <Link
                  href="https://www.linkedin.com/in/petersyoo/"
                  activeClass="linkedin"
                  to="linkedin"
                  smooth={true}
                  offset={50}
                  duration={500}
                  className="cursor-pointer"
                  passHref
                >
                  <a target="_blank">LinkedIn</a>
                </Link>
                <Link
                  href="https://github.com/PeterSYoo"
                  activeClass="github"
                  to="github"
                  smooth={true}
                  offset={50}
                  duration={500}
                  className="cursor-pointer"
                  passHref
                >
                  <a target="_blank">GitHub</a>
                </Link>
                <Link
                  href="mailto:petersyoox@gmail.com"
                  activeClass="email"
                  to="email"
                  smooth={true}
                  offset={50}
                  duration={500}
                  className="cursor-pointer"
                  passHref
                >
                  <a target="_blank">Email</a>
                </Link>
              </div>
            </div>
          )}
        </Transition>
        <div className="pt-10 flex flex-col md:p-20 md:box md:row-span-1 md:col-span-3">
          Content
          <div className="border-b border-gr-400"></div>
        </div>
      </div>

      <main></main>
    </>
  );
};

export default Home;
