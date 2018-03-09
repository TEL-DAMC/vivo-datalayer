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
