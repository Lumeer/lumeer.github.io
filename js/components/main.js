document.addEventListener('DOMContentLoaded', () =>
{
    const $nav = document.getElementsByTagName('nav')[0],
        $logo = document.querySelector('.header-logo');

    if (window.scrollY === 0)
    {
        $nav.classList.remove('active');
    }
    else
    {
        $nav.classList.add('active');
    }

    document.addEventListener('scroll', function ()
    {
        if (window.scrollY === 0)
        {
            setLogoPosition('center');
            setTimeout(function ()
            {
                $nav.classList.remove('active');
            }, 500 * +(window.innerWidth < 1023));
        }
        else if (!$nav.classList.contains('active'))
        {
            $nav.classList.add('active');
            setLogoPosition('left');
        }
    });

    window.addEventListener('resize', function ()
    {
        if (window.innerWidth < 1024)
        {
            $nav.style.height = '60px';
            $logo.style.left = '50%';
            $logo.style.transform = 'translateX(-50%)';
        }
        else
        {
            $nav.style.height = '90px';
            $nav.classList.remove('slided-down');
            $logo.style.left = '0';
            $logo.style.transform = 'none';
        }
    }, false);

    document.querySelector('.header-nav-icon').addEventListener('click', function ()
    {
        if (window.innerWidth > 1023)
        {
            return;
        }

        if (this.classList.contains('cross'))
        {
            this.classList.remove('cross');
            this.classList.add('bars');
            $nav.style.height = '60px';
            setLogoPosition('center');

            setTimeout(function ()
            {
                $nav.classList.remove('slided-down')
            }, 1000);
        }
        else
        {
            this.classList.remove('bars');
            this.classList.add('cross');
            $nav.classList.add('slided-down');
            $nav.style.height = '432px';
            setLogoPosition('left');
        }
    });

    function setLogoPosition(state)
    {
        if (window.innerWidth > 1023)
        {
            return;
        }

        if (state === 'left')
        {
            setTimeout(function ()
            {
                $logo.style.left = '20px';
                $logo.style.transform = 'translateX(0%)';
            }, 500);
        }
        else //center
        {
            $logo.style.left = '50%';
            $logo.style.transform = 'translateX(-50%)';
        }
    }
});
