import { JsonpClientBackend } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { JSEncrypt } from 'jsencrypt/lib/JSEncrypt';



@Component({
  selector: 'app-rsa2-utils',
  templateUrl: './rsa2-utils.component.html',
  styleUrls: ['./rsa2-utils.component.scss']
})
export class Rsa2UtilsComponent implements OnInit {

  para: any;
  decrypt = new JSEncrypt();
	encrypt = new JSEncrypt();
	decryptdata: any;
  decryptDataRow: string | boolean;
  rowNew: string | boolean;

  

  constructor() { }

  ngOnInit(): void {
    this.getRsa();
  }

  getRsa(){

    const privatekey = `-----BEGIN RSA PRIVATE KEY-----
    MIICXQIBAAKBgQChSh7Uz5Cvuduo9fdhEvn7LWrDUZaX4biAX5kBcvrGQzCiht1O
    zMgTjTXrlpLJfmVGojP05MFOuVzXDnjUGO0vZtkoh38QY4yjNamDcFqL7N66xNJD
    iK6QVPV/G5h5nD9gx9gKS2GgKeaoTRk+pOS/5lP5GEubxRjz/DuKbUaAOQIDAQAB
    AoGBAJnONNh7l137vpzA8caAciI0jTr08sajWW4Ru7bGDp5CNH7IXQJoBeOfJWwj
    ipbbEXjp9OHzwuNvoDj0dATOQF8Id9eo7M/LI+XXrUd/4EIy+8xCjlxXBDILUoYQ
    mMMxz+uVn0q2jXBUajcAnUY/Ys8on9XNrMDEkyAAmLepx16BAkEA94MNTOE/ytre
    cRg+isNWOL2cJcknHDj1j8U4sTO8QfBriuqDZj0cZ+63mBEoJosL6JqoOqCBT5G8
    DWXsJdHCPwJBAKbSG557PUuJ2cJCwV6LzBrnlBN0/qV6J7/Lqkk8J52a/si+/fUq
    pbMtxH0buMjl5kd18m7DjmTuOprXfDAgr4cCQQCMy1+le/xtyFMAwmnRRYymejV4
    yRQWWdBWGDpHksZkO/7w5rYYUmr2NDT7q8bLJg2AI3nO376vJJd0h6XtXYTBAkAp
    YPR42xjZI9hf1y8fxI1cHxUbvmlromE5scsLX2B0N337TWSw62MujquuXLH5Iw17
    rEX2M4uefXkL72deiL0BAkBWxMGXg2b1dix4IYSyxKcy1nfV0umsLJeOZ0r17+CZ
    gSUZVruJd9YPIbNwV3rs7VZuLGScslOd2oH5j9TeXP5r
    -----END RSA PRIVATE KEY-----`;
    
    
        const publickey = `-----BEGIN PUBLIC KEY-----
    MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQChSh7Uz5Cvuduo9fdhEvn7LWrD
    UZaX4biAX5kBcvrGQzCiht1OzMgTjTXrlpLJfmVGojP05MFOuVzXDnjUGO0vZtko
    h38QY4yjNamDcFqL7N66xNJDiK6QVPV/G5h5nD9gx9gKS2GgKeaoTRk+pOS/5lP5
    GEubxRjz/DuKbUaAOQIDAQAB
    -----END PUBLIC KEY-----`;
        
    this.encrypt.setPublicKey(publickey);
    this.decryptDataRow =  this.encrypt.encrypt('saman');
    console.log(this.decryptDataRow);

    this.decrypt.setPrivateKey(privatekey);

    if (typeof this.decryptDataRow === "boolean"){
      this.rowNew = this.decrypt.decrypt(Boolean(this.decryptDataRow).toString())
    }
    else {
      this.rowNew = this.decrypt.decrypt(this.decryptDataRow)
    }

    console.log(this.rowNew)

  }

}
