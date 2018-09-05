var io = require('socket.io-client');
var THE_URL = 'http://192.168.0.107:5000';
const socket = io(THE_URL);
const EVENT = 'addRoom';
const ROOM = 'F105'
socket.emit(EVENT, ROOM);
