import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { elementAt } from 'rxjs';
import {listAddressAPI, addressBtIdAPI} from 'src/app/api-uri/address-api';
import { HttpService } from 'src/app/services/http.service';
import { NgxScrollEvent } from 'ngx-scroll-event/dist/ngx-scroll-event';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  

  constructor(private httpService: HttpService) {
    
  }

  element:any;

  ngOnInit(): void {
    console.log("Home component");
  }

  address1!:  string;
  address2!:  string;
  city!:      string;
  state!:     string;
  zipcode!:    string;
  country:   string= "USA";

  searchInput: string = "";
  listAddress: any = [];
  address: any  = {};
  showList: boolean = false;
  pageNo : number =  0;
  pageSize : number = 20;
  

  searhAddress = (value : string) => {

      const options = {
        headers : new HttpHeaders({
          "content-type" : "application/json"
        }),
        mode: 'cors'
      } 

      if(value.length > 0) {
          this.httpService.doGet(listAddressAPI(value, this.pageNo, this.pageSize), options).subscribe((res) => {
            this.resetApiObjects()
            this.listAddress = this.listAddress.concat(res);
            if(this.listAddress.length > 0) {
              this.showList = true;
            } 
            
        });
      } else{
        this.resetApiObjects()
      }
    }

    async handleScroll(event : any){

      const options = {
        headers : new HttpHeaders({
          "content-type" : "application/json"
        }),
        mode: 'cors'
      } 
   
      if (this.listAddress.length > 0 && event.target.offsetHeight + event.target.scrollTop >= event.target.scrollHeight - 1) {
          this.pageNo += 1;
           await this.httpService.doGet(listAddressAPI(this.searchInput, this.pageNo, this.pageSize), options).subscribe((res) => {
            this.listAddress = this.listAddress.concat(res);
          });
      }
    }

    handleBlur(){
      if(this.searchInput.length == 0){
        this.resetApiObjects();
      }
    }

      getAddressById(id:string){
        const options = {
          headers : new HttpHeaders({
            "content-type" : "application/json"
          }),
          mode: 'cors'
        }

        this.httpService.doGet(addressBtIdAPI(id), options).subscribe((res) => {
          this.address = res;
          this.address1 = this.address.streetNo + " " + this.address.streetName;
          this.city = this.address.city;
          this.state = this.address.state;
          this.zipcode = this.address.postcode;
          this.resetApiObjects()
        });
      }

      resetAddress() {
        this.address1 = '';
        this.city = '';
        this.state = '';
        this.zipcode = '';
      }

      resetApiObjects() {
        this.listAddress = []
        this.pageNo = 0
        this.showList = false
      }
      
}
