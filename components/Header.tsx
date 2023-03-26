import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import { RootState } from '../store/rootReducer';
// import { selectCurrentUser, setCurrentUser } from '../redux/currentUserSlice';

const Header: React.FC = () => {
  const router = useRouter();
  // const currentUser = useSelector((state: RootState) => selectCurrentUser(state));

  const handleLogout = () => {
    // 로그아웃 버튼 클릭 시, 현재 사용자 정보를 제거하고 로그인 페이지로 이동합니다.
    // setCurrentUser(null);
    router.push('/login');
  }

  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link href="/">
              Home
            </Link>
          </li>
          <li>
            <Link href="/board">
              Board
            </Link>
          </li>
          <li>
            <Link href="/myPage">
              myPage
            </Link>
          </li>

        </ul>
      </nav>
    </header>
  );
};

export default Header;
