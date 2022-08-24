import { useState } from 'react';
import Link from 'next/link';
import { Transition } from '@headlessui/react';
import { IoHomeSharp, IoBriefcase, IoMailSharp } from 'react-icons/io5';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose, AiOutlineHome, AiFillHome } from 'react-icons/ai';
import {
  HiOutlineHome,
  HiHome,
  HiOutlineBriefcase,
  HiBriefcase,
} from 'react-icons/hi';
import {
  RiGithubLine,
  RiGithubFill,
  RiLinkedinLine,
  RiLinkedinFill,
} from 'react-icons/ri';
import { MdOutlineMail, MdEmail } from 'react-icons/md';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [homeHovering, setHomeHovering] = useState(false);
  const [portfolioHovering, setPortfolioHovering] = useState(false);
  const [liHovering, setLiHovering] = useState(false);
  const [gitHovering, setGitHovering] = useState(false);
  const [emailHovering, setEmailHovering] = useState(false);

  return (
    <>
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
              className="max-h-5"
            >
              {homeHovering ? (
                <div className="flex">
                  <span className="flex flex-col justify-center text-xl cursor-pointer font-light px-2">
                    Home&nbsp;&nbsp;/
                  </span>
                  <AiFillHome className="text-3xl cursor-pointer " />
                </div>
              ) : (
                <AiOutlineHome className="text-3xl cursor-pointer " />
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
                className="max-h-5"
              >
                {portfolioHovering ? (
                  <div className="flex">
                    <span className="flex flex-col justify-center text-xl cursor-pointer font-light px-2">
                      Portfolio&nbsp;&nbsp;/
                    </span>
                    <HiBriefcase className="text-3xl cursor-pointer" />
                  </div>
                ) : (
                  <HiOutlineBriefcase className="text-3xl cursor-pointer" />
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
                className="max-h-5"
              >
                {liHovering ? (
                  <div className="flex">
                    <span className="flex flex-col justify-center text-xl cursor-pointer font-light px-2">
                      LinkedIn&nbsp;&nbsp;/
                    </span>
                    <RiLinkedinFill className="text-3xl cursor-pointer" />
                  </div>
                ) : (
                  <RiLinkedinLine className="text-3xl cursor-pointer" />
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
                className="max-h-5"
              >
                {gitHovering ? (
                  <div className="flex">
                    <span className="flex flex-col justify-center text-xl cursor-pointer font-light px-2">
                      GitHub&nbsp;&nbsp;/
                    </span>
                    <RiGithubFill className="text-4xl cursor-pointer -mr-1" />
                  </div>
                ) : (
                  <RiGithubLine className="text-4xl cursor-pointer -mr-1" />
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
                className="max-h-5"
              >
                {emailHovering ? (
                  <div className="flex">
                    <span className="flex flex-col justify-center text-xl cursor-pointer font-light px-2">
                      Email&nbsp;&nbsp;/
                    </span>
                    <MdEmail className="text-3xl cursor-pointer" />
                  </div>
                ) : (
                  <MdOutlineMail className="text-3xl cursor-pointer" />
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
    </>
  );
};

export default Header;
