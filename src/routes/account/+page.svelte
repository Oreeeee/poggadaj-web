<script>
    import { onMount } from "svelte";
    import { _ } from "svelte-i18n"

    let ggpass
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

    async function updateGGpass() {
        const req = await fetch(`/api/v1/chgclpwd`, {
                method: "POST",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    "password_type": 4,
                    "password": ggpass,
                })
            }
        )

        const resCode = req.status
        const resContents = req.text()

        if (resCode == 200) {
            alert($_("password-chg-succ"))
        } else {
            alert(resContents)
        }
    }
</script>

<h1>{$_("your-uin")}: {ggUIN}</h1>
<h1>{$_("joined-date")}: {joinedDate}</h1>
<label for="gg-changepass">{$_("gg-changepass")}</label>
<input type="password" name="gg-changepass" id="gg-changepassfield" bind:value={ggpass}>
<button on:click={updateGGpass}>{$_("submit")}</button>
