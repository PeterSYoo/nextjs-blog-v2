import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Peter Yoo's Blog</title>
      </Head>

      <main>
        <div className="grid overflow-hidden grid-cols-4 grid-rows-2 h-screen">
          <div className="row-span-2 p-5 flex flex-col border-r-gray-100 border-r-2 py-20">
            <div className="flex justify-end text-4xl font-bold">Hi! 👋</div>
            <div className="flex justify-end text-4xl font-bold">I'm Peter</div>
            <div className="">
              <ul className="list-none flex flex-col items-end gap-20 py-20 font-serif">
                <li>Home</li>
                <li>Portfolio</li>
                <li>Github</li>
                <li>LinkedIn</li>
                <li>Email</li>
              </ul>
            </div>
          </div>
          <div className="row-span-2 col-span-3 p-20 flex justify-center">
            2
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
