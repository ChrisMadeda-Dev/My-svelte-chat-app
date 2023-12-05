<script>
	import MessageBox from '../MessageBox/MessageBox.svelte';
	import { auth, db } from '../../lib/firabase/firebase';
	import { setDoc, addDoc, doc, collection, Timestamp, serverTimestamp } from 'firebase/firestore';
	import { onMount } from 'svelte';
	import { onAuthStateChanged } from 'firebase/auth';
	import ComposeMessage from '../MessageBox/ComposeMessage.svelte';

	let user;
	let messageOut;

	onMount(() => {
		onAuthStateChanged(auth, (authUser) => {
			if (authUser) {
				user = authUser.user;
			} else {
				window.location.href = '/auth';
			}
		});
	});

</script>

<div class="chat-interface">
	<div class="top">
		<div class="top-left">
			<span>Name</span>
		</div>
		<div class="top-center" />
		<div class="top-right" />
	</div>
	<div class="center">
		<MessageBox />
	</div>
	<div class="bottom">
		<ComposeMessage/>
	</div>
</div>

<style>
	.chat-interface {
		flex: 0 0 70%;
		height: 100%;
		background-color: aliceblue;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;
	}

	.top {
		flex: 0 0 7%;
		width: 100%;
		display: flex;
		justify-content: space-evenly;
		align-items: center;
	}

	.top-left {
		flex: 0 0 20%;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 20px;
	}

	.top-center {
		flex: 0 0 60%;
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.top-right {
		flex: 0 0 20%;
	}

	.center {
		flex: 0 0 80%;
		width: 100%;
		background-color: white;
	}

	.bottom {
		flex: 0 0 13%;
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	
</style>
