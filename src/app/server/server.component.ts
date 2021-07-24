import { Component } from "@angular/core";

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent {
  
  allowNewServer = true;
  serverName = 'Default Server';
  serverCreated = false;
  serverStatus = '';
  servers = ['TS1', 'TS2']

  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'online':'offline';
    console.log('Server Status: ', this.serverStatus)
  }

  onCreateServer() {
    this.servers.push(this.serverName)
    console.log('Servers:', this.servers)
    this.serverCreated = true;
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  getColor() {
    return this.serverStatus === 'online'? 'green': 'red';
  }

  checkIfOnline() {
    console.log('checkIfOnline()')
    return this.serverStatus === 'online';
  }
}