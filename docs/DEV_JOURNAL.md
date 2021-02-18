# 0. Nx, grandes proyectos requieren mejores herramientas

```bash

# 💻 catalog-web
npx create-nx-workspace --preset=angular

# 🗄 Domain 📚 Home Lib
ng generate @nrwl/angular:library --name=home --directory=domain --buildable --enableIvy --importPath=@ab/home --lazy --prefix=ab-home --routing --parentModule=apps\catalog-web\src\app\app.module.ts --simpleModuleName --strict --tags='domain, route'

# 🗄 Shared 📚 Models Lib
ng generate @nrwl/workspace:library --name=models --directory=shared --importPath=@ab/models --strict --testEnvironment=node --tags='shared, models'

# 🗄 Shared 📚 Data Lib
nx generate @nrwl/angular:library --name=data --directory=shared --buildable --importPath=@ab/data --simpleModuleName --strict --tags='shared, data'

# ### 🗄 Shared 📚 UI Lib
nx generate @nrwl/angular:library --name=ui --directory=shared --buildable --enableIvy --importPath=@ab/ui --prefix=ab-ui --simpleModuleName --strict --tags='shared, ui'

# 👩‍🔬 StoryBook
nx g @nrwl/storybook:configuration

ng generate @nrwl/storybook:configuration --name=shared-ui --uiFramework=@storybook/angular
```

---

# 1

```bash
ng generate @schematics/angular:component --name=home --project=domain-home --changeDetection=OnPush --flat --inlineStyle --skipSelector --type=Page

ng generate @schematics/angular:service --name=data/home --project=domain-home

ng g @schematics/angular:component ui/categories --project domain-home --change-detection OnPush

ng g @schematics/angular:component ui/featured --project domain-home --change-detection OnPush

ng g @schematics/angular:component ui/view-mode --project domain-home --change-detection OnPush
```
