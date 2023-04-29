# hair_station_mika

Reasion: us-west1 (oregon)
Zone: us-west1-a

## Get Started
1. SSH settings
```
ssh-keygen -t rsa -b 4096 -f ~/.ssh/web-server-hair-station-mika -N '' -C 'web-server-hair-station-mika' 
cat ~/.ssh/web-server-hair-station-mika.pub
ssh -i ~/.ssh/web-server-hair-station-mika web-server-hair-station-mika@104.198.96.84
scp -i ~/.ssh/web-server-hair-station-mika /Users/YudaiSugiyama/Github/hair_station_mika/src/index.html web-server-hair-station-mika@104.198.96.84:/var/www/html/index.html
scp -i ~/.ssh/web-server-hair-station-mika -r assets web-server-hair-station-mika@104.198.96.84:~/
```

2. Install Apache and PHP

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

## Django
```
sudo apt-get update
sudo apt-get install python3
sudo apt-get install python3-pip
sudo pip3 install django
django-admin --version
django-admin startproject hair-station-mika
python3 manage.py startapp homepage
sudo apt-get install libapache2-mod-wsgi-py3
sudo touch /etc/apache2/sites-available/hairstationmika.conf
sudo chmod 774 /etc/apache2/sites-available/hairstationmika.conf
sudo vi /etc/apache2/sites-available/hairstationmika.conf
```

```
<VirtualHost *:80>
   ServerName hairstationmika.net
   ServerAlias www.hairstationmika.net

   ErrorLog ${APACHE_LOG_DIR}/error.log
   CustomLog ${APACHE_LOG_DIR}/access.log combined

   Alias /static /path/to/static/files
   <Directory /path/to/static/files>
       Require all granted
   </Directory>

   <Directory /path/to/django/project>
       <Files wsgi.py>
           Require all granted
       </Files>
   </Directory>

   WSGIDaemonProcess projectname python-home=/path/to/venv python-path=/path/to/django/project
   WSGIProcessGroup projectname
   WSGIScriptAlias / /path/to/django/project/wsgi.py
</VirtualHost>
```

ここで、`/path/to/static/files` は、`STATIC_ROOT` で指定されたディレクトリのパスに置き換えます。`/path/to/django/project` は、Djangoプロジェクトのパスに置き換えます。`projectname` は、プロジェクトの名前に置き換えます。

5. Apacheをリロードする

設定ファイルを適用するには、Apacheをリロードします。

```
sudo service apache2 reload
```

6. DNSレコードを設定する

最後に、DNSレコードを設定して、`hairstationmika.net` ドメインをVMインスタンスのパブリックIPアドレスに割り当てます。

以上が、DjangoウェブサイトをGCPのVMインスタンスで、`hairstationmika.net` ドメインで表示させるための手順です。