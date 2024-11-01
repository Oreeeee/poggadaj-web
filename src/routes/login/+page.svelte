<script>
  import { _ } from "svelte-i18n"

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
</script>

<h1>{$_("login")}</h1>
<div class="login-form">
  <label for="username">{$_("web-username")}</label>
  <input type="text" id="username" bind:value={username}>
  <br><br>
  <label for="password">{$_("web-password")}</label>
  <input type="password" id="password" bind:value={password}>
  <br><br>
  <button on:click={submitLogin}>{$_("login")}</button>
</div>
<p>{$_("no-account")}</p><a href="/register">{$_("register")}!</a>
