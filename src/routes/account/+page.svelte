<script>
    import { onMount } from "svelte";

    let gg32pass

    onMount(async function() {
        // Verify if user is authenticated
        const req = await fetch(`/api/v1/is-authenticated`)
        const res = await req.status

        if (res != 200) {
            window.location.href = "/login"
        }
    })

    async function updateGG32pass() {
        const req = await fetch(`/api/v1/gg32-changepwd?password=${gg32pass}`)
        const res = await req.status

        if (res == 200) {
            alert("Password changed successfuly")
        } else {
            alert("Failed to change the password")
        }
    }
</script>

<h1>This page is really barebones right now!</h1>
<label for="gg32-pass">Change your GG32 password</label>
<input type="password" name="gg32-pass" id="gg32-passfield" bind:value={gg32pass}>
<button on:click={updateGG32pass}>Submit</button>
