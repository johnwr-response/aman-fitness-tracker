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

# Firebase Links
https://console.firebase.google.com/u/1/project/aman-fitness-tracker/overview
https://github.com/angular/angularfire

# Securing Firebase
In firebase console, go to database | rules and add the below rule to only allow access to requests with a valid auth:
```
allow read, write: if request.auth != null;
```


# AngularFire Installation
```
ng add @angular/fire
npm i firebase
```

# Note about RxJS 6
Instead of
```
....snapshotChanges()
    .map(docArray => { ... })
```
you should use the pipe()  method provided by RxJS:
```
....snapshotChanges()
    .pipe(map(docArray => { ... }))
```
It simply wraps the RxJS operator you want to use - in this case map() . You can actually use multiple pipe calls on the same observable - simply chain them after each other.

# Install NgRX
```
npm install --save @ngrx/store
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
- Angularfire Setup Docs: https://github.com/angular/angularfire2/blob/master/docs/install-and-setup.md
- Angularfire Official Docs: https://github.com/angular/angularfire2/blob/master/docs/firestore/collections.md
- Firebase Docs: https://firebase.google.com/docs/web/setup
- More on RxJS Observables: https://academind.com/learn/javascript/understanding-rxjs/
- More on Modules: https://angular.io/guide/ngmodules
- More on Lazy Loading: https://angular.io/guide/lazy-loading-ngmodules
- NgRx Official Repo & Docs: https://github.com/ngrx/platform
- RxJS in Detail: https://academind.com/learn/javascript/understanding-rxjs/

# Git
```
git add .gitignore
git add LOCAL_NOTES.md
git commit -m "Init"
git remote add origin https://github.com/johnwr-response/aman-fitness-tracker.git
git push -u origin master
```
