import { getApps, getApp, initializeApp, deleteApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
	apiKey: 'AIzaSyDerM1Xh7upwm_8KjgjTMn9jLZQaV0xD_0',
	authDomain: 'mysveltechatapp.firebaseapp.com',
	projectId: 'mysveltechatapp',
	storageBucket: 'mysveltechatapp.appspot.com',
	messagingSenderId: '72610682548',
	appId: '1:72610682548:web:36f99bfe3d823259da29e1'
};

let firebaseApp;

if (!getApps().length) {
	firebaseApp = initializeApp(firebaseConfig);
} else {
	(firebaseApp = getApp()), deleteApp(firebaseApp);
	firebaseApp = initializeApp(firebaseConfig);
}

export const db = getFirestore(firebaseApp);
export const auth = getAuth(firebaseApp);


