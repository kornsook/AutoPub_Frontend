import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-publication',
  templateUrl: './admin-publication.component.html',
  styleUrls: ['./admin-publication.component.css']
})
export class AdminPublicationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.loadScript('../assets/js/ruang-admin.min.js');
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
