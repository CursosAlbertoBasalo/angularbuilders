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

# 🦠 Presentacional de categorias
ng g c ui/categories --project domain-home
# 🦠 Presentacional de elementos destacados
ng g c ui/featured --project domain-home
# 🦠 Presentacional de modos de visualización
ng g c ui/view-mode --project domain-home


# ☢ Elemento título (ATOMS)
ng g c components/title --project shared-ui  --export
# 🧬 Bloque tarjeta (MOLECULES)
ng g c components/card --project shared-ui  --export
# 📜 Plantilla loading (TEMPLATES)
ng g c templates/loading --project shared-ui  --export --skip-tests=false
```

---

# 2 - Navigation data

```bash
# 🗄 Domain 📚 Item Lib
ng g library --name=home --directory=domain --buildable --enableIvy --importPath=@ab/home --lazy --prefix=ab-home --routing --parentModule=apps\catalog-web\src\app\app.module.ts --simpleModuleName --strict --tags='domain, route'

# 📄 Item Page
ng g c item --project=domain-item --flat --inlineStyle --skipSelector --type=Page --skipTests=false

# 📄 Item data Service
ng g s data/item --project=domain-item
```

---
