<script>
	export let message;
	export let user;
	let side;

	if (message.senderUid == user.uid) {
		side = 'messageCont mc-right';
	} else {
		side = 'messageCont mc-left';
	}
</script>

<div class={side}>
	<p>{message.message}</p>
</div>

<style>
	.messageCont {
		width: 45%;
		min-height: 55px;
		max-height: auto;
		margin: 7px;
		padding: 20px;
		border-radius: 7px;
		display: flex;
		justify-content: center;
		align-items: flex-start;
		background-color: lavender;
		font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
	}

	.mc-left {
		margin-right: 45%;
	}

	.mc-right {
		margin-left: 45%;
		background-color: lightsteelblue;
	}
</style>
