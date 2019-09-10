$(document).ready(function() {

    var phrases = [
        'Thank You',
        'For Being A WonderFull Teacher.',
        'Happy Teachers Day',
        '~From~',
        '~Abhishek :)   ....',
    ];
    var len = phrases.length;
    var index = 0;

    var ctrl = bubbleText({
        element: $('#bubble'),
        newText: phrases[index++],
        letterSpeed: 170,
        repeat: Infinity,
        timeBetweenRepeat: 2000,
        callback: function() {
            this.newText = phrases[index++ % len];
        },
    });

});
