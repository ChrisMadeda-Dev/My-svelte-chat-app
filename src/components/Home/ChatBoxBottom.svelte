<script>
	import { onMount } from 'svelte';
	import { auth, db } from '../../lib/firabase/firebase';
	import { onAuthStateChanged } from 'firebase/auth';
	import {
		doc,
		collection,
		query,
		where,
		getDocs,
		getDoc,
		serverTimestamp,

		setDoc

	} from 'firebase/firestore';

	let user;

	onMount(() => {
		onAuthStateChanged(auth, (authUser) => {
			//console.log(authUser);
			if (authUser) {
				user = authUser;
			} else {
				console.log('No User');
			}
		});
	});

	async function addNewChat() {
		const a = prompt('Enter Recepient Number');

		if (a && user) {
			const phoneDb = parseInt(a) + 990110999901;
			const userQuery = collection(db, 'users');

			const q = query(userQuery, where('phone', '==', phoneDb));
			const snapShot = await getDocs(q);

			if (snapShot.docs.length > 0) {
				snapShot.forEach((snap) => {
					const data = snap.data();
					if (data && user) {
						const recChatRef = doc(db, `users/${user.uid}/chats/${data.uid}`);
						const senderChatRef = doc(db, `users/${data.uid}/chats/${user.uid}`);

						const userName = localStorage.getItem('u-name');

						const senderOut = {
							recName: data.name,
							recUid: data.uid,
							senderName: userName,
							senderUid: user.uid,
							createAt: serverTimestamp()
						};

						const recOut = {
							recName: userName,
							recUid: user.uid,
							senderName: data.name,
							senderUid: data.uid,
							createAt: serverTimestamp()
						};

						setDoc(recChatRef,recOut);
						setDoc(senderChatRef,senderOut);

						alert('Great: Chat has been set');
					} else {
						alert('Oops: user does not exist');
					}
				});
			} else {
				alert('User does not exists');
			}
		} else {
			console.log('Error setting phone');
		}
	}
</script>

<div class="chat-box-bottom">
	<button on:click={addNewChat}>Add Chat</button>
</div>

<style>
	.chat-box-bottom {
		width: 100%;
		flex: 0 0 100%;
		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>
