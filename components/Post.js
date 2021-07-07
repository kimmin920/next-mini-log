/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';

export default function Post({ post }) {
  return (
    <div className='card'>
      <img
        src={post.frontmatter.cover_img}
        alt={post.title}
      />
      <div className='post-date'>
        Posted on {post.frontmatter.date}
      </div>
      <h3>{post.frontmatter.title}</h3>
      <p>{post.frontmatter.excerpt}</p>
      <Link href={`blog/${post.slug}`}>
        <a className='btn'>Read more</a>
      </Link>
    </div>
  );
}
