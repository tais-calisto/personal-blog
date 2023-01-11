import { GetStaticPaths, GetStaticProps } from 'next';
import { Categories, Posts } from '../../utils/interfaces';
import supabase from '../api/supabase';
import Header from '../../components/Header';
import PostImage from '../../components/PostImage';
import { Container } from '../../styles/postPage.style';
import PostCategory from '../../components/PostCategory';
import PostDate from '../../components/PostDate';

const Post = ({
  post,
  categories,
}: {
  post: Array<Posts>;
  categories: Array<Categories>;
}) => {
  const postData = post[0];

  return (
    <>
      <Header data={categories} />
      <Container>
        <div className='image'>
          <PostImage path={postData.image} />
        </div>
        <div className='info'>
          <PostCategory id={postData.category_id} />
          <PostDate date={postData.created_at} />
        </div>
        <div className='content'>
          <h1>{postData.title}</h1>
          {postData.paragraphs.map((p, index) => (
            <p key={index}>{p}</p>
          ))}
        </div>
      </Container>
    </>
  );
};

export default Post;

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await supabase.from('Posts').select('path');

  const paths = data!.map((d) => ({
    params: { path: d.path },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { error: categoryError, data: categories } = await supabase
    .from('Categories')
    .select();

  const { error: postsError, data: post } = await supabase
    .from('Posts')
    .select()
    .eq('path', params!.path);

  return { props: { post, categories } };
};
