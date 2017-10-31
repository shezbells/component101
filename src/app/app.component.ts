import { Component } from '@angular/core';
import { DataService } from  './data.service';
import { trigger,state,style,transition,animate,keyframes } from '@angular/animations';

@Component({
  selector: 'app-root',
 // templateUrl: './app.component.html',
 template: `
	
	<p [@myAwesomeAnimation]='state' (click)="animateMe()"> I will animate </p>
	
	
	`,
  styles: [` 
	p {
		width: 200px;
		background: lightgray;
		margin: 100px auto;
		text-align:center;
		padding: 20px;
		font-size:1.5em;		
	}
  `],
  animations:[
	trigger('myAwesomeAnimation',[
		state('small', style ({
			transform: 'scale(1)',
		})),
		state('large', style ({
			transform: 'scale(1.2)',
		})),
		
		transition ('small <=> large', animate('300ms ease-in', keyframes ([
			style({opacity:0, tranform: 'translateY(-75%)', offset:0}),
			style({opacity:10, tranform: 'translateY(35px)', offset:.5}),
			style({opacity:1, tranform: 'translateY(0)', offset:1}),
		
		]))),
	]),
  ]
  
  //['./app.component.css']
})
export class AppComponent {

	state: string = 'small';
	constructor (private dataService2:DataService) {
	}
	animateMe() {
		this.state = (this.state == 'small' ? 'large': 'small');
	}
	
}

/*
 <p> {{myObject.location}}</p>
 <ul>
	<li *ngFor = "let arr of myArr">{{arr}}</li>
 </ul>
 
 <ul>
	<li *ngIf = "myArr">Yeah I exist</li>
 </ul>
  <ul>
	<li *ngIf = "!myArr">I dont exist</li>
 </ul>
   <ul>
	<li *ngIf = "myArr=='something'">I dont exist</li>
 </ul>
    <ul>
	<li *ngIf = "myArr2=='something'">myarr2 exist</li>
 </ul>
	<ul>
	<li *ngIf = "myArr2; else otherTmpl">with myarr3</li>
 </ul>
 <ng-template #otherTmpl> No, I do </ng-template>
 <div *ngIf = "myArr2;then Tmpl1 else Tmpl2"></div>

 <ng-template #Tmpl1> true</ng-template>
 
 <ng-template #Tmpl2>false</ng-template>
  <img src="{{ angularLogo }}">
  <img [src]="angularLogo">
  <img bind-src="angularLogo">
  
  	<button [disabled]="buttonStatus2">My Button 2</button>
 	<button [disabled]="buttonStatus3 == 'enabled'">My Button 3</button>
 
   myObject = {
	 gender: 'male',
	 age: '33',
	 location: 'USA'
  }
  myArr = ['him','hers','yours'];
    
  myArr2 = true;
  	angularLogo = "http://www.gravatar.com/avatar/{{hash}}";
	buttonStatus = true;
	buttonStatus2 = false;
	buttonStatus3 = 'enabled';
  <button (mouseenter)= "myEvent($event)">My Button</button>

		myEvent(event) {
			console.log(event);
		}
		styles: [` 
  h1{
	 text-decoration:underline; 
	  
  }
  .red-title {
	 color:red;  
	  
  }
  .large-title{
	  font-size:4em;
	  
  }
  `]
	titleClass = false;
	titleClasses = {
		'red-title':true,
		'large-title':true,
		
	};
	
  	<p>{{someProperty}}</p>
	<ul>
		<li *ngFor= "let x of cars">{{x}}</li>
	</ul>
  h1{
	 text-decoration:underline; 
	  
  }
  .red-title {
	 color:red;  
	  
  }
  .large-title{
	  font-size:4em;
	  
	  someProperty: string = '';
	public cars: any[] = [];
	ngOnInit() {
		console.log(this.dataService2.cars);
		this.someProperty = this.dataService2.myData();
		this.cars = this.dataService2.cars;
	}
  }
 */