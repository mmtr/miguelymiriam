/* global Vue, VueI18n, $, Sparkle */

let app = new Vue({
  el: '.js-app',
  data: {
    years: (new Date()).getFullYear() - 2005
  },
  methods: {
    scroll: function(event) {
      event.preventDefault();
      $(':focus').blur();

      let $target = $($(event.currentTarget).attr('href'));
      $('html, body').animate({
        scrollTop: $target.offset().top
      }, 1000);
    },
    onSlideOut: function () {
      $('.slide.active').removeClass('active');
    },
    onSlideIn: function ($slide) {
      $slide.addClass('active');
    },
    message: function (messageKey) {
      return this.$t(messageKey);
    }
  },
  mounted: function()  {
    $('[data-toggle="tooltip"]').tooltip();
    $('body').scrollspy({ target: '.navbar', offset: $(window).height()/2 });
    $('.navbar').on('activate.bs.scrollspy', () => {
      this.onSlideOut();
      this.onSlideIn($($('.navbar .nav .active a').attr('href')));
    });

    let sparkle = new Sparkle();
    sparkle.init('.highlight');
  }
});
