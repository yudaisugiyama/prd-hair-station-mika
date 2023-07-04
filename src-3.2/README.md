### Version 3.2

1. Install npm.
```
sudo apt update
sudo apt install npm
```

2. Add NodeSource repository.
```
curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
```

3. Install Node.js.
```
sudo apt install -y nodejs
```

```
web-server-hair-station-mika@web-server-hair-station-mika:~$ node -v
v18.16.1
web-server-hair-station-mika@web-server-hair-station-mika:~$ npm -v
9.5.1
```

4. Install Nginx.
```
sudo apt-get install nginx
```

5. Setting Nginx.
```
cd /etc/nginx/sites-available/
sudo chmod u+w default
sudo vi default
```

6. Start Nginx.
```
sudo systemctl start nginx
```

7. Create Next App.
```
cd
npx create-next-app@12.3.4 --typescript
```

8. Install npm module.
```
cd ./src-3.2
npm i sass
npm i react-intersection-observer
```

9. Install tmux.
```
sudo apt-get install tmux
```

10. Start tmux.
```
tmux
Ctrl + b, "
Control + b, ↑
```

11. Start project.
```
npm build
npm start
```