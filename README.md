### QR code LiveBoard
Live qrcode on the webpage [LiveBoard](http://207.148.102.115)

### Introduction
There are two charaters: Scanner and User.
1. `Scanner`, using the Scanner app scan QR code and then streams it to the LiveBoard.
2. `User`, People who visits LiveBoard.

### Usage: User
1. Input the room name, then click `search`.
2. If it dosen't matchs the room, LiveBoard will return.
```bash
THE ROOM_NAME HAVEN'T BEEN CREATED YET.
```
3. If the room is matched, User can see "wait a moment" , QRcode scanned will be displayed on Liveboard.
4. `Remember close the page after using.`

### Usage: Scanner
1. Input room and then click `Go`.(Which creates a room or join an existed one.)
2. Then keep scanning QR code, the QR code will be stream to LiveBoard
3. `Remember` kill background process after streaming finish.
