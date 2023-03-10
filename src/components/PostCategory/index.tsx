import React, { useMemo, useState } from 'react';
import supabase from '../../pages/api/supabase';
import { Container } from './style';

const PostCategory = ({ id }: { id: string }) => {
  const [categories, setCategories] = useState<{ name: any }[] | null>();

  const getCategories = async () => {
    const { data } = await supabase
      .from('Categories')
      .select('name')
      .eq('id', id);
    return data;
  };

  useMemo(async () => {
    const categories = await getCategories();
    setCategories(categories);
  }, []);

  return (
    <Container>
      {categories?.map((c, index) => (
        <p key={index}>{c.name}</p>
      ))}
    </Container>
  );
};

export default PostCategory;
