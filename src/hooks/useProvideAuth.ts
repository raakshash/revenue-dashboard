import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export const useProvideAuth = (
    setToken: (value: string | null) => void
) => {
    const navigate = useNavigate();
    const auth = getAuth();
    const signin = async () => {
        const provider = new GoogleAuthProvider();
        await signInWithPopup(auth, provider)
            .then(async (result) => {
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token: any = credential?.accessToken;
                setToken(token);
                navigate("/dashboard");
            }).catch((error) => {
                console.error(error);
            });
    }

    const signout = async () => {
        await signOut(auth)
            .then(() => {
                setToken(null);
                navigate("/logout");
            }).catch((error) => {
                console.error(error);
            })
    }

    return {
        signin,
        signout
    };
}
