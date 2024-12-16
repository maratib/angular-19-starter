# Angular 19 starter

### Angular 19, Playwright and TailwindCSS

```bash
ng build --configuration=development
```

### Disable sass warnings

```json
// angular.json or project.json
"architect": {
  "build": {
    "options": {
      "stylePreprocessorOptions": {
        "sass": {
          "silenceDeprecations": ["mixed-decls", "color-functions", "global-builtin", "import"]
        }
      }
    }
  }
},
```
