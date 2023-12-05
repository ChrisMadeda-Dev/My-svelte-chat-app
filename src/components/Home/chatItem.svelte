<script>
	export let chat;

	function setChat(chat) {
		console.log(chat.recUid);
		localStorage.setItem('chat-id', chat.recUid);
		localStorage.setItem('rec-uid', chat.recUid);
		localStorage.setItem('rec-name', chat.recName);
	}
</script>

<div
	role="button"
	tabindex="0"
	on:keydown={(e) => {}}
	on:click={(e) => setChat(chat)}
	class="chat-item"
>
	<div class="chat-dp-photo">DP</div>

	<div class="chat-det">
		<p>{chat.recName}</p>
		<span>from: {chat.senderName}</span>
	</div>
</div>

<style>
	.chat-item {
		flex: 0 0 75px;
		width: 99%;
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: lavender;
		border-radius: 5px;
	}

	.chat-dp-photo {
		flex: 0 0 25%;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.chat-det {
		flex: 0 0 75%;
		height: 100%;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: center;
		padding: 10px;
		background-color: aliceblue;
	}

	.chat-item > .chat-det > p {
		font-size: 14px;
		color: #353839;
		font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial,
			sans-serif;
	}

	.chat-item > .chat-det > span {
		font-size: 12px;
		font-family: sans-serif;
		color: gray;
		padding: 1px 0px;
	}
</style>
