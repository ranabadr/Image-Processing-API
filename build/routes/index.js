"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var pics_1 = __importDefault(require("./api/pics"));
var routes = express_1.default.Router();
routes.use('/api/pics', pics_1.default);
routes.get('/', function (req, res) {
    res.send('Start processing');
});
exports.default = routes;
