<script>
	import { auth } from '../lib/firabase/firebase';
	import { onAuthStateChanged } from 'firebase/auth';
	import { onMount } from 'svelte';

	onMount(() => {
		onAuthStateChanged(auth, (isUser) => {
			if (isUser) {
				window.location.href = '/home';
			} else {
				window.location.href = '/auth';
			}
		});
	});
</script>
