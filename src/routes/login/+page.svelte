<script>
  import LoginForm from "../../LoginForm.svelte";
  import { _ } from "svelte-i18n"
</script>

<h1>{$_("login")}</h1>
<LoginForm usage="login" />
<p>{$_("no-account")}</p><a href="/register">{$_("register")}!</a>
