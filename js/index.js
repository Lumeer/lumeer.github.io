document.addEventListener('DOMContentLoaded', function ()
{
    let columns = document.querySelectorAll('.first-benefits .main-column');
    document.querySelector('.mouse').addEventListener('click', function ()
    {
        zenscroll.toY(document.querySelector('.home .upper-content').clientHeight - document.querySelector('header nav').clientHeight);
    }, false);

    let blogGlide = new Glide('.blog .glide', {
        type: 'carousel',
        startAt: 0,
        perView: 3,
        breakpoints: {
            1023: {
                perView: 1
            }
        }
    });

    blogGlide.mount();

    checkMobileFunctions();

    window.addEventListener('resize', () =>
    {
        for (let column of columns)
        {
            checkMobileFunctions(column);
        }
    });

    function checkMobileFunctions(column)
    {
        let text = column.querySelector('.text');

        text.style.height = 'auto';

        if (window.innerWidth > 1023)
        {
            return;
        }

        column.dataset.textHeight = text.offsetHeight;
        text.style.visibility = 'visible';
        text.style.height = '0';
    }

    for (let column of document.querySelectorAll('.first-benefits .main-column'))
    {
        checkMobileFunctions(column);
        column.addEventListener('click', function ()
        {
            let $text = column.querySelector('.text');

            if (this.classList.contains('active'))
            {
                this.classList.remove('active');
                $text.style.height = '0';
            }
            else
            {
                this.classList.add('active');
                $text.style.height = column.dataset.textHeight + 'px';
            }
        }, false);
    }
});
