import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {AssetType, Practices, Sector} from './entities';
import { Config } from './config';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ListoperationsService {
  private requestDigest:string;

  private serviceUrls = {
    requestDigestService: Config.SITE_URL + "/_api/contextinfo",
    assetsTypeListService: Config.SITE_URL + "/_api/web/lists/getbytitle('AssetsType')/items?$select=ID,Title,ImageUrl,AssetsCountId&$top=500",
    practiceListService: Config.SITE_URL + "/_api/web/lists/getbytitle('Practice')/items?$select=ID,Title,ImageUrl,AssetsCountId,MasterPractice,SubMasterPractice&$top=500",
    sectorListService: Config.SITE_URL + "/_api/web/lists/getbytitle('Sector')/items?$select=ID,Title,ImageUrl,AssetsCountId&$top=500"
  }

  private headerConfig = {
    headers:{'accept': 'application/json;odata=verbose',
             "content-Type": "application/json;odata=verbose"
            }
  };

  constructor(private http:HttpClient) { 
    
  }

  getRequestDigest():Observable<any>{
    return this.http
              .post(this.serviceUrls.requestDigestService,{},this.headerConfig);
  }

}
