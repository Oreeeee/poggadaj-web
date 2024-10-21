<script>
    import { onMount } from "svelte";
    import { _ } from "svelte-i18n"

    let gg32pass
    let ggUIN
    let joinedDate

    onMount(async function() {
        // Verify if user is authenticated
        const req = await fetch(`/api/v1/is-authenticated`)
        const res = await req.status

        if (res != 200) {
            window.location.href = "/login"
        }

        // Get user data
        const req2 = await fetch("/api/v1/user-data")
        const res2 = await req2.json()

        ggUIN = res2.uin
        joinedDate = res2.joined
    })

    async function updateGG32pass() {
        const req = await fetch(`/api/v1/gg32-changepwd?password=${gg32pass}`)
        const res = await req.status

        if (res == 200) {
            alert($_("password-chg-succ"))
        } else {
            alert($_("password-chg-fail"))
        }
    }
</script>

<h1>{$_("your-uin")}: {ggUIN}</h1>
<h1>{$_("joined-date")}: {joinedDate}</h1>
<label for="gg32-pass">{$_("gg32-changepass")}</label>
<input type="password" name="gg32-pass" id="gg32-passfield" bind:value={gg32pass}>
<button on:click={updateGG32pass}>{$_("submit")}</button>
