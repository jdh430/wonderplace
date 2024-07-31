$(function () {
    // 이미지 컨테이너 선택
    var imageContainer = $('.image-container');

    // 현재의 초기 이미지 너비
    var initialWidth = 1600;

    // 늘어날 수 있는 최대 이미지 너비
    var maxWidth = 3000;

    // 스크롤에 따른 너비 증가 비율
    var expandRate = 1; // 비율을 높여서 확대 속도를 빠르게 설정
    //  1일 때는 스크롤의 움직임과 이미지 너비의 변화가 1:1 비율로 일어나게 됨
    // 스크롤 시작 위치 (너비 변화 시작 위치)
    var scrollThreshold = 50;   // 50픽셀 

    // 스크롤 이벤트 핸들러
    // 브라우저의 window 객체를 선택 
    // 웹 페이지의 스크롤 이벤트를 처리하는 핸들러 설정
    $(window).scroll(function () {
        // 현재 스크롤 위치
        var scrollTop = $(this).scrollTop();

        // 스크롤 위치가 임계값을 초과할 때만 너비 확대 시작
        if (scrollTop > scrollThreshold) {
            // 새로운 너비 계산 (최소 initialWidth, 최대 maxWidth)
            var newWidth = Math.min(maxWidth, initialWidth + (scrollTop - scrollThreshold) *
                expandRate);
            // Math.min() 함수는 여러 개의 숫자 중에서 가장 작은 값을 반환
            // maxWidth - 확대될 수 있는 최대 너비
            // initialWidth + (scrollTop - scrollThreshold) * expandRate - 스크롤에 따른 너비 계산
            // Math.min() 함수는 이 두 값 중 더 작은 값을 선택하여 newWidth에 할당
            // 이렇게 하면 이미지의 너비가 maxWidth를 넘지 않도록 제한 가능 
            // 이미지 컨테이너의 너비 변경
            imageContainer.css('width', newWidth + 'px');
        } else {
            // 스크롤 위치가 임계값 이하일 때는 초기 너비로 설정
            imageContainer.css('width', initialWidth + 'px');
        }
    });

    // 페이지 로드 시 초기 너비 설정
    imageContainer.css('width', initialWidth + 'px');

   
function toggleMemu() {
    $('.toggle-container').toggleClass('active');
}; 

});

