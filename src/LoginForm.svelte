<script>
    export let usage;

    let username;
    let password;

    async function submitLogin() {
        const req = await fetch(`http://localhost:8080/api/v1/login?name=${username}&password=${password}`)
        const res = await req.status

        if (res == 401) {
            alert("Wrong username or password")
        }
        if (res == 200) {
            alert("Authenticated!")
        }
    }

    async function submitRegister() {
        const req = await fetch(`http://localhost:8080/api/v1/register?name=${username}&password=${password}`)
        const res = await req.status

        if (res == 200) {
            alert("Registered successfully, redirecting to login page...")
            window.location.href = "/login"
        } else {
            alert("An error has occured when registering")
        }
    }
</script>

<div class="login-form">
    <label for="username">Web Username</label>
    <input type="text" id="username" bind:value={username}>
    <br><br>
    <label for="password">Web Password</label>
    <input type="password" id="password" bind:value={password}>
    <br><br>
    {#if usage == "login"}
    <button on:click={submitLogin}>Login</button>
    {:else if usage == "register"}
    <button on:click={submitRegister}>Register</button>
    {/if}
</div>
