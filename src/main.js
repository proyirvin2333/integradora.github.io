import { getDocs, collection } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js";
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";
import { setUpPost } from "./app/postList.js";
import { auth, db } from './app/firebase.js';
import './app/signinForm.js';

onAuthStateChanged(auth, async (e) => {
        const querySnapshot = await getDocs(collection(db, 'posts'))
        setUpPost(querySnapshot.docs)
})
