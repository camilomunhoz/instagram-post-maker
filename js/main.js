import defs from "./style-guide.js";

import template from "./modules/card-template.js"
import card1 from "./modules/card-1.js"
import card2 from "./modules/card-2.js"
import card3 from "./modules/card-3.js"
import card4 from "./modules/card-4.js"

$(() => {
    $('input').on('change', () => colorize($('input[name="lang"]:checked').val()))

    const cards = [card1, card2, card3, card4]

    for (const course of data.courses) {
        const nClasses = course.classes.length
        
        const instagramCard = template({
            courseName: course.name,
            content: cards[nClasses - 1](course),
            language: data.language,
            nClasses: nClasses,
        })

        $('body').append(instagramCard)
    }

    html2canvas($('.instagram-card')[0], {
        scale: 1,
    }).then(function(canvas) {
        document.body.appendChild(canvas);
        $('a')[0].href = canvas.toDataURL('image/png')
        // $('.instagram-card').slideUp(200)
    });
})

function colorize(language) {
    const cards = $('.instagram-card')

    clearStyles();

    cards.each((i, el) => {
        const nClasses = $(el).data('n-classes')
        const styleGuide = defs[language][nClasses]

        for (const item of Object.keys(styleGuide)) {
            $(el).find('.'+item).addClass(styleGuide[item])
        }
    })
}

function clearStyles() {
    $('.instagram-card *').removeClass('cl-white cl-blue cl-yellow cl-cyan cl-pink cl-purple bg-white bg-blue bg-yellow bg-cyan bg-pink bg-purple border-blue border-yellow border-cyan border-pink border-purple ')
}

const data = {
    "language": "spanish",
    "courses": [
        {
            "name": "Curso de Mentira para o Template",
            "classes": [
                {
                    "startDate": "00/00/2024",
                    "endDate": "00/00/2024",
                    "weekday": "Segunda-feira",
                    "startTime": "00:00",
                    "endTime": "00:00",
                    "modality": "Online",
                    "level": "Básico",
                    "teacher": "Foolano di Tahl",
                    "mentor": "Prof. Dra. Ana Bocorny"
                },
                {
                    "startDate": "00/00/2024",
                    "endDate": "00/00/2024",
                    "weekday": "Segunda-feira",
                    "startTime": "00:00",
                    "endTime": "00:00",
                    "modality": "Online",
                    "level": "intermediário-avançado",
                    "teacher": "Foolano di Tahl",
                    "mentor": "Prof. Dra. Ana Bocorny"
                },
                {
                    "startDate": "00/00/2024",
                    "endDate": "00/00/2024",
                    "weekday": "Segunda-feira",
                    "startTime": "00:00",
                    "endTime": "00:00",
                    "modality": "Online",
                    "level": "intermediário-avançado",
                    "teacher": "Foolano di Tahl",
                    "mentor": "Prof. Dra. Ana Bocorny"
                },
            ]
        },
    ]
};