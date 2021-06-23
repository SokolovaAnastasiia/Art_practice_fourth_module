
// $('.fixed-menu').on('click', function(){
//     $('.dropdown-content').css('display','block');
//     alert('helo');
// });
// $('body').not('.fixed-menu').on('click',function(){
//     $('.dropdown-content').css('display','none');
// })







$(document).ready(function(){

    // localStorage.setItem("language","russian");
    // console.log(localStorage.getItem("language"));
    // console.log(location.pathname.split('/').slice(-1)[0]);

    // $( ".language" ).click(function() {
    //     if (localStorage.getItem("language") == 'russian' || localStorage.getItem("language") == null) {
    //         localStorage.setItem("language","english");
    //         location.reload();
    //     }
    //     else {
    //         localStorage.setItem("language","russian");
    //         location.reload();
    //     }
    // });

    // $( ".language-short" ).click(function() {
    //     if (localStorage.getItem("language") == 'russian' || localStorage.getItem("language") == null) {
    //         localStorage.setItem("language","english");
    //         location.reload();
    //     }
    //     else {
    //         localStorage.setItem("language","russian");
    //         location.reload();
    //     }
    // });
    
    // let a = location.pathname.split('/').slice(-1)[0];
    // if (localStorage.getItem("language") == 'english') {
    //     switch (a) {
    //         case 'index.html':
    //             indexChangeLanguage();
    //             break;
    //         case 'mission.html':
    //             missionChangeLanguage();
    //             break;
    //         default:
                
    //         }
    // }

    console.log(sessionStorage.getItem("language"));
    console.log(location.pathname.split('/').slice(-1)[0]);

    $( ".language" ).click(function() {
        if (sessionStorage.getItem("language") == 'russian' || sessionStorage.getItem("language") == null) {
            sessionStorage.setItem("language","english");
            location.reload();
        }
        else {
            sessionStorage.setItem("language","russian");
            location.reload();
        }
    });

    $( ".language-short" ).click(function() {
        if (sessionStorage.getItem("language") == 'russian' || sessionStorage.getItem("language") == null) {
            sessionStorage.setItem("language","english");
            location.reload();
        }
        else {
            sessionStorage.setItem("language","russian");
            location.reload();
        }
    });
    
    let a = location.pathname.split('/').slice(-1)[0];
    if (sessionStorage.getItem("language") == 'english') {
        switch (a) {
            case 'index.html':
                indexChangeLanguage();
                break;
            case 'mission.html':
                missionChangeLanguage();
                break;
            default:
                indexChangeLanguage();
            }
    }
    

    function missionChangeLanguage(){
        $('.mission .title').html('First colony at Mars');
        $('.mission .info .description').html('In 2041, the first manned flight to Mars is planned with the aim of creating an autonomous viable colony.');
    }

    function indexChangeLanguage() {
        $('.language').html('Русский');
        $('.language-short').html('Рус');
        $('.header .message').html('We fly to Mars and look for good people with us');

        $('.qualifying-stage .title').html('FIRST QUALIFICATION STAGE');
        $('.qualifying-stage .info .description').html('Online testing to determine the ability to think analytically. Registration is available until March 20.');
        $('.qualifying-stage .info a').html('Participate <span style="font-style:normal;">[Yes/No]</span>');
    }


    $(document).scroll(function() {
        showFixedMenu();
      });
    
    function showFixedMenu(){
        let y1 = parseInt($('body').css('padding'))
               + parseInt($('.header').css('height'));
        let y2 = $(this).scrollTop();
        if (y2 > y1) {
            $('.fixed-menu').fadeIn();
        } else {
            $('.fixed-menu').fadeOut();
        }
    }
    // function trimOuterText(){
    //     var p=$('.p-container p');
    //     var divh=$('.p-container').height();
    //     while ($(p).outerHeight()>divh) {
    //         $(p).text(function (index, text) {
    //             return text.replace(/\W*\s(\S)*$/, '...');
    //         });
    // }
    // }
    $( ".test a" ).click(function() {
        $('.test').css('display','none');
        $('.test-terminal').css('display','block');
    });
    




    let questionNumber = 0;
    let inputReady = true;
    let score = 0;
    let input = $('.404-input');
    let mail = false;
    input.focus();
    $('.container').on('click', function(e){
        input.focus();
    });



    input.on('keyup', function(e){
        $('.new-output').text(input.val());
        // console.log(inputReady);
    });

    
    $( ".test a" ).click(function() {
        input.focus();
    });



    $('.four-oh-four-form').on('submit', function(e){


        $('#terminal').stop().animate({
            scrollTop: $('#terminal')[0].scrollHeight
          }, 800);



        e.preventDefault();
        let val = $(this).children($('.404-input')).val().toLowerCase();

        if (questionNumber < 10) {
            if (val === 'y' || val === 'n'){
                newQuestion(val);
            }else {
                resetForm();
            }
        }
        else {
            let result ='';
            if (mail == false) {
                result = 'Ваш результат ' + score + ' из 10.';
                if (score < 5) {
                    result += ' Тест не пройден.'
                }
                else {
                    result += ' Тест пройден. Введите вашу почту, чтобы мы могли прислать вам сертификат.'
                }
                mail = true;
            }
            else {
                result = 'Спасибо за участие!';
            }
            $('.new-output').removeClass('new-output');
            $('.404-input').val('');
            $('.terminal').append('<p class="prompt">' + result + '</p><p class="prompt output new-output"></p>');
            return;
        }
        
    });

    function newQuestion(val){
        let message ='';
        questionNumber++;
        let correctAnswers = ['y','n','y','y','y','y','y','n','y','n'];
        let ansver = val;
        if (ansver == correctAnswers[(questionNumber-1)]) {
            message += "Правильный ответ."
            score++;
        }
        else {
            message += "Неправильный ответ."
        }
        let input = $('.404-input');
        

        let questionsText = [
            '<p class="prompt">Вопрос 1/10<br>Текст вопроса</p>',
            '<p class="prompt">Вопрос 2/10<br>Текст вопроса</p>',
            '<p class="prompt">Вопрос 3/10<br>Текст вопроса</p>',
            '<p class="prompt">Вопрос 4/10<br>Текст вопроса</p>',
            '<p class="prompt">Вопрос 5/10<br>Текст вопроса</p>',
            '<p class="prompt">Вопрос 6/10<br>Текст вопроса</p>',
            '<p class="prompt">Вопрос 7/10<br>Текст вопроса</p>',
            '<p class="prompt">Вопрос 8/10<br>Текст вопроса</p>',
            '<p class="prompt">Вопрос 9/10<br>Текст вопроса</p>',
            '<p class="prompt">Вопрос 10/10<br>Текст вопроса</p>',
            ' Узнать результат?'
        ];

        message = message + questionsText[(questionNumber)];

        $('.new-output').removeClass('new-output');
        input.val('');
        $('.terminal').append('<p class="prompt">' + message + '</p><p class="prompt output new-output"></p>');

    }

    function resetForm(){
        $('.new-output').removeClass('new-output');
        $('.404-input').val('');
        $('.terminal').append('<p class="prompt">' + "Неверный ввод" + '</p><p class="prompt output new-output"></p>');
    }




	function textEffect(line){
		let alpha = [';', '.', ',', ':', ';', '~', '`'];
		let animationSpeed = 10;
		let index = 0;
		let string = line.text();
		let splitString = string.split("");
		let copyString = splitString.slice(0);

		let emptyString = copyString.map(function(el){
		    return [alpha[Math.floor(Math.random() * (alpha.length))], index++];
		})

		emptyString = shuffle(emptyString);

		$.each(copyString, function(i, el){
		    var newChar = emptyString[i];
		    toUnderscore(copyString, line, newChar);

		    setTimeout(function(){
		      fromUnderscore(copyString, splitString, newChar, line);
		    },i * animationSpeed);
		  })
	}

	function toUnderscore(copyString, line, newChar){
		copyString[newChar[1]] = newChar[0];
		line.text(copyString.join(''));
	}

	function fromUnderscore(copyString, splitString, newChar, line){
		copyString[newChar[1]] = splitString[newChar[1]];
		line.text(copyString.join(""));
	}


	function shuffle(o){
	    for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
	    return o;
	};



















});