(function() {
	'use strict';

	var tinyslider = function() {
		var el = document.querySelectorAll('.testimonial-slider');

		if (el.length > 0) {
			var slider = tns({
				container: '.testimonial-slider',
				items: 1,
				axis: "horizontal",
				controlsContainer: "#testimonial-nav",
				swipeAngle: false,
				speed: 700,
				nav: true,
				controls: true,
				autoplay: true,
				autoplayHoverPause: true,
				autoplayTimeout: 3500,
				autoplayButtonOutput: false
			});
		}
	};
	tinyslider();

	


	var sitePlusMinus = function() {

		var value,
    		quantity = document.getElementsByClassName('quantity-container');

		function createBindings(quantityContainer) {
	      var quantityAmount = quantityContainer.getElementsByClassName('quantity-amount')[0];
	      var increase = quantityContainer.getElementsByClassName('increase')[0];
	      var decrease = quantityContainer.getElementsByClassName('decrease')[0];
	      increase.addEventListener('click', function (e) { increaseValue(e, quantityAmount); });
	      decrease.addEventListener('click', function (e) { decreaseValue(e, quantityAmount); });
	    }

	    function init() {
	        for (var i = 0; i < quantity.length; i++ ) {
						createBindings(quantity[i]);
	        }
	    };

	    function increaseValue(event, quantityAmount) {
	        value = parseInt(quantityAmount.value, 10);

	        console.log(quantityAmount, quantityAmount.value);

	        value = isNaN(value) ? 0 : value;
	        value++;
	        quantityAmount.value = value;
	    }

	    function decreaseValue(event, quantityAmount) {
	        value = parseInt(quantityAmount.value, 10);

	        value = isNaN(value) ? 0 : value;
	        if (value > 0) value--;

	        quantityAmount.value = value;
	    }
	    
	    init();
		
	};
	sitePlusMinus();


})()

document.addEventListener('DOMContentLoaded', function() {
    const toggleBtns = document.querySelectorAll('.toggle-btn');

    toggleBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const content = this.nextElementSibling;
            const plusIcon = this.querySelector('.plus');
            const minusIcon = this.querySelector('.minus');

            // Toggle class 'active' cho toggle-btn
            this.classList.toggle('active');

            // Toggle hiển thị nội dung
            content.classList.toggle('active');
            if (content.classList.contains('active')) {
                content.style.display = 'block';
                plusIcon.style.display = 'none';
                minusIcon.style.display = 'inline-block';
            } else {
                content.style.display = 'none';
                plusIcon.style.display = 'inline-block';
                minusIcon.style.display = 'none';
            }
			if ($(this).hasClass('active')) {
				content.stop(true, true).fadeIn(400); // Hiển thị nội dung từ từ
			} else {
				content.stop(true, true).fadeOut(400); // Ẩn nội dung từ từ
			}

            // Hiển thị/ẩn khung viền mờ
            const blurEffect = document.querySelector('.blur-effect');
            blurEffect.style.display = blurEffect.style.display === 'block' ? 'none' : 'block';
        });
    });

    // Đóng nội dung khi click vào khung viền mờ
    const blurEffect = document.querySelector('.blur-effect');
    blurEffect.addEventListener('click', function() {
        toggleBtns.forEach(btn => {
            btn.classList.remove('active');
            const content = btn.nextElementSibling;
            content.classList.remove('active');
            content.style.display = 'none';

            // Đảm bảo biểu tượng plus được hiển thị sau khi đóng nội dung
            const plusIcon = btn.querySelector('.plus');
            const minusIcon = btn.querySelector('.minus');
            plusIcon.style.display = 'inline-block';
            minusIcon.style.display = 'none';
        });

        // Ẩn khung viền mờ
        blurEffect.style.display = 'none';
    });
});

// sự kiện ảnh tự chuyển
let autoSlideTimeout;

function startAutoSlide() {
    autoSlideTimeout = setTimeout(() => {
        // Chuyển sang ảnh tiếp theo
        const nextButton = document.querySelector('.carousel-control-next');
        nextButton.click();
    }, 8000); // 8 giây
}

function resetAutoSlide() {
    clearTimeout(autoSlideTimeout);
}

// Bắt đầu tự động chuyển ảnh khi trang tải xong
document.addEventListener('DOMContentLoaded', (event) => {
    startAutoSlide();});

	// Đặt lại bộ đếm thời gian khi di chuột vào vùng ảnh
document.querySelectorAll('.zoom').forEach(item => {
    item.addEventListener('mouseenter', resetAutoSlide);
    item.addEventListener('mouseleave', startAutoSlide);
});

