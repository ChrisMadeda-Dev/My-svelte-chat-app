<script>
	import { writable } from 'svelte/store';
	import ChatItem from './chatItem.svelte';
	import { db, auth } from '../../lib/firabase/firebase';
	import { collection, doc, getDoc, getDocs } from 'firebase/firestore';
	import { onMount } from 'svelte';
	import { onAuthStateChanged } from 'firebase/auth';

	let user;
	let chats = writable([]);

	onMount(() => {
		onAuthStateChanged(auth, (authUser) => {
			if (authUser) {
				user = authUser;
				getChats();
			}
		});
	});

	async function getChats() {
		if (user) {
			console.log('in chats ');
			const chatRef = collection(db, `users/${user.uid}/chats`);

			const snapShot = await getDocs(chatRef);

			if (snapShot.docs.length > 0) {
				console.log(snapShot.docs)
				snapShot.forEach((doc) => {
					console.log(doc.data().recName + 'Chats');
					chats.update((chat) => [...chat, doc.data()]);
					
				});
			} else {
				console.log('Error getting chats');
			}
		}
	}

	
</script>

<div class="chat-list">
	{#each $chats as chat}
		<ChatItem {chat} />
	{/each}
</div>

<style>
	.chat-list {
		width: 100%;
		flex: 0 0 100%;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;
		overflow-y: auto;
		overflow-x: hidden;
		padding: 10px;
		gap: 8px;
	}
</style>
