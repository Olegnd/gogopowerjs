"use strict";
(function () {

	function getRandom(min, max) {
		return Math.floor(min + (max - min) * Math.random());
	}

	function setSlide(number) {
		var activeSlide = $('.slider__list').children(':nth-child(' + number + ')');
		var list = $('.slider__list');
		list.css('transform', 'translateX(' + (-100 * number) + '%)');
		list.children().removeClass('active');
		activeSlide.addClass('active');
		console.log('SLIDE HAS BEEN CHANGED');
	}

	function getActiveNumber() {
		var index;
		index = $('.slider__list li.active').index();
			console.log('index1 = ',index);
			if (index <= 3) {
				return index = index + 1;
			}
			else {
			console.log('index2 = ',index);
				return 0;
			}
	}

	function nextSlide() {
		var activeSlideNumber = getActiveNumber();
		var nextSlideNumber = activeSlideNumber + 1;
		console.log('activeSlideNumber = ', activeSlideNumber);
		console.log('nextSlideNumber   = ', nextSlideNumber);
		setSlide(nextSlideNumber);

	}

	setInterval(function() {
		var slide = getRandom(0, 5);
		console.log('slide = ',slide)
		nextSlide();
	}, 2000);

})();
