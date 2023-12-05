<script>
	import MessageCont from './MessageCont.svelte';
	import { auth, db } from '../../lib/firabase/firebase';
	import { collection, getDocs } from 'firebase/firestore';
	import { writable } from 'svelte/store';
	import { onMount } from 'svelte';
	import { onAuthStateChanged } from 'firebase/auth';

	let user;
	let messages = writable([]);

	let recUid;

	onMount(() => {
		recUid = localStorage.getItem('rec-uid');
		onAuthStateChanged(auth, (authUser) => {
			if (authUser) {
				user = authUser;
				getMessages();
			}
		});
	});

	async function getMessages() {
		const messagesRef = collection(db, `users/${user.uid}/chats/${recUid}/chat`);
		const docs = await getDocs(messagesRef);

		if (docs) {
			docs.forEach((doc) => {
				console.log(doc.data());
				messages.update((msg) => [...msg, doc.data()]);
			});
		}
	}
</script>

<div class="message-box">
	{#each $messages as msg}
		<MessageCont message={msg} {user} />
	{/each}
</div>

<style>
	.message-box {
		flex: 0 0 100%;
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;
		gap: 8px;
		background-color: whitesmoke;
	}
</style>
