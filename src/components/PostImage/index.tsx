import Image from 'next/image';
import supabase from '../../pages/api/supabase';

const PostImage = ({ path }: { path: string }) => {
  const getImage = () => {
    const { data } = supabase.storage.from('post-images').getPublicUrl(path);
    return data.publicUrl;
  };

  const image = getImage();

  return (
    <>
      <Image src={image} alt='' width={200} height={200} />
    </>
  );
};

export default PostImage;
