$('.reviews__cards').slick({
    infinite: false,
    slidesToShow: 4,
    responsive: [
        {
            breakpoint: 1100,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                autoplay: true,
                autoplaySpeed:2000,
                arrows:false
            }
        },
        {
            breakpoint: 800,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                autoplay: true,
                autoplaySpeed:2000,
                arrows:false
            }
        }
    ]
});