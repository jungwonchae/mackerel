// /assets/js/main.js

// 메뉴 열기 (헤더의 햄버거)
document.getElementById('menuBtn')?.addEventListener('click', (e) => {
    e.preventDefault();
    document.body.classList.add('menu-open');
  });
  
  // 메뉴 닫기 (X 버튼 + 오버레이 바깥 클릭 옵션)
  document.getElementById('menuClose')?.addEventListener('click', () => {
    document.body.classList.remove('menu-open');
  });
  
  // ESC 로 닫기
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') document.body.classList.remove('menu-open');
  });
  
  // 게시판 아코디언: 버튼으로 열고 닫기
(function(){
    const btn  = document.getElementById('boardToggle');
    const list = document.getElementById('boardSub');
    if (!btn || !list) return;
  
    const chev = btn.querySelector('.chev');
  
    // 초기 상태: list에 hidden 있으면 접힘, 없으면 펼침
    function setState(expanded){
      btn.setAttribute('aria-expanded', expanded ? 'true' : 'false');
      if (expanded) {
        list.removeAttribute('hidden');
      } else {
        list.setAttribute('hidden', '');
      }
      if (chev) chev.style.transform = expanded ? 'rotate(180deg)' : 'rotate(0deg)';
    }
  
    // 초기화
    setState(!list.hasAttribute('hidden') ? true : false);
  
    // 토글
    btn.addEventListener('click', () => {
      const expanded = btn.getAttribute('aria-expanded') === 'true';
      setState(!expanded);
    });
  })();
  