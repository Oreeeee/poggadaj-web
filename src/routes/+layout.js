import { browser } from '$app/environment'
import '../i18n'
import { locale, waitLocale } from 'svelte-i18n'

export async function load() {
    // i18n stuff
    if (browser) {
		locale.set(window.navigator.language)
	}
	await waitLocale()
}