$(function () {
    $('.star-container').each((index, elem) => {
        const starNum = $(elem).data('star');
        for (let i = 1; i <= starNum; i++) {
            $(elem).append('<span class="star' + i + '">★</span>');
        }
        for (let i = 10; i > starNum; i--) {
            $(elem).append('<span class="star-non">☆</span>');
        }
    });
});