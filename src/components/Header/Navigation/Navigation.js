import React from 'react';
import useResizeAware from 'react-resize-aware';
import Logo from '../Logo';
import Container from 'components/Container';
import { useSelector } from 'react-redux';
import UserInfo from '../UserInfo';
import {
  HeaderStyled,
  HeaderNavigation,
  HeaderLink,
  HeaderLinksWrapper,
} from './Navigation.styled';
import { getIsLoggedIn } from 'redux/auth/authSelector';

const styles = {
  link: {
    fontWeight: '700',
  },
  isHidden: {
    display: 'none',
  },
};

const Header = () => {
  const [resizeListener, { width }] = useResizeAware();
  const isLogged = useSelector(state => getIsLoggedIn(state));
  const TabletWidth = 768;
  const DesktopWidth = 1280;

  console.log(width);

  return (
    <>
      <HeaderStyled>
        {resizeListener}
        <Container>
          <HeaderNavigation>
            <div>
              <Logo />
            </div>

            <HeaderLinksWrapper>
              {!isLogged && (
                <>
                  <HeaderLink
                    to="/login"
                    stylehidden={styles.isHidden}
                    style={styles.link}
                  >
                    Sign in
                  </HeaderLink>
                  <HeaderLink
                    to="/signup"
                    stylehidden={styles.isHidden}
                    style={styles.link}
                  >
                    Registration
                  </HeaderLink>
                </>
              )}

              {isLogged && (
                <>
                  <HeaderLink to="/diary" style={styles.link}>
                    Diary
                  </HeaderLink>
                  <HeaderLink to="/calculator" style={styles.link}>
                    Calculator
                  </HeaderLink>
                  {width >= TabletWidth && <UserInfo />}
                </>
              )}
            </HeaderLinksWrapper>
          </HeaderNavigation>
        </Container>
      </HeaderStyled>
    </>
  );
};

export default Header;
