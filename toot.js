function toot(){ document.querySelectorAll('button[type="submit"]').forEach(b=>{if (b.innerText == 'Publish!') {b.innerText = 'Toot!'}}); }
let ob = new MutationObserver(toot);
function observe(){ ob.observe(document.body, {subtree: true, childList: true}); }
document.addEventListener("load", observe);
observe();
