# Relay OSC messages to Decentraland

This project relies on 3 parts:

- A browser app that can receive OSC messages from any source (_linker-app_)
- A Colyseus server that gets sent these messages over webSockets (_server_)
- A Decentraland scene that receives these messages and updates positions of entities accordingly (_scene_)

You can generate OSC messages with many different sources, some examples:

- OSCHoop Mobile app
- Ableton Live + Connection Kit
- Leap Motion + Ableton Live + Connection Kit



## Instructions

### Run locally

- 1) Open a console on the `server` folder
- 2) Run `npm run build`, then `npm run start` in server's folder to start the Colyseus local server
- 3) Open a second console window on the `linker-app/browser-oscjs` folder
- 4) Run `node .` to start the OSC relayer
- 5) Check the ip and port that the OSC relayer is listening on. Hook any external services to this same address, make sure it's connected on the same local network.
- 6) Open a third console window in `scene`
- 7) Run `dcl start` to start running the scene locally

 
 ### How this works
 
1) The OSC Relayer app receives OSC messages and forwards these as Websocket messages to the Colyseus server.
2) The Colyseus server then updates its room state based on these messages
3) Scenes that are also connected to the Colyseus server get updated as the room state changes

In each Colyseus room, there can be only one "Director" user. This user is the one that sends all the changes, all other players just listen. The OSC app is connected as a director, sending a password together with the request to connect.

If a Colyseus room doesn't have a director assigned, it will listen to messages shared between rooms, using the `presence` functionality of Colyseus. In this way, a Director isn't limited to only the players in that particular room, but can reach all rooms and affect all realms of Decentraland.
