import { useEffect, useState } from 'react';
import { useTheme } from 'styled-components';

const useGetImageTheme = (imgLight: any, imgDark: any) => {
  const [img, setImg] = useState(imgLight);

  const { name } = useTheme();

  useEffect(() => {
    name === 'lightTheme' ? setImg(imgLight) : setImg(imgDark);
  }, [name]);

  return img;
};

export default useGetImageTheme;
