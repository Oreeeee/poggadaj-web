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
    <a href="/account">
        <button>{$_('account')}</button>
    </a>
    <button>{$_('stats')}</button>
</div>
