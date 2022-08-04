import logger from "./logger.js" //import default logger
import { TYPE_ERROR, TYPE_WARNING, TYPE_LOG } from "./constant.js" //import constant with destructuring from constant

logger("Hello world!", TYPE_ERROR)
logger("Hello world!", TYPE_WARNING)
logger("Hello world!", TYPE_LOG)
