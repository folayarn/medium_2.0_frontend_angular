import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-denied-page',
  templateUrl: './denied-page.component.html',
  styleUrls: ['./denied-page.component.css']
})
export class DeniedPageComponent implements OnInit {

  constructor(private router: Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
  }

  url=this.router.url

  onClick(){
    if(sessionStorage.getItem('rx')==='admin'){
      this.router.navigate(['admin'])
    }else{
      this.router.navigate(['home'])
    }

  }

}
