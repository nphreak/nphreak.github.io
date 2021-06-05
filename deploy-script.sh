git add remote pages https://github.com/nasaphreak/nasaphreak.github.io.git

npm install
npm run build
mkdir docs

cp -r ./dist/nasaphreak/* ./docs/

git substree split -P docs -b gh-pages
git subtree add --prefix docs pages master --squash
git read-tree --prefix=docs -u pages/master


git branch gh-pages
git filter-branch -f --subdirectory-filter ./docs/ gh-pages