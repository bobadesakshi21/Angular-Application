import { Component } from "@angular/core";

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html'
})
export class ServerComponent {
  
  allowNewServer = true;
  serverName = 'Default Server';
  serverCreated = false;
  serverStatus = '';

  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'online':'offline';
  }

  onCreateServer() {
    this.serverCreated = true;
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  getColor() {
    return this.serverStatus === 'online'? 'green': 'red';
  }
}