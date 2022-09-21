import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Address } from 'src/app/domain/address';
import { AddressCrudService } from 'src/app/services/address-crud.service';

@Component({
  selector: 'app-all-address',
  templateUrl: './all-address.component.html',
  styleUrls: ['./all-address.component.css']
})
export class AllAddressComponent implements OnInit {
  result:boolean=false;
 allAddresses: Address[]=[];
  constructor(private addressCrudService:AddressCrudService,private router:Router) { }

  ngOnInit(): void {
    console.log("in AllAddressComponent");
    this.reloadData();
   
}
reloadData(){
  this.addressCrudService.getAllAddress().subscribe(
    data=>{
      this.allAddresses=data;
      console.log(this.allAddresses);
      
      
  }
  );

}

deleteAddress(addressId: number){
  console.log(addressId);
  this.addressCrudService.deleteAddressbyAddressId(addressId).subscribe(
    data=>{
      this.result=data;
      console.log(this.result);
      this.reloadData();
      
      
  }
  )
  
}
showDetails(addressId: number){
  console.log("in showDetails");
  console.log(addressId);
  this.router.navigate(['addressdetails',addressId]);
  
  
}

updateDetails(addressId:number){
  console.log("in updateDetails");
  console.log(addressId);
  this.router.navigate(['updatedetails',addressId]);
  
  
}
}