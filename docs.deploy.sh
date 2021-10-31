#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run docs:build

# navigate into the build output directory
cd docs/.vuepress/dist


git init
git add -A
git commit -m 'docs: deploy'

git push -f https://github.com/talkhabi/vue-persian-datetime-picker.git master:gh-pages

cd -
