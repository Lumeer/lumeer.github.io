document.addEventListener('DOMContentLoaded', function ()
{
    let caseStudiesGlide = new Glide('.case-studies .glide', {
        type: 'carousel',
        startAt: 0,
        perView: 7,
        breakpoints: {
            1140: {
                perView: 6
            },
            970: {
                perView: 5
            },
            800: {
                perView: 4
            },
            630: {
                perView: 3
            },
            460: {
                perView: 2
            },
            290: {
                perView: 1
            },
        }
    });

    caseStudiesGlide.mount();

    for (let client of document.querySelectorAll('.client'))
    {
        client.addEventListener('click', function ()
        {
            [...document.querySelectorAll('.client.active')].map(x => x.classList.remove('active'));
            this.classList.add('active');
        });
    }

    document.querySelector('.back-to-glide').addEventListener('click', function ()
    {
        zenscroll.toY(zenscroll.getTopOf(document.querySelector('.case-studies .glide')) - 120);
    });
});
