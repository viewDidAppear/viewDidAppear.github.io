---
layout: page
title: "Music"
---

<link
rel="preload"
href="/assets/fonts/LINESeedSans_W_He.woff2"
as="font"
type="font/woff2"
crossorigin
>

<link
rel="preload"
href="/assets/fonts/LINESeedSans_W_He.woff"
as="font"
type="font/woff"
crossorigin
>

<link
rel="preload"
href="/assets/fonts/LINESeedSans_W_Rg.woff2"
as="font"
type="font/woff2"
crossorigin
>

<link
rel="preload"
href="/assets/fonts/LINESeedSans_W_Rg.woff"
as="font"
type="font/woff"
crossorigin
>

<div class="page-stage">
<div class="tile-small"
data-accent="core"
data-accent-contrast="core-accent">
<img src="/assets/images/music.png"/>
</div>

<div class="tile-mini"
data-accent="core"
data-accent-contrast="core-accent">
</div>
</div>

<div class="bio">
<p>Here're some of the things I'm bumping recently. Tap to open in Apple Music.<br/><br/>

	—
</p>
<p>最近ヘビロテしている曲をまとめました。タップすると、Apple Musicで再生できます。
</p>
</div>

<div class="music-grid">
	<div class="music-grid-row mixed">
		<div class="music-grid-column large">
			<div class="music-grid-tile large" style="--img: url('/assets/images/wgia.webp')"></div>
		</div>

		<div class="music-grid-column small-grid">
			<div class="music-grid-tile small" style="--img: url('/assets/images/period.png')"></div>
			<div class="music-grid-tile small" style="--img: url('/assets/images/mayhem.png')"></div>
			<div class="music-grid-tile small" style="--img: url('/assets/images/negative.png')"></div>
			<div class="music-grid-tile small" style="--img: url('/assets/images/sexistential.png')"></div>
		</div>
	</div>
</div>

<div class="music-grid">
	<div class="music-grid-row mixed">
		<div class="music-grid-column small-grid">
			<div class="music-grid-tile small" style="--img: url('/assets/images/empty.png')"></div>
			<div class="music-grid-tile small" style="--img: url('/assets/images/dcp.png')"></div>
			<div class="music-grid-tile small" style="--img: url('/assets/images/wnga.jpg')"></div>
			<div class="music-grid-tile small" style="--img: url('/assets/images/tfm.png')"></div>
		</div>

		<div class="music-grid-column large">
			<div class="music-grid-tile large" style="--img: url('/assets/images/inf.jpg')"></div>
		</div>
	</div>
</div>

<div class="music-grid">
	<div class="music-grid-row four-up">
			<div class="music-grid-tile" style="--img: url('/assets/images/artpop.png')"></div>
			<div class="music-grid-tile" style="--img: url('/assets/images/sb.png')"></div>
			<div class="music-grid-tile" style="--img: url('/assets/images/wnga.jpg')"></div>
			<div class="music-grid-tile" style="--img: url('/assets/images/tfm.png')"></div>
	</div>
</div>

<div class="music-grid">
	<div class="music-grid-row four-up">
			<div class="music-grid-tile" style="--img: url('/assets/images/bbtm.png')"></div>
			<div class="music-grid-tile" style="--img: url('/assets/images/afo.png')"></div>
			<div class="music-grid-tile" style="--img: url('/assets/images/fptb.jpg')"></div>
			<div class="music-grid-tile" style="--img: url('/assets/images/btw.png')"></div>
	</div>
</div>

<script>
function resetWP8Button(el) {
el.classList.add('reset');

// Force a repaint so :active is dropped
requestAnimationFrame(() => {
el.classList.remove('reset');
});
}
</script>