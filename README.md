# Hair Station Mika
[https://hairstationmika.net]((https://hairstationmika.net))
[![Figma](https://img.shields.io/badge/Figma-figma.com-orange?style=flat&logo=figma)](https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2F8ZeNwGfZ48nW25GmLLZWbW%2FDesign%3Ftype%3Ddesign%26node-id%3D0%253A1%26t%3DyAg3QEfRvnfTGfY4-1)
### Get started
```
git clone https://github.com/yudaisugiyama/hair_station_mika
cd hair_station_mika/src-2.1-latest/
npm i express ejs
node server.js
```

```
サーバーがポート3000で起動しました
```
### ssh
```
ssh -i ~/.ssh/web-server-hair-station-mika web-server-hair-station-mika@104.198.96.84
```
### scp
For a folder
```
scp -i ~/.ssh/web-server-hair-station-mika -r src/views/ web-server-hair-station-mika@104.198.96.84:~/src/
```
For a file
```
scp -i ~/.ssh/web-server-hair-station-mika src/server.js web-server-hair-station-mika@104.198.96.84:~/src/
```
### tmux
To attach
```
tmux a -t 0
```