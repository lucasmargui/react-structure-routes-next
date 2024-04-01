
<H1 align="center">Estrutura Next Rotas </H1>
<p align="center">🚀Criação de uma estrutura de rotas em Next para referências futuras</p>


## Criação de projeto Next

```
npx create-next-app@latest nextjs-rotas
```

### Adicionando pacotes 

```
npm i @heroicons/react
npm i clsx
```

### Alterando moduleResolution

Alteração da resolução de módulo para node em tsconfig.json

```
...
"moduleResolution": "node",
...
```

<div align="center">
    <h3> Diretórios </h3>
    <img src="https://github.com/lucasmargui/React_Estrutura_Rotas/assets/157809964/769d3268-1027-454a-b06d-00da43230afd" style="width:50%">
</div>

## Home
  Diretório onde armazenará os componentes relacionados a está página e tem como caminho https://localhost:3000/home

### about
  - layout.tsx : Este é um componente de layout que define a estrutura básica da página about. Ele geralmente contém elementos que aparecem em about e subrotas de about.
  - page.tsx : https://localhost:3000/about
### profile
  - layout.tsx : Este é um componente de layout que define a estrutura básica da página profile. Ele geralmente contém elementos que aparecem em profile e subrotas de profile.
  - page.tsx : https://localhost:3000/profile

### table
  
  #### (overview)
  Grupos de rotas, eles permitem que você organize arquivos em grupos lógicos sem afetar a estrutura do caminho do URL. Quando você cria uma nova pasta usando parênteses (), o nome não será incluído no caminho do URL. Assim, /home/table/(overview)/page.tsx se torna https://localhost:3000/home/table.
  
  - page.tsx : https://localhost:3000/home/table.

------------------------------------
    
  - layout.tsx :  Este é um componente de layout que define a estrutura básica da página table. Ele geralmente contém elementos que aparecem em table e subrotas de table.

### users 

  #### [id]\edit 
  - not-found.tsx :
  - page.tsx : https://localhost:3000/home/users/5/edit.
  #### create
  - page.tsx : https://localhost:3000/home/users/create.

------------------------------------

 - layout.tsx : Este é um componente de layout que define a estrutura básica da página users. Ele geralmente contém elementos que aparecem em users e subrotas de users.
 - page.tsx : https://localhost:3000/home/users/

## page.tsx 

Este é um arquivo que representa uma página específica da sua aplicação sendo a página inicial (index.tsx), e tem como caminho https://localhost:3000

## layout.tsx 

Este é um componente de layout que define a estrutura básica da sua aplicação. Ele geralmente contém elementos que aparecem em todas as páginas, como cabeçalho, navegação, rodapé, etc.


# Resultado 

![image](https://github.com/lucasmargui/React_Estrutura_Rotas/assets/157809964/6d6d2bfc-6fc0-4f1f-ae73-97a962d3c528)

