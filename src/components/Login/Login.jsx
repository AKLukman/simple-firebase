import {
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  GithubAuthProvider,
  FacebookAuthProvider,
} from "firebase/auth";

import { useState } from "react";
import { Link } from "react-router-dom";
import auth from "../../firebase/firebase.config";

const Login = () => {
  const [loggedinUser, setLoggeinUser] = useState(null);
  const googleProvider = new GoogleAuthProvider();
  const gitHubProvider = new GithubAuthProvider();
  const facebookProvider = new FacebookAuthProvider();

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        setLoggeinUser(user);
        console.log(user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        setLoggeinUser(null);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const handleGitHubSignIn = () => {
    signInWithPopup(auth, gitHubProvider)
      .then((result) => {
        const user = result.user;
        setLoggeinUser(user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  const handleFaceBookLogin = () => {
    signInWithPopup(auth, facebookProvider)
      .then((result) => {
        const user = result.user;
        setLoggeinUser(user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div>
      {loggedinUser ? (
        <button onClick={handleSignOut}>Sign out</button>
      ) : (
        <div>
          <button onClick={handleGoogleSignIn}>Google login</button>
          <button onClick={handleGitHubSignIn}>Github Sign in</button>
          <button onClick={handleFaceBookLogin}>Facebook Login</button>
        </div>
      )}

      {loggedinUser && (
        <div>
          <h2>User Name: {loggedinUser.displayName}</h2>
          <h4>Email: {loggedinUser.email}</h4>
          <img src={loggedinUser.photoURL} alt="" width="100" />
        </div>
      )}

      <div>
        <button>
          <Link to="/signup">Sign up</Link>
        </button>
      </div>
    </div>
  );
};

export default Login;
