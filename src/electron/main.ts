import { app, BrowserWindow } from "electron";
import isDev from "electron-is-dev";
import path from "path";

let win: BrowserWindow;

const installDevExtensions = async () => {
  const {
    default: installExtension,
    REDUX_DEVTOOLS,
  } = require("electron-devtools-installer");

  installExtension([REDUX_DEVTOOLS])
    .then((name: any) => console.log(`Added Extension:  ${name}`))
    .catch((err: any) => console.log("An error occurred: ", err));
};

const createWindow = async () => {
  if (isDev) {
    const electronReload = require("electron-reload");
    electronReload(__dirname, {});
    await installDevExtensions();
  }

  win = new BrowserWindow({
    webPreferences: {
      contextIsolation: true,
      preload: path.join(__dirname, "preload.js"),
      nodeIntegration: true,
      // cmd + alt + I to open dev tool
    },
  });

  win.maximize();

  win.loadURL(
    isDev
      ? "http://localhost:4000"
      : `file://${path.join(__dirname, "../../build/index.html")}`
  );

  if (isDev) {
    // Open the DevTools.
    // win.webContents.openDevTools();
  }

  require("./mainProcess");
};

app.on("ready", async () => {
  createWindow();
});

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.

export { win };
