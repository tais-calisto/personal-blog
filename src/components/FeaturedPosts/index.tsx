import { Posts } from '../../utils/interfaces';
import { Container } from './style';
import PostImage from '../PostImage';
import PostCategory from '../PostCategory';
import PostDate from '../PostDate';
import { useRouter } from 'next/router';

const FeaturedPosts = ({ posts }: { posts: Array<Posts> }) => {
  const router = useRouter();

  const getPost = (path: string) => {
    router.push(`post/${path}`);
  };

  return (
    <Container>
      {posts.map((p) => (
        <article key={p.id} onClick={() => getPost(p.path)}>
          <PostImage path={p.image} />
          <div className='content'>
            <PostCategory id={p.category_id} />

            <h3>{p.title}</h3>
            <p className='resume'>{p.resume}</p>
            <PostDate date={p.created_at} />
          </div>
        </article>
      ))}
    </Container>
  );
};

export default FeaturedPosts;
