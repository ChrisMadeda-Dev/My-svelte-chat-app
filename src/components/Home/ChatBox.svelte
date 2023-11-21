<script>
	import ChatBoxNav from './ChatBoxNav.svelte';
	import ChatList from './ChatList.svelte';
</script>

<div class="chat-box">
	<div class="top">
		<ChatBoxNav />
	</div>
	<div class="center">
		<ChatList />
	</div>
	<div class="bottom" />
</div>

<style>
	.chat-box {
		flex: 0 0 30%;
		height: 100%;
		border-right: 1px solid grey;
		background-color: white;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;
		padding: 0px 0px;
	}

	.top {
		flex: 0 0 7%;
		width: 100%;
	}

	.center {
		flex: 0 0 80%;
		width: 100%;
		background-color: white;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;
	}

	.bottom {
		flex: 0 0 12.8%;
		width: 100%;
		background-color: aliceblue;
	}
</style>
