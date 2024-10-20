<script>
  import LoginForm from "../../LoginForm.svelte";
  import {_} from "svelte-i18n"
</script>

<h1>{$_("register")}</h1>
<p>Note: the password you choose here is for the website, not for the client</p>
<p>You will have to set you client password on the website (they are separate for security reasons)</p>
<LoginForm usage="register" />
