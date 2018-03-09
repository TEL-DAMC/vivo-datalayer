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

### feature.type


# Exemplos

Os exemplos podem ser encontrados na pasta [/examples](/examples)