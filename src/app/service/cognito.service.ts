import { Injectable } from '@angular/core';
import {Amplify, Auth} from "aws-amplify";
import {environment} from "../../environments/environment";
import {User} from "../model/User";

@Injectable({
  providedIn: 'root'
})
export class CognitoService {

  constructor() {
    Amplify.configure({
      Auth:environment.cognito
    })
  }

  public signUp(user:User):Promise<any>{
    return Auth.signUp({
      username:user.email,
      password:user.password,
      attributes:{
        email:user.email,
        given_name:user.givenName,
        family_name:user.familyName
      }
    })
  }

  public confirmSignUp(user:User):Promise<any>{
    return Auth.confirmSignUp(user.email,user.code);
  }
}
