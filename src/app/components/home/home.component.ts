import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { elementAt } from 'rxjs';
import {listAddressAPI, addressBtIdAPI} from 'src/app/api-uri/address-api';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  element!: HTMLElement | null;

  constructor(private httpService: HttpService) {
    
  }

  ngOnInit(): void {
    console.log("Home component");
    this.element = document.querySelector(".result-list");

    this.element?.addEventListener("scrollend", ()=> {
      console.log("scroll-end");
    })
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
  hideSearchList: boolean = true

  searhAddress = (value : string) => {
    console.log(value);

    const options = {
        headers : new HttpHeaders({
          "content-type" : "application/json"
        }),
        mode: 'cors'
      } 

        if (value.length >= 3) {
            this.httpService.doGet(listAddressAPI(value), options).subscribe((res) => {
            this.listAddress = res;
            this.hideSearchList = false;
            console.log(this.listAddress);
        });
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
          this.listAddress = [];
          this.hideSearchList = true;
        });
      }

      resetAddress() {
        this.address1 = '';
        this.city = '';
        this.state = '';
        this.zipcode = '';
      }
      
}
