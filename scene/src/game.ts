/// --- Set up a system ---

import { connect } from './connection'

connect('my_room').then((room) => {
  log('Connected!')

  room.state.listen('fader1', (value: number) => {
    fader1.getComponent(Transform).position.y = value * 10 + 2
  })

  room.state.listen('fader2', (value: number) => {
    fader2.getComponent(Transform).position.y = value * 10 + 2
  })

  room.state.listen('fader3', (value: number) => {
    fader3.getComponent(Transform).position.y = value * 10 + 2
  })

  room.state.listen('fader4', (value: number) => {
    fader4.getComponent(Transform).position.y = value * 10 + 2
  })
})

let fader1 = new Entity()
fader1.addComponent(new BoxShape())
fader1.addComponent(
  new Transform({
    position: new Vector3(8, 2, 2),
  })
)
engine.addEntity(fader1)

let fader2 = new Entity()
fader2.addComponent(new BoxShape())
fader2.addComponent(
  new Transform({
    position: new Vector3(8, 2, 4),
  })
)
engine.addEntity(fader2)

let fader3 = new Entity()
fader3.addComponent(new BoxShape())
fader3.addComponent(
  new Transform({
    position: new Vector3(8, 2, 6),
  })
)
engine.addEntity(fader3)

let fader4 = new Entity()
fader4.addComponent(new BoxShape())
fader4.addComponent(
  new Transform({
    position: new Vector3(8, 2, 8),
  })
)
engine.addEntity(fader4)
