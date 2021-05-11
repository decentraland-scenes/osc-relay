import { Room, Client } from 'colyseus'
import { Director, MyRoomState, PASSWORD, Viewer } from './schema/MyRoomState'

export class MyRoom extends Room<MyRoomState> {
  onCreate(options: any) {
    this.setState(new MyRoomState())

    this.onMessage('type', (client, message) => {
      //
      // handle "type" message
      //
    })

    this.onMessage('change', (client, message) => {
      switch (message.address) {
        case '/fader1':
          this.state.fader1 = message.value
          break
        case '/fader2':
          this.state.fader2 = message.value
          break
        case '/fader3':
          this.state.fader3 = message.value
          break
        case '/fader4':
          this.state.fader4 = message.value
          break
      }
    })

    // this.onMessage('fader1', (client, message) => {
    //   this.state.fader1 = message.value
    // })
    // this.onMessage('fader2', (client, message) => {
    //   this.state.fader2 = message.value
    // })
    // this.onMessage('fader3', (client, message) => {
    //   this.state.fader3 = message.value
    // })
    // this.onMessage('fader4', (client, message) => {
    //   this.state.fader4 = message.value
    // })

    this.clock.setInterval(() => {
      console.log(
        this.state.fader1,
        this.state.fader2,
        this.state.fader3,
        this.state.fader4
      )
    }, 1000)
  }

  onJoin(client: Client, options: any) {
    if (options.director) {
      if (options.password == !PASSWORD) {
        console.log('password rejected!! ', options.password)
        return
      }
      if (this.state.director && this.state.director.active) {
        console.log('We already have a director!! ', this.state.director.id)
        return
      }
      const newDirector = new Director(client.id)
      this.state.director = newDirector
      console.log(newDirector.id, 'We have a new director in town!')
    } else {
      const newViewer = new Viewer(
        client.id,
        options.userData.displayName || 'Anonymous'
      )
      this.state.audience.set(client.sessionId, newViewer)
      console.log(newViewer.name, 'joined! => ', options.userData)
    }
  }

  onLeave(client: Client, consented: boolean) {
    if (this.state.director.id == client.sessionId) {
      console.log('The director left the set! ', client.sessionId)
      this.state.director = null
    } else {
      const player = this.state.audience.get(client.sessionId)
      console.log(player.name, 'left!')

      this.state.audience.delete(client.sessionId)
    }
  }

  onDispose() {
    console.log('Disposing room...')
  }
}
