npm run build
cp CHAME ./dist
cp .nojekyll ./dist
cd dist
git init
git add .
git commit -m date
git remote add origin https://github.com/Njust-imag/Njust-imag.github.io.git
git push -f origin master