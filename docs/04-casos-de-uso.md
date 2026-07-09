[Voltar Para o README](../README.md/#documentação)

# Casos de Uso

## Introdução

Este documento descreve os casos de uso do **CodeFlex**, apresentando as principais interações entre os usuários e a plataforma.

---

# Atores

- Visitante
- Usuário
- Administrador

---

# Casos de Uso

<details>
<summary>Visitante</summary>

### UC01 - Criar conta

Permite que um visitante realize seu cadastro na plataforma.

### UC02 - Fazer login

Permite que um usuário autenticado acesse sua conta.

### UC03 - Recuperar senha

Permite recuperar o acesso à conta utilizando o e-mail cadastrado.

### UC04 - Visualizar página inicial

Permite conhecer a plataforma antes de criar uma conta.

</details>

<details>
<summary>Usuário</summary>

### UC05 - Editar perfil

Permite alterar informações pessoais, avatar, idioma e tema.

### UC06 - Pesquisar cursos

Permite localizar cursos por nome ou categoria.

### UC07 - Iniciar curso

Permite iniciar qualquer curso disponível.

### UC08 - Continuar curso

Permite continuar um curso a partir da última aula concluída.

### UC09 - Assistir aula

Permite visualizar o conteúdo de uma aula.

### UC10 - Compartilhar aula

Permite gerar um link para compartilhar uma aula.

### UC11 - Realizar avaliação

Permite responder aos exercícios de um módulo.

### UC12 - Utilizar dicas

Permite desbloquear dicas utilizando CodeCoins.

### UC13 - Utilizar soluções

Permite desbloquear soluções utilizando CodeCoins.

### UC14 - Obter XP

Permite ganhar experiência ao concluir atividades.

### UC15 - Obter CodeCoins

Permite receber CodeCoins ao concluir atividades.

### UC16 - Desbloquear conquistas

Permite desbloquear conquistas automaticamente.

### UC17 - Visualizar ranking

Permite consultar os rankings global e nacional.

### UC18 - Emitir certificado

Permite emitir um certificado após concluir um curso.

### UC19 - Compartilhar certificado

Permite compartilhar um certificado por meio de um link.

### UC20 - Destacar certificados

Permite selecionar até três certificados para exibição no perfil.

### UC21 - Curtir aula

Permite curtir uma aula.

### UC22 - Curtir curso

Permite curtir um curso.

### UC23 - Enviar feedback

Permite enviar sugestões ou relatar problemas.

### UC24 - Denunciar conteúdo

Permite denunciar conteúdos inadequados.

### UC25 - Excluir conta

Permite remover permanentemente sua conta.

</details>

<details>
<summary>Administrador</summary>

### UC26 - Criar curso

Permite criar um novo curso.

### UC27 - Editar curso

Permite alterar informações de um curso.

### UC28 - Remover curso

Permite excluir um curso.

### UC29 - Criar módulo

Permite adicionar módulos.

### UC30 - Editar módulo

Permite editar módulos existentes.

### UC31 - Remover módulo

Permite remover módulos.

### UC32 - Criar aula

Permite adicionar novas aulas.

### UC33 - Editar aula

Permite editar aulas existentes.

### UC34 - Remover aula

Permite remover aulas.

### UC35 - Criar avaliação

Permite criar avaliações.

### UC36 - Editar avaliação

Permite editar avaliações.

### UC37 - Remover avaliação

Permite remover avaliações.

### UC38 - Gerenciar usuários

Permite administrar contas de usuários.

### UC39 - Publicar curso

Permite disponibilizar um curso aos usuários.

### UC40 - Visualizar estatísticas

Permite visualizar estatísticas gerais da plataforma.

</details>

---

# Relacionamento entre Atores e Casos de Uso

| Ator | Casos de Uso |
|------|--------------|
| Visitante | UC01 - UC04 |
| Usuário | UC05 - UC25 |
| Administrador | UC26 - UC40 |

---

## Estatísticas

| Tipo | Quantidade |
|------|-----------:|
| Atores | 3 |
| Casos de Uso | 40 |