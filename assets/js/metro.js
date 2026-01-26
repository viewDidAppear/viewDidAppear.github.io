document.addEventListener('DOMContentLoaded', () => {
const tilesContainer = document.querySelector('.tiles');
const page = document.getElementById('metro-page');
if (!tilesContainer) return;

const tiles = Array.from(tilesContainer.querySelectorAll('.tile'));

const SCROLL_THRESHOLD = 10; // pixels of movement to consider a scroll

function navigateWithAnimation(href, tile) {
if (!href || href === 'undefined') return;

tile.classList.add('is-pressed');
tilesContainer.classList.add('is-exiting');
page?.classList.add('is-exiting');

requestAnimationFrame(() => {
requestAnimationFrame(() => {
window.location.assign(href);
});
});
}

tiles.forEach(tile => {
const href = tile.dataset.href;
if (!href) return;

let startX = 0;
let startY = 0;
let moved = false;

function pressTile(e) {
tile.classList.add('is-pressed');
moved = false;

// record touch start
if (e.type.startsWith('touch')) {
const touch = e.touches[0];
startX = touch.clientX;
startY = touch.clientY;
} else if (e.type === 'pointerdown') {
startX = e.clientX;
startY = e.clientY;
}
}

function releaseTile(e) {
if (moved) {
// finger moved, likely a scroll → cancel navigation
tile.classList.remove('is-pressed');
return;
}

const currentHref = tile.dataset.href;
if (!currentHref) return;

navigateWithAnimation(currentHref, tile);
tile.classList.remove('is-pressed');
}

function moveHandler(e) {
let currentX, currentY;

if (e.type.startsWith('touch')) {
const touch = e.touches[0];
currentX = touch.clientX;
currentY = touch.clientY;
} else {
currentX = e.clientX;
currentY = e.clientY;
}

const dx = Math.abs(currentX - startX);
const dy = Math.abs(currentY - startY);

if (dx > SCROLL_THRESHOLD || dy > SCROLL_THRESHOLD) {
moved = true;
tile.classList.remove('is-pressed');
}
}

function cancelPress() {
tile.classList.remove('is-pressed');
moved = true;
}

// Pointer events
tile.addEventListener('pointerdown', pressTile);
tile.addEventListener('pointermove', moveHandler);
tile.addEventListener('pointerup', releaseTile);
tile.addEventListener('pointerleave', cancelPress);

// Touch events
tile.addEventListener('touchstart', pressTile, { passive: true });
tile.addEventListener('touchmove', moveHandler, { passive: true });
tile.addEventListener('touchend', releaseTile, { passive: true });
tile.addEventListener('touchcancel', cancelPress);

// Keyboard
tile.addEventListener('keydown', e => {
if (e.key === 'Enter' || e.key === ' ') {
e.preventDefault();
pressTile(e);
releaseTile(e);
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