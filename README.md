# Hair Station Mika

>REGION: us-west1
>ZONE: us-west1-a

## Get Started
### SSH settings
```
ssh-keygen -t rsa -b 4096 -f ~/.ssh/web-server-hair-station-mika -N '' -C 'web-server-hair-station-mika' 
cat ~/.ssh/web-server-hair-station-mika.pub
```

### SSH Command
```
ssh -i ~/.ssh/web-server-hair-station-mika web-server-hair-station-mika@104.198.96.84
scp -i ~/.ssh/web-server-hair-station-mika /Users/YudaiSugiyama/Github/hair_station_mika/src/index.html web-server-hair-station-mika@104.198.96.84:/var/www/html/index.html
scp -i ~/.ssh/web-server-hair-station-mika -r assets web-server-hair-station-mika@104.198.96.84:~/
```

### Install Apache

```
sudo apt-get -y install apache2
sudo apache2 -v
sudo mv /var/www/html/index.html /var/www/html/index.
```

[detail](https://zenn.dev/knockknock/articles/10aa24fde47c45)

### Apache Command
```
sudo systemctl start apache2
sudo systemctl stop apache2
sudo systemctl restart apache2
sudo seervice apache2 reload
```

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
node server.js

```