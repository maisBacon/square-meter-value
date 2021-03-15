# Visão Geral

[Desafio]

API para buscar o valor do metro quadrado. Retornando seu valor

## Responsáveis

- <Renan_Eiras_Melo>

## Docker Instalação

- caso esteja usando um SO diferente de distribuições Debian, você terá a opção de selecionar o SO desejado para instalação do docker.
https://docs.docker.com/engine/install/ubuntu/

## Rodar Docker

- instalando imagem docker postgress
  o link mostra mais informações caso precise
https://hub.docker.com/_/postgres

- executar o comando abaixo para instalação da imagem posgress no docker
docker run --name ingaia -e POSTGRES_PASSWORD=ingaia -d -p 5432:5432 postgres
- `-p` é um direcionamento de porta, caso esteja usando a porta ou queira direcionar para outra porta, basta trocar
- em seguida executar `docker ps` e verificar se o container está rodando
- logs do docker
docker logs ingaia
- verificar container ativos e não ativos `docker ps -a`

## Sequelize

- Executar o comando para criar o banco
yarn sequelize db:create

- Executar o comando para criar as tabelas
yarn sequelize db:migrate

- Caso precise excluir alguma tabela, usar:

- dropar última migrate
yarn sequelize db:migrate:undo

## Rodando o projeto

- `yarn dev` em desenvolvimento
- `yarn start` em produção

## Rodando os testes

- yarn test

já está configurado para rodar a
migrate por sqlite e desfazer ao finalizar

## Postman

- https://www.getpostman.com/collections/953ba634109586d783be

basta importar essa url em import > link > colar endereço

## heroku 

https://square-meter-value.herokuapp.com/
