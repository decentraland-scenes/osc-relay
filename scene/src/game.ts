/// --- Set up a system ---

import { connect } from './connection'

connect('my_room').then((room) => {
  log('Connected!')

  room.state.listen('fader1', (value: number) => {
    fader1.getComponent(Transform).position.y = value * 5 + 2
    if(value> 0.9){
      fader1.addComponentOrReplace(redMaterial)
    } else if (value > 0.6){
      fader1.addComponentOrReplace(yellowMaterial)
    } else{
      fader1.addComponentOrReplace(greenMaterial)
    }
  })

  room.state.listen('fader2', (value: number) => {
    fader2.getComponent(Transform).position.y = value * 5 + 2
    if(value> 0.9){
      fader2.addComponentOrReplace(redMaterial)
    } else if (value > 0.6){
      fader2.addComponentOrReplace(yellowMaterial)
    } else{
      fader2.addComponentOrReplace(greenMaterial)
    }
  })

  room.state.listen('fader3', (value: number) => {
    fader3.getComponent(Transform).position.y = value * 5 + 2
    if(value> 0.9){
      fader3.addComponentOrReplace(redMaterial)
    } else if (value > 0.6){
      fader3.addComponentOrReplace(yellowMaterial)
    } else{
      fader3.addComponentOrReplace(greenMaterial)
    }
  })

  room.state.listen('fader4', (value: number) => {
    fader4.getComponent(Transform).position.y = value * 5 + 2
    if(value> 0.9){
      fader4.addComponentOrReplace(redMaterial)
    } else if (value > 0.6){
      fader4.addComponentOrReplace(yellowMaterial)
    } else{
      fader4.addComponentOrReplace(greenMaterial)
    }
  })
})

let greenMaterial = new Material()
greenMaterial.albedoColor = Color4.Green()

let yellowMaterial = new Material()
yellowMaterial.albedoColor = Color4.Yellow()

let redMaterial = new Material()
redMaterial.albedoColor = Color4.Red()

let fader1 = new Entity()
fader1.addComponent(new BoxShape())
fader1.addComponent(
  new Transform({
    position: new Vector3(8, 2, 2),
  })
)
fader1.addComponent(greenMaterial)
engine.addEntity(fader1)

let fader2 = new Entity()
fader2.addComponent(new BoxShape())
fader2.addComponent(
  new Transform({
    position: new Vector3(8, 2, 4),
  })
)
fader2.addComponent(greenMaterial)
engine.addEntity(fader2)

let fader3 = new Entity()
fader3.addComponent(new BoxShape())
fader3.addComponent(
  new Transform({
    position: new Vector3(8, 2, 6),
  })
)
fader3.addComponent(greenMaterial)
engine.addEntity(fader3)

let fader4 = new Entity()
fader4.addComponent(new BoxShape())
fader4.addComponent(
  new Transform({
    position: new Vector3(8, 2, 8),
  })
)
fader4.addComponent(greenMaterial)
engine.addEntity(fader4)
