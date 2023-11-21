<script>
	import {auth} from "../../lib/firabase/firebase"
	import { createUserWithEmailAndPassword } from 'firebase/auth';
    import {getAuth} from "firebase/auth" ;

    //let auth = getAuth(app);

	let name;
	let email;
	let password;
	let confirmPassword;

	function addNewUser() {
		if (name && email && password == confirmPassword) {
			createUserWithEmailAndPassword(auth, email, password).then((userDet)=>{
                console.log(userDet.user)
                localStorage.setItem("u-name",name)

                name="";
                email="";
                password="";
                confirmPassword="";
                window.location.href="/home"
            })
			alert('Welcome to MychatAPP');
		}
	}
</script>

<div class="auth-page">
	<div class="auth-center">
		<input type="text" placeholder="Enter Name" bind:value={name} />
		<input type="text" placeholder="Enter Email" bind:value={email} />
		<input type="password" placeholder="Enter Password" bind:value={password} />
		<input type="password" placeholder="Confirm Password" bind:value={confirmPassword} />
		<button class="singUp-btn" on:click={addNewUser}>Sing up</button>
	</div>
</div>

<style>
	.auth-page {
		width: 100%;
		height: 100vh;
		background: #1b1b1b;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.auth-center {
		flex: 0 0 70%;
		width: 60%;
		gap: 8px;
		background-color: whitesmoke;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.auth-center > input {
		width: 60%;
		height: 50px;
		border-radius: 5px;
	}

	.singUp-btn {
		width: 35%;
		height: 50px;
		background-color: brown;
		border-radius: 5px;
		margin: 10px 0px;
		font-size: 17px;
		color: white;
	}
</style>
