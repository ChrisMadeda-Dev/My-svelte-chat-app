<script>
	import { onAuthStateChanged } from 'firebase/auth';
	import { onMount } from 'svelte';
	import { auth, db } from '../../lib/firabase/firebase';
	import { addDoc, collection, serverTimestamp } from 'firebase/firestore';

	let user;
	let messageOut;

	let recUid;
	let recName;

	onMount(() => {
		recUid = localStorage.getItem('rec-uid');
		recName = localStorage.getItem('rec-name');

		onAuthStateChanged(auth, (authUser) => {
			if (authUser) {
				user = authUser;
			}
		});
	});

	function addMessage() {
		if ((user, recUid)) {
			const recRef = collection(db, `users/${recUid}/chats/${user.uid}/chat`);
			const senderRef = collection(db, `users/${user.uid}/chats/${recUid}/chat`);

			const out = {
				recName: recName,
				recUid: recUid,
				senderName: localStorage.getItem('u-name'),
				senderUid: user.uid,
				message: messageOut,
				time: serverTimestamp()
			};

			addDoc(recRef, out);
			addDoc(senderRef, out);

			messageOut = '';
			console.log('Message sent');
		} else {
			alert('Error: Message not sent');
		}
	}
</script>

<div class="compose-message">
	<input class="input-message" type="text" placeholder="Type Message" bind:value={messageOut} />
	<button on:click={addMessage} class="btn-send">Send</button>
</div>

<style>
	.compose-message {
		flex: 0 0 100%;
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.compose-message > .input-message {
		flex: 0 0 60%;
		height: 50px;
		padding: 20px;
		background-color: white;
		border-radius: 10px;
		outline: solid 1px;
	}

	.compose-message > .btn-send {
		flex: 0 0 20%;
		height: 50px;
		background-color: steelblue;
		border-radius: 5px;
		margin: 0px 15px;
		color: whitesmoke;
	}
</style>
