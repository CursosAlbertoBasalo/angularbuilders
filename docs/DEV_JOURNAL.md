# 0 - Nx workspace

```bash

# 💻 catalog-web
npx create-nx-workspace --preset=angular

# 🗄 Domain 📚 Home Lib
ng g @nrwl/angular:library home --directory=domain --buildable --enableIvy --importPath=@ab/home --lazy --prefix=ab-home --routing --parentModule=apps\catalog-web\src\app\app.module.ts --simpleModuleName --strict --tags='domain, route'

# 🗄 Shared 📚 Models Lib
ng g @nrwl/workspace:library models --directory=shared --importPath=@ab/models --strict --testEnvironment=node --tags='shared, models'

# 🗄 Shared 📚 Data Lib
nx g @nrwl/angular:library data --directory=shared --buildable --importPath=@ab/data --simpleModuleName --strict --tags='shared, data'

# ### 🗄 Shared 📚 UI Lib
nx g @nrwl/angular:library ui --directory=shared --buildable --enableIvy --importPath=@ab/ui --prefix=ab-ui --simpleModuleName --strict --tags='shared, ui'

# 👩‍🔬 StoryBook
nx g @nrwl/storybook:configuration
ng g @nrwl/storybook:configuration --name=shared-ui --uiFramework=@storybook/angular
```

---

# 1 - Async components

```bash
# 📄 Home Page
ng g c home --project=domain-home  --flat --inlineStyle --skipSelector --type=Page --skip-tests=false

# 👷‍♂️ Home data Service
ng g s data/home --project=domain-home

# 🦠 Presentational categories component
ng g c ui/categories --project domain-home
# 🦠 Presentational categories component
ng g c ui/featured --project domain-home
# 🦠 Presentational view modes component
ng g c ui/view-mode --project domain-home


# ☢ Presentational title component (ATOMS)
ng g c components/title --project shared-ui  --export
# 🧬 Presentational card component (MOLECULES)
ng g c components/card --project shared-ui  --export
# 📜 Presentational loading component (TEMPLATES)
ng g c templates/loading --project shared-ui  --export --skip-tests=false
```

---

# 2 - Navigation data

```bash
# 🗄 Domain 📚 Item Lib
ng g library --name=item --directory=domain --buildable --enableIvy --importPath=@ab/item --lazy --prefix=ab-item --routing --parentModule=apps\catalog-web\src\app\app.module.ts --simpleModuleName --strict --tags='domain, route'

# 📄 Item Page
ng g c item --project=domain-item --flat --inlineStyle --skipSelector --type=Page --skipTests=false

# 👷‍♂️ Item data Service
ng g s data/item --project=domain-item


# 🗄 Domain 📚 Search Lib
ng g library search --directory=domain --buildable --enableIvy --importPath=@ab/search --lazy --prefix=ab-search --routing --parentModule=apps\catalog-web\src\app\app.module.ts --simpleModuleName --strict --tags='domain, route'

# 📄 Search Page
ng g c search --project=domain-search --flat --inlineStyle --skipSelector --type=Page --skipTests=false


# 🗄 Domain 📚 Term Lib
ng g library term --directory=domain --buildable --enableIvy --importPath=@ab/term --prefix=ab-term --simpleModuleName --strict --tags='domain, feature'

# 📄 Term Component
ng g c term --project=domain-term --flat --inlineStyle --skipTests=false --export=true

# 👷‍♂️ Search data Service
ng g s data/search --project domain-search
# 🦠 Presentacional items component
ng g c ui/items --project domain-search --change-detection OnPush --skip-tests

# 🧭 App routing module
ng g @schematics/angular:module app-routing --project catalog-web --module app
# 👷‍♂️ Head data Service
ng g s head --project shared-data

# 🚮 Remove shared-models in favor of shared-data
ng g @nrwl/workspace:remove shared-models
```

# 3 - Async data flow

```bash
# 🗄 Domain 📚 Category Lib
ng g library --name=category --directory=domain --buildable --enableIvy --importPath=@ab/category --lazy --prefix=ab-category --routing --parentModule=apps\catalog-web\src\app\app-routing.module.ts --simpleModuleName --strict --tags='domain, route'

# 📄 Category Page
ng g c category --project=domain-category --flat --inlineStyle --skipSelector --type=Page --skipTests=false

# 👷‍♂️ Category data Service
ng g s data/category --project=domain-category

# 🕵️‍♂️ Adapter Interceptor
ng g interceptor adapter --project shared-data
# 🕵️‍♂️ Retry Interceptor
ng g interceptor retry --project shared-data

# 🏬 Store
ng g class store --project shared-data
ng g s audit --project shared-data
# 🕵️‍♂️ Audit Interceptor
ng g interceptor audit --project shared-data


// ToDo: Category items counter....
```

# 4 - Reactive forms

```bash
# 🗄 Domain 📚 AddItem Lib
ng g library --name=addItem --directory=domain --buildable --enableIvy --importPath=@ab/addItem --lazy --prefix=ab-add-item --routing      --parentModule=apps\catalog-web\src\app\app-routing.module.ts --simpleModuleName --strict --tags='domain, route'

# 📄 AddItem Page
ng g c addItem --project=domain-add-item --flat --inlineStyle --skipSelector --type=Page --skipTests=false

# 🦠 AddItem form
ng g c ui/form --project domain-add-item --change-detection OnPush

# 👷‍♂️ AddItem data Service
ng g s data/addItem --project=domain-add-item




# 👮‍♀️ Auth Guard
ng g guard canLoad --project shared-data --implements CanLoad

# 🕵️‍♂️ Auth Interceptor
ng g interceptor auth --project shared-data

# 🏬 Store (rename to AuthStore)
ng g s auth --project shared-data


# 🗄 Domain 📚 Auth Lib
ng g library --name=auth --directory=domain --buildable --enableIvy --importPath=@ab/auth --lazy --prefix=ab-auth --routing --parentModule=apps\catalog-web\src\app\app-routing.module.ts --simpleModuleName --strict --tags='domain, route'

# 📄 Login Page
ng g c login --project=domain-auth --flat --inlineStyle --skipSelector --type=Page --skipTests=false

# 👷‍♂️ Login data Service
ng g s data/login --project=domain-auth

# 🦠 Presentacional login form
ng g c ui/login-form --project domain-auth --change-detection OnPush



# 📄 Activate Page
ng g c activate --project=domain-auth --flat --inlineStyle --skipSelector --type=Page --skipTests=false
ng g s data/activate --project=domain-auth
# 🦠 Presentacional activation form
ng g c ui/activate-form --project domain-auth --change-detection OnPush
```

```
ng g c ui/event-sub-form --project domain-add-item --change-detection OnPush
ng g c ui/course-sub-form --project domain-add-item --change-detection OnPush
ng g s validators --project shared-data
ng g c components/input-control --project shared-ui --change-detection OnPush --export
ng g c components/select-contol --project shared-ui --change-detection OnPush --export

ng g @schematics/angular:directive directives/track --project shared-ui --export --skip-tests
```

```
ng add @angular/pwa
https://www.pwabuilder.com/imageGenerator
```
