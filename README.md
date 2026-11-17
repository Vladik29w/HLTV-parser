## About project:
This tool allows you to parse live matches from HLTV.org, including every player's stats and the match scoreboard, in real time.
## Tech stack:
* Frontend: Angular 22
* State manager: NgRx Signals
* Web sockets: Socket.IO

## How to Run

**Make sure you have **Node.js** and **npm** installed on your machine.**

### Setup & Launch
Run the following commands in your terminal:

```bash
git clone [https://github.com/Vladik29w/HLTV-parser.git](https://github.com/Vladik29w/HLTV-parser.git)
cd HLTV-parser

npm install

#(alternatively use `ng serve`)
npm start
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. Enter any HLTV match ID (You can find it in URL inside hltv match url) to view the live stats.
