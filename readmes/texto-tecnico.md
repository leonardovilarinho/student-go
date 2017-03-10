Descrição do desenvolvimento do Student Go
==========================================

Esse projeto visa a construção de um software que age como um questionário, ao
entrar nele, o aluno responde algumas perguntas e no seu fim, é exibido um
resultado que mostra o perfil de aluno que a pessoa mais se adapta.

Foi escolhido o framework Vue.js para se trabalhar, trata-se de algo
progressivo, ou seja com possibilidade de crescer e reusar, esse foi
desenvolvido pelo japonês Evan You, atualmente apesar de ser um projeto pessoal,
vem ganhando notoriedade e se equiparando com gigantes, como o Angular, da
Google, e React, do Facebook.

Essa biblioteca trabalha com aplicações HTML, CSS e JavaScript, logo permite que
possamos usar outras ferramentas, para que com o mesmo código criemos aplicações
para web, desktop e mobile.

Em uma explicação resumida, o Vue.Js é responsável por criar o código da
aplicação web, e iremos usar o Electron-vue para pegar esse código e criar uma
aplicação desktop com o mesmo.

Será usado a base de TDD para abranger uma base maior de testabilidade
automática do sistema, pois ao criar os testes antes mesmo do código, garantimos
que cerca de 90% do código será testado, assim ficando longe do erro, além
disso, a prática do TDD é associada ao SOLID, que permite identificar falha na
qualidade do código, logo teremos um produto de qualidade.

A produtividade é algo que também deve ser levada em consideração, com testes de
unidades e testes de sistemas providos pelo Avoriaz, uma biblioteca de testes
desenvolvida para o Vue.js, assim teremos menos tempo testando manualmente o
software diminuindo o tempo de teste e aumentando o de codificação.

Usamos o GitHub para armazenar e compartilhar o código, a documentação e
planejamento com toda a equipe, tornando assim o projeto opensource, quando
colocado em produção, será hospedado pelo GitHub sites, que provê uma hospedagem
de qualidade e gratuita, deixando o projeto no ar por um tempo ilimitado,
garantindo o acesso em longa data.

Como resultado temos um sistema bem definido e separado, onde temos um fluxo de
dados.

1.  Usuário acessa o site e vê uma introdução sobre o que seja o questionário,
    caso já tenha feito o teste, é informado seu último resultado na tela.

2.  Ao clicar no botão de início, são informadas perguntas uma a uma natela,
    cada uma tendo três alternativas.

3.  Após responder todas questões, será exibida uma tela onde poderá ver seu
    resultado com um botão de refazer esse teste.
