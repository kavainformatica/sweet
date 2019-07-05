   
   $(document).ready(function()
   {
      $('#wb_Image4').addClass('visibility-hidden');
      $('#wb_service-text').addClass('visibility-hidden');
      $('#contact-text').addClass('visibility-hidden');
      $('#wb_PhotoGallery4').addClass('visibility-hidden');
      $('#wb_PhotoGallery1').addClass('visibility-hidden');
      $('#wb_PhotoGallery2').addClass('visibility-hidden');
      $('#wb_PhotoGallery3').addClass('visibility-hidden');
      $('#wb_Image8').addClass('visibility-hidden');
      $('#wb_flowerHeading1').addClass('visibility-hidden');
      $('#wb_flowerHeading2').addClass('visibility-hidden');
      $("a[href*='#header']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#wb_header').offset().top }, 600, 'easeOutCirc');
      });
      $(document).on('click','.headerMenu-navbar-collapse.in',function(e)
      {
         if ($(e.target).is('a') && ($(e.target).attr('class') != 'dropdown-toggle')) 
         {
            $(this).collapse('hide');
         }
      });
      $("a[href*='#home']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#wb_home').offset().top-88 }, 600, 'easeOutCirc');
      });
      function homeScroll()
      {
         var $obj = $("#wb_home");
         if (!$obj.hasClass("in-viewport") && $obj.inViewPort(false))
         {
            $obj.addClass("in-viewport");
            AnimateCss('wb_Image4', 'animate-fade-in-up', 0, 1000);
         }
      }
      homeScroll();
      $(window).scroll(function(event)
      {
         homeScroll();
      });
      $("a[href*='#tips']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#wb_tips').offset().top-88 }, 600, 'easeOutCirc');
      });
      $("a[href*='#services']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#wb_services').offset().top-88 }, 600, 'easeOutCirc');
      });
      function servicesScroll()
      {
         var $obj = $("#wb_services");
         if (!$obj.hasClass("in-viewport") && $obj.inViewPort(false))
         {
            $obj.addClass("in-viewport");
            AnimateCss('wb_service-text', 'animate-fade-in-up', 0, 1000);
         }
      }
      servicesScroll();
      $(window).scroll(function(event)
      {
         servicesScroll();
      });
      $("a[href*='#gallery']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#wb_gallery').offset().top-88 }, 600, 'easeOutCirc');
      });
      $("a[href*='#contact']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#wb_contact').offset().top }, 600, 'easeOutCirc');
      });
      function contactScroll()
      {
         var $obj = $("#wb_contact");
         if (!$obj.hasClass("in-viewport") && $obj.inViewPort(false))
         {
            $obj.addClass("in-viewport");
            AnimateCss('contact-text', 'animate-fade-in-up', 0, 1000);
         }
      }
      contactScroll();
      $(window).scroll(function(event)
      {
         contactScroll();
      });
      $("a[href*='#faq']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#wb_faq').offset().top }, 600, 'easeOutCirc');
      });
      function Bookmark1Scroll()
      {
         var $obj = $("#wb_Bookmark1");
         if (!$obj.hasClass("in-viewport") && $obj.inViewPort(false))
         {
            $obj.addClass("in-viewport");
            AnimateCss('wb_PhotoGallery4', 'animate-fade-in-up', 0, 1000);
            AnimateCss('wb_PhotoGallery1', 'animate-fade-in-up', 500, 1000);
            AnimateCss('wb_PhotoGallery2', 'animate-fade-in-up', 1000, 1000);
            AnimateCss('wb_PhotoGallery3', 'animate-fade-in-up', 1500, 1000);
         }
      }
      Bookmark1Scroll();
      $(window).scroll(function(event)
      {
         Bookmark1Scroll();
      });
      function flowerBookmarkScroll()
      {
         var $obj = $("#wb_flowerBookmark");
         if (!$obj.hasClass("in-viewport") && $obj.inViewPort(false))
         {
            $obj.addClass("in-viewport");
            AnimateCss('wb_Image8', 'puff-in', 0, 500);
            AnimateCss('wb_flowerHeading1', 'animate-fade-in-up', 500, 500);
            AnimateCss('wb_flowerHeading2', 'animate-fade-in-up', 1000, 500);
         }
      }
      flowerBookmarkScroll();
      $(window).scroll(function(event)
      {
         flowerBookmarkScroll();
      });
      $("a[data-rel='PhotoGallery1']").attr('rel', 'PhotoGallery1');
      $("a[rel^='PhotoGallery1']").fancybox({});
      $("a[data-rel='PhotoGallery2']").attr('rel', 'PhotoGallery2');
      $("a[rel^='PhotoGallery2']").fancybox({});
      $("a[data-rel='PhotoGallery3']").attr('rel', 'PhotoGallery3');
      $("a[rel^='PhotoGallery3']").fancybox({});
      $("a[data-rel='PhotoGallery4']").attr('rel', 'PhotoGallery4');
      $("a[rel^='PhotoGallery4']").fancybox({});
      SetStyle('Card1', 'initially-hidden');
      SetStyle('Card2', 'initially-hidden');
      SetStyle('Card3', 'initially-hidden');
      SetStyle('Card4', 'initially-hidden');
      SetStyle('Card5', 'initially-hidden');
      SetStyle('Card6', 'initially-hidden');
      SetStyle('wb_portfolio-image1', 'initially-hidden');
      SetStyle('wb_portfolio-image2', 'initially-hidden');
      SetStyle('about-text', 'initially-hidden');
      SetStyle('contact-text', 'initially-hidden');
      SetStyle('location-text', 'initially-hidden');
      SetStyle('wb_service-text', 'initially-hidden');
      SetStyle('location-icon1', 'initially-hidden');
      SetStyle('location-icon2', 'initially-hidden');
      SetStyle('location-icon3', 'initially-hidden');
      SetStyle('location-icon4', 'initially-hidden');
      SetStyle('location-icon5', 'initially-hidden');
      SetStyle('JavaScript1', 'initially-hidden');
      var iOS = !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform);
      if (iOS)
      {
         $('#wb_home,#wb_services,#wb_contact,#maps').css('background-attachment', 'scroll');
      }
      $('img[data-src]').lazyload();
   });
