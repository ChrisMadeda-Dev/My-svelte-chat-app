<script>
	import MessageCont from "./MessageCont.svelte";

    let messages =[
    {
        message:"Hey God is good",
        sender:"left",
    },
    {
        message:"Hey God is good",
        sender:"right",
    },
    {
        message:"Hey God is good",
        sender:"right",
    },
    {
        message:"Hey God is good",
        sender:"left",
    },
    {
        message:"Hey God is good",
        sender:"right",
    },

]

</script>
<div class="message-box">
    {#each messages as msg}
        <MessageCont message={msg}/>
    {/each}
</div>
<style>
    .message-box{
        flex: 0 0 100%;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        gap: 8px;
        background-color: whitesmoke;
    }
</style>