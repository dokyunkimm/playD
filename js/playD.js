(function() {
    window.addEventListener('resize', function() {
        scrllHdr()
    });
    
    function scrllHdr() {
        window.addEventListener('scroll', function() {
            let plyHdr = document.querySelector('.plyHdr'); // 헤더
            let mainVisual = document.querySelector('.mainVisual'); // 메인 비주얼
            let jsTopBtn = document.querySelector('.jsTopBtn'); // top 버튼

            // 비주얼 
            if(window.pageYOffset > mainVisual.offsetHeight / 2){
                plyHdr.classList.add('fxd');
                jsTopBtn.style.display = 'block';
            } else {
                plyHdr.classList.remove('fxd');
                jsTopBtn.style.display = 'none';
            }


            let prgrssBrCntBx = document.querySelector('.prgrssBrCntBx'); // 프로그래스 바 컨텐츠 박스
            let prtnrs = document.querySelector('.prtnrs'); // 파트너스  섹션
            let prtnrsTp = (prtnrs.getBoundingClientRect().top - window.innerHeight) * -1; // 화면 하단이 파트너스 섹션 중앙에 닿았을 때.
            if(prtnrsTp >= prtnrs.offsetHeight / 2){
                prgrssBrCntBx.classList.add('on');
            } else {
                prgrssBrCntBx.classList.remove('on');
            }
        });
    }

    
    scrllHdr();
})();

$(function() {
    $('.mainVisual').css('height', $(window).innerHeight()); // 비주얼 높이
    $('.prfmnc').css('height', $(window).innerHeight()) // performance 높이
    
    $(window).resize(function() {
        $('.mainVisual').css('height', $(window).innerHeight()); // 비주얼 높이
        $('.prfmnc').css('height', $(window).innerHeight()) // performance 높이

        if($(window).outerWidth() >= 320) {
            $('html, body').css('overflow-X', 'auto');
        }
    });

    $('.jsTopBtn').click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 500);
    });
});