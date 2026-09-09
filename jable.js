javascript:(function(){
  let t = document.title;
  let img = document.querySelector('meta[property="og:image"]');
  let cover = img ? img.content : '';
  let code = t.split(/[-|_]?\s*Jable\.TV/i)[0].trim();
  let act = window.getSelection().toString().trim();
  let myUrl = 'http://127.0.0.1:5500/index.html'; /* 換成你的網址 */
  let finalUrl = myUrl + '?code=' + encodeURIComponent(code) + '&cover=' + encodeURIComponent(cover) + '&actress=' + encodeURIComponent(act) + '&url=' + encodeURIComponent(window.location.href);
  let a = document.createElement('a'); a.href = finalUrl; a.target = '_blank';
  document.body.appendChild(a); a.click(); document.body.removeChild(a);
})();