<script>
    import { _ } from 'svelte-i18n'
</script>

<hgroup id="header">
    <h1>poGGadaj</h1>
    <h2>{$_('header-subtext')}</h2>
</hgroup>

<div>
    <a href="/">
        <button>{$_('home')}</button>
    </a>
    <a href="/download">
        <button>{$_('download')}</button>
    </a>
    <button>{$_('account')}</button>
    <button>{$_('stats')}</button>
</div>
