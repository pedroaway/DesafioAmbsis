#DESAFIO AMBSIS
Esse projeto foi construído utilizando node, express e mysql, a ideia é construir uma
API rest que cadastra informações de empresas e suas licenças ambientais, bem como tem as opções de editar, apagar e visualizar, tanto as empresas cadastradas, quanto as licenças. (CRUD API)

------------
###INSTRUÇÕES PARA RODAR:
-Ter um acesso a um servidor mysql
-Node(v18.12.1)
-npm(v8.19.2)
-As informações de acesso ao seu banco de dados devem ser adcionadas ao arquivo .env que se encontra na raiz do projeto.

Com o terminal aberto na raiz do projeto
-"npm install" > Para instalar as dependências do projeto
-"npm start" > Para rodar a aplicação.

####Testes 
Para testar as requisições e respostas das rotas, disponibilizei o arquivo test.json, que pode ser importado dentro do insomnia.
Mas caso queira testar de outra forma vou deixar as instruções logo abaixo

- Insert Empresa
{
	"CNPJ": "20783807000151",
	"RAZAO_SOCIAL": "Ambsis",
	"CIDADE": "Blumenau",
	"ESTADO": "Santa Catarina",
	"BAIRRO": "Centro",
	"COMPLEMENTO": "sem complemento"
}

- Insert licença
{
	"NUMERO": "1235468456",
	"ORGAO_AMBIENTAL": "IBAMA",
	"EMISSAO": "2020-04-19",
	"VALIDADE": "2022-04-19",
	"EMPRESA": "20783807000151"
}