<script>
	import { auth, db } from '../../lib/firabase/firebase';
	import { createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
	import { doc, addDoc, setDoc, serverTimestamp } from 'firebase/firestore';

	//Check is user is logged in

	onAuthStateChanged(auth, (authUser) => {
		if (authUser.user) {
			//window.location.href = '/home';
		}
	});

	let name;
	let email;
	let phone;
	let confirmPhone;
	let pin;
	let confirmPin;

	function addNewUser() {
		if (name && email && pin == confirmPin && phone == confirmPhone) {
			createUserWithEmailAndPassword(auth, email, pin)
				.then((userDet) => {
					localStorage.setItem('u-name', name);

					//set variables
					const pinDb = parseInt(pin) + 109999011099;
					const phoneDb = phone + 990110999901;

					//Firestore
					const userRef = doc(db, `users/${userDet.user.uid}`);

					const detOut = {
						name: name,
						uid: userDet.user.uid,
						pin: pinDb,
						phone: phoneDb,
						createdAt: serverTimestamp()
					};

					setDoc(userRef, detOut)
						.then((snap) => {
							name = '';
							email = '';
							phone = '';
							confirmPhone = '';
							pin = '';
							confirmPin = '';

							alert('Welcome to Mychatapp');
							window.location.href = '/home';
						})
						.catch((e) => {
							alert(e);
						});
				})
				.catch((e) => {
					alert(e);
				});
		}else{
			alert("Error : Check inputs")
		}
	}
</script>

<div class="auth-page">
	<div class="auth-center">
		<input type="text" placeholder="Enter Name" bind:value={name} />
		<input type="text" placeholder="Enter Email" bind:value={email} />
		<input type="number" placeholder="Enter Phone No." bind:value={phone} />
		<input type="number" placeholder="Confirm Phone No." bind:value={confirmPhone} />
		<input type="number" placeholder="Enter Pin" bind:value={pin} />
		<input type="number" placeholder="Confirm Pin" bind:value={confirmPin} />
		<button class="singUp-btn" on:click={addNewUser}>SignUp</button>
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
		margin: 15px 0px;
		font-size: 17px;
		color: white;
	}
</style>
