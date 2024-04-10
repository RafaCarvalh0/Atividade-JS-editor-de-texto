# Exercício JS – Objetos, Funções, Strings, Arrays e Estruturas de Dados

## Criar uma página HTML estilizada que contenha três áreas de texto, dois botões, um combo box, e um label, ou área da própria página (que caiba o texto original eventualmente digitado em uma das áreas de texto).

As áreas de texto devem conter:

Um texto original livre.

Uma lista de “palavras proibidas”, que pode, inclusive, ser vazia. Estas palavras devem ser separadas por “,”.

Uma lista de “sinônimos”, que pode, inclusive, ser vazia. Estas palavras devem ser separadas por “,”.

O combo box deve conter três opções, sendo a 1a a opção default:

Remover palavras proibidas.

Substituir palavras proibidas por sinônimos.

Manter texto original.

## O primeiro botão, “Alterar texto”, deve realizar algumas validações, ler o texto original e gerar um novo texto, a ser exibido no label. O novo texto deve iniciar com a data e hora atuais, no formato pt br, seguido da frase “TEXTO EDITADO”, e de uma quebra de linha. 

A depender da opção selecionada no combo, o resto do texto pode ser: igual ao original, igual ao original, mas com as palavras proibidas encontradas no texto original pintadas de vermelho, igual ao original, mas com as palavras proibidas encontradas no texto original substituídas por seus respectivos sinônimos, sendo estas pintadas de verde.

As validações pertinentes: texto original não preenchido; formato das listas inválido, caso elas estejam preenchidas; se a opção “Substituir palavras proibidas por sinônimos” estiver selecionada, as listas têm que ter os mesmos tamanhos.

O segundo botão, “Limpar”, deve limpar todos os campos da tela e setar a opção default do combo.

## Requisitos técnicos:

O texto, as palavras proibidas, os sinônimos, e as funções de encontrar / substituir / destacar em cores palavras devem estar representados em um objeto, com três atributos e duas funções.

Usar as funções prontas de Strings para realizar as trocas e as buscas por palavras.

Usar, nos algoritmos, array e Map.