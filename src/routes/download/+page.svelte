<script>
    import { _ } from 'svelte-i18n'
    import Client from "../../Client.svelte";
    import Warning from '../../Warning.svelte';
</script>

<h1>{$_("patched-clients")}</h1>
<Warning wType="info" message={$_("patched-clients-note")} />
<div id="client-box">
    <!-- TODO: Replace image for GG 6.0 -->
    <Client name="Gadu-Gadu 6.0" description={$_("gg60-description")} imageUrl="gg61.png" noSSL insecureHash modernWinProblems />
    <br>
    <!-- TODO: Replace with a Windows XP screenshot -->
    <Client name="Gadu-Gadu 6.1" description={$_("gg61-description")} imageUrl="gg61.png" noSSL insecureHash modernWinProblems />
</div>
<h1>{$_("auto-patching")}</h1>
<Warning wType="info" message="Work in progress!" />
<h1>{$_("unpatched")}</h1>
<Warning wType="warn" message={$_("unpatched-clients-note")} />
<h1>{$_("manual")}</h1>
<Warning wType="serious" message={$_("manual-patching-note")} />

<style>
    h1 {
        font-family: 'JetBrains Mono Medium';
        font-weight: 400;
    }

    #client-box {
        padding: 10px;
    }
</style>
