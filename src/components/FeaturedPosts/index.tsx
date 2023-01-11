import { Posts } from '../../utils/interfaces';
import { Container } from './style';
import PostImage from '../PostImage';
import PostCategory from '../PostCategory';
import PostDate from '../PostDate';

const FeaturedPosts = ({ posts }: { posts: Array<Posts> }) => {
  return (
    <Container>
      {posts.map((p) => (
        <article key={p.id}>
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
