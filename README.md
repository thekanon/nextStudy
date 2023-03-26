# 파일 구조

my-app/
├── pages/
│ ├── index.tsx # 메인 페이지 컴포넌트
│ ├── board.tsx # 게시판 페이지 컴포넌트
│ └── mypage.tsx # 마이 페이지 컴포넌트
├── redux/
│ ├── store.ts # 전역 상태 관리를 위한 스토어 파일
│ ├── postsSlice.ts # 게시글 상태를 관리하는 슬라이스 파일
│ └── myPostsSlice.ts # 내 게시글 상태를 관리하는 슬라이스 파일
├── types/
│ └── index.ts # 인터페이스와 타입 정의 파일
├── components/
│ ├── Header.tsx # 페이지 헤더 컴포넌트
│ └── Modal.tsx # 모달 컴포넌트
└── utils/
└── api.ts # API 요청 함수 정의 파일

# 할일

- [x] 가장 기본적인 next 기반 웹 앱 구조 만들기
- [ ] 게시판 페이지 만들기
- [ ] 다이나믹 라우팅으로 게시글 상세 페이지 만들기
- [ ] redux, redux-saga, redux-toolkit 적용하기
- [ ] 로그인 및 마이페이지 기능 구현하기
-
