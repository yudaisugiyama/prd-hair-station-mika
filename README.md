<iframe style="border: 1px solid rgba(0, 0, 0, 0.1);" width="800" height="450" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2F8ZeNwGfZ48nW25GmLLZWbW%2FDesign%3Ftype%3Ddesign%26node-id%3D0%253A1%26t%3DyAg3QEfRvnfTGfY4-1" allowfullscreen></iframe>

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