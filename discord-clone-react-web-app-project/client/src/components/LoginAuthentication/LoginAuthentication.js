import React from "react";

import {ErrMsg} from "../../utils/popupErrorToast";
import {auth, provider} from "../../firebase/firebase";
import {Button} from "@material-ui/core";
import discordLogo from "../../image/discord.gif";
import "./LoginAuthentication.css";

function LoginAuthentication() {
  const signIn = () => {
    auth.signInWithPopup(provider).catch((error) => ErrMsg(error.message));
  };

  return (
    <div className="login">
      <div className="login__logo">
        <img src={discordLogo} alt="discordLogo" />
      </div>

      <Button onClick={signIn}>Sign-Up</Button>
      <div className="alreadyExist" onClick={signIn}>
        Already have an account?
      </div>
    </div>
  );
}

export default LoginAuthentication;
