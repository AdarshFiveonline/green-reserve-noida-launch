$(document).ready(function() {
      var owl = $("#owl-demo");
      owl.owlCarousel({
        itemsCustom : [
          [0, 1],
          [400, 1],
          [1023, 1],
          [1024, 1],
          [1600, 1]
        ],
        navigation : false,
        pagination : false,
        autoPlay :true,
      });
    });

    $(document).ready(function() {
      var owl = $("#owl-demo");
      owl.owlCarousel();
      $(".next").click(function(){
        owl.trigger('owl.next');
      })
      $(".prev").click(function(){
        owl.trigger('owl.prev');
      })
    });
