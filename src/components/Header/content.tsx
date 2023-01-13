import Link from 'next/link';
import { Categories } from '../../utils/interfaces';
import { socialLinks } from '../../utils/socialLinks';
import { ContentStyle } from './content.style';

const Content = ({
  data,
  onClick,
}: {
  data: Array<Categories>;
  onClick: () => void;
}) => {
  return (
    <ContentStyle>
      <nav>
        <ul>
          {data.map((d, index) => (
            <Link href={`/category/${d.path}`} key={index} onClick={onClick}>
              {d.name}
            </Link>
          ))}
        </ul>
      </nav>
      <div>
        <ul>
          {socialLinks.map((sl, index) => (
            <li key={index}>
              <a
                href={sl.link}
                onClick={onClick}
                target='_blank'
                rel='noreferrer noopener'
              >
                {<sl.icon />}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </ContentStyle>
  );
};

export default Content;
