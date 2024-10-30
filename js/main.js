import defs from "./definitions.js";

import template from "./modules/card-template.js"
import card1 from "./modules/card-1.js"
import card2 from "./modules/card-2.js"
import card3 from "./modules/card-3.js"
import card4 from "./modules/card-4.js"

$(() => {
    $('.btn-generate').on('click', generate)

    $.get('/data.example.json')
        .done(data => {
            editor.setValue(JSON.stringify(data, null, '\t'))
        })
})

function generate() {
    const cards = [card1, card2, card3, card4]
    const data = JSON.parse(editor.getValue())
    data.language = $('input[name="lang"]:checked').val()
    data.mentor = defs[data.language].mentor

    $('.instagram-card').remove()
    $('.result').empty()
    
    for (const course of data.courses) {
        const nClasses = course.classes.length
        
        const instagramCard = template({
            courseName: course.name,
            content: cards[nClasses - 1](course),
            nClasses: nClasses,
            language: data.language,
            mentor: course.mentor || data.mentor,
        })

        $('body').append(instagramCard)
    }

    colorize(data.language)
    downloadable()
}

function downloadable() {
    const imgs = [];
    const promises = [];

    new Promise(resolve => {
        $('.instagram-card').each((i, el) => {
            const promise = html2canvas(el, {scale: 1})
                .then(function(canvas) {
                    imgs.push(canvas.toDataURL('image/png'));

                    if (!$(el).hasClass('dev')) {
                        $(el).remove();
                    }
                });

            promises.push(promise);
        });
        Promise.all(promises).then(() => resolve());
    })
    .then(() => {
        $('.result').append('<div>Pronto! Clique para nas imagens para baixá-las.</div>')

        imgs.forEach((blob, i) => $('.result').append(
            $('<a/>', {
                href: blob,
                download: `curso-${i+1}.png`,
            }).append(
                $('<img/>', {src: blob, class: 'instagram-png'})
            )
        ));

        $('body').scrollTo('100%')
    });
}

function colorize(language) {
    const cards = $('.instagram-card')

    cards.each((_, el) => {
        const nClasses = $(el).data('n-classes')
        const styleGuide = defs[language].styleGuide[nClasses]

        for (const item of Object.keys(styleGuide)) {
            $(el).find('.'+item).addClass(styleGuide[item])
        }
    })
}