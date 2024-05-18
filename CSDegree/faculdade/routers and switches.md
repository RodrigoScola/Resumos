
> Slide 1
# O que São Roteadores?

É um dispositivo que conecta duas ou mais subnetworks

- Manda packets de informações para ips desejados
* Disponibiliza a múltiplos dispositivos a usar a mesma conexão

Existe vários tipos de roteadores, os mais populares passam informação por LAN (local area networks) e WAN (wide area networks)

---
> Slide 2
# Como um Roteador Funciona?

Pode se pensar um roteador como um controlador de tráfego aéreo. Onde o roteador diz para qual dispositivo o packet de informação deverá ir.

Para saber para onde mandar as informações o roteador possui uma tabela interna de endereços 

O roteador sabe qual o endereço que o packet quer ir porque o mesmo possui o endereço em seu "*header*" 

<img src="https://erg.abdn.ac.uk/users/gorry/course/images/ip-header.gif" />

---
> Slide 3
# Qual a diferença entre um roteador e um modem?

Enquanto ISPS podem combinar um roteador e um modem em um dispositivo, eles possuem funcionalidades diferentes:

- Roteador: forma redes e controla o fluxo de dados dentro e entre redes, 
- Modem: forma redes e conecta elas à internet. Eles formam a conexão por forjar os sinais de uma LSP em um sinal digital que pode ser interpretado por qualquer dispositivo conectado. 

---
> Slide 4

# Quais são os tipos diferentes de roteadores?

- Roteador wireless - utiliza um cabo ethernet para conectar com um modem. Distribui informação por converter binário em sinais de rádio. Roteadores wireless não criam LANs, mas sim criam WLANs, que conectam múltiplos dispositivos usando comunicação wireless.
- Roteador à cabo - Também utiliza um cabo ethernet, então utiliza vários cabos para conectar com os dispositivos na rede, criam uma rede LAN e linkam os dispositivos na network com a internet.
- Roteador núcleo - Utilizado por grandes corporações e empresas que transmitem grandes volumes de packets dentro de sua própria rede. Eles operam no "núcleo" de uma rede e não comunicam com redes externas.
- Edge Router - Roteador que comunica com roteadores núcleo e redes externas, Roteadores edge vivem na borda da rede
- Roteador Virtual - é um software que faz a mesma função que um roteador comum. Ele pode usar o Protocolo de Redundância Roteador Virtual para estabelecer uma conexão virtual e uma backup com outros roteadores virtuais

---
> Slide 5

# O que é um switch?

Conecta dispositivos em uma rede e encaminha pacotes de dados de e para estes dispositivos. Contrário a um roteador, um switch apenas manda informação para um dispositivo que é planejado para receber a informação 

> slide 6
# Qual a diferença entre um switch e um roteador?

Roteadores selecionam caminhos para os packets de informação e chegam em sua destinação. Roteadores fazem isso conectando-se a diferentes redes e encaminhando dados de rede para rede.

Switches são apenas usados para a interconexão de dispositivos. Casas e escritórios pequenos precisam de roteadores para o acesso de internet, mas a maioria não precisam de um switch de rede, a não ser que precisam de uma grande quantidade de ports de ethernet.


