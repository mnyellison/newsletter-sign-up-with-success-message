# Frontend Mentor - Solução de Formulário de Inscrição de Newsletter com Mensagem de Sucesso (Newsletter Sign-Up)

Esta é a minha solução para o desafio "Newsletter sign-up form with success message" do Frontend Mentor. Os desafios do Frontend Mentor ajudam você a aprimorar suas habilidades de codificação construindo projetos realistas.

## Visão Geral

### O Desafio

Os usuários devem ser capazes de:
- Adicionar seu e-mail e enviar o formulário.
- Visualizar uma mensagem de sucesso contendo o e-mail cadastrado após o envio correto do formulário.
- Visualizar mensagens de erro e validação caso:
  - O campo de e-mail seja deixado em branco.
  - O endereço de e-mail inserido não esteja no formato correto.
- Visualizar o layout ideal para a interface dependendo do tamanho da tela do seu dispositivo (responsividade completa).
- Ver estados de hover (passar o mouse) e foco em todos os elementos interativos da página.

### Captura de Tela

![](/assets/images/screenshot.jpg)

### Links

- **Código no GitHub:** [Visualizar Repositório](https://github.com/mnyellison/newsletter-sign-up)
- **Site Online (Live Preview):** [Acessar Projeto](https://newsletter-sign-up-phi.vercel.app/)

---

## Meu Processo

### Tecnologias Utilizadas

- HTML5 Semântico
- Variáveis CSS (Custom Properties)
- Flexbox
- Fluxo de desenvolvimento Mobile-first
- Vanilla JavaScript (Manipulação de DOM e eventos)

---

### O que eu aprendi neste projeto

Durante este projeto, aprimorei minhas habilidades em arquitetura de CSS, práticas de design responsivo e separação de lógica no JavaScript.

1. **Texto Responsivo e Cobertura de Imagem:** Aprendi a lidar melhor com as mudanças bruscas de layouts horizontais e verticais entre dispositivos móveis e desktops. O uso de `object-fit: cover` garantiu que a imagem do card se adaptasse perfeitamente ao espaço disponível sem perder sua proporção original.

2. **Internacionalização e Alturas Flexíveis:** Enfrentei um desafio importante em relação à expansão de textos (por exemplo, quando o usuário traduz a página). Em vez de usar alturas fixas e rígidas (como `height: 100vh` ou `height: 450px`), utilizei abordagens fluídas para que os blocos de conteúdo e modais cresçam naturalmente caso a quantidade de texto mude.

```css
.modal-success.active {
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
}
```

3. **Código Limpo e Gerenciamento de Eventos no JS:** Refatorei meu código JavaScript para aplicar o Princípio de Responsabilidade Única. Separei as atualizações visuais do DOM em funções menores e bem descritivas (`showSuccess`, `showError`, `clearError`) e as associei a ouvintes de eventos modernos e de alta resposta como `"input"`.

```javascript
form.addEventListener("submit", function (event) {
  event.preventDefault();

  const email = inputEmail.value.trim();
  const isValid = validateEmail(email);

  if (isValid) {
    showSuccess(email);
  } else {
    showError();
  }
});
```

---

## Próximos passos

Nos próximos projetos, pretendo continuar focando em:

- **Arquitetura CSS:** Refinar a divisão de pastas de estilos (como compreender melhor quando modularizar códigos em `/components` vs `/layouts`).
- **Código Limpo (Clean Code):** Continuar praticando a modularização e escrita de funções puras no JavaScript, facilitando a legibilidade e testes de código.
- **Acessibilidade (a11y):** Melhorar o controle de foco de teclado, semântica para leitores de tela e a comunicação acessível de mensagens de erros no formulário.

---

## Colaboração com IA (Gemini)

Colaborei com o Gemini como um programador parceiro de apoio para lapidar a arquitetura deste projeto.

- **Como utilizei:** Em vez de pedir por soluções prontas ou respostas instantâneas, utilizei o modelo para repensar minha lógica quando o formulário estava aceitando valores inválidos. Ele guiou meus pensamentos para estruturar retornos de funções de forma limpa e separar as responsabilidades dos eventos.
- **O que funcionou bem:** Esse modelo de aprendizagem ativa me ajudou a identificar e corrigir meus próprios bugs (como mover a escuta do clique de fechar o modal para fora do escopo de envio do formulário, e substituir o evento de `keypress` para o evento de `input` para um feedback visual muito mais fluido).

---

## Author

- Frontend Mentor - [@mnyellison](https://www.frontendmentor.io/profile/mnyellison)
- GitHub - [@mnyellison](https://github.com/mnyellison)
