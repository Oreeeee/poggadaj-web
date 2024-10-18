<script>
	import { _ } from "svelte-i18n"
</script>

<h2 id="mainpage-h2">{$_("mainpage-p1")}</h2>

<div>
	<div class="column">
		<h4 class="feature-list-element">{$_("features")}:</h4>
		<ul id="feature-list" class="feature-list-element">
			<li>{$_("gg6-support")}</li>
			<li>{$_("no-annoying-ads")}</li>
			<li>{$_("easy-installation")}</li>
			<li>{$_("open-source")}</li>
			<li>{$_("bot-compatibility")}</li>
			<li>{$_("more-clients")}</li>
		</ul>
	</div>
	<div class="column">
		<img src="gg61.png" alt="Example screenshot of Gadu-Gadu 6.1 connected to poGGadaj">
	</div>
</div>

<style>
	#mainpage-h2 {
		font-family: 'JetBrains Mono Medium';
		font-weight: 500;
	}

	#feature-list {
		list-style-image: url('/brb.png');
	}

	.feature-list-element {
		font-family: 'Lato Regular';
	}
</style>
