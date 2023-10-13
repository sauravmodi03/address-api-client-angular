import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class HttpService implements OnInit {

  constructor(private httpClient : HttpClient) { }

  ngOnInit(): void {
    console.log("Http Service");
  }

  doPost(url: string, body: any, options : {headers : HttpHeaders}){
    return this.httpClient.post(url, body, options);
  }

  doGet(url: string, options: {headers : HttpHeaders}) {
    return this.httpClient.get(url, options);
  }

  doPut() {
    
  }

}
