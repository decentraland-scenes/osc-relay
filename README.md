# Relay OSC messages to Decentraland

This project relies on 3 parts:

- A browser app that can receive OSC messages from any source (_linker-app_)
- A Colyseus server that gets sent these messages over webSockets (_server_)
- A Decentraland scene that receives these messages and updates positions of entities accordingly (_scene_)

You can generate OSC messages with many different sources, some examples:

- OSCHoop Mobile app
- Ableton Live + Connection Kit
- Leap Motion + Ableton Live + Connection Kit
