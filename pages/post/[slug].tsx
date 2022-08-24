import { GetStaticProps } from 'next';
import React from 'react';
import Header from '../../components/header.components';
import { sanityClient, urlFor } from '../../sanity';
import { Post } from '../../typings';
import PortableText from 'react-portable-text';

interface Props {
  post: Post;
}

const Posts = ({ post }: Props) => {
  console.log(post);
  return (
    <div className="p-5 px-10 xl:px-20 max-w-screen-2xl md:p-0 md:px-0 bg-white md:border-none md:grid md:m-auto md:grid-rows-1 md:grid-cols-4 md:w-auto md:h-screen">
      <Header />

      <div className="pt-10 flex flex-col md:p-20 md:box md:row-span-1 md:col-span-3">
        <div className="flex flex-col">
          <div className="flex justify-between pt-5">
            <div className="flex">
              <img
                src={urlFor(post.author.image).url()!}
                alt=""
                className="aspect-auto h-12 w-12"
              />
              <div className="pl-4 -mt-1 flex flex-col justify-between">
                <div className="">{post.author.name}</div>
                <div className="text-gray-400 text-sm">
                  {new Date(post.publishedAt).toDateString()}
                </div>
              </div>
            </div>
          </div>
          <div className="pl-1 pt-8 text-3xl font-bold">{post.title}</div>
          <div className="pl-1 pt-6 pb-40 font-serif text-xl font-thin leading-9">
            <PortableText
              className=""
              dataset={process.env.NEXT_PUBLIC_SANITY_DATASET!}
              projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!}
              content={post.body}
              serializers={{
                h1: (props: any) => (
                  <h1 className="text-2xl font-bold my-5" {...props} />
                ),
                h2: (props: any) => (
                  <h2 className="text-xl font-bold my-5" {...props} />
                ),
                li: ({ children }: any) => (
                  <li className="ml-4 list-disc">{children}</li>
                ),
                link: ({ href, children }: any) => (
                  <a href={href} className="text-gray-500 hover:underline">
                    {children}
                  </a>
                ),
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Posts;

export const getStaticPaths = async () => {
  const query = `
  *[_type == 'post'] {
    _id,
    slug {
      current
    }
  }
  `;

  const posts = await sanityClient.fetch(query);

  const paths = posts.map((post: Post) => ({
    params: {
      slug: post.slug.current,
    },
  }));

  return {
    paths,
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const query = `
    *[_type == "post" && slug.current == $slug][0]{
        _id,
        _createdAt,
        title,
        author -> {
          name,
          image
        },
        description,
        publishedAt,
        mainImage,
        slug,
        body
        }
  `;

  const post = await sanityClient.fetch(query, {
    slug: params?.slug,
  });

  if (!post) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      post,
    },
    revalidate: 60,
  };
};

// 'comments': *[
//   _type == "comment" &&
//   post._ref == ^._id &&
//   approved == true
// ],
