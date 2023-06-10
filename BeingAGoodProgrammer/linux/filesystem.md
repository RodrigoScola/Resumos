Sistemas de arquivos
O sistema de arquivos do Linux funciona diferente dos outros sistemas operacionais. Enquanto existe diferença entre arquivos e diretórios no Windows, no Linux tudo é um arquivo. Diretórios são apenas "organizadores".

Como tudo é um arquivo, é possível fazer coisas que não daria para fazer com outros sistemas operacionais, como no Symlink. Neste, você consegue linkar o mesmo arquivo para lugares diferentes em seu sistema.

Existem dois tipos de links: simbólicos e concretos. Os simbólicos são links que apenas apontam para o arquivo. Quando o arquivo original é deletado o link simbólico fica inválido. Os links concretos também apontam para o arquivo, porém quando o original é deletado, o mesmo ainda fica válido. Os links simbólicos são mais fáceis de trabalhar, enquanto links concretos possuem tamanho de arquivos menores e podem ser acessados mais rapidamente.

Por existir mais de um tipo de sistemas de arquivos (Ext4, XFS, NTFS, FAT32), o Linux oferece o sistema de arquivos virtual. O trabalho dele é oferecer um padrão para desenvolvedores. Criando interfaces que simplifica o processo de ler, criar, mudar e deletar arquivos.

Repositórios
Repositórios são coleções de pacotes disponíveis para a instalação direto na linha de comando. Para instalar é necessário um gerenciador de pacotes. Isso faz com que seja mais seguro e conveniente a instalação de programas.

Pacote
Um pacote é tudo que pode ser instalado pelo gerenciador, sendo um programa como Steam ou Discord, até ferramentas como npm, que é um gerenciador para ferramentas node. Para instalar um pacote é necessário usar o comando sudo nome-do-gerenciador install nome-do-pacote.
