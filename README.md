# OH! Frontend

## 네이밍 규칙

### ✅ Commit log

```
feat : 새로운 기능 추가
env : 개발 환경 관련 설정
fix : 버그 수정
style : 코드 스타일 수정 (세미 콜론, 인덴트 등의 스타일적인 부분만)
refactor : 코드 리팩토링 (더 효율적인 코드로 변경 등)
design : CSS 등 디자인 추가/수정
comment : 주석 추가/수정
docs : 내부 문서 추가/수정
test : 테스트 추가/수정
chore : 빌드 관련 코드 수정
rename : 파일 및 폴더명 수정
remove : 파일 삭제
```

### ✅ Branch Naming

```
feat/#이슈번호
```

### ✅ Issue Naming

```
[커밋 로그 명] 주요 기능 명
ex) [feat] ~~기능 추가
```

### ✅ Requests Naming

```
[#이슈넘버] 주요 기능 명
ex) [#4] ~~기능 추가
```

## 폴더 구조

```
📂 src
┣ 📂 api
┣ 📂 assets                   # 폰트, 이미지 ,아이콘
┃  ┣ 📂 images
┃  ┣ 📂 fonts
┣ 📂 components               # 공용 컴포넌트
┃  ┣ 📂 Modal
┃  ┣ 📂 SideBar
┃  ┣ ...
┣ 📂 constant
┣ 📂 hooks                    # 커스텀훅
┣ 📂 pages                    # 페이지 컴포넌트
┃  ┣ 📂 Home
┃  ┣ 📂 GroupChatList
┃  ┣ 📂 Login
┃  ┃  ┣ LoginBox.tsx
┃  ┃  ┣ index.tsx
┃  ┣ ...
┣ 📂 routes
┣ 📂 utils
┣ 📂 states                   # 전역상태
┣ 📂 styles                   # 스타일테마
┣ 📂 @types                   # 타입스크립트 공용 인터페이스
┣ App.tsx
┣ index.tsx

```

## 기타 규칙

```
- 컴포넌트들은 기본적으로 PascalCase(대문자 시작) 제작
- 상위 폴더는 기본적으로 camelCase(소문자 시작) 시작
- 상수화 파일 제외 모든 변수, 함수명은 camelCase로 시작
- 스타일 컴포넌트는 같은 파일 내에 기재
```
