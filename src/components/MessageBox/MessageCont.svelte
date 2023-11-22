<script>
	export let message;
	let side;

	if (message.sender == 'right') {
		side = 'messageCont mc-right';
		console.log(side);
	}else{
        side = "messageCont mc-left";
    }
</script>

<div class={side}>
	<p>{message.message}</p>
</div>

<style>
	.messageCont {
		width: 45%;
		min-height: 65px;
		max-height: auto;
		margin: 20px;
		padding: 20px;
        border-radius: 5px;
		display: flex;
		justify-content: center;
		align-items: flex-start;
		background-color: lavender;
	}

	.mc-left {
		margin-right: 45%;
	}

	.mc-right {
		margin-left: 45%;
        background-color: lightsteelblue;
	}
</style>
