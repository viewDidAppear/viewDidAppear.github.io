document.addEventListener('DOMContentLoaded', () => {
const tilesContainer = document.querySelector('.tiles');
const page = document.getElementById('metro-page');
if (!tilesContainer) return;

const tiles = Array.from(tilesContainer.querySelectorAll('.tile'));
const EXIT_DURATION = 500;

function navigateWithAnimation(href) {
if (!href) return;

tilesContainer.classList.add('is-exiting');
page?.classList.add('is-exiting');

setTimeout(() => {
window.location.href = href;
}, EXIT_DURATION);
}

tiles.forEach(tile => {
const href = tile.dataset.href;
if (!href) return;

function pressAndNavigate() {
tile.classList.add('is-pressed');

// 🔥 Force a paint before exit animation
requestAnimationFrame(() => {
requestAnimationFrame(() => {
navigateWithAnimation(href);
});
});
}

tile.addEventListener('touchstart', e => {
e.stopPropagation();
pressAndNavigate();
}, { passive: true });

tile.addEventListener('pointerdown', e => {
pressAndNavigate();
});

tile.addEventListener('click', e => {
e.preventDefault();
pressAndNavigate();
});

tile.addEventListener('keydown', e => {
if (e.key === 'Enter' || e.key === ' ') {
e.preventDefault();
pressAndNavigate();
}
});
});

// BFCache reset
window.addEventListener('pageshow', () => {
  tiles.forEach(tile => {
tile.classList.remove('is-pressed');
});
tilesContainer.classList.remove('is-exiting');
page?.classList.remove('is-exiting');
});
});