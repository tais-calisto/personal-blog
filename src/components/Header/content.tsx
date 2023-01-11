import Link from 'next/link';
import { Categories } from '../../utils/interfaces';
import { socialLinks } from '../../utils/socialLinks';
import { ContentStyle } from './content.style';

const Content = ({ data }: { data: Array<Categories> }) => {
  return (
    <ContentStyle>
      <nav>
        <ul>
          {data.map((d, index) => (
            <Link href={`/category/${d.path}`} key={index}>
              {d.name}
            </Link>
          ))}
        </ul>
      </nav>
      <div>
        <ul>
          {socialLinks.map((sl, index) => (
            <li key={index}>
              <a href={sl.link}>{<sl.icon />}</a>
            </li>
          ))}
        </ul>
      </div>
    </ContentStyle>
  );
};

export default Content;
