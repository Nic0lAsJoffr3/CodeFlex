[Voltar Para o README](../README.md/#documentação)

# Fluxo de Navegação

## Introdução

Este documento descreve os principais fluxos de navegação do **CodeFlex**, representando os caminhos que os usuários podem seguir dentro da plataforma.

Os fluxos têm como objetivo facilitar o entendimento da experiência do usuário e auxiliar no desenvolvimento das interfaces do sistema.

---

# Fluxo Geral da Plataforma

```mermaid
flowchart TD

Inicio([Acessar CodeFlex])

Inicio --> Home

Home --> Cadastro
Home --> Login
Home --> Cursos

Cadastro --> Perfil
Login --> Perfil

Perfil --> Configuracoes
Perfil --> Cursos

Cursos --> Pesquisa
Cursos --> Filtros
Cursos --> Curso

Curso --> Modulos

Modulos --> Aula

Aula --> Conteudo

Conteudo --> ProximaAula
Conteudo --> Exercicio

Exercicio --> Resultado

Resultado --> Modulo

Modulo --> Certificado
```

---

# Fluxo de Cadastro e Acesso

```mermaid
flowchart TD

Inicio([Visitante])

Inicio --> Cadastro

Cadastro --> Validacao

Validacao -->|Dados válidos| ContaCriada

Validacao -->|Dados inválidos| Erro

ContaCriada --> Login

Login --> Perfil
```

---

# Fluxo de Aprendizado

```mermaid
flowchart TD

Usuario([Usuário])

Usuario --> EscolherCurso

EscolherCurso --> Matricular

Matricular --> Modulo

Modulo --> Aula

Aula --> Conteudo

Conteudo --> ProximaAula

Conteudo --> Exercicio

Exercicio --> Avaliacao

Avaliacao -->|Aprovado| ProximoModulo

Avaliacao -->|Reprovado| Revisao

ProximoModulo --> Modulo

ProximoModulo --> CursoFinalizado
```

---

# Fluxo de Certificação

```mermaid
flowchart TD

Inicio([Curso])

Inicio --> VerificarConclusao

VerificarConclusao --> Nota

Nota -->|Maior ou igual a 75%| Certificado

Nota -->|Menor que 75%| RefazerAvaliacao

Certificado --> Download

Certificado --> Compartilhar
```

---

# Fluxo de Gamificação

```mermaid
flowchart TD

Atividade([Realizar atividade])

Atividade --> GanharXP

Atividade --> GanharCodeCoins

GanharXP --> Nivel

GanharXP --> Ranking

GanharCodeCoins --> LojaInterna

LojaInterna --> Dicas

LojaInterna --> Solucoes

Nivel --> Conquistas
```

---

# Fluxo de Perfil

```mermaid
flowchart TD

Perfil([Perfil])

Perfil --> EditarDados

EditarDados --> NomeUsuario

EditarDados --> Avatar

EditarDados --> Idioma

EditarDados --> Pais

EditarDados --> Tema

Perfil --> CursosDestaque

CursosDestaque --> Certificados
```

---

# Fluxo Administrativo

```mermaid
flowchart TD

Admin([Administrador])

Admin --> Painel

Painel --> Cursos

Cursos --> CriarCurso

Cursos --> EditarCurso

Cursos --> RemoverCurso

CriarCurso --> Modulos

Modulos --> CriarModulo

CriarModulo --> Aulas

Aulas --> CriarAula

CriarAula --> Avaliacoes

Avaliacoes --> PublicarCurso
```

---

# Navegação Principal

```mermaid
flowchart LR

Inicio([Página Inicial])

Inicio --> Cursos
Inicio --> Login
Inicio --> Cadastro

Login --> Dashboard

Dashboard --> Perfil
Dashboard --> Cursos
Dashboard --> Ranking
Dashboard --> Conquistas

Cursos --> Curso
Curso --> Modulo
Modulo --> Aula

Aula --> Exercicios
Exercicios --> Certificado
```

---

# Regras de Navegação

<details>
<summary>Usuário não autenticado</summary>

- Pode visualizar a página inicial.
- Pode visualizar cursos disponíveis.
- Pode criar uma conta.
- Pode realizar login.

</details>

<details>
<summary>Usuário autenticado</summary>

- Pode iniciar cursos.
- Pode acompanhar progresso.
- Pode realizar avaliações.
- Pode ganhar XP e CodeCoins.
- Pode receber certificados.
- Pode editar seu perfil.

</details>

<details>
<summary>Administrador</summary>

- Possui acesso ao painel administrativo.
- Pode gerenciar cursos.
- Pode gerenciar módulos.
- Pode gerenciar aulas.
- Pode gerenciar avaliações.

</details>

---

## Estatísticas

| Tipo | Quantidade |
|------|-----------:|
| Fluxos principais | 6 |
| Diagramas Mermaid | 7 |