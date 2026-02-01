const Index = () => {
    return (
        <body id="main">
            {/* <!-- 스킵 -->*/}
            <div id="skipToContent">
                <ul>
                    <li><a href="#container1">본문 바로가기</a></li>
                    <li><a href="#gnb">주메뉴 바로가기</a></li>
                    <li><a href="#header">상위메뉴 바로가기</a></li>
                    <li><a href="#footers">하위메뉴 바로가기</a></li>
                </ul>
            </div>
            {/* <!-- /스킵 -->*/}
            {/* <!-- 헤더 -->*/}
            <header id="header">
                <div class="h_inner center flex_btw">
                    <h1 class="logo">
                        <a href="./index.html"></a>
                    </h1>
                    <div class="gnb_wrap">
                        <div class="top_area flex_end">
                            <div class="size_btn flex_ctr">
                                <a href="#none">
                                    +
                                </a>
                                <a href="#none">
                                    -
                                </a>
                                <span>화면크기</span>
                            </div>
                            <div class="lang_btn flex_ctr">
                                <div class="lang_ic"></div>
                                <a href="#none">KOR</a>
                                <a href="#none">ENG</a>
                            </div>
                        </div>
                        <div class="btm_area flex_btw">
                            <ul class="gnb flex_ctr">
                                <li>
                                    <a href="#none">
                                        <span>박물관 소개</span>
                                    </a>
                                    <ul class="gnb_menu">
                                        <li>
                                            <a href="./sub1.html">
                                                <span>소개</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="./sub1.html">
                                                <span>연혁</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="./sub1.html">
                                                <span>조직 및 업무현황</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="./sub1.html">
                                                <span>학술적 가치</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="./sub1.html">
                                                <span>홍보대사</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="./sub1.html">
                                                <span>찾아오시는 길</span>
                                            </a>
                                        </li>
                                    </ul>
                                </li>

                                <li>
                                    <a href="#none">
                                        <span>이용안내</span>
                                    </a>
                                    <ul class="gnb_menu">
                                        <li>
                                            <a href="./sub2.html">
                                                <span>관람코스</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="./sub2.html">
                                                <span>공룡박물관</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="./sub2.html">
                                                <span>보호각</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="./sub2.html">
                                                <span>야외전시</span>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="#none">
                                        <span>전시관</span>
                                    </a>
                                    <ul class="gnb_menu">
                                        <li>
                                            <a href="./sub1.html">
                                                <span>상설체험</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="./sub1.html">
                                                <span>기획전시</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="./sub1.html">
                                                <span>특별행사</span>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="#none">
                                        <span>자료실</span>
                                    </a>
                                    <ul class="gnb_menu">
                                        <li>
                                            <a href="./sub2.html">
                                                <span>홍보관</span>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="#none">
                                        <span>참여마당</span>
                                    </a>
                                    <ul class="gnb_menu">
                                        <li>
                                            <a href="./sub1.html">
                                                <span>새소식</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="./sub1.html">
                                                <span>카드뉴스</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="./sub1.html">
                                                <span>관람후기</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="./sub1.html">
                                                <span>질문과 답변</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="./sub1.html">
                                                <span>박물관에 바란다</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="./sub1.html">
                                                <span>포토갤러리</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="./sub1.html">
                                                <span>포토이벤트</span>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <div class="gnb_back">
                                    <div class="back_wrap flex_str center">
                                        <div class="none_box"></div>
                                        <div class="back_img"></div>
                                        <div class="back_box"></div>
                                    </div>
                                </div>

                            </ul>

                            <div class="right_box flex_ctr">
                                <div class="search_btn">
                                    <a href="#none" class="search_ic">
                                        <i class="fa fa-search">
                                            <span class="blind">검색</span>
                                        </i>
                                    </a>
                                    <form method="post" class="slide_search">
                                        <input type="text" placeholder="검색어를 입력하세요" />
                                            <div class="close_ic"><span class="blind">닫기 아이콘</span></div>
                                    </form>
                                </div>
                                <a href="#none" class="menu_ic">
                                    <div class="menu_ic_box"></div>
                                    <div class="menu_ic_box"></div>
                                    <div class="menu_ic_box"></div>
                                    <div class="menu_ic_box"></div>
                                    <span class="blind">메뉴</span>
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
                <div class="gnb_black_back"></div>
            </header>
            {/* <!-- 모바일메뉴 -->*/}
            <div id="m_menu">
                <div class="m_menu_wrap">
                    <div class="m_menu_box">
                        <a href="#none" class="close_ic">
                            <span class="blind">
                                닫기 아이콘
                            </span>
                        </a>
                        <ul class="m_inner flex_ctr">
                            <li>
                                <a href="#none">
                                    <span>박물관 소개</span>
                                </a>
                                <ul class="m_list">
                                    <li>
                                        <a href="./sub1.html">
                                            <span>소개</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="./sub1.html">
                                            <span>연혁</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="./sub1.html">
                                            <span>조직 및 업무현황</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="./sub1.html">
                                            <span>학술적 가치</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="./sub1.html">
                                            <span>홍보대사</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="./sub1.html">
                                            <span>찾아오시는 길</span>
                                        </a>
                                    </li>
                                </ul>
                            </li>

                            <li>
                                <a href="#none">
                                    <span>이용안내</span>
                                </a>
                                <ul class="m_list">
                                    <li>
                                        <a href="./sub2.html">
                                            <span>관람코스</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="./sub2.html">
                                            <span>공룡박물관</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="./sub2.html">
                                            <span>보호각</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="./sub2.html">
                                            <span>야외전시</span>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="#none">
                                    <span>전시관</span>
                                </a>
                                <ul class="m_list">
                                    <li>
                                        <a href="./sub1.html">
                                            <span>상설체험</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="./sub1.html">
                                            <span>기획전시</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="./sub1.html">
                                            <span>특별행사</span>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="#none">
                                    <span>자료실</span>
                                </a>
                                <ul class="m_list">
                                    <li>
                                        <a href="./sub2.html">
                                            <span>홍보관</span>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="#none">
                                    <span>참여마당</span>
                                </a>
                                <ul class="m_list">
                                    <li>
                                        <a href="./sub1.html">
                                            <span>새소식</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="./sub1.html">
                                            <span>카드뉴스</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="./sub1.html">
                                            <span>관람후기</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="./sub1.html">
                                            <span>질문과 답변</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="./sub1.html">
                                            <span>박물관에 바란다</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="./sub1.html">
                                            <span>포토갤러리</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="./sub1.html">
                                            <span>포토이벤트</span>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                        <div class="m_inner2 flex_ctr">
                            <ul class="left_box">
                                <li>
                                    <a href="#none">
                                        <span>박물관 소개</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#none">
                                        <span>이용안내</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#none">
                                        <span>전시관</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#none">
                                        <span>자료실</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#none">
                                        <span>참여마당</span>
                                    </a>
                                </li>
                            </ul>
                            <div class="right_box">
                                <ul class="m_list">
                                    <li>
                                        <a href="./sub1.html">
                                            <span>소개</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="./sub1.html">
                                            <span>연혁</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="./sub1.html">
                                            <span>조직 및 업무현황</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="./sub1.html">
                                            <span>학술적 가치</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="./sub1.html">
                                            <span>홍보대사</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="./sub1.html">
                                            <span>찾아오시는 길</span>
                                        </a>
                                    </li>
                                </ul>

                                <ul class="m_list">
                                    <li>
                                        <a href="./sub2.html">
                                            <span>관람코스</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="./sub2.html">
                                            <span>공룡박물관</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="./sub2.html">
                                            <span>보호각</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="./sub2.html">
                                            <span>야외전시</span>
                                        </a>
                                    </li>
                                </ul>
                                <ul class="m_list">
                                    <li>
                                        <a href="./sub1.html">
                                            <span>상설체험</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="./sub1.html">
                                            <span>기획전시</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="./sub1.html">
                                            <span>특별행사</span>
                                        </a>
                                    </li>
                                </ul>
                                <ul class="m_list">
                                    <li>
                                        <a href="./sub2.html">
                                            <span>홍보관</span>
                                        </a>
                                    </li>
                                </ul>
                                <ul class="m_list">
                                    <li>
                                        <a href="./sub1.html">
                                            <span>새소식</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="./sub1.html">
                                            <span>카드뉴스</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="./sub1.html">
                                            <span>관람후기</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="./sub1.html">
                                            <span>질문과 답변</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="./sub1.html">
                                            <span>박물관에 바란다</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="./sub1.html">
                                            <span>포토갤러리</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="./sub1.html">
                                            <span>포토이벤트</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="dec_back1">
                            <div class="dec_back_1"></div>
                        </div>
                        <div class="dec_back2">
                            <div class="dec_back_1"></div>
                        </div>
                    </div>
                </div>
                <div class="gnb_black_back2"></div>
            </div>
            {/* <!-- /모바일메뉴 -->*/}
            {/* <!-- /헤더 -->*/}
            {/* <!-- 메인1 -->*/}
            <section id="section01" data-aos="fade-up">
                <div class="deco_sqr1">
                    <div class="deco_sqr1-1"></div>
                </div>
                <div class="main_dec">
                    <div class="img_box">
                        <div class="main_img">
                            <span class="blind">메인이미지1</span>
                        </div>
                    </div>
                </div>
                <div class="main_text center" data-aos="fade-up">
                    <h2>Haenam Dinosaur Museum</h2>
                    <h3>한반도 공룡의 파라다이스</h3>
                    <h3>해남공룡박물관에 어서오세요!!</h3>
                    <p>신기한 공룡들의 세계로 함께 떠나보아요</p>
                    <form class="search_form">
                        <input type="text" name="search" />
                            <a href="#none" class="search_btn">
                                <i class="fa fa-search">
                                    <span class="blind">검색 버튼</span>
                                </i>
                            </a>
                    </form>
                </div>
                <div class="reserv_wrap flex_btw" data-aos="fade-up">
                    <div class="cal_wrap">
                        <div class="calender">
                            <div class="box1">
                                <div class="dec_etc flex_ard">
                                    <div class="deco1"></div>
                                    <div class="deco2"></div>
                                </div>
                                <div class="box2">
                                    <p>6월</p>
                                    <p>11일</p>
                                    <p>수요일</p>
                                </div>
                            </div>
                        </div>
                        <div class="dino_reserv" data-aos="fade-up">
                            <a href="#none" class="text_box">
                                <div class="top_box flex_btw">
                                    <h4>관람예약</h4>
                                    <div class="plus_btn"><span class="blind">더보기 아이콘</span></div>
                                </div>
                                <p>회차별로 예약 가능합니다</p>
                            </a>
                        </div>
                    </div>
                    <div class="reserv_menu flex_btw flex_wrap" data-aos="fade-right">
                        <div class="top_box flex_btw flex_wrap">
                            <div class="menu_box">
                                <h5>1회차</h5>
                                <p>09:00-10:30</p>
                                <p>잔여 32명</p>
                                <a class="reserv_btn" href="#none">
                                    예약가능
                                </a>
                            </div>
                            <div class="menu_box">
                                <h5>2회차</h5>
                                <p>11:00-12:30</p>
                                <p>잔여 05명</p>
                                <a class="reserv_btn" href="#none">
                                    예약가능
                                </a>
                            </div>
                        </div>
                        <div class="btm_box flex_btw flex_wrap">
                            <div class="menu_box">
                                <h5>3회차</h5>
                                <p>14:00-15:30</p>
                                <p>잔여 00명</p>
                                <a class="reserv_btn" href="#none">
                                    예약불가
                                </a>
                            </div>
                            <div class="menu_box">
                                <h5>4회차</h5>
                                <p>16:00-17:30</p>
                                <p>잔여 16명</p>
                                <a class="reserv_btn" href="#none">
                                    예약가능
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- /메인1 -->*/}
            {/* <!-- 메인2 -->*/}
            <h2 class="cap_dec1" data-aos="fade-up"><span>Info</span></h2>
            <section id="section02" class="center02 flex_btw">

                <article class="left_bnr" data-aos="fade-right">
                    <div class="left_inner">
                        <div class="back_img"></div>
                        <div class="text_box">
                            <h2 class="cap_dec"><span>해남 공룡박물관</span></h2>
                            <p>
                                한반도의 남쪽 끝에 위치해 공룡들에게 낙원과도 같았던 해남!<br />
                                    함께 한반도 공룡들의 흔적을 탐험해볼까요?
                            </p>
                            <a href="#none" class="bnr_btn">바로가기<span class="btn_ic"></span></a>
                        </div>
                    </div>
                </article>
                <article class="right_bnr" data-aos="fade-left">
                    <div class="right_inner">
                        <div class="text_box">
                            <h2 class="cap_dec">관람안내</h2>
                            <div class="info_wrap">
                                <div class="number_area flex_btw">
                                    <div class="number_inner flex_btw">
                                        <div class="phone_ic"><span class="blind"></span></div>
                                        <h3>061.530.5949</h3>
                                    </div>
                                    <a href="#none">문의하기</a>
                                </div>
                                <div class="info_body">
                                    <ul class="info_top flex_btw">
                                        <li><span>관람시간</span></li>
                                        <ul class="info_right">
                                            <li>09:00 ~ 18:00</li>
                                            <li>
                                                - 7, 8월은 토, 일, 공휴일에 한하여
                                                1시간 연장 운영( 19:00까지) 관람
                                                종료 1시간 전까지 입장 가능
                                            </li>
                                        </ul>
                                    </ul>
                                    <ul class="info_bottom flex_btw">
                                        <li><span>휴관</span></li>
                                        <ul class="info_right">
                                            <li>매주 월요일 (7,8월은 매일 개관)</li>
                                        </ul>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </article>
            </section>
            {/* <!-- /메인2 -->*/}
            {/* <!-- 메인3 -->*/}
            <h2 class="cap_dec1" data-aos="fade-up"><span>Notice</span></h2>
            <section id="section03" class="center02 flex_btw">
                <article class="atc1" data-aos="fade-up">
                    <div class="text_box">
                        <h2 class="cap_dec">새소식</h2>
                        <p>
                            해남 공룡박물관의 새로운 소식들을
                            제공해드려요.
                        </p>

                        <a href="#none"><span>More</span><span class="back_color"></span><span class="btn_ic"></span></a>
                    </div>
                </article>
                <article class="atc_box act_first" data-aos="fade-down">
                    <a class="act_wrap" href="#none">
                        <div class="back_img"></div>
                        <div class="text_box">
                            <p>[모든연령]</p>
                            <p>
                                공룡의 날 맞이 6월 공연
                                일정 및 이벤트 안내 (주말)
                            </p>
                            <p>View<span class="btn_ic"></span></p>
                        </div>
                    </a>
                </article>
                <article class="atc_box act_second" data-aos="fade-up">
                    <a class="act_wrap" href="#none">
                        <div class="back_img"></div>
                        <div class="text_box">
                            <p>[모든연령]</p>
                            <p>
                                가정의 달 맞이 특별 공연
                                안내
                            </p>
                            <p>View<span class="btn_ic"></span></p>
                        </div>
                    </a>
                </article>
                <article class="atc_box act_third" data-aos="fade-down">
                    <a class="act_wrap" href="#none">
                        <div class="back_img"></div>
                        <div class="text_box">
                            <p>[모든연령]</p>
                            <p>
                                2025 해남공룡대축제 주요
                                행사 및 일정표 안내
                            </p>
                            <p>View<span class="btn_ic"></span></p>
                        </div>
                    </a>
                </article>
            </section>
            {/* <!-- /메인3 -->*/}
            {/* <!-- 메인4 -->*/}
            <section id="section04">
                <div class="article_wrap center02 flex_btw">
                    <article class="notice_box notice1" data-aos="fade-right">
                        <div class="box_wrap">
                            <div class="cap_box flex_btw">
                                <h2 class="cap_dec"><a href="#none"><span>Q&A</span></a><span>/</span><a href="#none"><span>관람후기</span></a></h2>
                                <a href="#none" class="btn_ic"><span class="blind">버튼 아이콘</span></a>
                            </div>
                            <ul class="notice_menu">
                                <li>
                                    <a href="#none">
                                        <span>
                                            어린이 물놀이 체험장 7. 12.(토) 개장예정 ★
                                        </span>
                                        <span>2025.06.22</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#none">
                                        <span>
                                            해남 어린이 공룡 탐험대 발대식 및 1기 탐험대 행사 일정 안내
                                        </span>
                                        <span>2025.06.18</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#none">
                                        <span>
                                            (공지)2025년 해남공룡박물관 전국 캐릭터 캘리그라피 공모전 일정 변경 안내
                                        </span>
                                        <span>2025.06.18</span>
                                    </a>
                                </li>

                                <li>
                                    <a href="#none">
                                        <span>
                                            ❤️공룡의 날 맞이 6월 공연 일정 및 이벤트 안내❤️
                                        </span>
                                        <span>2025.06.05</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#none">
                                        <span>
                                            ❤️가정의 달 맞이 특별 공연 안내❤️
                                        </span>
                                        <span>2025.05.17</span>
                                    </a>
                                </li>
                            </ul>
                            <ul class="notice_menu1-1">
                                <li>
                                    <a href="#none">
                                        <span>
                                            안녕하세요 2025어린이날 공룡축제 관람 후기 남겨봅니다
                                        </span>
                                        <span>2025.06.12</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#none">
                                        <span>
                                            어른들도 즐기기 좋은 박물관!!
                                        </span>
                                        <span>2025.06.09</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#none">
                                        <span>
                                            친절에 감사드립니다
                                        </span>
                                        <span>2025.06.01</span>
                                    </a>
                                </li>

                                <li>
                                    <a href="#none">
                                        <span>
                                            해남공룡박물관 관람 후기
                                        </span>
                                        <span>2025.05.25</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#none">
                                        <span>
                                            아래 글쓴님 보세요
                                        </span>
                                        <span>2025.05.11</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </article>
                    <article class="notice_box notice2" data-aos="fade-up">
                        <div class="box_wrap">
                            <div class="cap_box flex_btw">
                                <h2 class="cap_dec">갤러리</h2>
                                <a href="#none" class="btn_ic"><span class="blind">버튼 아이콘</span></a>
                            </div>
                            <div class="notice_menu2 flex_btw flex_wrap">
                                <a href="#none">
                                    <div class="img_box"></div>
                                    <p>박물관 행사</p>
                                    <span>2025.05.26</span>
                                </a>
                                <a href="#none">
                                    <div class="img_box"></div>
                                    <p>제 3보호각(대형공룡관) 미디어 포토존</p>
                                    <span>2025.05.14</span>
                                </a>
                                <a href="#none">
                                    <div class="img_box"></div>
                                    <p>어린이 체험장 3D 모션 스케치</p>
                                    <span>2025.05.05</span>
                                </a>
                                <a href="#none">
                                    <div class="img_box"></div>
                                    <p>박물관 행사2</p>
                                    <span>2025.05.01</span>
                                </a>
                            </div>
                        </div>
                    </article>
                    <article class="ad_box" data-aos="fade-left">
                        <div class="back_color">
                            <div class="back_deco">
                                <div class="back_deco1-1"></div>
                            </div>
                            <span class="deco_letter">Haenam</span>
                        </div>
                        <div class="box_wrap">
                            <div class="cap_box flex_str">
                                <h2 class="cap_dec"><a href="#none">홍보관</a></h2>
                                <a href="#none" class="btn_ic"><span class="blind">버튼 아이콘</span></a>
                            </div>
                            <div class="box_body">
                                <iframe width="100%" src="https://www.youtube.com/embed/poc5TvUQpHE?si=wuQWm6jIEz3Yu0A8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                                <div class="text_box">
                                    <div class="text_item">
                                        <div class="text_area">
                                            <p><span>해남 공룡박물관</span></p>
                                            <p><span>2025.06.10</span></p>
                                        </div>
                                        <a href="#none" class="btn_box">영상 더보기<span class="btn_ic"><span class="blind">버튼 아이콘</span></span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </article>
                </div>
            </section>
            {/* <!-- /메인4 -->*/}
            {/* <!-- 하단메뉴 -->*/}
            <footer id="footer">
                <div class="back_deco">
                    <div class="deco1">
                        <div class="deco1-1"></div>
                    </div>
                    <div class="deco2">
                        <div class="deco2-1"></div>
                    </div>
                </div>
                <div class="ft_inner flex_btw">
                    <h1 class="logo">
                        <a href="#none">
                            <span class="blind">로고</span>
                        </a>
                    </h1>
                    <div class="ft_wrap flex_btw">
                        <div class="info">
                            <ul class="top_info flex_str flex_wrap">
                                <li>
                                    <a href="#none">
                                        사이트 소개
                                    </a>
                                </li>
                                <li>
                                    <a href="#none">
                                        이용약관
                                    </a>
                                </li>
                                <li>
                                    <a href="#none">
                                        개인정보처리방침
                                    </a>
                                </li>
                                <li>
                                    <a href="#none">
                                        이메일 무단수집거부
                                    </a>
                                </li>
                                <li>
                                    <a href="#none">
                                        문의하기
                                    </a>
                                </li>
                            </ul>
                            <ul class="mid_info flex_str">
                                <li>
                                    Tel : 061.530.5949
                                </li>
                                <li>
                                    Fax : 061.532.7226
                                </li>
                            </ul>
                            <address>
                                [59007] 전남 해남군 황산면 공룡박물관길 234
                            </address>
                        </div>
                        <ul class="rel_site">
                            <li class="flex_btw">
                                <p>관련사이트</p><span class="btn_ic"><span class="blind">버튼 아이콘</span></span>
                            </li>
                            <ul class="site_list">
                                <li>
                                    <a href="https://www.haenam.go.kr/index.9is">
                                        해남군청
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.haenam.go.kr/index.9is?contentUid=8ae590de92d7f53c0193423393bf54da">
                                        문화관광
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.haenam.go.kr/index.9is?contentUid=18e3368f655bdbc60166192794d9237d">
                                        고향사랑기부제
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.haenam.go.kr/index.9is?contentUid=18e3368f644b01470164b6b5d2464aa7">
                                        열린군수실
                                    </a>
                                </li>
                            </ul>
                        </ul>
                    </div>
                </div>
            </footer>
            {/* <!-- /하단메뉴 -->*/}
        </body>
    )
}

export default Index;