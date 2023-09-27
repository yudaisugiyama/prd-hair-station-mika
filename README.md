# Hair Station Mika
[https://hairstationmika.net](https://hairstationmika.net)

[![Figma](https://img.shields.io/badge/Figma-figma.com-orange?style=flat&logo=figma)](https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2F8ZeNwGfZ48nW25GmLLZWbW%2FDesign%3Ftype%3Ddesign%26node-id%3D0%253A1%26t%3DyAg3QEfRvnfTGfY4-1)

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

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
$ node -v
v18.16.1
$ npm -v
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
tmux a -t 0
```

11. Start project.
```
npm run build
npm start
```

12. Restart Nginx.
```
sudo systemctl restart nginx
```