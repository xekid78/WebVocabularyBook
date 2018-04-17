(function() {
    'use strict'

    var words = [
        {'en': 'constant', 'ja': '定数' },
        {'en': 'integer', 'ja': '整数' },
        {'en': 'function', 'ja': '関数' },
        {'en': 'method', 'ja': 'メソッド' },
        {'en': 'argument', 'ja': '引数' }
    ];

    var card = document.getElementById('card');
    var cardFront = document.getElementById('card-front');
    var cardBack = document.getElementById('card-back');
    var btn = document.getElementById('btn');
    card.addEventListener('click', function() {
        flip();
    });
    btn.addEventListener('click', function() {
        next();
    });

    function next() {
        if (card.className === 'open') {
            card.addEventListener('transitionend', setCard);
            flip();
        } else {
            setCard();
        }
    }

    function setCard() {
        var num = Math.floor(Math.random() * words.length);
        cardFront.innerHTML = words[num]['en'];
        cardBack.innerHTML = words[num]['ja'];
        card.removeEventListener('transitionend', setCard);
    }

    setCard();

    window.addEventListener('keyup', function(e) {
    // e.keyCode
    // f: 70
    // n: 78
    // console.log(e.keyCode);
        if (e.keyCode === 70) {
            flip();
        } else if (e.keyCode === 78) {
            next();
        }
    });

    function flip() {
        card.className = card.className === '' ? 'open' : '';
    }

})();
