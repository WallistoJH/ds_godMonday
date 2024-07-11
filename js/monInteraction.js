/* 
    신성한 월요신경 인터렉션 효과 영역
    -=-=-=-=-=-=-=-=-=-=-=-=-=-
    월요신경을 볼 수 있게하는 진정한 월요신을 접선하는 방법을 담은 문서...
*/

// 트리거 -> 랜덤 인덱스 돌리기
function rIndex() {
    var spansMax = document.querySelectorAll('.bible-content span');
    var spans = document.querySelectorAll('.bible-content span:not(.select)');
    // var selectspan = document.querySelectorAll('.bible-content .select'); 
    var randomIndex = Math.floor(Math.random() * spans.length); 

    let r = Math.floor(Math.random() * 255); // 정수로 변환
    let g = Math.floor(Math.random() * 255); // 정수로 변환
    let b = Math.floor(Math.random() * 255); // 정수로 변환
    spans[randomIndex].classList.add('select');
    spans[randomIndex].style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';

    console.log(spans.length + '개/' + spansMax.length );
    if (spans.length > 160) {
        console.log('아직');
    } else {
        console.log('지금이다!');
    }
    if (spans.length < 2) {
        console.log('경사났슈');
        endingMotion();
    }

    // 퍼센테이지
    let per = Math.floor(spans.length/spansMax.length);
    if (Math.floor((1-(spans.length/spansMax.length))*100) > 97.9) {
        document.querySelector('#Per').textContent = '100%';
    } else {
        document.querySelector('#Per').textContent = Math.floor((1-(spans.length/spansMax.length))*100) + '%';
    }


    // 다가오는 가젤신
    document.querySelector('#bg #finEnding .wrap img').style.transform = 'scale(' + (1+(1-(spans.length/spansMax.length))*1.5) + ')';


    var theMoonWrap = document.querySelector('#bg .moon');
    var theMoon = document.querySelector('#bg .moon img');
    var moonCalc = 1-(((spans.length-1)/(spansMax.length)));
    // 달 효과
    // theMoon.style.transform = 'scale(' + moonCalc + ')';
    theMoonWrap.style.opacity = '' + moonCalc + '';
    switch(true) {
        case moonCalc > 0.8:
            theMoonWrap.classList.add('fourth'); break;
        case moonCalc > 0.6:
            theMoonWrap.classList.add('third'); break;
        case moonCalc > 0.4:
            theMoonWrap.classList.add('second'); break;
        case moonCalc > 0.2:
            theMoonWrap.classList.add('first'); break;
        case moonCalc > 0.994:
            theMoonWrap.classList.add('fin'); break;
        default:
            // 다른 경우에 대한 처리
            break;
    }
    console.log('달' + moonCalc);

    // 더 달 스타일
    // theMoon.style.transform = 'translate(' + xRandom + 'vw, ' + yRandom + 'vh)';


    // 트리거 버튼들 변수
    var randomTrigger = document.querySelectorAll('.ds-trigger__wrap .ds-trigger__wrap__list');
    var randomIndexToShow = Math.floor(Math.random() * randomTrigger.length);

    randomTrigger.forEach(function(item, index) {
    if (index === randomIndexToShow) {
        item.classList.remove('dis-none');
    } else {
        item.classList.add('dis-none');
    }
    });

}




// 두번째 - 트리거 받아 쓰기
let intervalId; // setInterval 함수의 반환 값(함수 ID)
const texts = [
    "새롭게 시작하고 너의 목표를 성취하라",
    "네가 직면하고 있는 장애물이 무엇이든 영원하지 않으리",
    "자신을 더 강하다고 생각하며 건강한 삶을 더 충실히 살라",
    "월요일은 1년에 53번 주어지는 새로운 시작",
    "할 것인가 말것인가 시도라는 것은 의미없다",
    "살아남았다는 것은 강하다는 증거",
    "이기고 싶다면, 충분한 몸과 체력을 만들라",
    "회사가 전쟁터이면, 밖은 지옥이니라",
    "지금 잠을 자면 꿈을 꾸지만 지금 공부하면 꿈을 이룬다",
    "내가 헛되이 보낸 오늘은 어제 죽은 이가 갈망하던 내일이다",
    "늦었다고 생각했을 때가 가장 빠른 때이다",
    "오늘 할 일을 내일로 미루지 마라",
    "공부할 때의 고통은 잠깐이지만 못 배운 고통은 평생이다",
    "공부는 시간이 부족한 것이 아니라 노력이 부족한 것이다",
    "행복은 성적순이 아닐지 몰라도 성공은 성적순이다",
    "공부가 인생의 전부는 아니다", 
    "공부 하나도 정복하지 못한다면 과연 무슨 일을 할 수 있겠는가?",
    "피할 수 없는 고통은 즐겨라",
    "남보다 더 일찍 더 부지런히 노력해야 성공을 맛 볼 수 있다",
    "성공은 아무나 하는 것이 아니다. 철저한 자기 관리와 노력에서 비롯된다",
    "지금 흘린 침은 내일 흘릴 눈물이 된다",
    "오늘 걷지 않으면, 내일 뛰어야 한다",
    "미래에 투자하는 사람은 현실에 충실한 사람이다",
    "오늘 보낸 하루는 내일 다시 돌아오지 않는다",
    "지금 이 순간에도 적들의 책장은 넘어가고 있다",
    "고통이 없으면 얻는것도 없다",
    "꿈이 바로 앞에 있는데, 당신은 왜 팔을 뻗지 않는가?",
    "눈이 감기는가? 그럼 미래를 향한 눈도 감긴다",
    "성적은 투자한 시간의 절대량에 비례한다",
    "가장 위대한 일은 남들이 자고 있을 때 이뤄진다",
    "불가능이란 노력하지 않는 자의 변명이다",
    "노력의 댓가는 이유없이 사라지지 않는다",
    "when you have faults, do not fear to abandon them",
    "age is no guarantee of maturity",
    "youth isn’t always all it’s touted to be",
    "life is either a daring adventure or nothing at all",
    "the goal of life is living in agreement with nature",
    "this too shall pass",
    "the die is cast",
    "only i can change me life, no one can do it for me",
    "when in doubt, choose change",
    "life is unfair, get used to it",
    "being happy never goes out of style",
    "despite the forecast, live like it’s spring",
    "nothing in more despicable than respect based on fear",
    "turn your wounds into wisdom",
    "change the world by being yourself",
    "great minds have purposes, others have wishes",
    "be gentle first with yourself",
    "all we have is now",
    "believe in yourself",
    "a day without laughter is a day wasted",
    "no great man ever complains of want of opportunity",
    "love what you have",
    "it ain’t over till it’s over",
    "no pain no gain",
    "rome is not built in a day",
];
let secondBtn = document.getElementById('secondBtn');
// 랜덤한 텍스트 선택 함수
function getRandomText() {
    const randomIndex = Math.floor(Math.random() * texts.length);
    return texts[randomIndex];
}
const challengeText = document.getElementById("challengeText");
const challengeTextActive = document.getElementById("challengeTextActive");
const challengeTextExample = document.getElementById("challengeTextExample");
const inputText = document.getElementById("challengeTextInput");
// 폼형식 초기화 함수
function initialize() {
    const randomText = getRandomText();
    challengeText.textContent = randomText;
    challengeTextActive.textContent = randomText; 
    challengeTextExample.textContent = randomText; 
    challengeTextActive.classList.remove('start');
    setTimeout( function() {
        challengeTextActive.classList.add('start');
    },50);
        // clearInterval로 이전의 setInterval을 초기화
    clearInterval(intervalId);
    // 성공 시 재설정
    intervalId = setInterval(() => {
        initialize();
    }, 10020);
    // inputText.focus();
    // document.querySelector('.ds-trigger__wrap__list--description').textContent = '✝ 아래의 계시문을 입력하여 월님을 영접하라. ✝';

}
// 엔터 입력 시 처리
inputText.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        const typedText = inputText.value.trim();
        const randomText = challengeText.textContent;
        let audio = new Audio('./mp3/success.mp3');
        if (typedText === randomText) {
            console.log("성공");
            inputText.value = "";
            initialize();
            audio.play();
            return rIndex();
        } else {
            console.log("실패");
            initialize();
            inputText.value = "";
        }
    }
});




// 첫번째 - 트리거
document.addEventListener('DOMContentLoaded', function() {
    let firstBtn = document.getElementById('firstBtn');
    if (firstBtn.classList.contains('active')) {
        // 여기에 원하는 작업을 추가하세요
        console.log('잇다 클래스가');
        let tRandom = Math.floor(Math.random() * 100) + 1000;
        setInterval( function() {
            let xRandom = Math.floor(Math.random() * 94 );
            let yRandom = Math.floor(Math.random() * 97 );
            let tRandom = Math.floor(Math.random() * 300) + 1000;
            firstBtn.style.transform = 'translate(' + xRandom + 'vw, ' + yRandom + 'vh)';
        },tRandom);
    }
});
function Trigger() {
    var audio = new Audio('./mp3/success.mp3');
    audio.play();
    initialize();
    // inputText.focus();
    return rIndex();
}
// document.querySelector('#firstBtn:not(dis-none) + .ds-trigger__wrap__list--description').textContent = '✝ 월님을 따라 마우스를 맞추어 영접하라. ✝';
// document.querySelector('#secondBtn:not(dis-none) + .ds-trigger__wrap__list--description').textContent = '✝ 아래의 계시문을 입력하여 월님을 영접하라. ✝';




// 페이지 로드 시 초기화 함수 호출
initialize();