#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run build

# 进入生成的文件夹
cd docs/.vitepress/dist

# 如果是发布到自定义域名
echo 'blog.waterflowfit.top' > CNAME

git init
git add -A
git commit -m 'deploy'



git push -f git@github.com:Blacksheep1995/Blacksheep1995.github.io.git master

# git push -f git@github.com:Blacksheep1995/blog-vitepress.git master
# 如果发布到 https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages

cd -
