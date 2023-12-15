<div align=center>

# <b>OH! NOLZA</b><p style="font-weight: 100; font-size: 17px">2023-11 MINI PROJECT</p>

</div>

## 목차

<a href="#getting-started">프로젝트 시작</a>  
<a href="#Introduction">프로젝트 소개</a>  
<a href="#function">주요 기능</a>  
<a href="#stack">기술 스택</a>  
<a href="#contributors">컨트리뷰터</a>  
<a href="#error">에러해결/추가기능</a>  
<a href="#review">회고</a>

<br>

<div id="getting-started">

## ⏸️ 시작하기

</div>

<h3>

<center>
<a href="https://dashing-tiramisu-cbdade.netlify.app/">ONOLZA 바로가기</a>

</center>

</h3>

### TEST ID

```
> Test ID : rlaxmrgml@naver.com
> Test PW : zxc123
```

<br/>

### for Developer

```
git clone https://github.com/TeamOHJO/Frontend.git
npm ci
npm run dev
```

<br>

**[프론트엔드 GITHUB 래포지토리](https://github.com/TeamOHJO/Frontend)**

**[백엔드 GITHUB 레포지토리 ](https://github.com/TeamOHJO/yanoljaProject-Backend)**

<br>

<div id ="Introduction">

<br />

## 👊🏻 프로젝트 소개

> 숙박 예약 서비스 <br>
> 개발기간: 2023.11.20~2023.11.30

</div>

<br>

<p>
1. [패캠 X 야놀자] 미니 프로젝트로 숙박 예약 서비스를 제공합니다.
</p>

<p>
2. 사용자는 자신이 원하는 숙소를 카테고리를 통해 찾아보고, 장바구니에 담아두기도 하고, 좋아요 기능을 통해<br>
위시리스트에 추가할 수도 있습니다. 마음에 드는 숙소를 예약하여 여행을 만끽하세OH!
</p>

<br>
<br>

<div id="function">

## 💡 주요 기능 및 소개

### [시연영상](https://drive.google.com/file/d/1Zn6JjOQic1nSQxzEyUCFS1RI3b7ESZOV/view?pli=1)

#### 플로우차트

<img width="4495" alt="플로우" src="https://github.com/TeamOHJO/Frontend/assets/38286505/9050c524-5243-4505-97b0-a0b074d3bbcf">

<br>

#### 와이어프레임

<img width="3047" alt="Section 2" src="https://github.com/TeamOHJO/Frontend/assets/38286505/0d53b656-ad7c-4d91-b858-df9bd9e5ecb5">

<br>
<br>

<div id="stack">

## 🔨기술 스택

</div>                                
 <img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black"><img src="https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white">
<br>                                                                                            
<img src="https://img.shields.io/badge/Chakra--UI-319795?style=for-the-badge&logo=chakra-ui&logoColor=white"><img src="https://img.shields.io/badge/styledcomponents-DB7093?style=for-the-badge&logo=styled-components&logoColor=white"><img src="https://img.shields.io/badge/recoil-3578E5?style=for-the-badge&logo=recoil&logoColor=white" /><br><img src="https://img.shields.io/badge/git-F05032?style=for-the-badge&logo=git&logoColor=white"> <img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white"><img src="https://img.shields.io/badge/figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white"><br><img src="https://img.shields.io/badge/vite-646CFF?style=for-the-badge&logo=vite&logoColor=white">
<br>
<br>

## 🔥 요구사항

<details>
    <summary> 필수요구사항</summary>
    <br/>
    ✅ 회원가입 가능<br> ✅기본 정보는 이메일 주소와, 비밀번호 이름.<br><br> ✅이메일과 비밀번호로 로그인 가능. <br> ✅회원 정보를 저장해둔 데이터베이스를 검색하여 해당 사용자가 유효한 사용자 인지 판단.<br>✅상품 조회(전체, 개별), 회원 가입은 로그인 없이 사용 가능.<br> ✅이 외 기능은 로그인이 필요.<br><br> ✅데이터베이스에서 전체 상품 목록을 GET.<br> ✅이미지, 상품명, 상품가격을 기본으로 출력.<br> ✅재고에 따라 품절일 경우, 버튼 비활성화를 통해 품절 여부를 출력.<br> ✅옵션 카테고리를 분류하여, 상품을 출력<br> ✅한 페이지에 출력되는 상품 개수는 팀별로 정하여, 페이징.<br><br> ✅상세 정보를 상품에 저장해 둔 데이터베이스에서 GET.<br> ✅이미지, 상품명, 상품가격, 상품 상세 소개 (1줄 이상)을 기본으로 출력.<br> ✅재고에 따라 품절일 경우 예약하기 버튼을 비활성화.<br><br> ✅상품 상세 소개 페이지에서 상품 옵션(날짜, 숙박, 인원)을 선택.<br> ✅이메일과 비밀번호로 로그인할 수 있습니다.<br> ✅이메일과 비밀번호로 로그인할 수 있습니다.<br> ✅이메일과 비밀번호로 로그인할 수 있습니다.<br> ✅룸 형태의 상품들로 구성하여 상품을 제공.<br><br> ✅장바구니 담기 버튼을 클릭하면 선택한 상품이 장바구니에 담김.<br><br> ✅장바구니에 담긴 상품 데이터 (이미지, 상품명, 옵션 등)에 따른 상품별 구매 금액, 전체
주문 합계 금액 등을 화면에 출력.<br> ✅체크 박스를 통해 결제할 상품을 선택/제외.<br> ✅주문하기 버튼을 통해 주문/결제 화면으로 이동.<br><br>✅장바구니에서 주문하기 버튼 또는 개별 상품 조회 페이지에서 주문.<br> ✅만 14세 이상 이용 동의를 체크 박스로 입력 받으면, 화면 최하단에 결제하기 버튼이 활성화.<br><br> ✅결제하기 버튼을 클릭 —> 상품을 바로 주문.<br> ✅주문을 저장하는 데이터베이스에 주문 정보를 저장.<br><br> ✅결제를 성공적으로 처리하면, 주문한 상품(들)에 대한 주문 결과를 출력.<br><br> ✅별도 주문 내역 페이지에 여태 주문한 모든 이력을 출력.<br>
</details>

<br>

## 📘 폴더 구조

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

<br>
<br>

<div id=contributors>
 
## 🙋‍♀️ Contributors

</div>

| <img src="https://avatars.githubusercontent.com/u/83493231?v=4" width="150px" /> | <img src="https://avatars.githubusercontent.com/u/38286505?v=4" width="150px" /> | <img src="https://avatars.githubusercontent.com/u/57976371?v=4" width="150px" /> |       <img src="https://avatars.githubusercontent.com/u/139190686?v=4" width="150px" />       | <img src="https://avatars.githubusercontent.com/u/139193612?v=4" width="150px" /> |
| :------------------------------------------------------------------------------: | :------------------------------------------------------------------------------: | :------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------: |
|                   FE: [김특희](https://github.com/turkey-kim)                    |                   FE: [최재훈](https://github.com/zoeyourlife)                   |                   FE: [진정민](https://github.com/JeongMin83)                    |                         FE: [김다빈](https://github.com/dabin-Hailey)                         |                    FE: [신하연](https://github.com/gkdus2217)                     |
|             메인페이지 <br> 숙소 검색 연동 <br> 내 정보 관리 페이지              |                        UX/UI 디자인<br> 예약/결제 페이지                         |         숙소/객실 상세 페이지<br> 내 리뷰 관리 페이지<br> 지도 API 연동          | 위시리스트 페이지<br> 장바구니 페이지 <br> 파이어베이스 연동 <br> 내 리뷰 작성 및 이미지 처리 |                     로그인/회원가입 페이지<br> 토큰 관리 구현                     |

<br/>

<div id=error>

<br>

## 🔨에러해결/추가기능

### 에러

<details>
    <summary> 스크롤 하단 포커싱 문제</summary>
    <br>
   <li>에러</li>
   : 숙소 리스팅 페이지에서 ‘더보기’ 버튼 클릭 시,

브라우저가 버튼을 앵커링하여 스크롤이 최하단으로 이동되는 UX 저하 문제 발생.  
(유저가 스크롤을 내리며 최신 목록을 확인하지 못하게 됨)
<br>

   <li>원인</li>
   : 크롬 최신 브라우저의 ‘스크롤 앵커링’ 기능에 의해 발생.

페이지의 길이가 길어져도 ‘더보기’버튼이 자동으로 앵커링되어 스크롤이 최하단을 바라봄.

‘스크롤 앵커링’ : 추가 로딩과 같은 이유로 페이지 내의 길이가 변경되더라도,  
 스크롤위치를 유저가 보고있는 객체 위치로 앵커링하는 크롬 브라우저의 최신 기능.
<br>

   <li>해결</li>
   : 전역 css파일에서 스크롤 앵커링을 취소하는 명령어를 입력하여 해결.  
   
   더보기 버튼을 클릭하여도, 더이상 스크롤이 하단으로 포커싱되지 않아 스크롤을 내리며 추가 목록 확인 가능.

![스크린샷 2023-12-15 오후 2 53 40](https://github.com/TeamOHJO/Frontend/assets/83493231/796e46a0-904c-4d0d-acba-68e3c44d2cae)

 <br>
</details>
<details>
    <summary> API 다중요청 문제</summary>
    <br>
   <li>에러</li>
   : 로그인, 회원가입, 더보기 등의 api 호출 버튼을 다중 클릭 시 다중 요청 발생

   <br>

   <li>원인</li>
   : 기능적 에러가 아니라, 다중요청을 막아줄 수 있는 특정 조치가 필요

   <br>

   <li>해결</li>
   : 호출이 발생했을 시, 특정 시간 동안에는 더 이상의 호출을 받지 않도록 쓰로틀링을 적용.

재사용 가능한 쓰로틀링 커스텀 훅을 작성하여, API 호출 버튼에 적용.

![스크린샷 2023-12-15 오후 2 56 36](https://github.com/TeamOHJO/Frontend/assets/83493231/6d08d30e-ce46-439c-97bb-58a57f37f36d)
<br>
<br>

</details>

### 추가기능

<details>
    <summary> 소셜 로그인 연동</summary>
    
<br>

<li>기능 구현</li> <br>
    :서드파티 로그인 성공 시, 클라이언트 주소로 리다이렉팅되어 전달된 jwt토큰을 통하여 로그인 연동. 
    
<br>

![스크린샷 2023-12-15 오후 3 02 12](https://github.com/TeamOHJO/Frontend/assets/83493231/834cbd7e-6115-4fb8-b1f1-838749367a2d)

<br>

<li>코드</li> <br>
    : 리다이렉팅된 주소를 처리하는 컴포넌트에서, 로그인 성공을 통해 서버로부터 발급받은 토큰 및 유저정보를 처리

<br>

![스크린샷 2023-12-15 오후 3 01 10](https://github.com/TeamOHJO/Frontend/assets/83493231/49c62652-076b-4c09-8887-d1759d83f836)
<br>
<br>

</details>

 </div>

<div id="review">
<br>

## 👊🏻 회고

## 김다빈

#### 느낀점

: 기능을 추가하는 등의 기능적 보완보단 기존에 작성했던 코드를 더 클린하게 수정하고, 1차 PR에서 멘토님께 피드백 받은 부분을 위주로 리팩토링을 진행하였습니다.

#### 회고

1.  비동기 요청의 응답을 받아 에러 처리하는 부분을 리팩토링할 때 힘들었습니다.  
    :

2.  하나의 함수가 하나의 기능만 할 수 있도록 사이드 이펙트를 줄이고, 순수함수로 만드는 것이 생각보다 어려웠습니다.  
    : 굉장히 기본적인 개념이지만 실제로 기능 개발을 하면서 함수를 생성할 때 하나의 함수가 한 가지 기능만 하도록 만드는 것이 쉽지 않았습니다. 시간이 없으니까, 편하니까 등의 이유로 하나의 함수 내부에서 여러가지 작업을 했는데, 실제로 사이드 이펙트가 발생하지는 않았지만(혹시 발생했더라도 발견하지 못한 걸수도 있습니다만) 나중에 이것이 엄청난 사이드 이펙트를 불러올 수 있을지도 모른다고 생각하니 리팩토링 기간이 생기고 가장 먼저 해야겠다 생각한 작업이었습니다.  
    <br>
    이미 여러 기능을 담고 있는 함수를 여러 개로 쪼갠다는 것을 생각처럼 단순하지 않았고, 처음 함수를 만들 때보다 더 많은 시간이 필요했습니다. 이에 처음부터 제대로 된 함수를 작성하는 것이 얼마나 중요한지 깨달았습니다.

<br>

## 김특희

#### 느낀점

: 에러/추가기능/멘토링 피드백 리펙토링을 진행하였고, 에러 및 UX를 저하하는 부분들을 우선적으로 리펙토링 했습니다.

특정 기능을 구현할 때, 기능에 대한 정확한 이해가 우선되어야 한다는 점을 느꼈습니다. 정확한 이해가 선행되어야 사이드이펙트 발생 가능성을 덜 수 있고, 팀원 간의 소통에도 다소 도움을 주는 것 같습니다.

또한 기능 개발도 중요하지만, 못지 않게 중요한게 팀원 간의 커뮤니케이션이라 느꼈습니다. 현재 자신이
구현하는 것이 무엇이고 이를 위해 무엇이 요구되는지 납득가능하게 설명할 수 있는 것이 팀워크에서 정말 중요하다 느꼈습니다.

#### 회고

- 컨벤션

  : 초반에 합의한 컨벤션을 지키는 것이 어려웠습니다. 빨리 개발을 진행하려다보니 초반에 컨벤션을 단단하게 잡지 못한 부분들이 있었고, 이러한 부분에서 재합의를 해야하거나 조정하게 되는 부분들이 있었습니다. 또한 eslint 설정 부분에서 프로젝트 기간에 맞지 않게 과한 코드 컨벤션을 설정하여, 코드 컨벤션이 변동되는 경우가 종종 발생했습니다.

  정해진 컨벤션 내에서 규칙있게 개발하는 것이 프로젝트를 지속하며 관리하는 기초이지 않을까 느꼈습니다. 특히 다른 팀원의 코드를 볼 때, 공통된 컨벤션이 다른 팀원의 코드를 이해하는데 큰 도움이 되었습니다. 따라서 이러한 부분을 초반에 단단하게 잡고, 팀원들끼리도 숙지하며 개발하는 것이 중요한 것 같습니다. 과한 부분은 덜어내고 필요한 부분은 모두가 지킬 수 있도록 하여, 변동 가능성을 최소화할 수 있는 컨벤션을 수립하는게 중요한 것 같습니다.

- 에러해결

  : 결과물을 테스트해보며 놓친 에러들이 몇몇 있었습니다. 이런 에러를 찾아내고 또 왜 에러가 발생하는지 이유와 해결방법을 찾는 과정이 어려웠습니다. 막상 해결되었을 때의 코드는 10줄이 채 되지 않는 경우도 있지만, 실제로 해당 에러의 원인과 해결방법을 찾아내고 시도하는데는 많은 시간이 걸린다는 것을 느끼게 됩니다.

   <br>

## 진정민

#### 느낀점

: 리팩토링할 때마다 유지보수를 고려하지 않은 완성을 위한 코드를 작성했다는 생각을 많이 하게 되고 아직 개발자로서 역량이 부족하다는 걸 많이 느낍니다.

그래서 새로운 기능을 추가하기 보단 코드를 개선하는 방안에 대한 고민을 많이 하게 되었고, 다음 프로젝트를 진행하면 재사용성을 사전에 판단해 코드를 작성해보고자 합니다.

#### 회고

- 컨벤션

  : 혼자 할 때도 정해진 컨벤션을 지켜 일관성 있는 코드를 짜는 것이 중요하지만 협업을 할 때는 더 중요해지는 것 같습니다. 그래서 컨벤션을 같이 정하고 지켜나가는 게 아직은 익숙하지 않아 제가 잘 지키지 못한 것 같아 아쉬웠습니다.

- 리뷰

  : 최대한 다른 사람들의 코드를 리뷰하며 제 코드도 작성해 프로젝트를 전반적으로 이해를 하고 싶었으나 그렇지 못하고 본인 코드와 완성에 더 초점을 맞춰 개발을 진행해서 리팩토링을 할 때도 더 많은 노력이 필요했던 것 같아 리뷰의 중요성을 깨달았습니다.

</div>
