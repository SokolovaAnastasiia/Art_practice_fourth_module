function indexChangeLanguage() {
    $('.menu li:first-child a').html('> MAIN');

    $('.language').html('Русский');
    $('.language-short').html('Рус');
    $('.header .message').html('We fly to Mars and look for good people with us');
    
    

    $('.qualifying-stage .title').html('FIRST QUALIFICATION STAGE');
    $('.qualifying-stage .info .description').html('Online testing to determine the ability to think analytically. Registration is available until March 20.');
    $('.qualifying-stage .info a').html('Participate <span style="font-style:normal;">[Yes/No]</span>');

    $('.news .title').html('NEWS');
    $('.news-block-mobile .news .news-cards div:nth-child(1) .news-title').html('New sponsors of the project');
    $('.news-block-mobile .news .news-cards div:nth-child(2) .news-title').html('Successful isolation 600 days');
    $('.news-block-mobile .news .news-cards div:nth-child(3) .news-title').html('The countdown has begun!');
    $('.news-block-mobile .news .news-cards div:nth-child(4) .news-title').html('New sponsors of the project');
    $('.news-block-mobile .news .news-cards div:nth-child(5) .news-title').html('New sponsors of the project');

    $('.news-block-mobile .news .news-cards div:nth-child(1) p').html('More and more people are registered in the project. Due to the growing popularity, the project received additional funding for contributions to science.');
    $('.news-block-mobile .news .news-cards div:nth-child(2) p').html('On February 5, the experiment to isolate the team for a period of 600 days ended. The participants are doing well and the experiment is considered successful.');
    $('.news-block-mobile .news .news-cards div:nth-child(3) p').html('25 мая в музее космонавтики установили часы с отбратным отсчётом до отправление ракеты на Марс. Желающие могут сфоткаться с ними.');
    $('.news-block-mobile .news .news-cards div:nth-child(4) p').html('More and more people are registered in the project. Due to the growing popularity, the project received additional funding for contributions to science.');
    $('.news-block-mobile .news .news-cards div:nth-child(5) p').html('More and more people are registered in the project. Due to the growing popularity, the project received additional funding for contributions to science.');

    $('.news-block .news .news-cards div:nth-child(1) .news-title').html('New sponsors of the project');
    $('.news-block .news .news-cards div:nth-child(2) .news-title').html('Successful isolation 600 days');
    $('.news-block .news .news-cards div:nth-child(3) .news-title').html('The countdown has begun!');
    $('.news-block .news .news-cards div:nth-child(4) .news-title').html('New sponsors of the project');
    $('.news-block .news .news-cards div:nth-child(5) .news-title').html('New sponsors of the project');

    $('.news-block .news .news-cards div:nth-child(1) p').html('More and more people are registered in the project. Due to the growing popularity, the project received additional funding for contributions to science.');
    $('.news-block .news .news-cards div:nth-child(2) p').html('On February 5, the experiment to isolate the team for a period of 600 days ended. The participants are doing well and the experiment is considered successful.');
    $('.news-block .news .news-cards div:nth-child(3) p').html('25 мая в музее космонавтики установили часы с отбратным отсчётом до отправление ракеты на Марс. Желающие могут сфоткаться с ними.');
    $('.news-block .news .news-cards div:nth-child(4) p').html('More and more people are registered in the project. Due to the growing popularity, the project received additional funding for contributions to science.');
    $('.news-block .news .news-cards div:nth-child(5) p').html('More and more people are registered in the project. Due to the growing popularity, the project received additional funding for contributions to science.');

    $('.project .info .title span').html('NATIONAL PROJECT');
    $('.project .info .description').html('In 2025, for the first time, there was talk about the creation of a Russian colony on Mars. This happened at the All-Russian exhibition dedicated to the 80th anniversary of the first manned flight into space. A conference was held at the exhibition, where leading experts in the field of cosmonautics and astronomy spoke and biological researchers. Igor Kondratyev, a leading researcher at the Institute for the Study of Space Objects, announced his intention to create a cosmonaut corps. This idea was supported by almost all employees of the institute. The first department of the project was created with the financial support of the Russian government.');
    $('.project .info .description-short').html('In 2025, for the first time, there was talk about the creation of a Russian colony on Mars. This happened at the All-Russian exhibition dedicated to the 80th anniversary of the first manned flight into space.');

}


function missionChangeLanguage(){
    $('.menu li:nth-child(2) a').html('> MISSION');
    $('.mission .title').html('First colony at Mars');
    $('.mission .info .description').html('In 2041, the first manned flight to Mars is planned with the aim of creating an autonomous viable colony.');

    $('.stage:nth-child(1) span').html('1. Takeoff');
    $('.stage:nth-child(1) p').html('<p>09.03.2041<br>13:50:10:00<br>Cosmodrome<br>Vostochny</p>');
    $('.stage:nth-child(2) span').html('2. Orientation');
    $('.stage:nth-child(2) p').html('<p>Trajectory alignment</p>');
    $('.stage:nth-child(3) span').html('3. Flight');
    $('.stage:nth-child(3) p').html('<p>2 months on<br> high power</p>');
    $('.stage:nth-child(4) span').html('4. Landing');
    $('.stage:nth-child(4) p').html('<p>09.03.2041<br>13:50:10:00<br>Equatorial Ridge</p>');

    $('.simulator .info .title, .tour .info .title').html('CONTROL PANEL SIMULATOR');
    $('.simulator .info .information p, .tour .info .information p').html('Try to fly the spaceship manually');
    $('.simulator .info .information p, .tour .info .information a').html('Try it [Yes/No]');
}

function careerChangeLanguage() {

    $('.career .info .title').html('OPEN POSITIONS');
    $('.career .info .description').html('If you already have the necessary skills to start work, send us your resume and we will get in touch.');
    $('.career-tablet .info .title').html('OPEN POSITIONS');
    $('.career-tablet .info .description').html('If you already have the necessary skills to start work, send us your resume and we will get in touch.');
    $('.table-header .position').html('POSITION');
    $('.table-header .city').html('CITY');
    $('.table-header .time').html('TIME');
}

function shopChangeLanguage() {
    $('.male .item .title').html("MEN'S CLOTHING");
    $('.male .item:nth-child(2) .title').html('');
    
    $('.male .item:nth-child(1) .info .name').html('T-shirt Rosmars');
    $('.male .item:nth-child(2) .info .name').html('Hoody Rosmars');
}
