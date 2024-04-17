<H1 align="center"> Next Routes Structure </H1>
<p align="center">🚀Creating a route structure in Next for future references</p>


## Requirements
- next
- heroicons
- clsx


## Create project Next

```
npx create-next-app@latest nextjs-rotas
```

### Adding packages

```
npm i @heroicons/react
npm i clsx
```

### Changing moduleResolution

Changing module to node resolution in tsconfig.json

```
...
"moduleResolution": "node",
...
```

<div align="center">
 <h3> Directories </h3>
 <img src="https://github.com/lucasmargui/React_Estrutura_Rotas/assets/157809964/769d3268-1027-454a-b06d-00da43230afd" style="width:50%">
</div>

## Home
 Directory where the components related to this page will be stored and has the path https://localhost:3000/home

### about
 - layout.tsx: This is a layout component that defines the basic structure of the about page. It typically contains elements that appear in about and about subroutes.
 - page.tsx: https://localhost:3000/about
### profile
 - layout.tsx: This is a layout component that defines the basic structure of the profile page. It usually contains elements that appear in profile and profile subroutes.
 - page.tsx: https://localhost:3000/profile

### table

 #### (overview)
 Route groups, they allow you to organize files into logical groups without affecting the URL path structure. When you create a new folder using parentheses (), the name will not be included in the URL path. So /home/table/(overview)/page.tsx becomes https://localhost:3000/home/table.

 - page.tsx: https://localhost:3000/home/table.

------------------------------------

 - layout.tsx: This is a layout component that defines the basic structure of the table page. It generally contains elements that appear in table and table subroutes.

### users

 #### [id]\edit
 - not-found.tsx :
 - page.tsx: https://localhost:3000/home/users/5/edit.
 #### create
 - page.tsx: https://localhost:3000/home/users/create.

------------------------------------

 - layout.tsx: This is a layout component that defines the basic structure of the users page. It usually contains elements that appear in users and user subroutes.
 - page.tsx: https://localhost:3000/home/users/

## page.tsx

This is a file that represents a specific page of your application, being the home page (index.tsx), and its path is https://localhost:3000

## layout.tsx

This is a layout component that defines the basic structure of your application. It usually contains elements that appear on every page, such as header, navigation, footer, etc.


# Result

![image](https://github.com/lucasmargui/React_Estrutura_Rotas/assets/157809964/6d6d2bfc-6fc0-4f1f-ae73-97a962d3c528)
