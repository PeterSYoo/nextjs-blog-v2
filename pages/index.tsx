import Link from 'next/link';
import Head from 'next/head';
import { sanityClient, urlFor } from '../sanity';
import { Post } from '../typings';
import Header from '../components/header.components';

interface Props {
  posts: [Post];
}

const Home = ({ posts }: Props) => {
  return (
    <>
      <Head>
        <title>Peter Yoo's Blog</title>
      </Head>

      <div className="p-5 px-10 xl:px-20 max-w-screen-2xl md:p-0 md:px-0 bg-white md:border-none md:grid md:m-auto md:grid-rows-1 md:grid-cols-4 md:w-auto md:h-screen md:overflow-x-hidden">
        <div className="md:col-span-1 pl-20">
          <Header />
        </div>

        {/* Post */}
        <div className="pt-10 flex flex-col mr-20 md:-ml-10 md:p-14 md:box md:row-span-1 md:col-span-3">
          {posts.map((post) => (
            <div>
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
                        <div className="text-sm">{post.author.name}</div>
                        <div className="text-xs pt-px mt-px">&nbsp;∙&nbsp;</div>
                        <div className="text-gray-400 text-sm">
                          {new Date(post.publishedAt).toLocaleDateString()}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="pl-1 pt-3 text-xl font-bold">
                    <Link key={post._id} href={`/post/${post.slug.current}`}>
                      {post.title}
                    </Link>
                  </div>
                  <div className="pl-1 pt-2 pb-8 font-serif">
                    <Link key={post._id} href={`/post/${post.slug.current}`}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Enim nunc faucibus a pellentesque. Quis imperdiet
                      massa tincidunt nunc pulvinar sapien et ligula
                      ullamcorper. Ipsum dolor sit amet consectetu...
                    </Link>
                  </div>
                </div>

                <div className="col-span-1 p-5 pt-20 -mt-2">
                  <Link key={post._id} href={`/post/${post.slug.current}`}>
                    <img
                      src={urlFor(post.mainImage).url()!}
                      alt=""
                      className="h-28 w-28 absolute object-contain cursor-pointer"
                    />
                  </Link>
                </div>
              </div>
              <div className="border-b -mr-20 md:-mr-5"></div>
            </div>
          ))}
        </div>
      </div>
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
    publishedAt,
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
