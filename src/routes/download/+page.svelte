<script>
    import { _ } from 'svelte-i18n'
    import Client from "../../Client.svelte";
    import Warning from '../../Warning.svelte';
</script>

<h1>{$_("patched-clients")}</h1>
<Warning wType="info" message={$_("patched-clients-note")} />
<div id="client-box">
    <Client name="Gadu-Gadu 6.0" description={$_("gg60-description")} imageUrl="gg60.png" downloadUrl="/dl/gg60-poggadajv1.0.zip" noSSL insecureHash modernWinProblems />
    <br>
    <Client name="Gadu-Gadu 6.1" description={$_("gg61-description")} imageUrl="gg61.png" downloadUrl="/dl/gg61-poggadajv1.0.zip" noSSL insecureHash modernWinProblems />
    <br>
    <Client name="Gadu-Gadu 7.0" description={$_("gg70-description")} imageUrl="gg70.png" downloadUrl="/dl/gg70-poggadajv1.0.zip" noSSL insecureHash modernWinProblems />
    <br>
    <Client name="Gadu-Gadu 7.1" description={$_("gg71-description")} imageUrl="gg71.png" downloadUrl="/dl/gg71-poggadajv1.0.zip" noSSL insecureHash modernWinProblems />
</div>
<!--
<h1>{$_("auto-patching")}</h1>
<Warning wType="info" message="Work in progress!" />
<h1>{$_("unpatched")}</h1>
<Warning wType="warn" message={$_("unpatched-clients-note")} />
-->
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
