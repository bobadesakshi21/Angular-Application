import { Component } from "@angular/core";

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html'
})
export class ServerComponent {
  
  allowNewServer = true;
  serverCreationStatus = 'No server was created';
  serverName = '';

  onCreateServer() {
    this.serverCreationStatus = 'Server was created';
    console.log('Server Created')
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}