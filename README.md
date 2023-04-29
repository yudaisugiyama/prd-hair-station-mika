# Hair Station Mika

Reasion: us-west1 (oregon)
Zone: us-west1-a

## Get Started
## SSH settings
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

## Install Apache and PHP

```
sudo apt-get -y install apache2
sudo apache2 -v
sudo apt-ge -y install php
php -v
sudo mv /var/www/html/index.html /var/www/html/index.
sudo vim /var/www/html/index.php
```

[Setup](https://zenn.dev/knockknock/articles/10aa24fde47c45)

## Apache Command

```
sudo systemctl start apache2
sudo systemctl stop apache2
sudo systemctl restart apache2
sudo seervice apache2 reload
```
