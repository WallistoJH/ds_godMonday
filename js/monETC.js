 // 신성한 음악의 기운
 var audio = document.getElementById('bgm'); 
 function playAudio() { audio.play(); } 
 function pauseAudio() { audio.pause(); } 

 document.addEventListener('DOMContentLoaded', function() {
     const bgm = document.getElementById('bgm');
     const playButton = document.getElementById('playButton');
     const audioMessage = document.getElementById('audioMessage');

     bgm.play().catch(error => {
         console.log('Audio autoplay was prevented:', error);
         audioMessage.style.display = 'block';
         playButton.style.display = 'inline';
     });
 });

 function playAudio() {
     const bgm = document.getElementById('bgm');
     bgm.play().then(() => {
         document.getElementById('audioMessage').style.display = 'none';
     }).catch(error => {
         console.log('Audio play was prevented:', error);
     });
 }

 function pauseAudio() {
     const bgm = document.getElementById('bgm');
     bgm.pause();
 }

 // 신성 모독 방지
 function curse() { 
     alert('부정한 짓은 신성 모독이다...');
     location.reload();
 }
 document.addEventListener('keydown', function(event) {
     if ((event.ctrlKey || event.metaKey) && (event.key === 'v' || event.key === 'V')) {
         alert('부정한 짓은 신성 모독이다...');
         location.reload();
     }
 });

 // 엔딩
 function endingMotion() {
     var theMoonWrap = document.querySelector('#bg .moon');
     var triggerEnd = document.querySelector('.ds-trigger');
     document.body.classList.add('active');        
     theMoonWrap.classList.add('fin');    
     triggerEnd.classList.add('dis-none');
 }