[Voltar Para o README](../README.md/#documentação)

# Regras de Negócio

## Introdução

Este documento descreve as regras de negócio do [CodeFlex](../index.html). As regras de negócio definem condições, restrições e critérios que determinam o funcionamento da plataforma, complementando os requisitos funcionais.

---

# Regras de Negócio

<details>
<summary>Usuários</summary>

### RN01 - Nome de usuário único

Cada usuário deverá possuir um nome de usuário único.

### RN02 - E-mail único

Cada endereço de e-mail poderá estar vinculado a apenas uma conta.

### RN03 - País

O país selecionado pelo usuário será utilizado para estatísticas da plataforma e para o ranking nacional.

### RN04 - Idioma

A plataforma deverá utilizar o idioma selecionado pelo usuário sempre que houver tradução disponível.

### RN05 - Exclusão de conta

A exclusão da conta será permanente e removerá todas as informações associadas ao usuário, respeitando as limitações da infraestrutura utilizada.

</details>

<details>
<summary>Cursos</summary>

### RN06 - Gratuidade

Todos os cursos disponibilizados pela plataforma deverão ser totalmente gratuitos.

### RN07 - Acesso

Não haverá limite para a quantidade de cursos que um usuário poderá iniciar simultaneamente.

### RN08 - Organização

Todo curso deverá possuir pelo menos um módulo.

### RN09 - Avaliações

Todo módulo deverá possuir uma avaliação própria.

### RN10 - Avaliação final

Todo curso deverá possuir uma avaliação final.

### RN11 - Conclusão de aula

Uma aula será considerada concluída quando o usuário acessar a aula seguinte.

</details>

<details>
<summary>Certificados</summary>

### RN12 - Emissão

O certificado somente será emitido quando o usuário concluir integralmente o curso.

### RN13 - Nota mínima

O certificado somente poderá ser emitido caso o usuário obtenha nota final igual ou superior a **75%**.

### RN14 - Cursos em destaque

Somente cursos concluídos e certificados poderão ser fixados no perfil do usuário.

### RN15 - Limite de destaque

Cada usuário poderá fixar no máximo **3 (três)** cursos em seu perfil.

### RN16 - Validação

Todo certificado deverá possuir um identificador único para validação de sua autenticidade.

</details>

<details>
<summary>Gamificação</summary>

### RN17 - XP

O usuário receberá XP ao concluir atividades da plataforma.

### RN18 - Sequência diária

A sequência diária será incrementada sempre que o usuário realizar atividades em dias consecutivos.

### RN19 - Conquistas

As conquistas serão desbloqueadas automaticamente quando seus respectivos objetivos forem alcançados.

### RN20 - Ranking Global

O ranking global será ordenado pela quantidade total de XP.

### RN21 - Ranking Nacional

O ranking nacional utilizará como referência o país selecionado pelo usuário.

</details>

<details>
<summary>CodeCoins</summary>

### RN22 - Moeda virtual

As **CodeCoins** constituem uma moeda virtual fictícia criada exclusivamente para utilização dentro da plataforma.

### RN23 - Obtenção

CodeCoins poderão ser obtidas pela conclusão de aulas, cursos, desafios e jogos educativos.

### RN24 - Utilização

CodeCoins poderão ser utilizadas para desbloquear dicas e soluções de exercícios.

### RN25 - Valor monetário

As CodeCoins **não possuem qualquer valor financeiro**, não representam criptomoedas, ativos digitais ou qualquer outro meio de pagamento.

### RN26 - Compra

A plataforma **não possuirá qualquer sistema de compra de CodeCoins utilizando dinheiro real**.

### RN27 - Comercialização

As CodeCoins não poderão ser vendidas, comercializadas, trocadas ou convertidas em dinheiro.

### RN28 - Transferência

As CodeCoins não poderão ser transferidas entre usuários.

</details>

<details>
<summary>Comunidade</summary>

### RN29 - Curtidas

Usuários poderão curtir cursos e aulas.

### RN30 - Comentários

A plataforma não possuirá sistema de comentários.

### RN31 - Fórum

A plataforma não possuirá fórum de discussão.

### RN32 - Feedback

Usuários poderão enviar feedback relacionado às aulas, módulos e cursos.

### RN33 - Denúncias

Usuários poderão denunciar conteúdos considerados inadequados.

</details>

<details>
<summary>Compartilhamento</summary>

### RN34 - Aulas

Todas as aulas poderão ser compartilhadas por meio de um link permanente.

### RN35 - Certificados

Todo certificado poderá ser compartilhado por meio de um link público.

</details>

<details>
<summary>Administração</summary>

### RN36 - Gerenciamento

Somente administradores poderão criar, editar ou remover cursos.

### RN37 - Conteúdo

Somente administradores poderão criar, editar ou remover módulos, aulas, avaliações e demais conteúdos.

### RN38 - Publicação

Cursos somente poderão ser disponibilizados aos usuários após serem publicados por um administrador.

</details>

<details>
<summary>Estatísticas</summary>

### RN39 - Estatísticas públicas

As estatísticas públicas poderão utilizar informações como país, XP, conquistas, cursos concluídos e certificados obtidos.

### RN40 - Privacidade

Informações pessoais, como e-mail e senha, nunca serão exibidas publicamente nem utilizadas em estatísticas.

</details>

---

## Estatísticas

| Tipo | Quantidade |
|------|-----------:|
| Regras de Negócio | 40 |