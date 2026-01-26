document.addEventListener('DOMContentLoaded', () => {
const tilesContainer = document.querySelector('.tiles');
const page = document.getElementById('metro-page');
if (!tilesContainer) return;

const tiles = Array.from(tilesContainer.querySelectorAll('.tile'));

function navigateWithAnimation(href, tile) {
if (!href || href === 'undefined') return;

tile.classList.add('is-pressed'); // optional immediate press
tilesContainer.classList.add('is-exiting');
page?.classList.add('is-exiting');

// ❌ Use requestAnimationFrame chaining instead of setTimeout
requestAnimationFrame(() => {
requestAnimationFrame(() => {
window.location.assign(href);
});
});
}

tiles.forEach(tile => {
const href = tile.dataset.href;
if (!href) return;

function pressTile() {
tile.classList.add('is-pressed');
}

function releaseTile() {
const currentHref = tile.dataset.href;
if (!currentHref) return;
navigateWithAnimation(currentHref, tile);
tile.classList.remove('is-pressed');
}

function cancelPress() {
tile.classList.remove('is-pressed');
}

// Pointer events
tile.addEventListener('pointerdown', pressTile);
tile.addEventListener('pointerup', e => {
if (e.target.closest('.tile') === tile) releaseTile();
else cancelPress();
});
tile.addEventListener('pointerleave', cancelPress);

// Touch events
tile.addEventListener('touchstart', pressTile, { passive: true });
tile.addEventListener('touchend', e => {
const touch = e.changedTouches[0];
if (document.elementFromPoint(touch.clientX, touch.clientY)?.closest('.tile') === tile) {
releaseTile();
} else cancelPress();
}, { passive: true });
tile.addEventListener('touchcancel', cancelPress);

// Keyboard support
tile.addEventListener('keydown', e => {
if (e.key === 'Enter' || e.key === ' ') {
e.preventDefault();
pressTile();
releaseTile();
}
});

// Prevent default click
tile.addEventListener('click', e => e.preventDefault());
});

// BFCache / back button reset
window.addEventListener('pageshow', () => {
tiles.forEach(tile => tile.classList.remove('is-pressed'));
tilesContainer.classList.remove('is-exiting');
page?.classList.remove('is-exiting');
});
});