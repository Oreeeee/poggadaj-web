<script>
  import {_} from "svelte-i18n"

  let username;
  let password;
  let clientPassword;

  async function register() {
    const req = await fetch(`/api/v1/register`, {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          "username": username,
          "password": password,
          "gg_ancient_password": password,
          "gg32_password": password,
          "gg_sha1_password": password,
        })
      }
    )
    const res = await req.status
    const resContents = await req.text()

    if (res == 200) {
        alert($_("registered"))
        window.location.href = "/login"
    } else {
        alert(resContents)
    }
  }
</script>

<h1>{$_("register")}</h1>
<div class="login-form">
  <label for="username">{$_("web-username")}</label>
  <input type="text" id="username" bind:value={username}>
  <br><br>
  <label for="password">{$_("web-password")}</label>
  <input type="password" id="password" bind:value={password}>
  <br><br>
  <label for="client_password">{$_("client-password")}</label>
  <input type="password" id="client_password" bind:value={clientPassword}>
  <br><br>
  <button on:click={register}>{$_("register")}</button>
</div>
