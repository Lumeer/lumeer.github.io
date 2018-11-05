document.addEventListener('DOMContentLoaded', function ()
{
    document.querySelector('.billing-switch').addEventListener('click', function ()
    {
        let circle = this.querySelector('.billing-switch-circle'),
            circleLeft = circle.getBoundingClientRect().left - this.getBoundingClientRect().left,
            text = {3: ['Roční', '7.00', '27', '84.00'], 27: ['Měsiční', '8.40', '3', '100.80']};

        if ([3, 27].includes(circleLeft))
        {
            document.querySelector('.billing-switch-container p').innerText = text[circleLeft][0] + ' vyúčtování';
            document.querySelector('.price-button-container button').innerText = '€ ' + text[circleLeft][1];
            circle.style.left = text[circleLeft][2] + 'px';
            document.querySelector('.price-button-container p').innerText = '€ ' + text[circleLeft][3] + ' / uživatele na rok';
        }
    });
});
