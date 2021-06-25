


$(document).ready(function(){



    let a = '';
    a += location.pathname.split('/').slice(-1)[0];
    if (sessionStorage.getItem("language") == 'english') {
        $('.fixed-menu ul li:nth-child(1) a').html('MAIN');
        $('.fixed-menu ul li:nth-child(2) a').html('MISSION');
        $('.fixed-menu ul li:nth-child(3) a').html('CAREER');
        $('.fixed-menu ul li:nth-child(4) a').html('SHOP');

        $('.menu li:first-child a').html('MAIN');
        $('.menu li:nth-child(2) a').html('MISSION');
        $('.menu li:nth-child(3) a').html('CAREER');
        $('.menu li:last-child a').html('SHOP');

        $('.footer .contacts').html('telegram: @rosmars<br>vk: vk.com/rosmars-champion<br>email: rosmars@mail.com<br>phone: +7(916)111-22-33<br>');
        $('.footer .signature').html('Rosmars, 2035');

        switch (a) {
            case 'index.html':
            case '':
                indexChangeLanguage();
                break;
            case 'mission.html':
                missionChangeLanguage();
                break;
            case 'career.html':
                careerChangeLanguage();
                break;
            case 'shop.html':
                shopChangeLanguage();
                break;
            default:
                indexChangeLanguage();
                break;
            }
    }

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
            '<p class="prompt">Вопрос 2/10<br>Верно ли утверждение, что только в одном месяце в году есть 28 дней?</p>',
            '<p class="prompt">Вопрос 3/10<br>Может ли у океана и волос быть общее качество?</p>',
            '<p class="prompt">Вопрос 4/10<br>Возможно ли упасть в чай, но остаться сухим?</p>',
            '<p class="prompt">Вопрос 5/10<br>Вторая мировая война началась в 1941?</p>',
            '<p class="prompt">Вопрос 6/10<br>Все люди равны?</p>',
            '<p class="prompt">Вопрос 7/10<br>Георг Гегель понимает судьективность в смысле толерантности. Так ли это?</p>',
            '<p class="prompt">Вопрос 8/10<br>Кибернетическая утопия основана на обработке альтернативных типов энергии?</p>',
            '<p class="prompt">Вопрос 9/10<br>Кант ставит в центр мироздания субъект?</p>',
            '<p class="prompt">Вопрос 10/10<br>Согласно учению Платона существует ли вечно душа?</p>',
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





    let data;

    if (sessionStorage.getItem("language") == 'english') {
        data = [
            { position: 'Electrical engineer' , city:'Moscow', time:'Full-time' },
            { position: 'Aircraft designer' , city:'Saint Petersburg', time:'Full-time' },
            { position: 'Electrical engineer' , city:'Moscow', time:'Full-time' },
            { position: 'Aircraft designer' , city:'Moscow', time:'Full-time' },
            { position: 'Aircraft designer' , city:'Moscow', time:'Part-time' },
            { position: 'Electrical engineer' , city:'Novosibirsk', time:'Full-time' },
            { position: 'Laboratory manager' , city:'Moscow', time:'Full-time' },
            { position: 'Electrical engineer' , city:'Moscow', time:'Full-time' },
            { position: 'Laboratory manager' , city:'Moscow', time:'Part-time' },
            { position: 'Aircraft designer' , city:'Moscow', time:'Part-time' },
        ];
    }
    else {
        data = [
            { position: 'Инженер-электротехник' , city:'Москва', time:'Полная' },
            { position: 'Авиаконструктор' , city:'Санкт-Петербург', time:'Полная' },
            { position: 'Инженер-электротехник' , city:'Москва', time:'Полная' },
            { position: 'Авиаконструктор' , city:'Москва', time:'Полная' },
            { position: 'Авиаконструктор' , city:'Москва', time:'Частичная' },
            { position: 'Инженер-электротехник' , city:'Новосибирск', time:'Полная' },
            { position: 'Руководитель лаборатории' , city:'Москва', time:'Полная' },
            { position: 'Инженер-электротехник' , city:'Москва', time:'Полная' },
            { position: 'Руководитель лаборатории' , city:'Москва', time:'Частичная' },
            { position: 'Авиаконструктор' , city:'Москва', time:'Частичная' },
        ];
    }


    


    let result = JSON.stringify(alasql('SELECT * FROM ?',[data]));
    for (let i = 0; i < JSON.parse(result).length; i++) {
        $('.table').append('<div class="job"><div class="position">'+ JSON.parse(result)[i].position + '</div><div class="city">' + JSON.parse(result)[i].city + '</div><div class="time">' + JSON.parse(result)[i].time + '</div></div>');
    }
    
    

    $( ".selectors>label" ).click(function() {
        let query = "SELECT * FROM ? WHERE ";
        let position = $( "#position option:selected" ).index();
        let city = $( "#city option:selected" ).index();
        let time = $( "#time option:selected" ).index();
        if (sessionStorage.getItem("language") == 'english') {
            switch (position) {
                case 0:
                    query+= "position IS NOT NULL AND ";
                    break;
                case 1:
                    query+= "position = 'Electrical engineer' AND ";
                    break;
                case 2:
                    query+= "position = 'Laboratory manager' AND ";
                    break;
                case 3:
                    query+= "position = 'Aircraft designer' AND ";
                    break;
            }
            switch (city) {
                case 0:
                    query+= "city IS NOT NULL AND ";
                    break;
                case 1:
                    query+= "city = 'Moscow' AND ";
                    break;
                case 2:
                    query+= "city = 'Saint Petersburg' AND ";
                    break;
                case 3:
                    query+= "city = 'Novosibirsk' AND ";
                    break;
            }
            switch (time) {
                case 0:
                    query+= "time IS NOT NULL";
                    break;
                case 1:
                    query+= "time = 'Full-time'";
                    break;
                case 2:
                    query+= "time = 'Part-time'";
                    break;
            }
        }
        else {
            switch (position) {
                case 0:
                    query+= "position IS NOT NULL AND ";
                    break;
                case 1:
                    query+= "position = 'Инженер-электротехник' AND ";
                    break;
                case 2:
                    query+= "position = 'Руководитель лаборатории' AND ";
                    break;
                case 3:
                    query+= "position = 'Авиаконструктор' AND ";
                    break;
            }
            switch (city) {
                case 0:
                    query+= "city IS NOT NULL AND ";
                    break;
                case 1:
                    query+= "city = 'Москва' AND ";
                    break;
                case 2:
                    query+= "city = 'Санкт-Петербург' AND ";
                    break;
                case 3:
                    query+= "city = 'Новосибирск' AND ";
                    break;
            }
            switch (time) {
                case 0:
                    query+= "time IS NOT NULL";
                    break;
                case 1:
                    query+= "time = 'Полная'";
                    break;
                case 2:
                    query+= "time = 'Частичная'";
                    break;
            }
        }
        

        let result = JSON.stringify(alasql(query,[data]));
        console.log(query);

        $('.career-cards .card').remove();

        for (let i = 0; i < JSON.parse(result).length; i++) {
            $('.terminal').append('<p class="prompt">' + "Неверный ввод" + '</p><p class="prompt output new-output"></p>');
            $('.career-cards').append('<div class="card"><p class="position">'+ JSON.parse(result)[i].position +'</p><span class="time">'+ JSON.parse(result)[i].time + '</span><span class="city">' + JSON.parse(result)[i].city+ '</span>');
        }
        // console.log(position + ' ' + city + ' ' + time);
        // console.log(query);
    });

    



    






        // let query = "SELECT * FROM ? WHERE position IS NOT NULL AND city IS NOT NULL AND time IS NOT NULL";
        










});