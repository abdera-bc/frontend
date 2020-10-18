set -e

# build
npm run build

# navigate into the build output directory
cd dist

git init
git add -A
git commit -m "Release latest changes"
git push -f git@github.com:abdera-bc/abdera-bc.github.io.git master:gh-pages

cd -