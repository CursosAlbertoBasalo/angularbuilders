# 0

npx create-nx-workspace --preset=angular

ng generate @nrwl/workspace:library --name=models --directory=shared --importPath=@ab/models --strict --tags='shared, models' --testEnvironment=node

nx generate @nrwl/angular:library --name=data --directory=shared --buildable --importPath=@ab/data --simpleModuleName --strict --tags='shared, data'

nx generate @nrwl/angular:library --name=ui --directory=shared --buildable --enableIvy --importPath=@ab/ui --prefix=ab-ui --simpleModuleName --strict --tags='shared, ui'

ng generate @nrwl/angular:library --name=home --directory=domain --buildable --enableIvy --importPath=@ab/home --lazy --prefix=ab-home --routing --parentModule=apps\catalog-web\src\app\app.module.ts --simpleModuleName --strict --tags='domain, route'

---

# 1

ng generate @schematics/angular:component --name=home --project=domain-home --changeDetection=OnPush --flat --inlineStyle --skipSelector --type=Page
ng generate @schematics/angular:service --name=data/home --project=domain-home
ng g @schematics/angular:component ui/categories --project domain-home --change-detection OnPush
ng g @schematics/angular:component ui/featured --project domain-home --change-detection OnPush
ng g @schematics/angular:component ui/view-mode --project domain-home --change-detection OnPush
