## apiVC

(pt-br) - 🍽📱 Este é o back-end do apk VoiceCarbo, que é uma API no nodeJs que usa o postgreSQL como banco de dados

(en) - 🍽📱 This is the backend of the VoiceCarbo apk, which is an api in nodeJs that uses postgreSQL as database

### Sobre o apiVC (About apiVC)

(pt-br) - Desenvolvida em nodeJS, utilizando express e postgreSQL como banco de dados. A api gerencia a autenticação de usuários no aplicativo, as informações do mesmo, registra novas refeições e possue uma base de dados de alimentos que são utilizados como métrica para o cálculo dos carboidratos e consequentemente a quantidade de insulina sugerida.

(en) - Developed in nodeJS, using express and postgreSQL as a database. The api manages the authentication of users in the application, the information of the application, registers new meals and has a database of foods that are used as a metric for the calculation of carbohydrates and consequently the amount of insulin suggested.

### Como utilizar (How to use)
(pt-br) - Temos um projeto nodeJS, então inicialmente é preciso instalar as dependências, execute:
(en) - We have a nodeJS project, so initially you need to install the dependencies, run:

```sh
 npm install
 npm install --only-dev
```

(pt-br) - Agora é necessário prover o banco de dados, na pasta ```apiVC/database``` encontre o script SQL do banco e os inserts dos alimentos, a nível de curiosidade você encontrará também os alimentos em arquivo .xlxs e o script em python utilizado para transformar em SQL inserts.

(en) - Now it is necessary to provide the database, in the folder ```apiVC/database``` find the SQL script of the bank and the food inserts, in terms of curiosity you will also find the foods in .xlxs file and the script in python used to transform SQL inserts into SQL.

```sh
  npm start
```

### Notas (Notes)
* (pt-br) - Esse projeto foi densenvolvido durante a matéria de Engenharia de Software II no período 2019.2 na Universidade Federal de Sergipe

* (en) - This project was developed during the course of Software Engineering II in the period 2019.2 at the Federal University of Sergipe

* (pt-br) - Se tiver dúvida ou precisar de alguma ajuda, basta entrar em contato...

* (en) - If you have any questions or need any help, just make contact...

### Autor (Author)
[Francisco Rodrigues](https://github.com/chicofariasneto)

### License

MIT License

Copyright (c) 2020 Francisco Rodrigues

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
