# 🧠 naldodj-totvs-web-duplicate-tab-blocker

Evite abrir múltiplas abas do **TOTVS SmartClient Web** durante depurações no **VSCode**. Este script Tampermonkey detecta abas duplicadas da interface web do Protheus (em `localhost:1234`) e bloqueia a aba mais antiga, evitando múltiplas sessões simultâneas — que são abertas automaticamente a cada nova depuração.

---

## 📌 Contexto

Durante o desenvolvimento e depuração com o SmartClient Web no **VSCode**, é comum que cada execução do debug abra uma nova aba no navegador. Isso gera múltiplas sessões ativas e pode causar conflitos, lentidão e confusão.

O script atua como um **detector e bloqueador de abas duplicadas**, mantendo ativa apenas a última aba aberta do SmartClient Web.

---

## 🛠️ Tecnologias Utilizadas

- JavaScript
- Tampermonkey (extensão para automação no navegador)

---

## 🚀 Como Funciona

1. Toda vez que uma aba é aberta, ela registra sua identificação no `localStorage`.
2. Caso outra aba seja aberta, o script compara os IDs.
3. Se detectar uma aba diferente da original, **exibe um aviso e desativa automaticamente a aba mais antiga**, redirecionando-a após 10 segundos.

---

## 🧪 Requisitos

- Navegador com [Tampermonkey](https://www.tampermonkey.net/) instalado
- Acesso local ao Protheus Web via `http://localhost:1234/webapp/`

---

## 📥 Instalação

1. Instale a extensão **Tampermonkey** no seu navegador (Chrome, Edge, etc).
2. Clique no ícone do Tampermonkey > **Create a new script**
3. Cole o conteúdo do script abaixo:

🛡️ [Clique aqui para obter o script](https://github.com/naldodj/naldodj-totvs-web-duplicate-tab-blocker/blob/main/naldodj-totvs-web-duplicate-tab-blocker.js)

4. Salve o script.
5. Recarregue a aba do Protheus Web (`localhost:1234/webapp`).

---

## 📷 Demonstração

> 🧪 **Exemplo**: Mostrando o comportamento ao abrir duas abas do TOTVS Web.

![image](https://github.com/user-attachments/assets/85ca199c-eb28-4e35-8b92-210c2481d857)
![image](https://github.com/user-attachments/assets/b52631a3-e0fd-4d74-9b14-770b38ad1238)
![image](https://github.com/user-attachments/assets/ea40730d-5f9c-4d9e-b39c-2604caaf619e)
![image](https://github.com/user-attachments/assets/dadd3fc5-9a0c-43cf-a36d-6b0a60110cf8)

---

## ⚙️ Configuração no VSCode

No `launch.json`, mantenha a configuração padrão para depuração:

```json
"configurations": [
    {
        "type": "totvs_language_web_debug",
        "request": "launch",
        "name": "Games - TOTVS Smart Client Web Debug",
        "program": "${command:AskForProgramName}",
        "isMultiSession": true,
        "enableTableSync": true,
        "suppressMultipleSessionWarning": true,
        "enableMultiThread": false,
        "webNavigator": "edge",
        "cwb": "${workspaceFolder}"
    }
],
```

> ✅ Com o script ativo, mesmo que o VSCode abra novas abas durante o debug, apenas a última continuará funcionando.

---

## 🤝 Contribuição

Sinta-se à vontade para abrir issues ou pull requests com melhorias, sugestões ou correções.

---

## 🧑‍💻 Autor

* **Naldo DJ** – [@naldodj](https://github.com/naldodj)

---

## 📄 Licença

MIT License © Naldo

---

## 📌 Palavras-chave

`totvs` `tampermonkey` `vscode` `debug` `webapp` `protheus` `multi-tab` `blocker` `smartclient`
