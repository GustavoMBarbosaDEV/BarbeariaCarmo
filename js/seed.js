// =====================================================================
//  Dados iniciais
//  - catalogo(): serviços (preços de exemplo para o dono conferir), equipe, produtos,
//    galeria e configurações. O dono pode carregar isso no Firebase em
//    Ajustes → "Carregar dados iniciais" e depois editar tudo pelo app.
//  - dadosIniciais(): o catálogo + clientes e horários de EXEMPLO,
//    usados só no modo demonstração.
// =====================================================================
import { hoje, somaDias, diaSemana } from "./util.js";

const semana = (abre = "08:00", fecha = "18:00", pausa = ["12:00", "14:00"]) => ({ abre, fecha, pausa });

export function catalogo() {
  const loja = {
    nome: "Barbearia Carmo",
    slogan: "Autenticidade a cada tesourada. A barbearia do homem moderno.",
    sobre: "Desde 2021 cuidando do seu estilo: fade, social, barba e desenho, com conforto e bom atendimento. Espaço renovado (Barbearia Carmo 2.0), com cantinho e cadeira de carrinho para os pequenos.",
    endereco: "",             // preencher em Ajustes
    cidade: "",
    whatsapp: "",
    instagram: "barbearia_carmo2021",
    intervalo: 30,            // de quantos em quantos minutos começam os horários
    antecedenciaMin: 30,      // minutos mínimos entre agora e o horário marcado
    cancelarAteHoras: 2,      // até quantas horas antes o cliente pode cancelar sozinho
    diasAFrente: 30,          // até quantos dias à frente dá para marcar
    horario: {                // 0 = domingo ... 6 = sábado; null = fechado
      0: null,
      1: semana("08:00", "19:00", ["12:00", "13:00"]), 2: semana("08:00", "19:00", ["12:00", "13:00"]),
      3: semana("08:00", "19:00", ["12:00", "13:00"]), 4: semana("08:00", "19:00", ["12:00", "13:00"]),
      5: semana("08:00", "19:00", ["12:00", "13:00"]),
      6: semana("08:00", "17:00", null)
    },
    cupomAniversario: "Na semana do seu aniversário, ganhe 10% de desconto no corte.",
    criadoEm: Date.now()
  };

  // Preços de EXEMPLO (o Instagram não mostra a tabela): o dono confere em Mais → Serviços.
  const s = (categoria, nome, preco, duracao, descricao = "", extra = {}) => ({ categoria, nome, preco, duracao, descricao, ativo: true, aPartir: false, ...extra });
  const servicos = [
    s("Cortes", "Corte degradê (fade)", 40, 40, "Low, mid ou high fade, sombra ou navalhado, com marca perfeita.", { destaque: true }),
    s("Cortes", "Corte social", 35, 30, "Social clássico na tesoura e máquina, com acabamento na navalha.", { destaque: true }),
    s("Cortes", "Corte infantil", 35, 40, "Corte com calma para os pequenos, na cadeira de carrinho.", { destaque: true }),
    s("Cortes", "Máquina", 25, 30, "Somente máquina, até 2 graduações. Não inclui degradê."),
    s("Cortes", "Desenho / hair tattoo", 15, 15, "Freestyle ou fade tattoo: desenho feito na máquina e navalha."),
    s("Cortes", "Sobrancelha", 10, 10, "Limpeza e alinhamento na navalha."),
    s("Cortes", "Pezinho", 10, 10, "Acabamento do contorno entre um corte e outro."),
    s("Barba", "Barba", 25, 30, "Barba desenhada com toalha quente e navalha.", { destaque: true }),
    s("Barba", "Barba lenhador (fade)", 30, 30, "Barba cheia com degradê nas laterais."),
    s("Barba", "Barboterapia", 35, 30, "Toalha quente, hidratação e massagem: barba alinhada e pele relaxada."),
    s("Combos", "Corte + barba", 60, 60, "Barba e cabelo premium no mesmo horário.", { destaque: true }),
    s("Combos", "Corte + sobrancelha", 42, 40),
    s("Combos", "Corte + barba + sobrancelha", 68, 60, "O pacote completo para sair na régua."),
    s("Combos", "Corte + desenho", 52, 50, "Fade com freestyle ou hair tattoo."),
    s("Química", "Pigmentação", 20, 20, "Realce de cabelo ou barba."),
    s("Química", "Luzes / platinado", 80, 120, "Valor a partir de R$ 80, conforme o comprimento.", { aPartir: true })
  ].map((x, i) => ({ ...x, ordem: i }));

  const profissionais = [
    { nome: "Wellington Carmo", funcao: "Proprietário e barbeiro", foto: "img/casa/wellington.jpg", instagram: "wellingtoncarmo10", servicos: [], horario: null, ativo: true, ordem: 0 }
  ];

  // Preços de EXEMPLO: o dono confere e ajusta em Estoque.
  const p = (categoria, nome, preco, custo, quantidade, minimo, descricao = "", foto = "") => ({ categoria, nome, preco, custo, quantidade, minimo, descricao, foto });
  const produtos = [
    p("Cabelo", "[5D] MEN pomada de alta fixação (mate black)", 38, 19, 10, 3, "Textura mate, fixação alta e acabamento seco. A mesma que usamos na cadeira. 100 g.", "img/produtos/pomada-mate.jpg"),
    p("Cabelo", "[5D] MEN pomada nuvem", 35, 17, 8, 3, "Leve e com efeito natural, para penteados com movimento.", "img/produtos/pomada-nuvem.jpg"),
    p("Cabelo", "[5D] MEN pomada modeladora", 35, 17, 8, 3, "Fixação média para modelar e remodelar ao longo do dia.", "img/produtos/pomada-modeladora.jpg"),
    p("Barba", "Versaty Power Blend ativador de crescimento 10% (100 ml)", 75, 40, 5, 2, "Spray para cabelo e barba que ajuda no crescimento. Uso conforme orientação.", "img/produtos/power-blend.jpg"),
    p("Barba", "Versaty Power Blend ativador de crescimento 10% (30 ml)", 45, 24, 6, 2, "Versão conta-gotas para a barba. Uso conforme orientação.", "img/produtos/power-blend.jpg"),
    p("Barba", "Balm para barba Versaty", 30, 14, 8, 3, "Alinha os fios e hidrata a pele por baixo da barba.", "img/produtos/linha-5dmen.jpg"),
    p("Barba", "Shampoo para barba Versaty", 28, 13, 8, 3, "Limpeza diária da barba sem ressecar.", "img/produtos/linha-5dmen.jpg")
  ].map((x, i) => ({ ...x, ordem: i }));

  // Fotos tiradas do Instagram @barbearia_carmo2021
  const galeria = [
    ["cortes/fade-marca.jpg", "Fade com marca perfeita"],
    ["cortes/barba-premium.jpg", "Barba e cabelo premium"],
    ["cortes/hair-tattoo.jpg", "Fade tattoo"],
    ["cortes/social-fade.jpg", "Social com degradê"],
    ["cortes/afro-fade.jpg", "Fade com volume"],
    ["cortes/barba-grisalha.jpg", "Estilo do empresário moderno"],
    ["cortes/freestyle.jpg", "Fade freestyle"],
    ["cortes/barba-lenhador.jpg", "Fade sombra + barba lenhador"],
    ["cortes/low-fade.jpg", "Low fade"],
    ["cortes/fade-texturizado.jpg", "Fade texturizado"],
    ["cortes/social-infantil.jpg", "Social infantil"],
    ["casa/salao.jpg", "Barbearia Carmo 2.0"],
    ["casa/infantil.jpg", "Cantinho das crianças"],
    ["casa/teto-carmo.jpg", "Nosso espaço"]
  ].map(([foto, titulo], ordem) => ({ foto: "img/" + foto, titulo, ordem }));

  const avisos = [
    { titulo: "Agende pelo app", texto: "Agora você marca, remarca e cancela seu horário direto por aqui, sem precisar mandar mensagem.", em: Date.now() }
  ];

  return { loja, servicos, profissionais, produtos, galeria, avisos };
}

/** Banco completo do modo demonstração (inclui exemplos de clientes e horários). */
export function dadosIniciais() {
  const cat = catalogo();
  const c = {};
  const put = (col, id, d) => ((c[col] ||= {})[id] = d);
  put("config", "loja", cat.loja);
  put("config", "admins", { emails: ["dono@demo"] });
  cat.servicos.forEach((s, i) => put("servicos", "s" + i, s));
  cat.profissionais.forEach((p, i) => put("profissionais", "p" + i, p));
  cat.galeria.forEach((g, i) => put("galeria", "g" + i, g));
  cat.avisos.forEach((a, i) => put("avisos", "a" + i, a));
  cat.produtos.forEach((p, i) => {
    const { custo, quantidade, minimo, ...pub } = p;
    put("produtos", "pr" + i, { ...pub, foto: pub.foto || "", ativo: true, disponivel: quantidade > 0 });
    put("estoque", "pr" + i, { custo, quantidade, minimo, atualizadoEm: Date.now() });
  });

  // ---- clientes de EXEMPLO (nomes fictícios) ----
  const clientes = [
    ["ex1", "João Exemplo da Silva", "52998224725", "1995-" + hoje().slice(5, 7) + "-20", "31999990001"],
    ["ex2", "Pedro Teste Oliveira", "11144477735", "2001-03-14", "31999990002"],
    ["ex3", "Lucas Modelo Souza", "93541134780", "1988-11-02", "31999990003"]
  ];
  clientes.forEach(([id, nome, cpf, nascimento, telefone]) => {
    put("clientes", id, { nome, cpf, nascimento, telefone, email: "", manual: true, aceite: true, criadoEm: Date.now() - 86400000 * 40 });
    put("cpfs", cpf, { uid: id });
  });

  // ---- horários de EXEMPLO ----
  let d = hoje();
  while (!cat.loja.horario[diaSemana(d)]) d = somaDias(d, 1);
  const ag = (id, uidC, nome, sv, prof, data, inicio, status, extra = {}) => {
    const s = cat.servicos[sv];
    put("agendamentos", id, {
      uid: uidC, clienteNome: nome, servicos: [{ id: "s" + sv, nome: s.nome, preco: s.preco, duracao: s.duracao }],
      total: s.preco, duracao: s.duracao, profissional: "p" + prof, profissionalNome: cat.profissionais[prof].nome,
      data, inicio, status, obs: "", criadoEm: Date.now() - 3600000, ...extra
    });
    const [h, m] = inicio.split(":").map(Number);
    for (let t = h * 60 + m; t < h * 60 + m + s.duracao; t += 15) {
      if (status === "cancelado") break;
      const hh = String(Math.floor(t / 60)).padStart(2, "0") + String(t % 60).padStart(2, "0");
      put("bloqueios", `p${prof}_${data}_${hh}`, { profissional: "p" + prof, data, hora: hh, uid: uidC, ag: id });
    }
  };
  ag("ag1", "ex1", "João Exemplo da Silva", 0, 0, d, "09:00", "confirmado");
  ag("ag2", "ex2", "Pedro Teste Oliveira", 10, 0, d, "10:00", "marcado");
  ag("ag3", "ex3", "Lucas Modelo Souza", 7, 0, d, "15:00", "marcado");
  ag("ag4", "ex1", "João Exemplo da Silva", 0, 0, somaDias(hoje(), -20), "16:00", "concluido");
  ag("ag5", "ex2", "Pedro Teste Oliveira", 12, 0, somaDias(hoje(), -6), "11:00", "concluido");
  ag("ag6", "demo-cliente", "", 0, 0, somaDias(hoje(), -12), "14:00", "concluido");
  put("pedidos", "pd1", { uid: "ex3", clienteNome: "Lucas Modelo Souza", itens: [{ id: "pr0", nome: "[5D] MEN pomada de alta fixação (mate black)", preco: 38, qtd: 1 }], total: 38, status: "novo", criadoEm: Date.now() - 7200000 });
  return c;
}
