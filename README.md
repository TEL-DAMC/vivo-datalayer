# vivo-datalayer
Definições de camadas de dados para a Vivo Telefonica Brazil

# Instalação

1. Garanta que o [Git](https://git-scm.com/downloads) está instalado no seu computador.
2. Garanta também que o Node e o NPM estão instalados no seu computador. Se você usa o Windows, recomendo o [NVM Windows](https://github.com/coreybutler/nvm-windows).
3. Clone este repositório na sua máquina.
4. Dentro da pasta clonada execute o comando `npm install` para instalar os pacotes necessários.

# Utilização do editor
1. Execute o comando `npm start` para iniciar o servidor de edição e geração de arquivos na sua máquina.
2. Abra o endereço `http://localhost:3000/` no seu navegador.
3. Para abrir um arquivo da pasta `/csv`, digite seu nome no campoe e clique em `Carregar`. Para abrir o arquivo de exemplo, digite example.csv no campo de texto e clique em `Carregar`.
4. Para salvar um arquivo, clique em `Salvar`. O arquivo será salvo com o nome inserido no campo.
5. Para gerar o javascript com a camada de dados, clique em `Gerar Tags`. O arquivo será salvo com o mesmo nome do csv original, porém com a sua extensão alterada para '.new.js'.

# Tipos de eventos

As camadas de dados usam primariamente três tipos de eventos: `feature-step`, `feature-interaction` e `interface-message`. 

- `feature-step`: Deve ser disparado a cada passo do funil de um conjunto funcional.
- `feature-interaction`: deve ser disparado nas interações principais do funil.
- `interface-message`: deve ser disparado quando uma mensagem é exibida para o usuário.

A princípio, estes três tipos de eventos devem ser suficientes para cobrir 95% dos eventos que exigem mensuração nos ambientes.

## Estrutura básica

Todos os campos abaixo são obrigatórios. Quando um dos campos não for necessário ou não for possível completá-lo, o mesmo deve ser preenchido com `null`.

```js
dataLayer.push({
  event: string,
  feature: {
    name: string,
    type: string,
    step: {
      name: string,
      index: int,
      type: string,
      success: boolean
    }
  },
  interaction: {
    name: string,
    value: string
  }
})
```

### event:String

Tipo de evento

#### values

- `feature-step`
  - passo do funil de um conjunto funcional
- `feature-interaction`:
  - interações principais do funil
- `interface-message`
  - mensagem exibida para o usuário
  
### feature.name:String

Nome da funcionalidade, interação pontual ou funil com a qual o usuário esta interagindo.

#### values

Exemplos:
- `segunda-via`
- `troca-de-plano`
- `cta-main`

### feature.type:String

Identifica o tipo de funcionalidade. Pode ser um conjunto funcional, com em Meu Vivo é "Planos" ou pode ser uma categorização da funcionalidade, com em landing pages são os diversos tipos de "cta" e "content".

#### values

Exemplos:
- cta
- planos
- content

### step.name:String

Identifica o nome do passo no qual o usuário se encontra em determinada funcionalidade. O 'checkout' é um *step name* do funil de ecommerce, por exemplo. Funcionalidades que interrompem um fluxo e sejam opcionais, como um cadastro ou login, devem ser contabilizados como uma funcionalidade separada.

### step.index:Number

Identifica a ordem do passo atual, iniciando em 1. O primeiro passo é 1, o segundo é 2 e assim em diante.

### step.type:String

Identifica se o passo é inicial, intermediário ou final. Usualmente o único passo marcado como 'initial' será o de step.idex === 1, mas é possível que outros passos ainda não sejam considerados intermediários, podendo também ser marcados como 'initial'. O passo final do fluxo deve necessariamente ser marcado como completion, independentemente de haver sucesso na transação. O passo em que um compra é barrada pelo sistema anti-fraude, por exemplo, pode ser marcado como 'completion'.

#### values

- initial
- intermediary
- completion

### step.success:Boolean

Indica se um passo final foi realizado com sucesso. Uma compra finalizada deve ser marcada como 'true' quando houver sucesso na transação e como 'false' quando não houver, por exemplo.

### interaction.name:String

Indica o nome da interação do usuário. Caso a interação envolva uma opção, a propriedade interaction.value deve ser usada para complementar a informação.

### interaction.value:String

Indica a opção selecionada pelo usuário. Caso a interação não tenha opções, o valor pode ser definido como `null`.

# Exemplos

Os exemplos podem ser encontrados na pasta [/examples](/examples)