import defs from "./definitions.js";

import template from "./modules/card-template.js"
import card1 from "./modules/card-1.js"
import card2 from "./modules/card-2.js"
import card3 from "./modules/card-3.js"
import card4 from "./modules/card-4.js"

$(() => {
    $('.btn-generate').on('click', generate)
})

function generate() {
    const cards = [card1, card2, card3, card4]
    const data = JSON.parse($('textarea[name="data"]').val())
    data.language = $('input[name="lang"]:checked').val()

    $('.instagram-card').remove()
    
    for (const course of data.courses) {
        const nClasses = course.classes.length
        course.mentor = defs[data.language].mentor
        
        const instagramCard = template({
            courseName: course.name,
            content: cards[nClasses - 1](course),
            language: data.language,
            nClasses: nClasses,
        })

        $('body').append(instagramCard)
    }

    colorize(data.language)
    // downloadable()
}

function downloadable() {
    $('.instagram-card').each((i, el) => {
        html2canvas(el, {
            scale: 1,
        }).then(function(canvas) {
            document.body.appendChild(canvas);
            $('<a/>', {
                href: canvas.toDataURL('image/png'),
                download: `curso-${i}.png`,
            })
            $('a')[0].href = canvas.toDataURL('image/png')
            // $('.instagram-card').slideUp(200)
        });
    })
}

function colorize(language) {
    const cards = $('.instagram-card')

    clearStyles();

    cards.each((_, el) => {
        const nClasses = $(el).data('n-classes')
        const styleGuide = defs[language].styleGuide[nClasses]

        for (const item of Object.keys(styleGuide)) {
            $(el).find('.'+item).addClass(styleGuide[item])
        }
    })
}

function clearStyles() {
    $('.instagram-card *').removeClass('cl-white cl-blue cl-yellow cl-cyan cl-pink cl-purple bg-white bg-blue bg-yellow bg-cyan bg-pink bg-purple border-blue border-yellow border-cyan border-pink border-purple ')
}