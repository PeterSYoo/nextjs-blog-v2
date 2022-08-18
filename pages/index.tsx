import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { IoHomeSharp, IoBriefcase, IoMailSharp } from 'react-icons/io5';
import { SiGithub, SiLinkedin } from 'react-icons/si';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Peter Yoo's Blog</title>
      </Head>

      <main>
        <div className="grid overflow-hidden grid-cols-4 grid-rows-2 h-screen">
          <div className="row-span-2 p-5 flex flex-col border-r-gray-100 border-r-2 py-20">
            <div className="flex justify-end text-4xl font-bold">
              Hi!&nbsp;<section className="text-4xl">👋</section>
            </div>
            <div className="flex justify-end text-4xl font-bold">I'm Peter</div>
            <div className="">
              <ul className="list-none flex flex-col items-end gap-20 py-20 font-serif text-2xl">
                <li className="cursor-pointer">
                  <IoHomeSharp />
                </li>
                <li className="cursor-pointer">
                  <IoBriefcase />
                </li>
                <li className="cursor-pointer">
                  <SiGithub />
                </li>
                <li className="cursor-pointer">
                  <SiLinkedin />
                </li>
                <li className="cursor-pointer">
                  <IoMailSharp />
                </li>
              </ul>
            </div>
          </div>
          <div className="row-span-2 col-span-3 py-40 px-20 flex justify-center">
            <div className="">
              <div className="">Post Component</div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
