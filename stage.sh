set -e

# build
npm run build

# copy netlify configurations file
cp netlify.toml dist/netlify.toml

# navigate into the build output directory
cd dist

git init
git add -A
git commit -m "Release latest changes"
git push -f git@github.com:abdera-bc/frontend master:stage

cd -