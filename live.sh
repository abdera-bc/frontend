set -e

# build
npm run build

# copy gh actions workflow & .htaccess
mkdir dist/.github
mkdir dist/.github/workflows
cp .github/workflows/main.yml dist/.github/workflows/main.yml

cp .htaccess dist/.htaccess

# navigate into the build output directory
cd dist

git init
git add -A
git commit -m "Release latest changes"
git push -f git@github.com:abdera-bc/frontend master:live

cd -

npm run deploy:stage