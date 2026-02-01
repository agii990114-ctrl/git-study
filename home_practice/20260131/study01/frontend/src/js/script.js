$(document).ready(function(){
    /* gnb */
    $("#header .gnb > li").on("mouseenter",function(){
        $(".gnb_menu").stop().slideDown("fast");
        $(".gnb_back").stop().slideDown("fast");
        $(".gnb_black_back").fadeIn("fast");
        $("#header").css("background","rgba(255,255,255,1)")
        $('#header .h_inner .gnb_wrap .btm_area .right_box .search_btn .slide_search').hide()
        
    });

     $("#header .gnb").on("mouseleave",function(){
        $(".gnb_menu").stop().slideUp("fast");
        $(".gnb_back").stop().slideUp("fast");
        $(".gnb_black_back").fadeOut("fast");
        $("#header").css("background","rgba(255,255,255,.7)")
        
    });

    /* 모바일메뉴 */
    $("#header .menu_ic").on("click",function(){
        $("#m_menu").fadeIn("fast");
    });

    $("#m_menu .close_ic").on("click",function(){
        $("#m_menu").fadeOut("fast");
    });

    $("#m_menu .gnb_black_back2").on("click",function(){
        $("#m_menu").fadeOut("fast");
    });

    $(".lang_btn > a").on("click",function(){
        $(this).css("color","#333").siblings().css("color","#999");
    });
    

    $("#m_menu .m_inner2 .left_box li:first").addClass("active");
    
    $("#m_menu .m_inner2 .left_box a").on("click",function(){
        $(this).parent("li").addClass("active").siblings("li").removeClass("active");
        $(this).parent("li").removeClass("active2");
        $("#m_menu .m_inner2 .right_box ul").eq($(this).parent("li").index()).fadeIn().siblings("ul").hide();
        

    });

    $("#m_menu .m_inner2 .left_box a").on("mouseover",function(){
       if($(this).parent("li").hasClass("active")){
        $(this).parent("li").removeClass("active2").siblings("li").removeClass("active2");
       } else {
        $(this).parent("li").addClass("active2").siblings("li").removeClass("active2");
       }
    });
    $("#m_menu .m_inner2 .left_box a").on("mouseleave",function(){
        $(this).parent("li").removeClass("active2");
    });

    /*서브 네비게이션*/

    $("#sub #nav .nav_box .sub_name2").text($("#sub .sub_cap h2 span").text())

    /* 메인페이지 메인4 */

    $("#main #section04 .notice1 .box_wrap .cap_box h2 a:first").addClass("active");
    $("#main #section04 .notice1 .box_wrap .cap_box h2 a").on("click",function(){
        $(this).addClass("active").siblings("a").removeClass("active")
        
    });

    $("#main #section04 .notice1 .notice_menu").addClass("active");
    $("#main #section04 .notice1 .box_wrap .cap_box h2 a").on("click", function(){
        if($(this).children("span").text()==="Q&A"){
            $("#main #section04 .notice1 .notice_menu").addClass("active").siblings("ul").removeClass("active")
        } else {
            $("#main #section04 .notice1 .notice_menu1-1").addClass("active").siblings("ul").removeClass("active")
        }
    });

    
    let $menu = $("#main #section04 .notice1 ul li");
    let $menu_length = $menu.length;
    let i=0;

    for(i; i < $menu_length; i++) {
        if(i%2==1)
        $menu.eq(i).addClass("active")
    }

    $menu.on("mouseover", function(){
        $(this).addClass("active2").siblings("li").removeClass("active2")
    });
    $menu.on("mouseleave", function(){
        $(this).removeClass("active2")
    });


    /*footer*/

    $("#footer .ft_inner .rel_site > li").on("click",function(){
        if($("#footer .ft_inner .rel_site .site_list").hasClass("active")){
            $("#footer .ft_inner .rel_site .site_list").removeClass("active")
            $("#footer .ft_inner .rel_site > li .btn_ic").removeClass("active")
            $("#footer .ft_inner .rel_site .site_list").fadeOut()
        } else {
            $("#footer .ft_inner .rel_site .site_list").addClass("active")
            $("#footer .ft_inner .rel_site .site_list").fadeIn()
            $("#footer .ft_inner .rel_site > li .btn_ic").addClass("active")
        }
    });

    
/*
    $("#footer .ft_inner .rel_site").on("mouseleave",function(){
        $("#footer .ft_inner .rel_site .site_list").removeClass("active")
        $("#footer .ft_inner .rel_site > li .btn_ic").removeClass("active")
        $("#footer .ft_inner .rel_site .site_list").fadeOut()
    });
*/    
    
});
$(document).on("click", function(e) {
        const $target = $(e.target);
        const $footerRel = $('#footer .ft_inner .rel_site .site_list');
        const $footBtn = $ ('#footer .ft_inner .rel_site')
        // slide_search 또는 그 내부를 클릭하지 않았다면 slideUp
        if (!$target.closest($footBtn).length) {
            $footerRel.removeClass("active")
            $("#footer .ft_inner .rel_site > li .btn_ic").removeClass("active")
            $("#footer .ft_inner .rel_site .site_list").fadeOut()
        }
    });

$(document).ready(function() {
    const today = new Date();
    const month = today.getMonth() + 1; // 0부터 시작하니까 +1 해줘야 함
    const day = today.getDate();
    const week = today.getDay();

    const weekDay = ["일", "월", "화", "수", "목", "금", "토"]
    // 선택한 요소에 달을 텍스트로 넣기
    $("#main #section01 .reserv_wrap .calender .box1 .box2 p:nth-child(1)").text(`${month}월`);
     $("#main #section01 .reserv_wrap .calender .box1 .box2 p:nth-child(2)").text(`${day}일`);
     $("#main #section01 .reserv_wrap .calender .box1 .box2 p:nth-child(3)").text(`${weekDay[week]}요일`);
});

//줌

$(document).ready(function() {
    let zoomLevel = 1; // 기본 100%

    // 확대 버튼 클릭
    $("#header .h_inner .gnb_wrap .top_area .size_btn a").eq(0).click(function(e) {
        e.preventDefault();
        zoomLevel += 0.1;
        $("body").css("zoom", zoomLevel);
    });

    // 축소 버튼 클릭
    $("#header .h_inner .gnb_wrap .top_area .size_btn a").eq(1).click(function(e) {
        e.preventDefault();
        zoomLevel = Math.max(0.1, zoomLevel - 0.1); // 최소 0.1 배로 제한
        $("body").css("zoom", zoomLevel);
    });
});

$(document).ready(function() {

    $('#header .h_inner .gnb_wrap .btm_area .right_box .search_ic').on("click",function(){
        $('#header .h_inner .gnb_wrap .btm_area .right_box .search_btn .slide_search').slideToggle("fast")
    });

    $('#header .h_inner .gnb_wrap .btm_area .right_box .search_btn .slide_search .close_ic').on("click",function(){
        $('#header .h_inner .gnb_wrap .btm_area .right_box .search_btn .slide_search ').slideUp("fast")
    });
});

$(document).ready(function() {
    // 닫기 버튼 클릭 시 슬라이드 업
    $('#header .h_inner .gnb_wrap .btm_area .right_box .search_btn .slide_search .close_ic').on("click", function(e) {
        e.stopPropagation(); // 클릭 이벤트가 문서 전체로 퍼지지 않도록 막기
        $('#header .h_inner .gnb_wrap .btm_area .right_box .search_btn .slide_search').slideUp("fast");
    });

    // 문서 전체 클릭 시 (예: 배경 클릭)
    $(document).on("click", function(e) {
        const $target = $(e.target);
        const $slideSearch = $('#header .h_inner .gnb_wrap .btm_area .right_box .search_btn .slide_search');
        const $slideBtn = $ ('#header .h_inner .gnb_wrap .btm_area .right_box')
        // slide_search 또는 그 내부를 클릭하지 않았다면 slideUp
        if (!$target.closest($slideBtn.find(".search_ic")).length) {
            $slideSearch.slideUp("fast");
        }
    });

    // slide_search 내부 클릭 시 이벤트 전파 막기 (닫히는 거 방지)
    $('#header .h_inner .gnb_wrap .btm_area .right_box .search_btn .slide_search').on("click", function(e) {
        e.stopPropagation();
    });
    
});

//맵 버튼 클릭
$(document).ready(function(){
    $("#sub.sub1 .map_wrap .map_box .map_btn .btn1:first").addClass("active");
    $("#sub.sub1 .map_wrap .map_box .map_btn .btn1").on('click',function(){
        $(this).addClass("active").siblings().removeClass("active");

        let $btn_eq = $(this).index()
        $("#sub.sub1 .map_wrap .map_box .map_img_box .map_line11").eq($btn_eq).fadeIn().siblings(".map_line11").hide();
        $("#sub.sub1 #section01 .map_btm .left_box p").eq($btn_eq).show().siblings("p").hide()
        $("#sub.sub1 #section01 .map_btm .right_box .right_info ").eq($btn_eq).addClass("active").siblings(".right_info").removeClass("active");

    });
});

//맵 버튼 높이

function syncMapBoxHeight() {
    const imgHeight = $(".map_img_box img").eq(0).height();
    $(".map_box").height(imgHeight);
  }

function wrapHeight() {
    
    $(".map_box").css("height", "");
  }

  $(window).on("load resize", function() {
    if($(window).width() > 865){
syncMapBoxHeight();
    }else{
        wrapHeight();
}
  });



function itemBoxHeight() {
    const boxHeight = $("#sub.sub1 #section02 .item_wrap .out_box").eq(0).width();
    $("#sub.sub1 #section02 .item_wrap .out_box").height(boxHeight);
}

function resetBoxHeight() {
    $("#sub.sub1 #section02 .item_wrap .out_box").css("height","");
}

 $(window).on("load resize", function() {
    if($(window).width() < 560){
    itemBoxHeight();
    }else {
    resetBoxHeight()
    }
 });



function sub1Main4BoxHeight() {
    const boxHeight = $("#sub.sub1 #section03 .right_area > div > div").eq(0).width();
    $("#sub.sub1 #section03 .right_area > div > div").height(boxHeight);
}

function sub1Main4BoxHeightRe() {
    $("#sub.sub1 #section03 .right_area > div > div").css("height","");
}

 $(window).on("load resize", function() {
    if($(window).width() < 682){
    sub1Main4BoxHeight();
    }else {
    sub1Main4BoxHeightRe()
    }
 });



/*서브2 메인1 관련*/
$(document).ready(function(){

    $("#sub.sub2 #section01 .book-area .book-box:first-child").addClass("active")
    $("#sub.sub2 #section01 .page_box .page_num li:first-child").addClass("active")

    $("#sub.sub2 #section01 .page_box .page_num li").on("click",function(){
        $(this).addClass("active").siblings("li").removeClass("active");
    });

    $("#sub.sub2 #section01 .page_box .page_num li:first").addClass("active")

    $("#sub.sub2 #section01 .page_box .page_num li").on("click",function(){
        let page_num = $(this).index();
        $("#sub.sub2 #section01 .book-area .book-box").eq(page_num).addClass("active").siblings(".book-box").removeClass("active");
    })

    $("#sub.sub2 #section01 .page_box i:nth-of-type(1)").on("click", function () {
        let $active = $("#sub.sub2 #section01 .page_box .page_num li.active");
        let $next = $active.siblings("li:first");

        let $active2 = $("#sub.sub2 #section01 .book-area .book-box.active");
        let $next2 = $active2.siblings(".book-box:first");


        if (!$next.prev("li").length) {
            $active.removeClass("active");
            $next.addClass("active");

            $active2.removeClass("active");
            $next2.addClass("active");
        };
        
    });

    $("#sub.sub2 #section01 .page_box i:nth-of-type(2)").on("click", function () {
        let $active = $("#sub.sub2 #section01 .page_box .page_num li.active");
        let $prev = $active.prev("li");

        let $active2 = $("#sub.sub2 #section01 .book-area .book-box.active");
        let $next2 = $active2.prev(".book-box");

        if ($prev.length) {
            $active.removeClass("active");
            $prev.addClass("active");

            $active2.removeClass("active");
            $next2.addClass("active");
        };
    });

    $("#sub.sub2 #section01 .page_box i:nth-of-type(3)").on("click", function () {
        let $active = $("#sub.sub2 #section01 .page_box .page_num li.active");
        let $next = $active.next("li");

        let $active2 = $("#sub.sub2 #section01 .book-area .book-box.active");
        let $next2 = $active2.next(".book-box");

        if ($next.length) {
            $active.removeClass("active");
            $next.addClass("active");

            $active2.removeClass("active");
            $next2.addClass("active");
        };
        
    });

    $("#sub.sub2 #section01 .page_box i:nth-of-type(4)").on("click", function () {
        let $active = $("#sub.sub2 #section01 .page_box .page_num li.active");
        let $next = $active.siblings("li:last");

        let $active2 = $("#sub.sub2 #section01 .book-area .book-box.active");
        let $next2 = $active2.siblings(".book-box:last");

        if (!$next.next("li").length) {
            $active.removeClass("active");
            $next.addClass("active");

            $active2.removeClass("active");
            $next2.addClass("active");
        };
        
    });
    
  
});

/*서브2 메인1 qr*/

$(document).ready(function(){
    $("#sub.sub1 .qr_ic").on("click", function(){
        $("#sub.sub1 #QR-box").fadeIn("fast")
    });

    $("#sub.sub1 #QR-box .close_ic").on("click", function(){
        $("#sub.sub1 #QR-box").fadeOut("fast")
    });

    $("#sub.sub1 #QR-box .gnb_black_back3").on("click", function(){
        $("#sub.sub1 #QR-box").fadeOut("fast")
    });
});

$(document).ready(function(){
   $("#sub.sub1 .share_ic").on("click", function () {
  const url = window.location.href; // 현재 페이지 주소 가져오기
  const tempInput = $("<input>");
  
  $("body").append(tempInput); // 임시 input 추가
  tempInput.val(url).select(); // 주소 입력 & 선택
  document.execCommand("copy"); // 복사 실행
  tempInput.remove(); // 임시 input 제거

  alert("링크가 복사됐습니다!");
});
});


