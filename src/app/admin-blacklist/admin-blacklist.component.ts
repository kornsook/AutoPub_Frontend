import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-blacklist',
  templateUrl: './admin-blacklist.component.html',
  styleUrls: ['./admin-blacklist.component.css']
})
export class AdminBlacklistComponent implements OnInit {
  blacklist : any[] = [
    {
      "title": "Gold grain morphology and composition as an exploration tool: application to gold exploration in covered areas",
      "authors": "Brian K. Townley, Gerard Hérail, Victor Maksaev, Carlos Palacios, Philippe de Parseval, Fabían Sepulveda, Rodrigo Orellana, Pablo Rivas, Cesar Ulloa",
      "doi": "10.1144/1467-787302-042",
      "journal": "Geochemistry: Exploration, Environment, Analysis",
      "date": "2003/2",
      "users": ["pablo_rivas"]                
    },
    {
      "title": "Efficacy and safety of replacing lopinavir with atazanavir in HIV-infected patients with undetectable plasma viraemia: final results of the SLOAT trial",
      "authors": "Vincent Soriano, Pilar García-Gasco, Eugenia Vispo, Andrés Ruiz-Sancho, Francisco Blanco, Luz Martín-Carbonero, Sonia Rodríguez-Novoa, Judit Morello, Carmen de Mendoza, Pablo Rivas, Pablo Barreiro, Juan González-Lahoz",
      "doi": "10.1093/jac/dkm413",
      "journal": "Journal of Antimicrobial Chemotherapy",
      "date": "2007/11",
      "users": ["pablo_rivas"]                
    }
  ];

  unblock(index: number, user: number){
    this.blacklist[index].users.splice(user, 1);
    if(this.blacklist[index].users.length == 0) {
      this.remove(index);
    }
  }

  remove(index: number){
    this.blacklist.splice(index, 1);    
  }

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
