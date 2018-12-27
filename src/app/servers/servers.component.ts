import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
allowNewServer = false;
serverCreateStatus = 'No Server was created';
serverName = 'Test Server';
serverCreated = false;
servers = ['Test Server', 'Test Server2'];
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000 );
  }

  ngOnInit() {
  }

  onServerCreate() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreateStatus = 'Server is Created!!!' + ' \nName is: ' + this.serverName;
  }

  onUpateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
    console.log(event);
  }

}
