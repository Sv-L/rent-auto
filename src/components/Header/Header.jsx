import Container from 'components/Container';
import MobileMenu from 'components/MobileMenu';
import NavList from 'components/NavList';
import { useEffect, useState } from 'react';
import { FaCarAlt } from 'react-icons/fa';
import { HeaderStyles, SectionStyles } from './Header.styled';

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1240);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <SectionStyles>
      <Container>
        <HeaderStyles>
          <div>
            <FaCarAlt />
            <p>
              <span>Rent</span>Auto
            </p>
          </div>
          {isMobile ? <MobileMenu /> : <NavList />}
        </HeaderStyles>
      </Container>
    </SectionStyles>
  );
};
export default Header;
