import { Component, OnInit } from '@angular/core'; 
import { HomeService } from '../_service/home.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  conversionEncryptOutput: any;
  plainText: any;
  conversionDecryptOutput: any;
 

  constructor(private homeService: HomeService) { }

  ngOnInit(): void {

    this.plainText = 'saman';
    
   
    this.conversionEncryptOutput =  this.homeService.encrypt(this.plainText) ; 
  
    console.log(this.conversionEncryptOutput)

    this.conversionDecryptOutput = this.homeService.decrypt(this.conversionEncryptOutput)

     console.log(this.conversionDecryptOutput)

  }

}
