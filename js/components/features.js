document.addEventListener('DOMContentLoaded', () =>
{
    let featureGlide = new Glide('.feature-glide', {
        type: 'carousel',
        startAt: 0,
        perView: 1
    });

    featureGlide.mount();
});