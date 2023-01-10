import { Posts } from '../../utils/interfaces';
import { Container } from './style';
import Image from 'next/image';
import supabase from '../../pages/api/supabase';
import PostImage from '../PostImage';
import PostCategory from '../PostCategory';
import PostDate from '../PostDate';

const FeaturedPosts = ({ posts }: { posts: Array<Posts> }) => {
  return (
    <Container>
      {posts.map((p) => (
        <div key={p.id}>
          <PostImage path={p.image} />
          <PostCategory id={p.category_id} />
          <div className='content'>
            <h3>{p.title}</h3>
            <PostDate date={p.created_at} />
          </div>
        </div>
      ))}
    </Container>
  );
};

export default FeaturedPosts;
