<script>
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
</script>

<h1>Log In</h1>
<div id="login-form">
    <label for="username">Web Username</label>
    <input type="text" id="username" bind:value={username}>
    <br><br>
    <label for="password">Web Password</label>
    <input type="password" id="password" bind:value={password}>
    <br><br>
    <button on:click={submitLogin}>Enter</button>
</div>

<style>
</style>
