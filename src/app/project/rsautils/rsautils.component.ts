import { Component, OnInit, VERSION } from '@angular/core';


declare var JSEncrypt: any;


@Component({
  selector: 'app-rsautils',
  templateUrl: './rsautils.component.html',
  styleUrls: ['./rsautils.component.scss']
})
export class RSAutilsComponent implements OnInit {
  name:string;
  decrypt = new JSEncrypt();
	encrypt = new JSEncrypt();
	decryptdata: any;
   

  

  constructor() {
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
        const decryptDataRow =  this.encrypt.encrypt('saman');
        this.name = `Angular! v${VERSION.full}`
        this.decrypt.setPrivateKey(privatekey);
        this.decryptdata = this.decrypt.decrypt(decryptDataRow);
          console.log(this.decryptdata);
      }
  ngOnInit(): void {
    
  }
   
   

  

 

}
