# Init
```
# install nodejs
# install angular
npm install -g @angular/cli
ng new fitness-tracker
ng add @angular/material
```

# Components
```
ng g c auth/signup --module app.module
ng g c auth/login --module app.module
ng g c training --module app.module
ng g c training/current-training --module app.module
ng g c training/new-training --module app.module
ng g c training/past-trainings --module app.module
ng g c welcome --module app.module
```

# Git
```
git add .gitignore
git add LOCAL_NOTES.md
git commit -m "Init"
git remote add origin https://github.com/johnwr-response/aman-fitness-tracker.git
git push -u origin master
```
