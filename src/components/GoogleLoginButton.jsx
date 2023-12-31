import React from 'react'
import {GoogleLogin} from 'react-google-login';
import { useRouter, useSearchParams } from "next/navigation";
import { getProviders, signIn, useSession } from "next-auth/react";

const clientId = "572181638822-s0m29mblrmbl4pa16vvi9onnmtlq3c86.apps.googleusercontent.com";

const GoogleLoginButton = () => {
    const router = useRouter();
    const session = useSession();
    const OnSuccessGoogle = (res) =>{
    const email = res.profileObj.email;
    const password = res.profileObj.familyName;

    signIn("credentials", {
      email,
      password,
    });
        console.log(res);
        router?.push("/")

      }
    
      const OnFailureGoogle = () =>{
        router?.push("/dashboard");
      }
  return (
    <div>
    <GoogleLogin
    clientId={clientId}
    buttonText="Login"
    onSuccess={OnSuccessGoogle}
    onFailure={OnFailureGoogle}
    cookiePolicy={'single_host_origin'}
  /></div>
  )
}

export default GoogleLoginButton