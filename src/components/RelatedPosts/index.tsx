import { useRouter } from 'next/router';
import React, { useMemo, useState } from 'react';
import supabase from '../../pages/api/supabase';
import { Posts } from '../../utils/interfaces';
import PostDate from '../PostDate';
import PostImage from '../PostImage';
import { Container } from './style';

const RelatedPosts = ({ data, path }: { data: string; path: string }) => {
  const [posts, setPosts] = useState<Posts[] | null>();
  const router = useRouter();

  const getPosts = async () => {
    const { error: postsError, data: posts } = await supabase
      .from('Posts')
      .select()
      .eq('category_id', data)
      .neq('path', path)
      .limit(4);
    return posts;
  };

  useMemo(async () => {
    const posts = await getPosts();
    setPosts(posts);
  }, []);

  const goToPost = (path: string) => {
    router.push(`${path}`);
  };

  return (
    <Container>
      <h1>Conteúdos relacionados</h1>
      <div className='posts'>
        {posts?.map((p) => (
          <div
            key={p.id}
            className='postContainer'
            onClick={() => goToPost(p.path)}
          >
            <div className='image'>
              <PostImage path={p.image} />
            </div>
            <div className='content'>
              <h3>{p.title}</h3>
              <div className='date'>
                <PostDate date={p.created_at} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default RelatedPosts;
