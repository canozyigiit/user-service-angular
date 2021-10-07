import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginModel } from '../model/loginModel';
import { SingleResponseModel } from '../model/singleResponseModel';
import { TokenModel } from '../model/tokenModel';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiUrl = 'http://localhost:8080/api/';
  constructor(private http:HttpClient) { }

  login(loginModel:LoginModel): Observable<any> {
    const body = new HttpParams()
      .set('username', loginModel.username)
      .set('password', loginModel.password);
  
    return this.http.post(this.apiUrl+'login',
      body.toString(),
      {
        headers: new HttpHeaders()
          .set('Content-Type', 'application/x-www-form-urlencoded')
      }
    );
  }

  // login(loginModel:LoginModel){
  //   return this.httpClient.post<SingleResponseModel<TokenModel>>(this.apiUrl + "login",loginModel)
  // }

  // login(loginModel:LoginModel){
  //   const body = new HttpParams()
  //     .set(`username`, loginModel.username)
  //     .set(`password`, loginModel.password);
  //   const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });

  //   return this.httpClient.post<SingleResponseModel<TokenModel>>(`http://localhost:8080/api/login`, body.toString())
      
  // }
//   login(loginModel:LoginModel){
//     const formData = new FormData();
//     formData.append('username', loginModel.username);
//     formData.append('password', loginModel.password);
   

//    return this.httpClient.post<SingleResponseModel<TokenModel>>(this.apiUrl+"login",formData,
//                   {
//                       headers: new HttpHeaders({
//                         'Content-Type':'application/x-www-form-urlencoded'
//                       })
//                   }
//                 )
// }
  
// login(loginModel:LoginModel) {
//   const params = new HttpParams({
//     fromObject: {
//       grant_type: 'password',
//       username: loginModel.username,
//       password: loginModel.password,
//       scope: 'if no scope just delete this line',
//     }
//   });

//   const httpOptions = {
//     headers: new HttpHeaders({
//       'Content-Type': 'application/x-www-form-urlencoded',
//       'Authorization': 'Basic ' + btoa('yourClientId' + ':' + 'yourClientSecret')
//     })
//   };

//   this.http.post('http://localhost:8080/api/login', params, httpOptions)
//     .subscribe(
//       (res: any) => {
//         console.log(res);
//         sessionStorage.setItem('access_token', res.access_token);
//         sessionStorage.setItem('refresh_token', res.refresh_token);
//       },
//       err => console.log(err)
//     );
// }
  isAuthenticated(){
    if(localStorage.getItem("token")){
      return true;
    }else{
      return false;
    }
  }
  
}