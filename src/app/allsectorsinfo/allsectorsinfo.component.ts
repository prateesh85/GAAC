import { Component, OnInit } from '@angular/core';
import { ListoperationsService } from '.././listoperations.service';

@Component({
  selector: 'app-allsectorsinfo',
  templateUrl: './allsectorsinfo.component.html',
  styleUrls: ['./allsectorsinfo.component.css']
})
export class AllsectorsinfoComponent implements OnInit {

  constructor(private listOpsService:ListoperationsService) { 

  }

  ngOnInit() {
    
  }

}
