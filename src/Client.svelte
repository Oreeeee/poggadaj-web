<script>
    export let name;
    export let description;
    export let imageUrl;
    export let noSSL;
    export let insecureHash;
    export let modernWinProblems;

    import { _ } from "svelte-i18n"
    import Warning from "./Warning.svelte";
</script>

<div class="client">
    <h1 class="client-name">{name}</h1>
    <div class="column">
        <p class="client-description">{description}</p>

        {#if noSSL}
        <Warning wType="serious" message={$_("no-ssl")} />
        <br>
        {/if}

        {#if insecureHash}
        <Warning wType="warn" message={$_("insecure-hash")} />
        <br>
        {/if}

        {#if modernWinProblems}
        <Warning wType="info" message={$_("modern-win-problems")} />
        {/if}
    </div>
    <div class="column">
        <img src={imageUrl} alt="Screenshot of {name} connected to poGGadaj">
    </div>
</div>

<style>
    .client {
        padding: 10px;
        background-color: darkgrey;
        height: auto;
        overflow-y: auto;
        border: 2px solid black;
    }

    .client-name {
        text-align: left;
        font-family: 'JetBrains Mono Medium';
    }

    .client-description {
        font-family: 'Lato Regular';
    }
</style>