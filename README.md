# Projeto-Softruck
## Descrição da tarefa
Com os dados geográficos e o sprite dados, a tarefa é criar uma tela com um mapa que fará a animação da imagem no sprite baseada na direção do carro.
## Tecnologias utilizadas
O projeto foi desenvolvido com as ferramentas:
* HTML
* SCSS 
* JavaScript -> auxiliando na construção da interface web
- MapBox GL JS -> biblioteca para adicionar os mapas e as rotas à plataforma, facilitando a visualização da aplicação
## Projeto
Na pasta assets, foi adicionada a imagem do carro. Com as ferramentas da biblioteca MapBox GL JS, não foi necessário utilizar os sprites;
Na pasta scripts, o arquivo JS "index.js";
Na pasta styles, os arquivos SCSS e CSS;
Além dessas pastas, o diretório possui o arquivo HTML e o JSON fornecido.
## Instruções para execução
Após a instalação do Node.JS, executar os comandos abaixo no terminal:
`npm install`
`npm start`
No browser, abrir o servidor local: 
[http://localhost:5173](http://localhost:5173)
## Funcionamento da plataforma
Inicialmente, ao abrir a tela, vê-se um mapa com as coordenadas pré-definidas. Para alterar para o mapa de alguma das rotas definidas no JSON, basta clicar no número da rota nos botões à direita da tela. Os botões podem ser clicados a qualquer momento, inclusive durante a exibição de um trajeto. Para reiniciar o trajeto, basta clicar no botão "Replay".
## Referências
https://docs.mapbox.com/mapbox-gl-js/guides/
