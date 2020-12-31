import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {

  results:any = [];
  timeout;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver, private api: ApiService) {}

  doSearch(e)
  {
  	if (this.timeout) {
  		clearTimeout(this.timeout)
  	}

  	this.timeout = setTimeout(()=>{

  		if (e.target.value) {
	  		this.api.getResults(e.target.value).subscribe((data:any)=>{
	  			this.results = data;
	  		})
  		}else{
  			this.results = [];
  		}

  	},500)
  }

}
