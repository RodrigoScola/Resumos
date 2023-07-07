## Sistemas Computacionais Embarcados

> Luigi Carro e Flávio Rech Wagner

[link](http://www.maxpezzin.com.br/aulas/6_EAC_Sistemas_Embarcados/8_SE_Visao_Sistemica.pdf)

_Os sistemas computacionais embarcados estão presentes em praticamente todas as atividades_
_humanas e, com os baixos custos tecnológicos atuais, tendem a aumentar sua presença no_
_cotidiano das pessoas. Exemplos de tais sistemas são os telefones celulares com máquina_
_fotográfica e agenda, o sistema de controle dos carros e ônibus, os computadores portáteis_
_palm-top, os fornos de microondas com controle de temperatura inteligente, as máquinas de_
_lavar e outros eletrodomésticos._

> pagina 2

_Os processadores podem ser de tipos diversos (RISC, VLIW, DSP, até ASIPs –_
_processadores integrados para aplicações específicas), conforme a aplicação. No caso de_
_sistemas contendo componentes programáveis, o software de aplicação pode ser composto por_
_múltiplos processos, distribuídos entre diferentes processadores e comunicando-se através de_
_mecanismos variados. Um sistema operacional de tempo real (RTOS) [Burns e Wellings 1997],_
_oferecendo serviços como comunicação e escalonamento de processos, pode ser necessário._

> pagina 2

_Esta automação deve idealmente cobrir o software aplicativo, o RTOS_
_[Gauthier 2001], as interfaces entre os processos [Böke 2000] e os acionadores dos periféricos._
_Também aqui é essencial o reuso de componentes de software [Shandle e Martin 2002]_
_previamente desenvolvidos, de modo que o projeto do sistema embarcado concentre-se apenas_
_na configuração e integração dos mesmos._

> pagina 3

## Desenvolvimento de um Sistema Operacional Orientado a Objetos para uso em Sistemas Embarcados

https://lisha.ufsc.br/wso/papers/2006/goes2006.pdf

Rafael de Góes1, Douglas Renaux

> used
> Sistemas operacionais de uso genérico, monolíticos e com vasta uncionalidade não são
> apropriados para uso em sistemas embarcados que tipicamente ossuem recursos
> computacionais bem limitados. A tendência nestes casos é a tilização de sistemas
> operacionais adaptados à arquitetura, à plataforma de hardware e o domínio da
> aplicação, para prover apenas a funcionalidade requerida e a máxima eficiência no uso de recursos.

> pagina 2

um RTOS deve ter tempos
de execução determinísticos e definidos dos seus serviços além de permitir que o
desenvolvedor configure o escalonamento do sistema.

## Desenvolvimento de sistemas embarcados com suporte a tempo-real seguindo o Projeto de Sistemas Orientados a Aplicação

Danillo Santos, Roberto Matos, Rafael Cancian, Antonio Augusto Fr ˆ ohlich

A metodologia de desenvolvimento de sistemas orientados a aplicac¸ao (AOSD) prov ˜ eˆ
meios para obtenc¸ao de componentes de software pertencentes ao sistema atrav ˜ es de um ´
processo de engenharia de dom´ınio. Entidades identificadas em um dom´ınio sao ent ˜ ao˜
organizadas em fam´ılias de abstrac¸oes, seguindo a an ˜ alise de variabilidade presente no ´
Projeto baseado em fam´ılias, proposto por Parnas em [Parnas 1976].

## GENOS-OS: Um sistema operacional base para a construção de sistemas embarcados

Filipe Renaldi, Antonio Carlos Tavares, Mauro Marcelo Mattos

> used

O FreeRTOS (BARRY, 2006) é um sistema operacional multitarefa de código
aberto. Todas as características básicas de um sistema operacional como escalonador de
processos colaborativo e preemptivo com níveis de prioridades, alocação de memória e
semáforos estão disponíveis nele. Seu diferencial é oferecer uma estrutura simples e
eficiente.

Sistemas operacionais de uso genérico, monolíticos e com vasta uncionalidade não são apropriados para uso em sistemas embarcados que tipicamente ossuem recursos computacionais bem limitados. A tendência nestes casos é a utilização de sistemas operacionais adaptados à arquitetura, à plataforma de hardware e o domínio da aplicação, para prover apenas a funcionalidade requerida e a máxima eficiência no uso de recursos (Rafael de Góes and Douglas Renaux 2006). Normalmente é usado o sistema operacional FreeRTOS por sua praticidade e de código aberto. Feito
para aplicações em tempo real que rapidez é um ponto essencial o FreeRTOS possui todas as características básicas de um sistema operacional como escalonador de processos colaborativo e preemptivo com níveis de prioridades, alocação de memória e semáforos estão disponíveis nele. Seu diferencial é oferecer uma estrutura simples e eficiente (BARRY, 2006).

Em resumo, este estudo explorou e analisou a estrutura, características e benefícios do FreeRTOS como um sistema operacional de tempo real de código aberto. Ao longo deste trabalho, examinamos sua arquitetura, escalabilidade e capacidade de gerenciamento de tarefas em ambientes embarcados. Sua flexibilidade e portabilidade o tornam adequado para uma ampla gama de aplicações, desde dispositivos de Internet das Coisas (IoT) até sistemas de controle industrial.

No entanto, é importante mencionar que o FreeRTOS apresenta alguns desafios, como a necessidade de uma configuração adequada e a alocação eficiente de recursos limitados. Portanto, é essencial que os desenvolvedores compreendam profundamente os princípios e as práticas recomendadas do FreeRTOS para garantir a otimização do desempenho e a confiabilidade do sistema.

Em suma, o FreeRTOS emerge como uma plataforma sólida e acessível para o desenvolvimento de sistemas embarcados de tempo real, oferecendo recursos avançados de gerenciamento de tarefas e uma comunidade ativa de suporte. Compreender suas capacidades e limitações pode abrir caminho para o desenvolvimento de sistemas embarcados mais eficientes e confiáveis em diversos domínios de aplicação.
