# Histórico de versões — Barbearia Carmo

O número segue o padrão de versionamento semântico **MAIOR.MENOR.CORREÇÃO**.
Ao publicar, atualize `VERSAO` em `js/app.js`, `CACHE` em `sw.js`, escreva aqui o que mudou e marque o commit com uma tag (ex.: `v1.0.0`).

---

## 1.3.2 — 23/10/2026 **Cards tecnológicos em todo o app**

- Caixas, painéis, listas, indicadores, catálogo e agenda usam uma superfície grafite e metálica unificada.
- Bordas, luzes sutis, hierarquia visual e estados de interação foram refinados sem alterar a estrutura dos formulários.
- Ajustes mantêm leitura em celular e respeitam movimento reduzido.
- Versão e cache atualizados para 1.3.2.

## 1.3.1 — 23/10/2026 **Selo do hero em card**

- O emblema Carmo e o marco de 2021 foram organizados em um único card metálico no hero.
- Anéis orbitais e texto vertical foram removidos; o painel de texto à esquerda permaneceu intacto.
- Card ajustado para desktop e celular; cache e versão atualizados para 1.3.1.

## 1.3.0 — 23/10/2026 **Acabamento das telas internas**

- Atualização visual consistente em agendamento, horários, perfil, shop, sacola e painel do dono.
- Campos, navegação, cartões, agenda e indicadores receberam melhor hierarquia, estados de foco e profundidade visual.
- Ajustes responsivos para uso em celular e desktop, com respeito à preferência por movimento reduzido.
- A abertura e o hero aprovados foram preservados.
- Cache offline e versão do app atualizados para 1.3.0.

## 1.2.0 — 23/10/2026 **Redesign imersivo**

- Abertura cinematográfica da Barbearia Carmo com logo em perspectiva 3D, opção para pular e duração curta por sessão.
- Página inicial refeita com hero editorial, fotografia do salão em camada 3D, selo metálico e chamadas de agendamento.
- Profundidade e movimento mais presentes em serviços, galeria, shop e cartões, com suporte a telas pequenas e preferência por movimento reduzido.
- Cache offline e versão do app atualizados para 1.2.0.

## 1.1.0 — 23/10/2026 **Identidade visual Carmo**

- Paleta reorganizada em vinho, prata, grafite e preto nos temas escuro e claro, incluindo estados e ações de contato.
- Folha de estilos dividida por tokens, base, layout, componentes, telas e movimento.
- Hero, galeria, serviços e produtos ganharam profundidade sutil e microinterações 3D em ponteiros compatíveis.
- Movimento reduzido respeita a preferência do sistema; estilos inline do carregamento foram removidos.
- Referências de documentação a outro projeto foram removidas.

## 1.0.0 — 20/10/2026 **Primeira versão**

**Cliente**
- Início com foto do salão, logo (foto de perfil do Instagram), situação (aberto/fechado), serviços populares, galeria, equipe, shop, avaliações, horário de funcionamento e endereço com mapa.
- Agendamento em 4 passos (serviços → barbeiro → dia/horário → confirmar), somando duração e preço de vários serviços; pula sozinho para o primeiro dia com horário livre.
- Meus horários: remarcar, cancelar até X horas antes, arquivo de calendário (.ics) com lembrete 1 dia e 1 hora antes, avaliar com estrelas e agendar de novo.
- Serviços por categoria (Cortes, Barba, Combos e Química), com preços de exemplo para o dono conferir.
- Galeria de cortes com fotos do Instagram e visualização em tela cheia.
- Shop com busca, categorias, sacola e reserva para retirar; "Meus pedidos" com status.
- Cadastro com nome completo, CPF (validação dos dígitos e CPF único por conta), nascimento e celular; aceite LGPD; apagar cadastro.
- Notificações no sininho e no aparelho: confirmação/cancelamento, lembrete de hoje/amanhã, pedido pronto, avisos e aniversário.
- Tema escuro (padrão), claro e automático.

**Dono**
- Agenda com resumo do dia, lista do que aguarda confirmação, confirmar/concluir/faltou/cancelar, lembrete no WhatsApp, encaixe (com cliente sem cadastro) e bloqueio de horário.
- Clientes: busca por nome/CPF/celular, aniversariantes, sumidos há 45+ dias, ficha com histórico, total gasto, serviço preferido, anotações internas, mensagem no app e planilha CSV.
- Estoque: custo, venda, mínimo, entradas/saídas com motivo, histórico e alerta de estoque baixo; fotos dos produtos.
- Pedidos do Shop com baixa automática no estoque ao entregar.
- Relatórios por período (hoje, 7 dias, mês, mês passado, ano).
- Serviços, equipe (foto, serviços que faz, horário próprio), avisos, galeria e ajustes (dados, horário, regras da agenda, quem acessa o painel, carregar dados iniciais, backup).
- Modo demonstração quando o Firebase ainda não está configurado.
