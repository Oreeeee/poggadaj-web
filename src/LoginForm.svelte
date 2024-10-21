<script>
    import { _ } from "svelte-i18n"
    export let usage;

    let username;
    let password;

    async function submitLogin() {
        const req = await fetch(`/api/v1/login?name=${username}&password=${password}`)
        const res = await req.status

        if (res == 401) {
            alert($_("wrong-uop"))
        }
        if (res == 200) {
            alert($_("authenticated"))
            window.location.href = "/account"
        }
    }

    async function submitRegister() {
        const req = await fetch(`/api/v1/register?name=${username}&password=${password}`)
        const res = await req.status

        if (res == 200) {
            alert($_("registered"))
            window.location.href = "/login"
        } else {
            alert($_("register-fail"))
        }
    }
</script>

<div class="login-form">
    <label for="username">{$_("web-username")}</label>
    <input type="text" id="username" bind:value={username}>
    <br><br>
    <label for="password">{$_("web-password")}</label>
    <input type="password" id="password" bind:value={password}>
    <br><br>
    {#if usage == "login"}
    <button on:click={submitLogin}>{$_("login")}</button>
    {:else if usage == "register"}
    <button on:click={submitRegister}>{$_("register")}</button>
    {/if}
</div>
