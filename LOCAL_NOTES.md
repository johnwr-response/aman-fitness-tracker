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

# Install flex layout
```
npm install @angular/flex-layout @angular/cdk --save
```

# Install moment for internationalization in components like datepicker 
_(not done here)_

```
npm install moment --save
```
- Then import MatMomentDateModule instead of MatNativeDateModule



# Git
```
git add .gitignore
git add LOCAL_NOTES.md
git commit -m "Init"
git remote add origin https://github.com/johnwr-response/aman-fitness-tracker.git
git push -u origin master
```
