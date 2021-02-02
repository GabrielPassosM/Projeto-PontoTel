# Projeto PontoTel
 Desafio do processo seletivo para vaga de desenvolvedor(estágio) na empresa PontoTel.
***

 ## Executando a aplicação
Para rodar a aplicação em sua máquina, será necessário instalar as seguintes dependências:
* [Python 3.8](https://www.python.org/downloads/release/python-387/)
  * Seguir link para instalar
* [Flask](https://flask.palletsprojects.com/en/1.1.x/)
  * Comando para instalar: pip install Flask
  
Em seguida, realizar os passos:
1. No terminal de comandos, navegar até onde está localizada a pasta **projetoPontoTel**
2. Digitar o seguinte comando: **python app.py**
3. Copiar o link http exibido no prompt (provavelmente esse aqui: http://127.0.0.1:5000/) e colar no navegador web
***

### Screenshots e endpoints

![index](https://user-images.githubusercontent.com/78399176/106635581-c79a2a80-655f-11eb-9c0d-0719c6f43962.jpg)

Endpoint: '/'

Página index, apresenta dois botões para navegar para os outros endpoints.
***

![bovespa](https://user-images.githubusercontent.com/78399176/106635938-2bbcee80-6560-11eb-8407-6492929e241e.jpg)

Endpoint: '/bovespa'

Página que exibe os pontos bovespa.
***

![empresas1](https://user-images.githubusercontent.com/78399176/106636247-7fc7d300-6560-11eb-8b5b-d4fa70fd1c64.jpg)
![empresas2](https://user-images.githubusercontent.com/78399176/106636310-90784900-6560-11eb-9d3b-be2fa5749057.jpg)

Endpoint: '/empresas'

Página que permite o usuário escolher, dentre determinadas opções, uma empresa para consultar seu valor.
