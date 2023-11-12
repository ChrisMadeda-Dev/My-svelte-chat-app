<script>
	import ChatList from "./ChatList.svelte";

</script>


<div class="chat-box">
	<div class="top" />
	<div class="center" >
        <ChatList/>
    </div>
	<div class="bottom" />
</div>

<style>
	.chat-box {
		flex: 0 0 30%;
		height: 100%;
		background-color: green;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;
		padding: 10px;
	}

	.top {
		flex: 0 0 10%;
		width: 100%;
	}

	.center {
		flex: 0 0 80%;
		width: 100%;
		background-color: seagreen;
        display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;
	}

	.bottom {
		flex: 0 0 10%;
		width: 100%;
	}
</style>
