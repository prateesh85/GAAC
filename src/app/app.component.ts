import { Component } from '@angular/core';
import { ListoperationsService } from './listoperations.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'GAAC';
  
  sectorClick(){
    console.log("sector click");
  }

  practiceClick(){
    console.log("practice click");
  }

  assettypeClick(){
    console.log("assettype click");
  }

  constructor(private listOpService:ListoperationsService){
    
  }

  ngOnInit(){
    this.listOpService
    .getRequestDigest()
    .subscribe(data=>console.log(data.d.GetContextWebInformation.FormDigestValue));
  }
}
