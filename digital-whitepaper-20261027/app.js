'use strict';
const search = document.getElementById('q');
const list = document.getElementById('list');
const count = document.getElementById('count');
const data = 장데이터;
function render() {
  const keyword = search.value.trim().toLocaleLowerCase('ko');
  const results = data.filter(item => !keyword || item.제목.toLocaleLowerCase('ko').includes(keyword) || item.본문.toLocaleLowerCase('ko').includes(keyword));
  count.textContent = `결과 ${results.length}`;
  list.replaceChildren();
  if (!results.length) { const empty=document.createElement('p'); empty.className='empty'; empty.textContent='검색 결과가 없습니다. 다른 검색어를 입력해 주세요.'; list.append(empty); return; }
  for (const item of results) {
    const card=document.createElement('article'); card.className='card';
    const label=document.createElement('span'); label.className='label'; label.textContent=`${item.장}장`;
    const title=document.createElement('h3'); title.textContent=item.제목;
    const body=document.createElement('div'); body.className='body'; body.textContent=item.본문.replace(/^###\s+/gm,'').replace(/\*\*/g,'');
    card.append(label,title,body); list.append(card);
  }
}
search.addEventListener('input',render);
document.getElementById('clear').addEventListener('click',()=>{search.value='';render();search.focus();});
render();
