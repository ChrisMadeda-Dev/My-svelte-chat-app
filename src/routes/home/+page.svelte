<script>
	import ChatBox from '../../components/Home/ChatBox.svelte';
	import ChatInterface from '../../components/Home/ChatInterface.svelte';
</script>

<div class="home-page">
	<div class="home-cont">
		<ChatBox />
		<ChatInterface />
	</div>
</div>

<style>
	.home-page {
		width: 100%;
		height: 100vh;
		background-color: #1b1b1b;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.home-cont {
		flex: 0 0 80%;
		height: 95%;
		background-color: #303030;
		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>
