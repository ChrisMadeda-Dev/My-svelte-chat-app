<script>
	import { db, auth } from '../../lib/firabase/firebase';
	import { doc, collection, query, where, getDoc } from 'firebase/firestore';

	async function addNewChat() {
		const a = prompt('Enter Recepient Number');
		if (a) {
            const phoneDb = parseInt(a) + 990110999901;
            console.log(phoneDb);

            userQuery = collection(db,"users");
            const q = query(userQuery,where("phone"===phoneDb));

            const snapShot = await getDoc(q);

            if(snapShot.exists){
                alert("Awesome chat is set");
            }
          
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
