<script>
    import { _ } from 'svelte-i18n'
</script>

<hgroup id="header">
    <h1>poGGadaj</h1>
    <h2>{$_('header-subtext')}</h2>
</hgroup>

<div>
    <button>{$_('home')}</button>
    <button>{$_('download')}</button>
    <button>{$_('account')}</button>
    <button>{$_('stats')}</button>
</div>
