document.addEventListener('DOMContentLoaded', function ()
{
    let caseStudiesGlide = new Glide('.case-studies .glide', {
        type: 'carousel',
        autoplay: 5000,
        startAt: 0,
        perView: 1,
    });

    caseStudiesGlide.mount();
});
