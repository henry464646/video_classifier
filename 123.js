javascript:(function(){
  try {
    let t = document.title || '';
    let imgUrl = '';
    let v = document.querySelector('video');
    if (v && v.getAttribute('poster')) { imgUrl = v.getAttribute('poster'); }
    if (!imgUrl) {
        let posterDiv = document.querySelector('[style*="background-image"]');
        if (posterDiv) {
            let match = posterDiv.style.backgroundImage.match(/url\(['"]?(.*?)['"]?\)/);
            if (match) imgUrl = match[1];
        }
    }
    let code = t.split(/[-|_]?\s*123AV/i)[0].trim();
    let act = window.getSelection().toString().trim();
    let myUrl = 'https://henry464646.github.io/video_classifier/'; /* 換成你的網址 */
    let finalUrl = myUrl + '?code=' + encodeURIComponent(code) + '&cover=' + encodeURIComponent(imgUrl) + '&actress=' + encodeURIComponent(act) + '&url=' + encodeURIComponent(window.location.href);
    let a = document.createElement('a'); a.href = finalUrl; a.target = '_blank';
    document.body.appendChild(a); a.click(); document.body.removeChild(a);
    setTimeout(function() { if (!document.hidden) { window.location.href = finalUrl; } }, 800);
  } catch(e) {}
})();