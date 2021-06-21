
// $('.fixed-menu').on('click', function(){
//     $('.dropdown-content').css('display','block');
//     alert('helo');
// });
// $('body').not('.fixed-menu').on('click',function(){
//     $('.dropdown-content').css('display','none');
// })







$(document).ready(function(){
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
    });
    





    let questionNumber = 1;
    let inputReady = true;
    let input = $('.404-input');
    input.focus();
    $('.container').on('click', function(e){
        input.focus();
    });

    input.on('keyup', function(e){
        $('.new-output').text(input.val());
        // console.log(inputReady);
    });

    

    $('.four-oh-four-form').on('submit', function(e){
        e.preventDefault();
        let val = $(this).children($('.404-input')).val().toLowerCase();

        if (val === 'y' || val === 'n'){
            newQuestion(val);
        }else {
            resetForm();
        }
    });

    function newQuestion(val){
        let message;
        let correctAnswers = ['y','n','y','y'];
        let ansver = val;
        if (ansver == correctAnswers[(questionNumber-1)]) {
            message = "Правильный ответ. Следующий вопрос номер: "
        }
        else {
            message = "Неправильный ответ. Следующий вопрос номер: "
        }
        let input = $('.404-input');
        questionNumber++;
        message = message + questionNumber;

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