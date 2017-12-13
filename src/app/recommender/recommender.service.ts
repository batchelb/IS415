import { Injectable } from '@angular/core';
import { Http,Headers } from '@angular/http';

@Injectable()
export class RecommenderService {

  constructor(private http: Http) {
  }

  similar(user_id){
    return this.http.get(`https://njw3a9pjfi.execute-api.us-west-1.amazonaws.com/prod/similar?user_id=${user_id}`);
  }
  app(user_id){
    return this.http.get(`https://njw3a9pjfi.execute-api.us-west-1.amazonaws.com/prod/apps?user_id=${user_id}`);
  }
  user(app_id){
    return this.http.get(`https://njw3a9pjfi.execute-api.us-west-1.amazonaws.com/prod/users?app_id=${app_id}`);
  }
}