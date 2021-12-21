/* mainBanner.js */

$(function() {
	var slideIdx = 0;
	slideBanner(slideIdx);
	
	// 배너 이동 함수
	function slideBanner(idx) {
		slideIdx = idx;
		
		var slide = -(idx * 1500);
		$('#slideBanner').animate({'left':slide}, 'slow');
	}
	
	// prevBtn
	$('#prevBtn').on('click', function() {
		if (slideIdx!=0) slideIdx-=1;
		
		slideBanner(slideIdx);
	});
	
	// nextBtn
	$('#nextBtn').on('click', function() {
		if (slideIdx!=4) slideIdx+=1;
		
		slideBanner(slideIdx);
	});
	
	// bannerControl 버튼 : 클릭하여 원하는 인덱스의 배너로 이동
	$('.bannerControl').each(function(idx) {
		$(this).hover(
			function() {
				$(this).attr('src', 'image/controlButton2.png');
			},
			function() {
				$(this).attr('src', 'image/controlButton1.png');
			}
		);
		
		$(this).on('click', function() {
			slideBanner(idx);
		});
		
	});
		
	// 자동 슬라이딩 함수
	function slidingTimer(){
		Sliding = setInterval(function(){
			$('#nextBtn').trigger('click');
			
			if (slideIdx==4) slideIdx=0;
			
			slideBanner(slideIdx);
		},3000);
	}

	// 배너 영역에 마우스 올리면 자동 슬라이딩 정지
	$('#slideBanner').on({
		mouseenter:function(){
			clearInterval(Sliding);
		},
		mouseleave:function(){
			slidingTimer();
		}
	});

	slidingTimer();
});