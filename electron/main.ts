import { app, BrowserWindow, ipcMain, Notification } from 'electron';
// import path from 'path';

const isDev: boolean = !app.isPackaged;

let mainWindow: BrowserWindow | null

declare const MAIN_WINDOW_WEBPACK_ENTRY: string
declare const MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY: string

function createWindow () {
  mainWindow = new BrowserWindow({
    minHeight: 600,
    minWidth: 500,
    width: 1100,
    height: 700,
    backgroundColor: '#FFF',
    webPreferences: {
      nodeIntegration: true,
      // worldSafeExecuteJavaScript: true,
      contextIsolation: true,
      preload: /* path.join(__dirname, "electron", "preload.ts") */ MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY
    }
  })

  mainWindow.loadURL(MAIN_WINDOW_WEBPACK_ENTRY)
  mainWindow.on('closed', () => {
    mainWindow = null
  })
  isDev && mainWindow.webContents.openDevTools();
}

async function registerListeners () {
  ipcMain.on('notify', (_, message) => {
    new Notification({ title: "Notification", body: message }).show();
  })
}

/* if (isDev) {
  require("electron-reload")(__dirname, {
    electron: path.join(__dirname, "node_modules", ".bin", "electron")
  })
} */

app.on('ready', createWindow)
  .whenReady()
  .then(registerListeners)
  .catch(e => console.error(e))

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})
