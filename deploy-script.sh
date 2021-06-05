git add remote pages https://github.com/nasaphreak/nasaphreak.github.io.git

npm install
npm run build
mkdir docs

cp -r ./dist/nasaphreak/* ./docs/

git branch gh-pages
git filter-branch -f --subdirectory-filter ./docs/ gh-pages