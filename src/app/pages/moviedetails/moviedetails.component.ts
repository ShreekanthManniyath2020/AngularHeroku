import { Component, OnInit, ViewEncapsulation, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Router , NavigationEnd,ActivatedRoute, Params } from '@angular/router';
import './../../../assets/owl.theme.default.css';
import './../../../assets/owl.carousel.css';
import './../../../assets/bootstrap.css';
import './../../../assets/font-awesome.css';
import './../../../assets/animate.css';
import './../../../assets/style_1.css';
@Component({
  selector: 'app-moviedetails',
  templateUrl: './moviedetails.component.html',
  styleUrls: [ ]
})

export class MoviedetailsComponent implements OnInit {

  constructor(private router: Router ) { 

   

  }    
  

  ngOnInit(): void {
   
    
    
  }

}
