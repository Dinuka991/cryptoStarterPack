import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';
import {HttpClient } from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class HomeService {



  secretKey = "awbabdsdbsbd@11020-12";
  constructor( private http: HttpClient) { }

  encrypt(value : string) : string{
    return CryptoJS.AES.encrypt(value, this.secretKey.trim()).toString();
  }

  decrypt(textToDecrypt : string){
    return CryptoJS.AES.decrypt(textToDecrypt, this.secretKey.trim()).toString(CryptoJS.enc.Utf8);
  }

  getkey(){
    return this.http.get<any>(' http://localhost:8080/department-service/getPublicKey')
  }



}
