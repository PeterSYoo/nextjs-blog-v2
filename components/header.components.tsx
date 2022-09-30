import { useState } from "react";
import Link from "next/link";
import { Transition } from "@headlessui/react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { HiOutlineBriefcase, HiBriefcase } from "react-icons/hi";
import {
  RiGithubLine,
  RiGithubFill,
  RiLinkedinLine,
  RiLinkedinFill,
} from "react-icons/ri";
import { MdOutlineMail, MdEmail } from "react-icons/md";
import ThemeButton from "./themeButton.components";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [portfolioHovering, setPortfolioHovering] = useState(false);
  const [liHovering, setLiHovering] = useState(false);
  const [gitHovering, setGitHovering] = useState(false);
  const [emailHovering, setEmailHovering] = useState(false);

  return (
    <>
      <div className="md:hidden flex w-full justify-end pr-1 -mb-6">
        <ThemeButton />
      </div>
      <div className="flex justify-between items-center -ml-20 md:flex-col md:items-end md:text-right md:justify-start md:p-5 md:pt-8 md:box md:col-span-1 md:row-span-2 md:border-r dark:md:border-gray-800 md:w-40 md:h-screen md:fixed md:border-gray-200">
        <div className="hidden md:flex md:mb-5 md:pr-[22px]">
          <ThemeButton />
        </div>
        <Link href="/">
          <div className="md:text-center text-2xl md:text-2xl font-bold p-2 shadow-sm shadow-gray-900 dark:shadow-blue-300 rounded bg-gray-900 text-white md:bg-gray-100 dark:md:bg-gray-900 md:text-gray-900 dark:md:text-gray-100 hover:bg-gray-900 dark:hover:bg-gray-100 transition-all duration-100 ease-linear hover:text-white dark:hover:text-gray-900 hover:shadow-lg hover:shadow-gray-900 dark:hover:shadow-blue-300 hover:rounded group cursor-pointer">
            <span className="sidebar-tooltip-left-triangle group-hover:scale-100 left-[115px] md:left-[145px]"></span>
            <span className="sidebar-tooltip group-hover:scale-100 left-[115px] -mt-[1px] md:left-[145px] md:-mt-[1px]">
              Home
            </span>
            Blog
          </div>
        </Link>
        <div className="md:flex md:flex-col md:items-end md:gap-20 md:pt-40 invisible md:visible">
          {/* <Link href="/" className="cursor-pointer">
            <div
              onMouseEnter={() => setHomeHovering(true)}
              onMouseLeave={() => setHomeHovering(false)}
              className="max-h-5"
            >
              {homeHovering ? (
                <div className="sidebar-icon group">
                  <AiFillHome className="text-3xl cursor-pointer " />
                  <span className="sidebar-tooltip-left-triangle group-hover:scale-100"></span>
                  <span className="sidebar-tooltip group-hover:scale-100">
                    Home
                  </span>
                </div>
              ) : (
                <div className="sidebar-icon group">
                  <AiOutlineHome className="text-3xl cursor-pointer " />
                  <span className="sidebar-tooltip-left-triangle group-hover:scale-100"></span>
                  <span className="sidebar-tooltip group-hover:scale-100">
                    Home
                  </span>
                </div>
              )}
            </div>
          </Link> */}
          <Link href="https://petersyoo.netlify.app/" passHref>
            <div
              onMouseEnter={() => setPortfolioHovering(true)}
              onMouseLeave={() => setPortfolioHovering(false)}
              className="max-h-5"
            >
              <a target="_blank">
                {portfolioHovering ? (
                  <div className="sidebar-icon group cursor-pointer">
                    <HiBriefcase className="text-3xl" />
                    <span className="sidebar-tooltip-left-triangle group-hover:scale-100"></span>
                    <span className="sidebar-tooltip group-hover:scale-100">
                      Portfolio
                    </span>
                  </div>
                ) : (
                  <div className="sidebar-icon cursor-pointer">
                    <HiOutlineBriefcase className="text-3xl" />
                    <span className="sidebar-tooltip-left-triangle group-hover:scale-100"></span>
                    <span className="sidebar-tooltip group-hover:scale-100">
                      Portfolio
                    </span>
                  </div>
                )}
              </a>
            </div>
          </Link>
          <Link href="https://www.linkedin.com/in/petersyoo/" passHref>
            <div
              onMouseEnter={() => setLiHovering(true)}
              onMouseLeave={() => setLiHovering(false)}
              className="max-h-5"
            >
              <a target="_blank">
                {liHovering ? (
                  <div className="sidebar-icon group cursor-pointer">
                    <RiLinkedinFill className="text-3xl" />
                    <span className="sidebar-tooltip-left-triangle group-hover:scale-100"></span>
                    <span className="sidebar-tooltip group-hover:scale-100">
                      LinkedIn
                    </span>
                  </div>
                ) : (
                  <div className="sidebar-icon group cursor-pointer">
                    <RiLinkedinLine className="text-3xl" />
                    <span className="sidebar-tooltip-left-triangle group-hover:scale-100"></span>
                    <span className="sidebar-tooltip group-hover:scale-100">
                      LinkedIn
                    </span>
                  </div>
                )}
              </a>
            </div>
          </Link>
          <Link href="https://github.com/PeterSYoo" passHref>
            <div
              onMouseEnter={() => setGitHovering(true)}
              onMouseLeave={() => setGitHovering(false)}
              className="max-h-5"
            >
              <a target="_blank">
                {gitHovering ? (
                  <div className="sidebar-icon group cursor-pointer">
                    <span className="sidebar-tooltip-left-triangle group-hover:scale-100"></span>
                    <span className="sidebar-tooltip group-hover:scale-100">
                      GitHub
                    </span>
                    <RiGithubFill className="text-4xl cursor-pointer" />
                  </div>
                ) : (
                  <div className="sidebar-icon group cursor-pointer">
                    <span className="sidebar-tooltip-left-triangle group-hover:scale-100"></span>
                    <span className="sidebar-tooltip group-hover:scale-100">
                      GitHub
                    </span>
                    <RiGithubLine className="text-4xl cursor-pointer" />
                  </div>
                )}
              </a>
            </div>
          </Link>
          <Link href="mailto:petersyoox@gmail.com" passHref>
            <div
              onMouseEnter={() => setEmailHovering(true)}
              onMouseLeave={() => setEmailHovering(false)}
              className="max-h-5"
            >
              <a target="_blank">
                {emailHovering ? (
                  <div className="sidebar-icon group cursor-pointer">
                    <MdEmail className="text-3xl cursor-pointer" />
                    <span className="sidebar-tooltip-left-triangle group-hover:scale-100"></span>
                    <span className="sidebar-tooltip group-hover:scale-100">
                      Email
                    </span>
                  </div>
                ) : (
                  <div className="sidebar-icon group cursor-pointer">
                    <MdOutlineMail className="text-3xl cursor-pointer" />
                    <span className="sidebar-tooltip-left-triangle group-hover:scale-100"></span>
                    <span className="sidebar-tooltip group-hover:scale-100">
                      Email
                    </span>
                  </div>
                )}
              </a>
            </div>
          </Link>
        </div>

        <span className="flex flex-col text-3xl cursor-pointer md:hidden">
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

      <div className="border-b border-gray-200 dark:border-gray-800 -ml-40 -mr-10 md:border-0">
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
            <div className="md:hidden id=mobile-menu flex justify-end mr-9">
              <div className="flex flex-col text-right text-2xl px-2 pb-10 space-y-4 sml:px-3">
                <Link
                  href="/"
                  // @ts-ignore
                  smooth={true}
                  offset={50}
                  duration={500}
                  className="cursor-pointer"
                >
                  Home
                </Link>
                <Link
                  href="https://petersyoo.netlify.app/"
                  // @ts-ignore
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
                  // @ts-ignore
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
                  // @ts-ignore
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
                  // @ts-ignore
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
      </div>
    </>
  );
};

export default Header;
