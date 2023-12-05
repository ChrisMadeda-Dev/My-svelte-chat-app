<script>
	import MessageCont from './MessageCont.svelte';
	import { auth, db } from '../../lib/firabase/firebase';
	import { collection, doc, getDocs, onSnapshot, orderBy, query } from 'firebase/firestore';
	import { writable } from 'svelte/store';
	import { onDestroy, onMount } from 'svelte';
	import { onAuthStateChanged } from 'firebase/auth';

	import { store } from '../../store/Store';

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

	$: {
		//Call the function when recUid is changed ie chat is selected
		getMessages($store.currentRecUid);
	}

	async function getMessages(recUid) {
		if ((recUid, user)) {
			const id = recUid;
			console.log(id);

			//Reset Messages Array
			messages.update(() => []);

			const messagesRef = collection(db, `users/${user.uid}/chats/${id}/chat`);
			const q = query(messagesRef, orderBy('createdAt', 'desc'));
			const unsubscribe = onSnapshot(q, (docs) => {
				messages.update(() => []);
				docs.forEach((doc) => {
					messages.update((msg) => [...msg, doc.data()]);
				});
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
		overflow-y: auto;
		overflow-x: hidden;
	}
</style>
