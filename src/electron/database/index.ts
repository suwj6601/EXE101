import path from "path";
import fs from "fs-extra";
import { app } from "electron";
import { logger } from "../logger";

const DB_FILE_NAME = "app.db";
const DB_PATH = path.resolve(app.getPath("userData"), DB_FILE_NAME);

const isExist = fs.pathExistsSync(DB_PATH);
if (!isExist) {
  logger.info("Create database file");
  fs.openSync(DB_PATH, "w", 0o666);
}

export {};
