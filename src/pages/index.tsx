import Head from 'next/head';
import { HomeStyle } from '../styles/home.style';
import Header from '../components/Header';
import supabase from './api/supabase';
import { GetStaticProps } from 'next';
import { Categories, Posts } from '../utils/interfaces';
import FeaturedPosts from '../components/FeaturedPosts';
import Hero from '../components/Hero';
import About from '../components/About';
import Footer from '../components/Footer';

export default function Home({
  posts,
  categories,
}: {
  posts: Array<Posts>;
  categories: Array<Categories>;
}) {
  return (
    <>
      <Head>
        <title>E as proteínas?</title>
        <meta
          name='description'
          content='Informações, receitas e conteúdos sobre veganismo, vegetarianismo e saúde'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.png' />
      </Head>
      <HomeStyle>
        <Header data={categories} />
        <Hero />
        <FeaturedPosts posts={posts} />
        <About />
        <Footer />
      </HomeStyle>
    </>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { error: categoryError, data: categories } = await supabase
    .from('Categories')
    .select();

  const { error: postsError, data: posts } = await supabase
    .from('Posts')
    .select()
    .order('created_at', { ascending: false })
    .limit(4);

  return { props: { categories, posts } };
};
