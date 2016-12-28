var Sparkle = function() {
	'use strict';

	var settings = {

		totalImages: 10,		// number of images

		v: {
			start: null,
			end: null
		},

		w: {
			start: null,
			end: null
		},

		image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAC5UlEQVR42qxVPWgVQRD+Zu7uPTF2xtIidhZiJwqKYONPbNKoEAI2dlqoEIONhSCCbWwsRQMJAUlMUokKKsYiYGdvZ0QwD4Pm3e2us393+95LYuOEebO52/32m5lv9wiJvQRGWszjmaFDGfMGEzoMfnuq2noT56wArX1cXK3InFAwB5Q2w8roL/JqfhRYjvPI/hiJsuB6QTyZEWc5ESSC5bWAyy+tadBd2XBYkXqojTmoZZUyBpXR4j4KznIF3B4DOg54CfyoRRjPBcx6JsA2skQLTp7Elnghy1mAIWwdoLBF6cC120js3UXgMi0Ah/cQvxIgKgJwZJxFYGrK5UBr4ACqG3DjKzCRt4juCADljmX0hrn1yNkus052qfEjbb3OTN4Y+xSTuTw44tl5z3t8EFg5Tg2o64MJ0T1z5RjijOm7bxLVDCNzW5qCMhTMKPqyiPX3par7EBXRySWPdc5QT+JQ35S5VYa2K236xjOlWHsTpGXVYzywhB8szN6TA4XbmcOYE/aWdZawq3Xaw7OH8RLnupyx1GM6fvcmtf40ja9h6H4zdv30UzqbwAKfBH7JwmfNQiQL4XTaDRq1ro1vnfszCNGqxY8Fa+4S8MdmjbzKn8jbjQimHUCj0+iq9rAJejeScUfa9dhiOuBj2FxXhKkImB5VD6pq8CoekPqg6JqIbHD/HPCtBrZ2vPt7QdJZVPCT4/kvdXABr8LpqvrZe32vylGeiXicdrPsZlMy+WuVlKEbvEzuhGqQ+U8p5S1qWjSol9V2e0TEtSinaT9HgYZGxRtNJTeabFbK/1cuAB/7JDdon4q9RwVqXtIZqi+f0PWGZV2Sm+eB2W20vL19yNunJTy1V2XUrB5gjelR6Ac7HJKd7XXWGmOYaXtqo1Y9sGvainwxrqV1TY13Az6jui+6Rt0rtWpkJ2OR1mdBu7ET6D8ZR5MP2YQg2JQziWvy+Rm3nx/8DxPws0vA87mkobvZXwEGAEu4AuZgukO3AAAAAElFTkSuQmCC'

	};

	var wrapper = null;

	var images = [];

	var paused = false;

	/**
	 * initialize
	 */
	var init = function(cssSelector) {
		initSize(cssSelector);
		buildImages(cssSelector);
		setTimeout(initAnimation, 0);

		// listen to resize event
		$(window).on('resize', function() {
			paused = false;
      initSize();
		});
	};

	/**
	 * initialize size
	 */
	var initSize = function(cssSelector) {
		if (typeof cssSelector !== 'undefined') {
			wrapper = $(cssSelector);
		} else if (wrapper === null) {
			// fall back to first div if no cssSelector is set and wrapper is null
			wrapper = $('body > div').first();
		}

		// calc slots; expect wrapper to be centered
		var wrapperWidth = wrapper.width();
		var wrapperHeight = wrapper.height();

		settings.w.start = 0;
		settings.w.end = wrapperWidth;

		settings.v.start = -60;
		settings.v.end = wrapperHeight + 15;
	};

	/**
	 * build images
	 */
	var buildImages = function(cssSelector) {
		for (var i = 0; i < settings.totalImages; i++) {
      buildImage(cssSelector, i);
		}
	};

	/**
	 * build image
	 */
	var buildImage = function(cssSelector, id) {
		var image = document.createElement('div');
    image.id = 'sparkle' + id;

		var pos = placeImage();
    image.style.cssText = 'position:absolute;z:index:5;width:15px;height:15px;left:' + pos.x + 'px;top:' + pos.y + 'px;opacity:1';

		var img = document.createElement('img');
		img.src = settings.image;
    image.appendChild(img);

		$(cssSelector).append(image);

		images.push(image);
	};

	/**
	 * place image
	 */
	var placeImage = function() {
		var pos = {
			x: null,
			y: null
		};

		pos.x = Math.floor(settings.w.start + Math.random() * (settings.w.end - settings.w.start));
		pos.y = Math.floor(settings.v.start + Math.random() * (settings.v.end - settings.v.start));

		return pos;
	};

	/**
	 * init animation
	 */
	var initAnimation = function() {
		var i, l = images.length;

		for (i = 0; i < l; i++) {
			animateImage(images[i]);
		}
	};

	/**
	 * animate image
	 */
	var animateImage = function(image) {
		var speed = 500 + Math.random() * 500;

		$(image).animate({
				opacity: 0
			},
			speed,
			function() {
				// animation complete
				if (paused === true) {
          return;
        }

				// restart at new position
				var pos = placeImage();

				image.style.cssText = 'z-index:5;position:absolute;width:15px;height:15px;left:' + pos.x + 'px;top:' + pos.y + 'px;opacity:1';
				animateImage(image);
			}
		);
	};

	return {
		init: init
	};

};
