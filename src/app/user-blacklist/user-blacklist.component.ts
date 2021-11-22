import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service'
import { Publication } from '../publication'
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-user-blacklist',
  templateUrl: './user-blacklist.component.html',
  styleUrls: ['./user-blacklist.component.css']
})
export class UserBlacklistComponent implements OnInit {

  publications : Publication[] = [];

  active_publications : Publication[] = [];

  showTitle : boolean = true;
  showAuthors : boolean = true;
  showDoi : boolean = true;
  showDescription : boolean = false;
  showVenue : boolean = false;
  showCitation : boolean = true;
  showYear : boolean = true;
  showPublisher : boolean = true;
  showPages : boolean = false;
  showVolumn : boolean = false;
  showNumber : boolean = false;
  showUsers : boolean = true;

  search_title : string = '';
  search_authors : string = '';
  search_doi : string = '';
  search_description : string = '';
  search_venue : string = '';
  search_citation : string = '';  
  search_year : string = '';
  search_publisher : string = '';
  search_pages : string = '';
  search_volumn : string = '';
  search_number : string = '';
  search_users : string = '';
  
  public token : string = '';
  public userId : number = -1;

  constructor(private api: ApiService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.loadScript('../assets/js/ruang-admin.min.js');    
    this.route.params.subscribe(paramsId => {
        this.token = paramsId.token;
        this.userId = +paramsId.userId;
        this.getPublications(this.userId);
    });  
  }

  getPublications(userId: number) {
    this.api.getCustomUserBlacklist(userId).subscribe(data => {
      for (const d of (data as any)) {
        this.active_publications.push({
          id: d.id,
          title: d.title,
          authors: d.listofauthors,
          doi: d.doi,
          description: d.description,
          venue: d.venue,
          citation: d.citations,
          year: d.year,
          publisher: d.publisher,
          pages: d.pages,
          volumn: d.volumn,
          number: d.number,
          bibtex: d.bibtex,
          users: d.authorsSemantic
        });
        this.publications.push({
          id: d.id,
          title: d.title,
          authors: d.listofauthors,
          doi: d.doi,
          description: d.description,
          venue: d.venue,
          citation: d.citations,
          year: d.year,
          publisher: d.publisher,
          pages: d.pages,
          volumn: d.volumn,
          number: d.number,
          bibtex: d.bibtex,
          users: d.authorsSemantic
        });
      }
    });
  }

  changeSearch(type: string, val: string) {
    if(type == "title") {
      this.search_title = val;
    }
    else if (type == "authors") {
      this.search_authors = val;
    }
    else if (type == "doi") {
      this.search_doi = val;
    }
    else if (type == "description") {
      this.search_description = val;
    }
    else if (type == "venue") {
      this.search_venue = val;
    }
    else if (type == "citation") {
      this.search_citation = val;
    }
    else if (type == "year") {
      this.search_year = val;
    }
    else if (type == "publisher") {
      this.search_publisher = val;
    }
    else if (type == "pages") {
      this.search_pages = val;
    }
    else if (type == "volumn") {
      this.search_volumn = val;
    }
    else if (type == "number") {
      this.search_number = val;
    }
    else if (type == "users") {
      this.search_users = val;
    }
    this.search();
  }
  search() {
    this.active_publications = [];
    for(var publication of this.publications) {
      let include: boolean = true;
      if(this.search_title != "") {        
        include = include && publication.title.toLowerCase( ).includes(this.search_title.toLowerCase( ));
      }
      if(this.search_authors != "") {
        include = include && publication.authors.toLowerCase( ).includes(this.search_authors.toLowerCase( ));
      }
      if(this.search_doi != "") {
        include = include && publication.doi.toLowerCase( ).includes(this.search_doi.toLowerCase( ));
      }
      if(this.search_description != "") {
        include = include && publication.description.toLowerCase( ).includes(this.search_description.toLowerCase( ));
      }
      if(this.search_venue != "") {
        include = include && publication.venue.toLowerCase( ).includes(this.search_venue.toLowerCase( ));
      }
      if(this.search_citation != "") {
        include = include && (publication.citation == +this.search_citation);
      }
      if(this.search_year != "") {
        include = include && publication.year.toLowerCase( ).includes(this.search_year.toLowerCase( ));
      }
      if(this.search_publisher != "") {
        include = include && publication.publisher.toLowerCase( ).includes(this.search_publisher.toLowerCase( ));
      }
      if(this.search_pages != "") {
        include = include && publication.pages.toLowerCase( ).includes(this.search_pages.toLowerCase( ));
      }
      if(this.search_volumn != "") {
        include = include && publication.volumn.toLowerCase( ).includes(this.search_volumn.toLowerCase( ));
      }
      if(this.search_number != "") {
        include = include && publication.number.toLowerCase( ).includes(this.search_number.toLowerCase( ));
      }
      if(this.search_users != "") {
        let user_level = false;
        for(var user of publication.users){
          user_level = user_level || user.toLowerCase( ).includes(this.search_users.toLowerCase());
        }
        include = include && user_level;
      }
      if(include) {
        this.active_publications.push(publication);
      }
    }    

  }


  unblock(inx: number){
    var pubId = this.active_publications[inx].id;
    this.api.unblock(this.userId, pubId)
    this.active_publications.splice(inx, 1);
    this.publications = [...this.active_publications]
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
