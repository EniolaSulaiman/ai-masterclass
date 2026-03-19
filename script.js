(function () {
    let total = 11 * 3600 + 47 * 60 + 23;
    let hEl = document.getElementById('h'), mEl = document.getElementById('m'), sEl = document.getElementById('s'), ftEl = document.getElementById('final-timer');
    function pad(n) { return String(n).padStart(2, '0'); }
    function tick() {
        if (total <= 0) { return; }
        total--;
        let h = Math.floor(total / 3600), m = Math.floor((total % 3600) / 60), s = total % 60;
        hEl.textContent = pad(h); mEl.textContent = pad(m); sEl.textContent = pad(s);
        if (ftEl) ftEl.textContent = pad(h) + ':' + pad(m) + ':' + pad(s) + ' remaining';
    }
    setInterval(tick, 1000); tick();
}) ();

function toggleFaq(btn) {
    let item = btn.parentElement;
    let isOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item').forEach(function (i) {
        i.classList.remove('open');
        i.querySelector('.faq-q').setAttribute('aria-expanded', 'false');
    });
    if (!isOpen) { item.classList.add('open'); btn.setAttribute('aria-expanded', 'true'); }
}

let obs = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } });
}, { threshold: 0.08 });
document.querySelectorAll('.fade-up').forEach(function (el) { obs.observe(el); });