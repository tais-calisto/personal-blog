import { GetStaticPaths, GetStaticProps } from 'next';
import { Categories, Posts } from '../../utils/interfaces';
import supabase from '../api/supabase';
import Header from '../../components/Header';
import { Container } from '../../styles/categoryPage.style';
import PostImage from '../../components/PostImage';
import PostDate from '../../components/PostDate';
import Footer from '../../components/Footer';

const Post = ({
  posts,
  categories,
}: {
  posts: Array<Posts>;
  categories: Array<Categories>;
}) => {
  return (
    <>
      <Header data={categories} />
      <Container>
        {posts.map((p) => (
          <div key={p.id} className='postContainer'>
            <div className='image'>
              <PostImage path={p.image} />
            </div>
            <div className='content'>
              <h1>{p.title}</h1>
              <div className='date'>
                <PostDate date={p.created_at} />
              </div>
              <p>{p.resume}</p>
            </div>
          </div>
        ))}
      </Container>
      <Footer />
    </>
  );
};

export default Post;

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await supabase.from('Categories').select('path');

  const paths = data!.map((d) => ({
    params: { path: d.path },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { error: categoryError, data: categories } = await supabase
    .from('Categories')
    .select();

  const { data: category } = await supabase
    .from('Categories')
    .select('id')
    .eq('path', params!.path);

  const id = category![0].id;

  const { error: postsError, data: posts } = await supabase
    .from('Posts')
    .select()
    .eq('category_id', id);

  return { props: { posts, categories } };
};
