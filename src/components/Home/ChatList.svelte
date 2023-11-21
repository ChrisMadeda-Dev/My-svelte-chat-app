<script>
	import ChatItem from "./chatItem.svelte";

</script>
<div class="chat-list">
    <ChatItem/>
</div>
<style>
    .chat-list{
        width: 100%;
        flex: 0 0 100%;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        overflow-y: auto;
        overflow-x: hidden;
        padding: 10px;
    }
</style>