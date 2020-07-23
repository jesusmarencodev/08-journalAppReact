import { types } from "../types/types";
import { firebase, googleAuthProvider } from "../firebase/firebase-config";

//acciones asincronas

export const starLoginEmailPassword = (email, password) => {
	return (dispatch) => {
		setTimeout(() => {
			dispatch(login(123, 'Pedro'));
		}, 3500);
	}
}

export const startGoogleLogin = () => {
	return (dispatch) => {
		firebase.auth().signInWithPopup(googleAuthProvider)
			.then(({user}) => {
				dispatch(
					login(user.uid, user.displayName)
				)
			}); 
	}
}


//accion sincrona
export const login = (uid, displayName) => {
	return {
		type : types.login,
		payload : {
			uid,
			displayName
		}
	}
}