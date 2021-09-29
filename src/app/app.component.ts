import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'faculty-publication';
  ngOnInit() {
     this.loadScript('../assets/js/jquery-2.1.0.min.js');
     this.loadScript('../assets/js/owl-carousel.js');     
     this.loadScript('../assets/js/custom.js');     
   }

  public loadScript(url: string) {
    const body = <HTMLDivElement> document.body;
    const script = document.createElement('script');
    script.innerHTML = '';
    script.src = url;
    script.async = false;
    script.defer = true;
    body.appendChild(script);
  }
}
