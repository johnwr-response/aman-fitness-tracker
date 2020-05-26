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

ng g c navigation/header --module app.module
ng g c navigation/sidenav-list --module app.module
```

# Install flex layout
```
npm install @angular/flex-layout @angular/cdk --save
```

# Note about moment.js
Internationalization in components like datepicker _(not done here)_
```
npm install moment --save
# then import MatMomentDateModule instead of MatNativeDateModule
```

# Links
- Angular Material Setup Docs: https://material.angular.io/guide/getting-started
- Angular Material Component Docs: https://material.angular.io/components/categories
- Angular Material Github Repo: https://github.com/angular/material2
- @angular/flex-layout Docs: https://github.com/angular/flex-layout
- Flexbox Guide: https://css-tricks.com/snippets/css/a-guide-to-flexbox/
- Flexbox Video: https://academind.com/learn/css/understanding-css/flexbox-basics-container
- More on the Tabs Component: https://material.angular.io/components/tabs/overview
- More on Spinners: https://material.angular.io/components/progress-spinner/overview
- More on Sidenav: https://material.angular.io/components/sidenav/overview
- More on the Toolbar: https://material.angular.io/components/toolbar/overview
- Detailed Docs on the Data Table: https://material.angular.io/components/table/overview
- Angular Fire6 article (if needed): https://dev.to/sreekanth_2108/upgrading-to-angularfire-6-with-angular-9-4ce1

# Firebase
https://console.firebase.google.com/u/1/project/aman-fitness-tracker/overview
https://github.com/angular/angularfire

# AngularFire
```
ng add @angular/fire
npm i firebase
```

# Git
```
git add .gitignore
git add LOCAL_NOTES.md
git commit -m "Init"
git remote add origin https://github.com/johnwr-response/aman-fitness-tracker.git
git push -u origin master
```
