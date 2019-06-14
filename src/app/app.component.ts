import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'onleFoodAdminSample';
  public ngOnInit()
  {
    $(document).ready(function(){
      $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
    });
    });
  }
}
