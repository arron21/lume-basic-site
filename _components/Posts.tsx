interface Post {
  url: string;
  title?: string;
  name: string;
}

export default function Posts({ posts }: { posts: Post[] }) {
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.url}>
          <a href={post.url}>{post.title || post.name}</a>
        </li>
      ))}
    </ul>
  );
}
