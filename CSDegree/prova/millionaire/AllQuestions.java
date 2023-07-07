public class AllQuestions {

     private final AvailableQuestion[] questions;

     public AllQuestions() {
          this.questions = new AvailableQuestion[] {
                    new AvailableQuestion(
                              "Qual o nome da ic\u00F4nica personagem de Renata Sorrah na novela \"Senhora do Destino\"?",
                              new Answer[] {
                                        new Answer("Maria do Carmo", false, 1),
                                        new Answer("Maria de Nazaré", false, 2),
                                        new Answer("Nazaré Tedesco", true, 3),
                                        new Answer("Nazaré do Carmo", false, 4),

                              }, 500),

                    new AvailableQuestion("Qual \u00E9 o nome de registro da cantora Anitta?", new Answer[] {
                              new Answer("Larissa", true, 1),
                              new Answer("Clarissa", false, 2),
                              new Answer("Jéssica", false, 3),
                              new Answer("Claudia", false, 4),

                    }, 1000),
                    new AvailableQuestion(
                              "A personagem Carminha, a grande vil\u00E3 da novela \"Avenida Brasil\", foi interpretada por qual atriz?",
                              new Answer[] {
                                        new Answer("Drica Moraes", false, 1),
                                        new Answer("Adriana Esteves", true, 2),
                                        new Answer("Cláudia Abreu", false, 3),
                                        new Answer("Débora Falabella", false, 4),

                              }, 2000),
                    new AvailableQuestion(
                              "\u200B\u200BA atriz e estrela de cinema Natalie Portman nasceu em qual pa\u00EDs?",
                              new Answer[] {
                                        new Answer("Estados Unidos", false, 1),
                                        new Answer("Grécia", false, 2),
                                        new Answer("Canadá", false, 3),
                                        new Answer("Israel", true, 4),

                              }, 3000),
                    new AvailableQuestion(
                              "Qual era o nome do meio de Walt Disney?",
                              new Answer[] {
                                        new Answer("James", false, 1),
                                        new Answer("Elias", true, 2),
                                        new Answer("Winston", false, 3),
                                        new Answer("Benjamin", false, 4),

                              }, 5000),
                    new AvailableQuestion(
                              "Qual foi o primeiro evento transmitido em cores pela televis\u00E3o brasileira em 1972?",
                              new Answer[] {
                                        new Answer("Festa da Uva de Caxias do Sul", true, 1),
                                        new Answer("Posse do ex-presidente Médici", false, 2),
                                        new Answer("Partida entre Santos e Botafogo", false, 3),
                                        new Answer("Show beneficiente de Roberto Carlos", false, 4),

                              }, 10000),
                    new AvailableQuestion(
                              "Em qual ano aconteceu a primeira cerim\u00F4nia de entrega do Oscar?",
                              new Answer[] {
                                        new Answer("1926", false, 1),
                                        new Answer("1929", true, 2),
                                        new Answer("1933", false, 3),
                                        new Answer("1936", false, 4),
                              }, 15000),
                    new AvailableQuestion(
                              "Em qual cidade do Rio de Janeiro nasceu a influenciadora digital brasileira Jout Jout?",
                              new Answer[] {
                                        new Answer("Niterói", true, 1),
                                        new Answer("Rio de Janeiro", false, 2),
                                        new Answer("Teresópolis", false, 3),
                                        new Answer("Petrópolis", false, 4),

                              }, 20000),
                    new AvailableQuestion(
                              "Qual destas duplas sertanejas \u00E9 formada por irm\u00E3os g\u00EAmeos?",
                              new Answer[] {
                                        new Answer("Matheus e Kauan", false, 1),
                                        new Answer("Fernando e Sorocaba", false, 2),
                                        new Answer("Matheus e Cristiano", true, 3),
                                        new Answer("Crystian e Ralf", false, 4),

                              }, 30000),
                    new AvailableQuestion(
                              "Com 28 pr\u00EAmios Grammys no curr\u00EDculo, qual destas cantoras se tornou a mulher mais premiada da hist\u00F3ria da celebra\u00E7\u00E3o, em 2021?",
                              new Answer[] {
                                        new Answer("Beyoncé", true, 1),
                                        new Answer("Taylor Swift", false, 2),
                                        new Answer("Mariah Carey", false, 3),
                                        new Answer("Whitney Houston", false, 4)
                              }, 50000),
                    new AvailableQuestion(
                              "Sinhozinho Malta e Vi\u00FAva Porcina s\u00E3o personagens de qual destas novelas?",
                              new Answer[] {
                                        new Answer("Roque Santeiro", true, 1),
                                        new Answer("Tieta", false, 2),
                                        new Answer("Pedra sobre Pedra", false, 3),
                                        new Answer("Deus nos Acuda", false, 4),

                              }, 100000),
                    new AvailableQuestion(
                              "Qual \u00E9 o nome da filha da atriz Tat\u00E1 Werneck com o ator Rafael Vitti?",
                              new Answer[] {
                                        new Answer("Maria Clara", false, 1),
                                        new Answer("Maria Madalena", false, 2),
                                        new Answer("Valentina", false, 3),
                                        new Answer("Clara Maria", true, 4)
                              }, 150000),
                    new AvailableQuestion(
                              "Em qual ano Martin Luther King Jr. ganhou o pr\u00EAmio Nobel da Paz?",
                              new Answer[] {
                                        new Answer("1958", false, 1),
                                        new Answer("1964", true, 2),
                                        new Answer("1968", false, 3),
                                        new Answer("1972", false, 4),
                              }, 300000),
                    new AvailableQuestion(
                              "O cantor Elton John foi presidente de qual time ingl\u00EAs de futebol?",
                              new Answer[] {
                                        new Answer("Watford", true, 1),
                                        new Answer("Chelsea", false, 2),
                                        new Answer("Reading", false, 3),
                                        new Answer("Manchester United", false, 4),
                              }, 500000),
                    new AvailableQuestion(
                              "Antes de se tornar a rainha do pop, a cantora Madonna integrou qual destas bandas?",
                              new Answer[] {
                                        new Answer("The Smiths", false, 1),
                                        new Answer("Talking Heads", false, 2),
                                        new Answer("Blondie", false, 3),
                                        new Answer("Breakfast Club", true, 4),
                              }, 1000000),
                    new AvailableQuestion(
                              "Qual destas ferramentas \u00E9 mais apropriada para cravar pregos em uma superf\u00EDcie?",
                              new Answer[] {
                                        new Answer("Chave de fenda", false, 1),
                                        new Answer("Alicate de bico", false, 2),
                                        new Answer("Martelo", true, 3),
                                        new Answer("Parafusadeira", false, 4),
                              }, 500),
                    new AvailableQuestion(
                              "Na alimentação vegetariana, qual desses alimentos não é consumido?",
                              new Answer[] {
                                        new Answer("Frutas", false, 1),
                                        new Answer("Legumes", false, 2),
                                        new Answer("Verduras", false, 3),
                                        new Answer("Carne", true, 4),
                              }, 1000),
                    new AvailableQuestion(
                              "Qual destas opções não é um tipo de calçado?",
                              new Answer[] {
                                        new Answer("Botina", false, 1),
                                        new Answer("Tênis", false, 2),
                                        new Answer("Chuteira", false, 3),
                                        new Answer("Jet ski", true, 4),
                              }, 2000),
                    new AvailableQuestion("Um ano é composto de quantos trimestres?",
                              new Answer[] {
                                        new Answer("1", false, 1),
                                        new Answer("2", false, 2),
                                        new Answer("3", true, 3),
                                        new Answer("4", false, 4),
                              }, 3000),
                    new AvailableQuestion("Qual destes instrumentos musicais n\u00E3o possui cordas?",
                              new Answer[] {
                                        new Answer("Violoncelo", false, 1),
                                        new Answer("Viola", false, 2),
                                        new Answer("Violino", false, 3),
                                        new Answer("Piano", true, 4),
                              }, 5000),
                    new AvailableQuestion(
                              "A cantoria Elis Regina nasceu em que cidade brasileira?",
                              new Answer[] {
                                        new Answer("Porto Alegre", true, 1),
                                        new Answer("S\u00E3o Paulo", false, 2),
                                        new Answer("Rio de Janeiro", false, 3),
                                        new Answer("Salvador", false, 4),

                              }, 10000),
                    new AvailableQuestion(
                              "Para obter R$ 32 com a mesma quantidade de moedas de um, cinco e dez centavos, quantas moedas de cada valor são necessárias?",
                              new Answer[] {
                                        new Answer("100", false, 1),
                                        new Answer("150", false, 2),
                                        new Answer("200", true, 3),
                                        new Answer("250", false, 4),
                              }, 15000),
                    new AvailableQuestion("Qual destes animais é conhecido como cão selvagem australiano?",
                              new Answer[] {
                                        new Answer("Dingo", true, 1),
                                        new Answer("Bisão", false, 2),
                                        new Answer("Curica", false, 3),
                                        new Answer("Acauã", false, 4),

                              }, 20000),
                    new AvailableQuestion(
                              "Qual a classificação dada ao medicamento obtido exclusivamente da matéria-prima vegetal?",
                              new Answer[] {
                                        new Answer("Genérico", false, 1),
                                        new Answer("Fitoterápico", true, 2),
                                        new Answer("Homeopático", false, 3),
                                        new Answer("Alopático", false, 4),

                              }, 30000),
                    new AvailableQuestion("Em qual destas regiões ficava o Quilombo dos Palmares, onde viveu Zumbi?",
                              new Answer[] {
                                        new Answer("Serra da Barriga, AL", true, 1),
                                        new Answer("Vale do Paraíba, SP", false, 2),
                                        new Answer("Serra da Mantiqueira, MG", false, 3),
                                        new Answer("Chapada da Diamantina, BA", false, 4),
                              }, 50000),
                    new AvailableQuestion(
                              "Quantas vezes por dia os muçulmanos realizam a Salah, oração que é feita acompanhando as etapas do nascer até o pôr do sol?",
                              new Answer[] {
                                        new Answer("3", false, 1),
                                        new Answer("5", true, 2),
                                        new Answer("7", false, 3),
                                        new Answer("9", false, 4),
                              }, 100000),
                    new AvailableQuestion(
                              "Na novela Avenida Brasil, Genésio, primeiro marido de Carminha, vende a casa e sai do banco com uma mala cheia de:",
                              new Answer[] {
                                        new Answer("Notas Falsas", false, 1),
                                        new Answer("Papel Picado", true, 2),
                                        new Answer("Dinheiro", false, 3),
                                        new Answer("Jornal", false, 4),
                              }, 150000),
                    new AvailableQuestion(
                              "Em novembro de 1985, durante um jantar de gala na Casa Branca, nos EUA, a Princesa Diana usou um vestido confeccionado por:",
                              new Answer[] {
                                        new Answer("Oscar de  La Renta", true, 1),
                                        new Answer("Victor Edelstein", false, 2),
                              }, 300000),
                    new AvailableQuestion(
                              "Escrito por Fred Zero Quatro, como ficou conhecido o manifesto que lançou o movimento Manguebeat?",
                              new Answer[] {
                                        new Answer("Caranguejos com Cérebro", true, 1),
                                        new Answer("Caranguejos com Desejo", false, 2),
                                        new Answer("Caranguejos com Memória", false, 3),
                                        new Answer("Caranguejos com Fome", false, 4),
                              }, 500000),
                    new AvailableQuestion(
                              "Em 1953, qual cantora brasileira ganhou o primeiro lugar no programa da Rádio Tupi Calouros em Desfile, comandado por Ary Barroso",
                              new Answer[] {
                                        new Answer("Elza Soares", true, 1),
                                        new Answer("Maysa", false, 2),
                                        new Answer("Alaíde Costa", false, 3),
                                        new Answer("Ângela Maria", false, 4),
                              }, 1000000),
          };
     }

     public AvailableQuestion[] getQuestions() {
          return questions;
     }

}
