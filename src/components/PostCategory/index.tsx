import React, { useMemo, useState } from 'react';
import supabase from '../../pages/api/supabase';

const PostCategory = ({ id }: { id: string }) => {
  const [categories, setCategories] = useState<{ name: any }[] | null>();

  const getCategoryies = async () => {
    const { data } = await supabase
      .from('Categories')
      .select('name')
      .eq('id', id);
    return data;
  };

  useMemo(async () => {
    const categories = await getCategoryies();
    setCategories(categories);
  }, []);

  return (
    <div>
      {categories?.map((c, index) => (
        <p key={index}>{c.name}</p>
      ))}
    </div>
  );
};

export default PostCategory;
