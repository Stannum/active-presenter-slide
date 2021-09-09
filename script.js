const questionList = [
    {
        subtitle: 'Meet our panel',
        questions: [],
    },
    
    {
        subtitle: 'It all started when ...',
        questions: ['1. What made you become an interviewer?', 
                    '   How would you describe the first few interviews you gave?'
                   ],
    },

    {
        subtitle: 'Recruiting talents',
        questions:['2. How to reveal the real capability of the candidates?', 
            '   Could you share some special techniques you would apply, e.g, stress interview?'
        ]
    },

    {
        subtitle: 'Recruiting talents',
        questions: ['3. What are the red flags to which you would definitely say no ?'
        ],
    },
     {
         subtitle:'Recruiting talents',
         questions: ['4. How do you think the probation period could help the overall recruitment process ?', 
                     '   Do you prefer more rounds of interviews plus a short probation period or the other way around?'
                    ],
    },
    {
        subtitle:'Recruiting talents',
        questions: ['5. Who from a team will you choose to interview the candidates, in order to get a comprehensive feedback?'],
    },
    {
        subtitle: 'Talking about diversity',
        questions: ['6. Have you observed any cultural differences when you interview candidates with different backgrounds?'],
    },
    {
        subtitle: 'Talking about diversity',
        questions: ['7. What is your opinion on diversity when recruiting STEM roles?', 
                    '   What strategies will you apply to recruit the minority groups ? Oversampling? Lowering the bar?'],
    },
];

let currQuesIdx = 0;
let currQues = ''

const renderQ = function() {

    $('.q-text ul').empty()

    if (currQuesIdx >= 0 && currQuesIdx < questionList.length) {
        currQues = questionList[currQuesIdx]; 
    } else {
        currQues = "It's Q&A time!"
        if (currQuesIdx < 0) {
            currQuesIdx = -1
        } else if (currQuesIdx >= questionList.length) {
            currQuesIdx = questionList.length
        }
        $('.q-text p').text(currQues)
        return
    }

    $('.q-text p').text(currQues.subtitle)

    currQues.questions.forEach(function(question) {
        $('.q-text ul').append(`<li>${question}</li>`)
    })
}

const resetStatus = function() {
    $guests = $('.guest-p')
    for (let i = 0; i < $guests.length; i++) {
        $guests.eq(i).removeClass('guest-active')
        $guests.eq(i).addClass('guest-inactive')
        $guests.eq(i).closest('.col-3').find('svg').css('color', 'white')
    }
}

const resetQColor = function() {
    $ques = $('li')
    for (let i = 0; i < $ques.length; i++) {
        $ques.eq(i).removeClass('q-primary')
    }
}


$('.right-nav').on('click', function(e) {
    e.preventDefault()
    currQuesIdx += 1
    renderQ()
    resetQColor()
    resetStatus()
})

$('.left-nav').on('click', function(e) {
    e.preventDefault()
    currQuesIdx -= 1
    renderQ()
    resetQColor()
    resetStatus()
})

$('.guest-p').on('click', function(e) {
    e.preventDefault()
    resetStatus()
    $(e.target).closest('.guest-p').removeClass('guest-inactive')
    $(e.target).closest('.guest-p').addClass('guest-active')
    $(e.target).closest('.col-3').find('svg').css('color','#0d6efd')
})

$('ul').on('click', function(e) {
    e.preventDefault()
    resetQColor()
    $(e.target).addClass('q-primary')
})

renderQ()
resetStatus()
resetQColor()
