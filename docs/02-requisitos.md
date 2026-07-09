 [Voltar Para o README](../README.md/#documentação)
# Especificação de Requisitos

## Introdução

Este documento descreve os requisitos funcionais e não funcionais do [CodeFlex](../index.html).  
Os [requisitos funcionais](#requisitos-funcionais) representam as funcionalidades que deverão ser implementadas pela plataforma.  
Os [requisitos não funcionais](#requisitos-não-funcionais) definem características relacionadas ao desempenho, segurança, usabilidade e demais atributos de qualidade do sistema.

---
# Requisitos Funcionais

<details>
<summary>Autenticação</summary>

### RF01 - Cadastro de usuários

O sistema deverá permitir que novos usuários criem uma conta utilizando nome de usuário, e-mail e senha.

### RF02 - Login

O sistema deverá permitir que usuários autenticados realizem login utilizando e-mail e senha.

### RF03 - Recuperação de senha

O sistema deverá permitir que usuários recuperem suas senhas por meio do endereço de e-mail cadastrado.

### RF04 - Encerramento de sessão

O sistema deverá permitir que o usuário encerre sua sessão (logout).

</details>

<details>
<summary>Perfil</summary>

### RF05 - Foto de perfil

O sistema deverá permitir que o usuário escolha um ícone de perfil dentre uma coleção de avatares pré-definidos.

### RF06 - Nome de usuário

O sistema deverá permitir que o usuário altere seu nome de usuário.

### RF07 - Descrição

O sistema deverá permitir que o usuário adicione ou altere uma descrição em seu perfil.

### RF08 - Idioma

O sistema deverá permitir que o usuário selecione o idioma da plataforma.

### RF09 - País

O sistema deverá permitir que o usuário selecione seu país.

### RF10 - Estatísticas públicas

O sistema deverá exibir o país selecionado no perfil do usuário e utilizá-lo para estatísticas da plataforma.

### RF11 - Alteração de senha

O sistema deverá permitir que o usuário altere sua senha.

### RF12 - Alteração de e-mail

O sistema deverá permitir que o usuário altere seu endereço de e-mail.

### RF13 - Tema

O sistema deverá permitir que o usuário escolha entre os temas claro e escuro.

### RF14 - Cursos em destaque

O sistema deverá permitir que o usuário fixe até três cursos concluídos em seu perfil.

### RF15 - Restrição para destaque

O sistema deverá permitir destacar apenas cursos certificados com nota igual ou superior a 75%.

### RF16 - Exclusão de conta

O sistema deverá permitir que o usuário exclua permanentemente sua conta.

### RF17 - Continuação automática

O sistema deverá permitir que o usuário continue um curso a partir da última aula concluída.

</details>

<details>
<summary>Cursos</summary>

### RF18 - Catálogo

O sistema deverá exibir todos os cursos disponíveis.

### RF19 - Pesquisa

O sistema deverá permitir pesquisar cursos.

### RF20 - Filtros

O sistema deverá permitir filtrar cursos por categorias.

### RF21 - Curtidas

O sistema deverá permitir que usuários curtam cursos.

### RF22 - Acesso livre

O sistema deverá permitir que qualquer usuário matriculado acesse qualquer curso disponível.

### RF23 - Módulos

O sistema deverá organizar os cursos em módulos.

### RF24 - Conteúdos

O sistema deverá permitir que módulos possuam diferentes tipos de conteúdo.

### RF25 - Compartilhamento

O sistema deverá permitir gerar um link compartilhável para qualquer aula.

### RF26 - Conclusão automática

O sistema deverá marcar uma aula como concluída quando o usuário acessar a próxima aula.

</details>

<details>
<summary>Avaliações</summary>

### RF27 - Exercícios

O sistema deverá disponibilizar exercícios ao final de cada módulo.

### RF28 - Prova final

O sistema deverá disponibilizar uma avaliação final ao término do curso.

### RF29 - Dicas

O sistema deverá permitir desbloquear dicas utilizando CodeCoins.

### RF30 - Soluções

O sistema deverá permitir desbloquear soluções utilizando CodeCoins.

### RF31 - Nota

O sistema deverá registrar a nota obtida pelo usuário em cada avaliação.

</details>

<details>
<summary>Gamificação</summary>

### RF32 - XP

O sistema deverá conceder pontos de experiência (XP) pela realização de atividades.

### RF33 - CodeCoins

O sistema deverá conceder CodeCoins ao concluir aulas.

### RF34 - Jogos educativos

O sistema deverá conceder CodeCoins pela participação em jogos educativos.

### RF35 - Conquistas

O sistema deverá desbloquear conquistas conforme objetivos forem atingidos.

### RF36 - Sequência diária

O sistema deverá registrar a sequência diária de estudos do usuário.

### RF37 - Ranking global

O sistema deverá disponibilizar um ranking global.

### RF38 - Ranking por país

O sistema deverá disponibilizar um ranking filtrado pelo país selecionado.

### RF39 - Níveis

O sistema deverá possuir níveis de progressão baseados na quantidade de XP obtida pelo usuário.

</details>

<details>
<summary>Certificados</summary>

### RF40 - Emissão

O sistema deverá emitir certificados para cursos concluídos.

### RF41 - Download

O sistema deverá permitir o download dos certificados.

### RF42 - Compartilhamento

O sistema deverá permitir compartilhar certificados por meio de um link.

### RF43 - Validação

Os certificados deverão possuir um identificador único para validação.

</details>

<details>
<summary>Comunidade</summary>

### RF44 - Curtidas

O sistema deverá permitir que usuários curtam aulas.

### RF45 - Feedback

O sistema deverá permitir o envio de feedback em cada aula e módulo.

### RF46 - Denúncia

O sistema deverá permitir o envio de denúncias relacionadas ao conteúdo.

</details>

<details>
<summary>Painel Administrativo</summary>

### RF47 - Criar cursos

O sistema deverá permitir que administradores criem cursos.

### RF48 - Editar cursos

O sistema deverá permitir que administradores editem cursos.

### RF49 - Remover cursos

O sistema deverá permitir que administradores removam cursos.

### RF50 - Criar módulos

O sistema deverá permitir que administradores criem módulos.

### RF51 - Editar módulos

O sistema deverá permitir que administradores editem módulos.

### RF52 - Remover módulos

O sistema deverá permitir que administradores removam módulos.

### RF53 - Criar aulas

O sistema deverá permitir que administradores criem aulas.

### RF54 - Editar aulas

O sistema deverá permitir que administradores editem aulas.

### RF55 - Remover aulas

O sistema deverá permitir que administradores removam aulas.

</details>

---
# Requisitos Não Funcionais

<details>
<summary>Usabilidade</summary>

### RNF01 - Interface intuitiva

A plataforma deverá apresentar uma interface simples e intuitiva para usuários iniciantes.

### RNF02 - Responsividade

A plataforma deverá funcionar corretamente em computadores, tablets e smartphones.

### RNF03 - Acessibilidade

A plataforma deverá seguir boas práticas de acessibilidade.

### RNF04 - Tema

A plataforma deverá oferecer suporte aos temas claro e escuro.

### RNF05 - Navegação

A navegação deverá ser consistente em todas as páginas da plataforma.

</details>

<details>
<summary>Desempenho</summary>

### RNF06 - Tempo de carregamento

As páginas deverão carregar em tempo adequado para conexões comuns.

### RNF07 - Otimização

Imagens e demais recursos deverão ser otimizados para reduzir o tempo de carregamento.

### RNF08 - Carregamento sob demanda

Conteúdos deverão ser carregados somente quando necessários, sempre que possível.

</details>

<details>
<summary>Compatibilidade</summary>

### RNF09 - Navegadores

A plataforma deverá ser compatível com as versões recentes dos principais navegadores.

### RNF10 - Sistemas Operacionais

A plataforma deverá funcionar corretamente nos principais sistemas operacionais modernos.

</details>

<details>
<summary>Segurança</summary>

### RNF11 - Senhas

As senhas deverão ser armazenadas utilizando algoritmos seguros de hash.

### RNF12 - Comunicação

A comunicação entre cliente e servidor deverá utilizar conexões seguras sempre que a infraestrutura utilizada oferecer suporte.

### RNF13 - Validação

Os dados enviados pelos usuários deverão ser validados antes de serem processados.

</details>

<details>
<summary>Banco de Dados</summary>

### RNF14 - Persistência

As informações dos usuários deverão permanecer armazenadas mesmo após o encerramento da sessão.

### RNF15 - Integridade

O banco de dados deverá preservar a integridade das informações armazenadas.

### RNF16 - Escalabilidade

A estrutura do banco deverá permitir a adição de novos cursos e funcionalidades.

</details>

<details>
<summary>Manutenibilidade</summary>

### RNF17 - Organização

O código deverá seguir um padrão de organização.

### RNF18 - Documentação

A documentação deverá permanecer atualizada durante o desenvolvimento.

### RNF19 - Modularização

O projeto deverá ser desenvolvido de forma modular.

</details>

<details>
<summary>Disponibilidade</summary>

### RNF20 - Disponibilidade

A plataforma deverá permanecer disponível sempre que os serviços de hospedagem utilizados estiverem operacionais.

### RNF21 - Recuperação

O sistema deverá tratar falhas inesperadas sem interromper completamente sua utilização.

</details>

<details>
<summary>Internacionalização</summary>

### RNF22 - Idiomas

A plataforma deverá permitir suporte a múltiplos idiomas.

### RNF23 - Localização

A plataforma deverá adaptar informações de idioma conforme a configuração escolhida pelo usuário.

</details>

<details>
<summary>Escalabilidade</summary>

### RNF24 - Expansão

A arquitetura deverá permitir a adição de novos cursos sem necessidade de alterações estruturais significativas.

### RNF25 - Novos módulos

A plataforma deverá permitir a criação de novos módulos de conteúdo de forma independente.

</details>

<details>
<summary>Qualidade</summary>

### RNF26 - Reutilização

Sempre que possível, componentes e funções deverão ser reutilizados.

### RNF27 - Padronização

O projeto deverá seguir padrões consistentes de nomenclatura e estrutura.

### RNF28 - Versionamento

Todo o código-fonte deverá ser versionado utilizando Git.

</details>


## Estatísticas

| Tipo | Quantidade |
|------|-----------:|
| Requisitos Funcionais | 55 |
| Requisitos Não Funcionais | 28 |
| Total | 83 |