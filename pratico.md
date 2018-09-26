# Prático

1\) Adicione o método `.last()` na classe `Array`, que retornará o último item do array, ou `undefined` caso o array estiver vazio

```js
// Resposta


// Teste/Exemplos
const array1 = [1,2,3,4,5,6,7,8,9]
console.log(array1.last()) //9

const array2 = []
console.log(array2.last()) //undefined
```
```
    Array.prototype.last = function() {
	    if(!this.length) return undefined;
	    else return this[this.length-1];
    }

    const array1 = [1,2,3,4,5,6,7,8,9]
    console.log(array1.last()) //9

    const array2 = []
    console.log(array2.last()) //undefined

```
---

2\) Melhore a função a seguir:

```js
function getTransactions() {
    return $q((resolve, reject) => {
        $http.get(BASE_URL + '/api/transacoes')
            .then(response => {
                if (!response.data.error) {
                    const transactions = response.data

                    var _transactions = []

                    for (var i in transactions) {
                        if (transactions[i].realizada)  {
                            _transactions.push({
                                id: transactions[i].id,
                                value: transactions[i].valor,
                                type: transactions[i].valor < 0 ? 'transference' : 'deposit',
                            })
                        }
                    }

                    resolve(_transactions)
                } else {
                    reject(response.data.error)
                }
            })
            .catch(e => reject(e))
    })
}
```

```js
 ... 
                if (!response.data.error) {
                    const transactions = response.data

                    var _transactions = []

                    var _transactions = transactions.filter( function( transaction ) {
                            return transaction.realizada;
                        } ).map(function(transMap) {
    						return {
                                id: transMap.id,
                                value:transMap.valor,
                                type: transMap.valor < 0 ? 'transference' : 'deposit',
                            };
						});

                    resolve(_transactions)
                }
```

---

3\) Identifique problemas nos trechos de html/angular a seguir e corrija:

3.1)
```html
<img src="{{item.img}}">
```

        Caso o item não tenha sido carregado, a imagem ira gerar um erro no Angular.

```html
    <img ng-if="item" src="{{item.img}}">
```

3.2)
```html
...
<body ng-controller="PageCtrl">
    <h1>{{page.mainTitle}}</h1>
    ...
</body>
```

        Acredito que o problema a falta do ng-app, o uso do brackets ao invés do bind e a falta do ng-view.

```html
        <html ng-app="Application">
            <body ng-controller="PageCtrl">
                <h1 ng-bind="page.mainTitle"></h1>
                <div ng-view></div>
            </body>
        </html>
```

3.3)
```html
...
<body ng-controller="NewsletterCtrl">
    <div class="box">
        <p>Cadastre-se na nossa news semanal!</p>
        <input ng-model="email" type="email">
        <button ng-click="email && registerNewsletter(email)">
            Cadastrar
        </button>
    </div>
    ...
</body>
```

[Problemas]

```html
<!-- correção -->
```

3.4)
```js
function HomeCtrl($scope) {
    $scope.foo = 'bar'
}

```

        Nãe é interessante passar todo o escopo como um paramêtro, o ideal é passar somente a váriavel ou realizar programações funcionais (eu prefiro esta segunda). 

```js
        function HomeCtrl(foo) {
            foo = 'bar'
        }

        ou 
        
        function HomeCtrl() {
            return 'bar'
        }
        $scope.foo = HomeCtrl()



```

---

4\) Na pasta [src](./src), crie uma aplicação web:

4.1) Buscar os dados do endpoint:
https://5ba412108da2f20014654cf8.mockapi.io/api/v1/flights

4.2) Implementar a listagem de voos (tela "My bookings"):

![Layout](https://mir-s3-cdn-cf.behance.net/project_modules/1400/f21c0250028109.58ced3cbd06b1.jpg)
