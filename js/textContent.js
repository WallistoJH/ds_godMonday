
// 본문 텍스트 영역
document.addEventListener('DOMContentLoaded', function() { 
    var p = document.querySelector('.bible-content'); 
    p.textContent = `아침 빛이 비쳐오네, 월요일의 신이여!
    어둠이 걷히고 빛이 비치는 아침, 월요신의 말씀을 들으라. 새로운 시작을 알리는 월요일, 주님의 은혜와 축복이 너와 함께하기를 바라라. 이 아침, 지친 몸과 마음을 쉼으로 회복하며 주님께 감사를 드리고, 새로운 시작을 위한 힘을 얻을 수 있기를 소원하라. 주님의 인도하심에 힘입어 이날을 축복받아 새로운 시작으로 여기며, 주님의 말씀을 받들어 새로운 한 주의 여정을 함께하려 하라.
    ✧ 일거리가 쌓인 채로 시작되는 월요일, 주님은 직장인에게 자비를 베푸시며 함께 하시리로다. 주님은 너의 노력과 피곤을 아시고, 너의 노력에 보답하여 인내심과 힘을 주시리로다. 직장인들은 주님의 어루만져주심과 인도하심에 의지하여 이 날을 축복 받고 소망을 품으며, 주님과 함께하는 월요일은 힘찬 출근의 시작이 되리로다.
    ✧ 미래를 향한 준비로 시작되는 월요일, 취업 준비생이여, 슬퍼말라. 주님은 네 미래에 밝은 계획을 가지고 계시니 너를 격려하며 인도하실 것이니라. 불안한 마음을 달래며 주님의 약속을 기억하라. 주님은 너의 미래에 풍성한 희망을 안겨주시리로다. 주님과 함께하는 월요일은 너의 미래를 향한 소망과 기쁨으로 가득한 하루가 되리로다.
    ✧ 오늘도 활기차고 힘찬 월요신의 가호를 받으며, 너의 월요일을 함께 축복하자. 이 날을 축복받고 주님의 사랑을 고백하며 시작하라. 주님은 너의 하루에 희망과 기쁨을 내리실 것이니라. 주님과 함께하는 월요일은 새로운 일들에 기쁨을 누리며 주님의 축복과 관심 속에서 힘찬 출발을 하리로다. Amen.
    `;
});

var spans; // 함수 외부에서 spans 변수를 정의
// 처음 시작시, 단어 쪼개기
document.addEventListener('DOMContentLoaded', function() {
    let bible = document.querySelector('.bible-content');
    let text = bible.innerText;
    let words = text.split(/\s+/); // 텍스트 공백 기준으로 분리하여 단어 배열을 만듬
    bible.innerHTML = '';
    // 단어 배열의 각 단어에 대해 루프를 돕니다. 
    words.forEach(function(word) { 
        // 각 단어를 감싸는 새로운 span 태그를 생성합니다. 
        var span = document.createElement('span'); 
        // span 태그에 단어를 추가합니다. 
        span.innerText = word + ' '; 
        // 완성된 span 태그를 p 태그에 추가합니다.
        bible.appendChild(span); 
    }); 
    spans = document.querySelectorAll('.bible-content span:not(.select)'); // spans 변수에 할당
});