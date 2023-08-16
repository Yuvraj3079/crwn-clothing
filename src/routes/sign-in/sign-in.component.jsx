import { signInwithGooglePopUp, createUserDocumentFromAuth } from '../../utils/firebase/firebase.util';
const SignIn = () => {

    const logGoogleUser = async () => {
        const {user} = await signInwithGooglePopUp();
        const userDocRef = await createUserDocumentFromAuth(user);
        //console.log(response);
    }
    return (
        <div>
            <h1>Sign In Page</h1>
            <button onClick={logGoogleUser}>
            Sign In with Google Pop Up
            </button>
        </div>
    );
};

export default SignIn;