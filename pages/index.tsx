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
import { sanityClient, urlFor } from '../sanity';
import { Post } from '../typings';

interface Props {
  posts: [Post];
}

const Home = ({ posts }: Props) => {
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
                className="max-h-5"
              >
                {homeHovering ? (
                  <span className="text-2xl cursor-pointer font-bold px-10 opacity-0 hover:opacity-100 transition-opacity duration-500">
                    HOME
                  </span>
                ) : (
                  <IoHomeSharp className="text-3xl cursor-pointer " />
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
                    <span className="text-2xl cursor-pointer font-bold px-10 opacity-0 hover:opacity-100 transition-opacity duration-500 ">
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
                  className="max-h-5"
                >
                  {liHovering ? (
                    <span className="text-2xl cursor-pointer font-bold px-10 opacity-0 hover:opacity-100 transition-opacity duration-500 ">
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
                  className="max-h-5"
                >
                  {gitHovering ? (
                    <span className="text-2xl cursor-pointer font-bold px-10 opacity-0 hover:opacity-100 transition-opacity duration-500">
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
                  className="max-h-5"
                >
                  {emailHovering ? (
                    <span className="text-2xl cursor-pointer font-bold px-10 opacity-0 hover:opacity-100 transition-opacity duration-500 ">
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
        {/* Posts */}
        <div className="pt-10 flex flex-col md:p-20 md:box md:row-span-1 md:col-span-3">
          {posts.map((post) => (
            <Link key={post._id} href={`/post/${post.slug.current}`}>
              <>
                <div className="grid grid-cols-6">
                  <div className="col-span-5">
                    <div className="flex justify-between pt-5">
                      <div className="flex">
                        <img
                          src={urlFor(post.author.image).url()!}
                          alt=""
                          className="aspect-auto h-8 w-8"
                        />
                        <div className="pl-3 pt-1 flex">
                          <div className="">{post.author.name}</div>
                          <div className="text-xs pt-1">&nbsp;∙&nbsp;</div>
                          <div className="text-gray-300">Date</div>
                        </div>
                      </div>
                    </div>
                    <div className="pl-1 pt-3 text-xl font-bold">
                      {post.title}
                    </div>
                    <div className="pl-1 pt-2 pb-8 font-serif">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Enim nunc faucibus a pellentesque. Quis imperdiet
                      massa tincidunt nunc pulvinar sapien et ligula
                      ullamcorper. Ipsum dolor sit amet consectetu...
                    </div>
                  </div>

                  <div className="col-span-1 p-1 pt-20 -mt-2">
                    <img src={urlFor(post.mainImage).url()!} alt="" />
                  </div>
                </div>
                <div className="border-b border-gr-400"></div>
              </>
            </Link>
          ))}
        </div>
      </div>

      <main></main>
    </>
  );
};

export default Home;

export const getServerSideProps = async () => {
  const query = `
  *[_type == "post"] {
    _id,
    title,
    author -> {
      name,
      image
    },
    description,
    mainImage,
    slug,
  }
  `;

  const posts = await sanityClient.fetch(query);

  return {
    props: {
      posts,
    },
  };
};
