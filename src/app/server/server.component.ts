import { Component } from "@angular/core";

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html'
})
export class ServerComponent {
  
  allowNewServer = true;
  serverCreationStatus = 'No server was created';
  serverName = 'Default Server';

  onCreateServer() {
    this.serverCreationStatus = 'Server was created with name: '+this.serverName;
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}