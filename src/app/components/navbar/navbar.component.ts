import { Component, OnInit } from '@angular/core';
import { ScrollToService } from 'ng2-scroll-to-el';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private scrollService: ScrollToService) { }

  ngOnInit() {
  }

//   scrollToTop(element) {
//     this.scrollService.scrollTo(element);
// }


}
