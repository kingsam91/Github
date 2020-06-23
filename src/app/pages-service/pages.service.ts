import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class PagesService {

  constructor(private http: HttpClient) { }

  getGitacc() {
    return this.http.get(`https://api.github.com/users/kingsam91?access_token=9f59e16ae9c0b7ce339f0fa6077e0a3f89ab9d01`, httpOptions)
  };
  getPublicrepos() {
    return this.http.get(`https://api.github.com/user/repos?access_token=9f59e16ae9c0b7ce339f0fa6077e0a3f89ab9d01`, httpOptions)
  };
  getUserRepo(userName: string) {
    return this.http.get(`https://api.github.com/users/${userName}/repos`, httpOptions)
  };  

}
