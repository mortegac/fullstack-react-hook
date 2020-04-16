## Taller Reacjs - Hooks

# Hooks :  useEffect

Permite llevar a cabo efectos secundarios (side effects)  en componentes funcionales.


Ejemplo:

```
useEffect( 
    function persistForm() {
        localStorage.setItem('formData', name); 
});
```

## Configuración
.- Instalar  [Nodejs versión LTS](https://nodejs.org/es/)

.- Instalar Manejador de dependencias [Yarn](https://yarnpkg.com)


.- Instalar Editor de código [Visual Studio Code](https://code.visualstudio.com/)



## Creación App Base
.- Creación de la App base y entorno de configuración:

```
npx create-react-app my-app
```
![alt text](https://camo.githubusercontent.com/e4f2feecb8bc0d58c1f2e31f97b2856a04b50ef3/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f66616365626f6f6b2f6372656174652d72656163742d61707040323762343261633765666130313866323534313135336162333064363331383066356661333965302f73637265656e636173742e737667)

.- Estructura de carpetas creada

```
my-app
├── README.md
├── node_modules
├── package.json
├── .gitignore
├── public
│   ├── favicon.ico
│   ├── index.html
│   └── manifest.json
└── src
    ├── App.css
    ├── App.js
    ├── App.test.js
    ├── index.css
    ├── index.js
    ├── logo.svg
    └── serviceWorker.js
```

.- Ejecutar la aplicación

```
cd my-app && yarn start
```


## Documentación: 
.- [create-react-app](https://github.com/facebook/create-react-app)

.- [Reactjs](https://es.reactjs.org/)

.- [Hooks](https://es.reactjs.org/docs/hooks-intro.html)

