import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-qpage',
  templateUrl: './qpage.component.html',
  styleUrls: ['./qpage.component.css']
})
export class QpageComponent implements OnInit {
 
  constructor() { }
 datas:any
 stdname:any
 d:any
 status=false
 option=''
 prev=-1
 canswer=["20","13","4","20","","5","13","3n3","2y0","2s0","4s2","2f5",]
 //canswer = ["","","","","","","","","","","",""]

  ngOnInit(): void {
    fetch('./assets/data.json').then(res => res.json())
    .then(data=> {
      this.datas=data
      console.log(this.datas)
    });
    
  
  } 

 show(num:any)
{
  this.canswer[this.prev]=this.option
  this.option=''
   this.d=this.datas[num-1];
   this.status=true
   console.log(this.option)

   if(this.canswer[num-1]==''){
     console.log("this is empty loop",this.canswer[num-1])
     console.log("this is empty loop",this.canswer)
     this.option=this.canswer[num-1]
     this.prev=num-1
   }
   else{
    console.log("this is value loop",this.canswer[num-1])
    console.log("this is value loop",this.canswer)
      //his.option=''
       this.option=this.canswer[num-1]
       this.option=''

       
   }
   
   
}
}
