const { app, BrowserWindow, remote } = require('electron');

app.on('ready', () => {
  let mainWindow = new BrowserWindow({
    width: 900,
    height: 605,
    frame: false,
    maximizable: false,
    resizable: false,
    transparent: true,
    webPreferences: {
      enableRemoteModule: true,
      contextIsolation: false,
      nodeIntegration: true,
    }
  });
  mainWindow.loadFile('./views/index.html');
});

function viewWindow(mode) {
  mode == "min" ? remote.getCurrentWindow().minimize() : remote.getCurrentWindow().close()
};
