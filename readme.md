# CSGOGUNSAPI

<img src="csgo-586394.jpg" alt="CSGO foto">
###### PT-BR

## 🔧 Funçoes:

-   Criar, listar, e alterar.

## Requisitos

-   Node.js
-   Criar um servidor postgres (se tiver Docker instalado basta usar o comando que eu vou deixar abaixo):
-   <code>docker run --name postgres -e POSTGRES_PASSWORD=admin -p 5432:5432 -d postgres</code>
-   executar as migrations com o comando: <code>npm run typeorm migration:run</code>
-   Excluir a extensão ".example" dos arquivos: "ormconfig.json.example" e ".env.example"
-   Executar o script "dev": <code>"npm run dev"</code>

## Documentação(Swagger):

-   Basta entrar link http://localhost:5555/docs no seu navegador e você será capaz de usar todas as rotas que executarão as funções presentes na aplicação.

---

# CSGOGUNSAPI

<img src="csgo-586394.jpg" alt="CSGO picture">
###### EN

## 🔧 Functions:

-   Create, Read and Update.

## Requirements

-   Node.js
-   Create a postgres server (if you have Docker installed, you should use the following command)
-   <code>docker run --name postgres -e POSTGRES_PASSWORD=admin -p 5432:5432 -d postgres</code>
-   Execute the migrations running: <code>npm run typeorm migration:run</code>
-   Delete files' extension ".example": "ormconfig.json.example" and ".env.example"
-   Execute "dev" script: <code>"npm run dev"</code>

## Swagger documentation:

-   You just have to enter http://localhost:5555/docs link on your browser and you'll be able to use all the routes that will execute de application functions
