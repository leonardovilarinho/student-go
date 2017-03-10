# Uso básico do Git

Tendo o Git instalado na máquina, faça o Fork desse repositório, clicando em Fork no canto superior direito.

1. no seu Fork `seunome/student-go`, selecione o botão clone, e copie o link que irá aparecer.
2. no prompt execute `git clone link-do-fork`, ao terminar criará uma nova pasta com os arquivos do fork.
3. faça edições que quiser, após isso, execute `git status` para ver os arquivos modificados.
4. use esses comandos para adicionar as alterações e envia-las para o GitHub:

```
git add . // adiciona todos arquibos modificados
git commit -m "mensagem da mudança" // registra que você fez uma mudança no código
git push // envia a mudança para o github (requer internet)
```

5. no link do seu fork do github, clique no botão Pull Request para enviar a alteração para o repositório `leonardovilarinho/student-go`
