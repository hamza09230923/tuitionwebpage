# Save the source-code changes on main
git switch main
git add -A
git commit -m "Update website"
git push origin main

# Bring those changes into the docs branch
git switch docs
git pull origin docs
git merge main

# Build and copy the finished website into /docs
npm ci
npm run build
Remove-Item docs -Recurse -Force
Copy-Item dist docs -Recurse

# Deploy through GitHub Pages
git add -A
git commit -m "Deploy website"
git push origin docs