// Texto explicativo deste projeto.
-
- Este é um projeto criado por mim através de um exercício do curso de JavaScript do Gustavo Guanabara.
___

// HTML
1. tenho um documento html.
2. na cabeça do documento (head) tenho:
    - título do site;
    - link para css externo;
    - link para favicon do site.
3. no corpo do documento (body) tenho:
    - body com atributo 'onload' (que funciona como um "ao carregar o documento") que recebe uma function chamada carregar() na qual é a única função utilizada no JavaScript;
    - um header com um h1 como título do corpo do site;
    - uma seção que contém 2 divs;
    - primeira div: tem um id chamado msg e um texto que irá mostrar que horas são de acordo com o horário atual;
    - segunda div: tem um id chamado picture na qual vai a imagem que aparecerá de acordo com o horário atual;
    - um rodapé com apenas um parágrafo.

// CSS
1. na estilização tenho:
    - body: foi aplicado um estilo na fonte;
    - header: foi aplicado uma cor branca e alinhado o conteúdo ao centro;
    - section: foi aplicado um fundo branco, uma borda de 10px, um preenchimento interno, largura, altura, margem, sombra da caixa e alinhamento de texto;
    - div#picture: foi aplicado um display flex, margem, largura e altura;
    - footer foi aplicado um alinhamento ao centro, cor branca e estilo da fonte como itálico.

// JS
1. uma única função chamada carregar, que foi inserida no html, na tag body e no atributo onload que será executada quando o body 'carregar'.
2. nessa função delcaramos 5 variáveis:
    - msg: pega o elemento html div com id msg que no caso é a primeira div dentro da tag section utilizando query selector;
    - imagem: pega o elemento html img (com id image) que está dentro da segunda tag div (com id picture) utilizando getElementById;
    - favicon: pega o elemento html link (no header e que está com o id fav);
    - data: recebe new Date() que retorna um objeto de data com a data e hora atuais;
    - hora: recebe a hora(método getHours) da data(var data) atual.
3. fiz uma modificação na msg concatenando com a hora.
4. adicionei um if para todas as ocasiões referentes as horas (simplificando: caso seja tal hora, faça tal coisa):
    - condições 1,2,4,5: se a hora(horário atual) for maior ou igual a x E a hora for menor ou igual a y, mudar a mensagem, a imagem, o favicon e o background do site de acordo com a hora respectiva;
    - condição 3: se a hora (horário atual) for igual a x OU igual a y, mudar a mensagem, a imagem, o favicon e o background do site de acordo com a hora respectiva.
___

// No geral, esse código atualiza dinamicamente o conteúdo e o estilo de determinados elementos HTML com base na hora atual do dia.
___

obs: texto explicativo de como funciona o código para fins de estudos.