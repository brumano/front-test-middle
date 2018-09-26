# Teórico

1\) Qual a diferença do operador `==` para o operador `===` em JavaScript?

    `   
        Enquanto "==" faz comparações entre valores, o operador "===" compara os valores levando em consideração o tipo.
        Essa mesma regra também funciona para comandos de negação "!=" e "!==".

        
        
    `



1.1) Dê 2 exemplos de quando os operadores produziriam resultados diferentes

```js
        var num = 1;

        if (num == "1") // true
        if (num === 1) // true
        if (num === "1") // false
        
        var notNum = 0;

        if( notNum == "" ) // true
        if( notNum == "0" ) // true
        if( notNum == 0 ) // true

		if( notNum === "" ) // false
        if( notNum === "0" ) // false
        if( notNum === 0 ) // true

        if( notNum != "" ) // false
        if( notNum != "0" ) // false
        if( notNum != 0 ) // false

		if( notNum !== "" ) // true
        if( notNum !== "0" ) // true
        if( notNum !== 0 ) // false   

```

---

2\) Recursos/Práticas:

2.1) Qual recurso do javascript é mais recomendado para tratar processamentos asíncronos? Justifique.



    `  
        O mais recomendado eu não sei ao certo.
        Para requisições em serviços, eu gosto de trabalhar com Funções assíncronas ( async function adicionar1(x) {} ) escrevendo promisses em cadeias;

    `




2.2) Quais os recursos mais recomendados para incluir ícones em um site? Justifique.


    `  
        Eu não entendi muito bem a pergunta, vou tentar explicar o que sei sobre carregamento de imagens:
        - para favicons, utilizamos a tag <link/> informando o tipo da imagem e o caminho de carregamento (href);
        - <img/> para imagens e SVGs que poderão ser imprimidas; 
        - background-images, utilizando sprites e posicionando  na página atráves do eixo X e Y;
        - SVGs, podemos fazer de várias formas: 
            - como <img/>
            - Inline (com o código imbutido no html) - Ideal para trabalhar 
            - Bg-imgs com Sprites

        De todas as várias formas que citei acima, eu prefiro trabalhar com SVGs. Embora gere um pouco mais de trabalho, o ganho no tamanho dos arquivos finais é superior a qualquer outra forma. O ideal é trabalhar com bgs, porém isso pode ser relativo ao Layout proposto pela aplicação, principalmente se houver transições de cores e animações.

    `


2.3) Qual recurso dos browsers é usado para carregar dados/conteúdos dinâmicos sem recarregar a página? Existem alternativas?


    `  
        Métodos através de requisições AJAX do próprio JS.

        O Angular tem sua própria formula de fazer requisições - $http; Eu utilizo muito o Axious no ReactJs;

        Existem também requisições feitas através de através de Websockets como socket.io, más eu nunca cheguei a usar.

    `


2.4) Qual recurso angular pode ser usado para aumentar a performance de campos que realizam algum processamento ao alterar o texto?


    `   
        Eu costumo utilizar o ng-bind ao invés de Brackets ({{}}). Essa diretiva é mais inteligente e só muda uma variável quando houver, de fato, uma alteração no seu valor, enquanto a primeira sempre faz atualizações.

    `



2.5) Por quê é importante diminuir a quantidade de watchers do angular em uma página e como fazer?


    `
        Os Watchers criam uma espécie de looping nas diretivas e componentes, que podem ficar ouvindo e esperando resultado o tempo inteiro. Isso, normalmente, quebram os serviços que podem nem voltar a funcionar sem o usuário dar um reload na página;

        Pode-se passar novos "valores" como parametros através de um Link e, ao gerar uma condição para saber se o valor passado é diferente do antigo, poderá dar ínicio ao funcionamento do componente.

    `


2.6) Por quê é importante evitar escopos isolados em diretivas do angular e como fazer?


    `
        Não sei ao certo, mas acredito que seja pelo fato dos escopos criarem um tipo de cópia do parametro passado. 
        Para que isso não aconteça, utilizamos a definição scope: true ao gerar a diretiva
    
    `


---

3\) CSS:

3.1) Por quê é importante não fazer seletores por tags html?


    `
        Quando definimos um estilo para um determinado seletor, criamos uma regra em todos os elementos no DOM. Acredito que afetar toda uma estrutura de uma página, só deva acontecer se existir uma necessidade técnica especifica do projeto.

    `


3.2) Para criar um site que desse a opção do usuário escolher um tema, qual tecnogia/recurso de css você utilizaria?


    `
        Eu utilizaria o SASS com variavéis, mixins, uma arquitetura que me desse a possibilidade de organização de layout (smacss por exemplo) e uma boa organização dos códigos.

    `


3.3) Quais práticas/recursos devem ser usados para criar sites responsivo?


    `   
        Depedendo do projeto, a utilização de LIBS e FW com extrutura para sites e aplicações responsivas (Bootstrap/Foundation).
        Na "unha": utilização de media queries, Media Types, unidades de medidas dinamicas e adaptaveis(REM, VW, %) e o Sass para deixar tudo mais dinamico.
    `


3.4) Quais metodologias CSS você costuma seguir? Explique um pouco delas.


    `
        Eu uso o SMACSS, OOCSS e BEM;
        - SMACSS pela organização de arquivos, arquitetura, criação de estados e layouts específicos e customisavéis.
        - OOCSS pela possibilidade de escrever menos e reaproveitar classes;
        - BEM pela organização, nomeclatura proposta que facilita o entendimento das classes e estilos;

        Como estou estudando React, eu acabei utilizado mais o OOCSS e BEM e menos o SMACSS por não sentir tanta necessidade deste último. 
    `




---

4\) Análise de código

4.1) Quanto tempo vai demorar para o código a seguir imprimir "finished"? Justifique. (Levando em consideração que `somePromise()` vai retornar uma Promise resolvida)
```js
function doSomething() {
    return new Promise(resolve => {
        setTimeout(resolve, 1000)
    })
}

function doSomethingElse() {
    return new Promise(resolve => {
        setTimeout(resolve, 2000)
    })
}

somePromise()
    .then(() => {
        doSomething()
        doSomethingElse()
    })
    .then(() => {
        console.log('finished')
    })

```

[Resposta]

[Justificativa]

4.2) O que o código a seguir imprime? (Levando em consideração que `somePromise()` vai retornar uma Promise resolvida)
```js
somePromise()
    .then(() => {
        throw new Error('uh oh!')
    }, err => {
        console.log(err.message)
    })
    .then(() => {
        console.log('ok now!')
    })
```

[Resposta]

[Justificativa]

4.3\) Quais as vantagens/desvantagens da segunda função em relação a primeira?
```js
function doSomething(options) {
    return fetch(options.url).then(r => r.json())
}

async function doSomethingAsync(options) {
    return fetch(options.url).then(r => r.json())
}
```

[Resposta]

---

5\) Quais as vantagens de usar ES modules em vez de usar commonjs?

[Resposta]

---

6\) Cite as principais diferenças entre um componente e uma diretiva no AngularJS.

[Resposta]
