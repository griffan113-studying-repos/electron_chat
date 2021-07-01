import { contextBridge, ipcRenderer } from "electron"

export const bridge = {
  sendNotification: (message: string) => {
    ipcRenderer.send("notify", message);
  },

  /*   on: (channel: string, callback: Function) => {
      ipcRenderer.on(channel, (_, data) => callback(data))
    } */
}

contextBridge.exposeInMainWorld("Bridge", bridge);
