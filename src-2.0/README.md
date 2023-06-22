### Install Node.js
```
npm init -y
npm i express nodemon
npm run dev
```

### Install Nginx
```
sudo apt-get update
sudo apt-get install nginx
cd /etc/nginx/sites-available/
sudo chmod u+w default
sudo vi default
```

```default
server {
    listen 80;
    server_name example.com www.example.com;
    location / {
        proxy_pass http://localhost:8080;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto https;
    }
}
```

### Nginx Command
```
sudo service nginx restart
sudo systemctl status nginx
sudo systemctl stop nginx
sudo systemctl restart nginx
sudo systemctl start nginx
```

### Install tmux
```
sudo apt-get install tmux
```

### tmux Command
```
tmux
tmux a -t 0
"
%
x
&
```

### Update
```
scp -i ~/.ssh/web-server-hair-station-mika -r src/public/ web-server-hair-station-mika@104.198.96.84:~/src/
tmux a -t 0
Control + b, ↑
node server.js
sudo systemctl restart nginx
```