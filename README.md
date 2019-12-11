# SP Mapas [![Build Status](https://travis-ci.org/nucleo-digital/sp-mapas.svg?branch=master)](https://travis-ci.org/nucleo-digital/sp-mapas)

## Mapas de São Paulo no formato GeoJSON
Este repositório disponibiliza em formato geojson os arquivos produzidos pela prefeitura de Sâo Paulo e publicado nos portais [Gestão Urbana SP](http://geosampa.prefeitura.sp.gov.br/) e [GeoSampa SP](https://gestaourbana.prefeitura.sp.gov.br/).

## Índice
 1. [Exemplo de utilização com requisição http](#requisição-http)
 2. [Exemplos de utlização com uma cópias locais](#cópia-local)
 3. [Criando embeds pelo github](#embed-de-mapa-pelo-github)
 4. [Instruções para converter shapes para geojson](#processo-de-conversão-shp-para-geojson)
 5. [Lista de mapas](#lista-de-mapas)
 6. [Instruções para contribuir](#contribua-incluindo-novos-mapas)
 7. [Fonte](#fonte)
___

### Requisição HTTP
Os arquivos estão publicados no gh-pages em formato geojson e podem ser consumidos via HTTP. Veja abaixo um exemplo de como fazer uma requisição (aplicações __CORS friendly__) utilizando a api [fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API):
```javascript
fetch("http://nucleo-digital.github.io/sp-mapas/01_Macrozona_Estruturacao_Qualificacao_Urbana.geojson")
    .then(response => response.json())
    .then(response => console.log(response))
```

<br>

### Cópia local
Para consumir os arquivos como uma cópia local pode-se: 
 - <a href="https://github.com/nucleo-digital/sp-mapas/blob/master/mapas/02A_Subsetores_Arco_Tiete.geojson">Acessar diretamente do github </a>
 - Ou baixar todos os arquivos do repositório:
```bash
git clone https://github.com/nucleo-digital/sp-mapas.git
```
> os arquivos estarão disponíveis no diretório `mapas`.

<br>

### Embed de mapa pelo github
1. Copie a URL completa do GeoJSON a ser utilizado, será como essa:<br>
`https://github.com/nucleo-digital/sp-mapas/blob/master/mapas/02A_Subsetores_Arco_Tiete.geojson`

2. URL base do mapa (sem `/blob/`):<br>
`https://github.com/nucleo-digital/sp-mapas/master/02A_Subsetores_Arco_Tiete.geojson`

3. URL de embed do mapa:<br>
`https://embed.github.com/view/geojson/` + base-do-nome-do-arquivo + `.json?height=500&width=1000`

4. TAG completa:<br>
`<script src="https://embed.github.com/view/geojson/nucleo-digital/sp-mapas/master/mapas/02A_Subsetores_Arco_Tiete.geojson?height=450&width=450"></script>`

___

### Processo de conversão shp para geojson
Instruções para converter arquivos shp em geojson e atualizar este repositório.

> **Pré-requisitos**: [nodejs] e [git]

1. Clone este projeto e instale as dependências 
```bash
# 1.1 Clone este repositório
git clone https://github.com/nucleo-digital/sp-mapas.git

# 1.2 Vá para o diretório e instale as dependências deste projeto:
cd sp-mapas
npm install
```
2. Navegue em [Gestão Urbana SP](https://gestaourbana.prefeitura.sp.gov.br/) ou [GeoSampa SP](http://geosampa.prefeitura.sp.gov.br/)
3. Baixe arquivos `.zip` geralmente denominados `SHP` ou `ESRI Shapefile`
4. Jogue os arquivos descompactados no diretório `shapes`
5. Rode o seguinte comando para converter os arquivos:

```bash
npm run shp2geojson
```
Os arquivos deverão estar criados no diretório `/mapas`.


## Lista de mapas
| arquivo | http | embed |
| - | - | - |
|01A_Zona_Rural| [http](https://nucleo-digital.github.io/sp-mapas/01A_Zona_Rural.geojson) | [embed](https://github.com/nucleo-digital/sp-mapas/blob/master/mapas/01A_Zona_Rural.geojson) |
|01A_Zona_Urbana| [http](https://nucleo-digital.github.io/sp-mapas/01A_Zona_Urbana.geojson) | [embed](https://github.com/nucleo-digital/sp-mapas/blob/master/mapas/01A_Zona_Urbana.geojson) |
|01_Macrozona_Estruturacao_Qualificacao_Urbana| [http](https://nucleo-digital.github.io/sp-mapas/01_Macrozona_Estruturacao_Qualificacao_Urbana.geojson) | [embed](https://github.com/nucleo-digital/sp-mapas/blob/master/mapas/01_Macrozona_Estruturacao_Qualificacao_Urbana.geojson) |
|01_Macrozona_Protecao_Recuperacao_Ambiental| [http](https://nucleo-digital.github.io/sp-mapas/01_Macrozona_Protecao_Recuperacao_Ambiental.geojson) | [embed](https://github.com/nucleo-digital/sp-mapas/blob/master/mapas/01_Macrozona_Protecao_Recuperacao_Ambiental.geojson) |
|02A_Subsetores_Arco_Jacu-Pessego| [http](https://nucleo-digital.github.io/sp-mapas/02A_Subsetores_Arco_Jacu-Pessego.geojson) | [embed](https://github.com/nucleo-digital/sp-mapas/blob/master/mapas/02A_Subsetores_Arco_Jacu-Pessego.geojson) |
|02A_Subsetores_Arco_Jurubatuba| [http](https://nucleo-digital.github.io/sp-mapas/02A_Subsetores_Arco_Jurubatuba.geojson) | [embed](https://github.com/nucleo-digital/sp-mapas/blob/master/mapas/02A_Subsetores_Arco_Jurubatuba.geojson) |
|02A_Subsetores_Arco_Leste| [http](https://nucleo-digital.github.io/sp-mapas/02A_Subsetores_Arco_Leste.geojson) | [embed](https://github.com/nucleo-digital/sp-mapas/blob/master/mapas/02A_Subsetores_Arco_Leste.geojson) |
|02A_Subsetores_Arco_Pinheiros| [http](https://nucleo-digital.github.io/sp-mapas/02A_Subsetores_Arco_Pinheiros.geojson) | [embed](https://github.com/nucleo-digital/sp-mapas/blob/master/mapas/02A_Subsetores_Arco_Pinheiros.geojson) |
|02A_Subsetores_Arco_Tamanduatei| [http](https://nucleo-digital.github.io/sp-mapas/02A_Subsetores_Arco_Tamanduatei.geojson) | [embed](https://github.com/nucleo-digital/sp-mapas/blob/master/mapas/02A_Subsetores_Arco_Tamanduatei.geojson) |
|02A_Subsetores_Arco_Tiete| [http](https://nucleo-digital.github.io/sp-mapas/02A_Subsetores_Arco_Tiete.geojson) | [embed](https://github.com/nucleo-digital/sp-mapas/blob/master/mapas/02A_Subsetores_Arco_Tiete.geojson) |
|02A_Subsetores_Central| [http](https://nucleo-digital.github.io/sp-mapas/02A_Subsetores_Central.geojson) | [embed](https://github.com/nucleo-digital/sp-mapas/blob/master/mapas/02A_Subsetores_Central.geojson) |
|02A_Subsetores_Eixo_Cupece| [http](https://nucleo-digital.github.io/sp-mapas/02A_Subsetores_Eixo_Cupece.geojson) | [embed](https://github.com/nucleo-digital/sp-mapas/blob/master/mapas/02A_Subsetores_Eixo_Cupece.geojson) |
|02A_Subsetores_Eixo_FernaoDias| [http](https://nucleo-digital.github.io/sp-mapas/02A_Subsetores_Eixo_FernaoDias.geojson) | [embed](https://github.com/nucleo-digital/sp-mapas/blob/master/mapas/02A_Subsetores_Eixo_FernaoDias.geojson) |
|02A_Subsetores_Eixo_Noroeste| [http](https://nucleo-digital.github.io/sp-mapas/02A_Subsetores_Eixo_Noroeste.geojson) | [embed](https://github.com/nucleo-digital/sp-mapas/blob/master/mapas/02A_Subsetores_Eixo_Noroeste.geojson) |
|02A_Subsetores_FariaLima-AguasEspraiadas-ChucriZaidan| [http](https://nucleo-digital.github.io/sp-mapas/02A_Subsetores_FariaLima-AguasEspraiadas-ChucriZaidan.geojson) | [embed](https://github.com/nucleo-digital/sp-mapas/blob/master/mapas/02A_Subsetores_FariaLima-AguasEspraiadas-ChucriZaidan.geojson) |
|02_Macroarea_Contencao_Urbana_Uso_Sustentavel| [http](https://nucleo-digital.github.io/sp-mapas/02_Macroarea_Contencao_Urbana_Uso_Sustentavel.geojson) | [embed](https://github.com/nucleo-digital/sp-mapas/blob/master/mapas/02_Macroarea_Contencao_Urbana_Uso_Sustentavel.geojson) |
|02_Macroarea_Controle_Qualificacao_Urbana_Ambiental| [http](https://nucleo-digital.github.io/sp-mapas/02_Macroarea_Controle_Qualificacao_Urbana_Ambiental.geojson) | [embed](https://github.com/nucleo-digital/sp-mapas/blob/master/mapas/02_Macroarea_Controle_Qualificacao_Urbana_Ambiental.geojson) |
|02_Macroarea_Estruturacao_Metropolitana| [http](https://nucleo-digital.github.io/sp-mapas/02_Macroarea_Estruturacao_Metropolitana.geojson) | [embed](https://github.com/nucleo-digital/sp-mapas/blob/master/mapas/02_Macroarea_Estruturacao_Metropolitana.geojson) |
|02_Macroarea_Preservacao_Ecossistemas_Naturais| [http](https://nucleo-digital.github.io/sp-mapas/02_Macroarea_Preservacao_Ecossistemas_Naturais.geojson) | [embed](https://github.com/nucleo-digital/sp-mapas/blob/master/mapas/02_Macroarea_Preservacao_Ecossistemas_Naturais.geojson) |
|02_Macroarea_Qualificacao_Urbanizacao| [http](https://nucleo-digital.github.io/sp-mapas/02_Macroarea_Qualificacao_Urbanizacao.geojson) | [embed](https://github.com/nucleo-digital/sp-mapas/blob/master/mapas/02_Macroarea_Qualificacao_Urbanizacao.geojson) |
|02_Macroarea_Reducao_Vulnerabilidade_Urbana| [http](https://nucleo-digital.github.io/sp-mapas/02_Macroarea_Reducao_Vulnerabilidade_Urbana.geojson) | [embed](https://github.com/nucleo-digital/sp-mapas/blob/master/mapas/02_Macroarea_Reducao_Vulnerabilidade_Urbana.geojson) |
|02_Macroarea_Reducao_Vulnerabilidade_Urbana_Recuperacao_Ambiental| [http](https://nucleo-digital.github.io/sp-mapas/02_Macroarea_Reducao_Vulnerabilidade_Urbana_Recuperacao_Ambiental.geojson) | [embed](https://github.com/nucleo-digital/sp-mapas/blob/master/mapas/02_Macroarea_Reducao_Vulnerabilidade_Urbana_Recuperacao_Ambiental.geojson) |
|02_Macroarea_Urbanizacao_Consolidada| [http](https://nucleo-digital.github.io/sp-mapas/02_Macroarea_Urbanizacao_Consolidada.geojson) | [embed](https://github.com/nucleo-digital/sp-mapas/blob/master/mapas/02_Macroarea_Urbanizacao_Consolidada.geojson) |
|03A_Eixo_Previsto| [http](https://nucleo-digital.github.io/sp-mapas/03A_Eixo_Previsto.geojson) | [embed](https://github.com/nucleo-digital/sp-mapas/blob/master/mapas/03A_Eixo_Previsto.geojson) |
|03_Eixo_Existente| [http](https://nucleo-digital.github.io/sp-mapas/03_Eixo_Existente.geojson) | [embed](https://github.com/nucleo-digital/sp-mapas/blob/master/mapas/03_Eixo_Existente.geojson) |
|04A_ZEIS2| [http](https://nucleo-digital.github.io/sp-mapas/04A_ZEIS2.geojson) | [embed](https://github.com/nucleo-digital/sp-mapas/blob/master/mapas/04A_ZEIS2.geojson) |
|04A_ZEIS3| [http](https://nucleo-digital.github.io/sp-mapas/04A_ZEIS3.geojson) | [embed](https://github.com/nucleo-digital/sp-mapas/blob/master/mapas/04A_ZEIS3.geojson) |
|04A_ZEIS4| [http](https://nucleo-digital.github.io/sp-mapas/04A_ZEIS4.geojson) | [embed](https://github.com/nucleo-digital/sp-mapas/blob/master/mapas/04A_ZEIS4.geojson) |
|04A_ZEIS5| [http](https://nucleo-digital.github.io/sp-mapas/04A_ZEIS5.geojson) | [embed](https://github.com/nucleo-digital/sp-mapas/blob/master/mapas/04A_ZEIS5.geojson) |
|04_ZEIS1| [http](https://nucleo-digital.github.io/sp-mapas/04_ZEIS1.geojson) | [embed](https://github.com/nucleo-digital/sp-mapas/blob/master/mapas/04_ZEIS1.geojson) |
|05_Bacias_Hidrograficas| [http](https://nucleo-digital.github.io/sp-mapas/05_Bacias_Hidrograficas.geojson) | [embed](https://github.com/nucleo-digital/sp-mapas/blob/master/mapas/05_Bacias_Hidrograficas.geojson) |
|05_Hidrografia_Rios| [http](https://nucleo-digital.github.io/sp-mapas/05_Hidrografia_Rios.geojson) | [embed](https://github.com/nucleo-digital/sp-mapas/blob/master/mapas/05_Hidrografia_Rios.geojson) |
|05_Parques_Estaduais_Protecao_Integral| [http](https://nucleo-digital.github.io/sp-mapas/05_Parques_Estaduais_Protecao_Integral.geojson) | [embed](https://github.com/nucleo-digital/sp-mapas/blob/master/mapas/05_Parques_Estaduais_Protecao_Integral.geojson) |
|05_Parques_Estaduais_Urbanos| [http](https://nucleo-digital.github.io/sp-mapas/05_Parques_Estaduais_Urbanos.geojson) | [embed](https://github.com/nucleo-digital/sp-mapas/blob/master/mapas/05_Parques_Estaduais_Urbanos.geojson) |
|05_Parques_Municipais_existentes| [http](https://nucleo-digital.github.io/sp-mapas/05_Parques_Municipais_existentes.geojson) | [embed](https://github.com/nucleo-digital/sp-mapas/blob/master/mapas/05_Parques_Municipais_existentes.geojson) |
|05_Parques_Municipais_implantacao| [http](https://nucleo-digital.github.io/sp-mapas/05_Parques_Municipais_implantacao.geojson) | [embed](https://github.com/nucleo-digital/sp-mapas/blob/master/mapas/05_Parques_Municipais_implantacao.geojson) |
|05_Parques_Municipais_planejamento| [http](https://nucleo-digital.github.io/sp-mapas/05_Parques_Municipais_planejamento.geojson) | [embed](https://github.com/nucleo-digital/sp-mapas/blob/master/mapas/05_Parques_Municipais_planejamento.geojson) |
|06_Adutora_Planejada| [http](https://nucleo-digital.github.io/sp-mapas/06_Adutora_Planejada.geojson) | [embed](https://github.com/nucleo-digital/sp-mapas/blob/master/mapas/06_Adutora_Planejada.geojson) |
|06_Centro_Reservacao_Planejado| [http](https://nucleo-digital.github.io/sp-mapas/06_Centro_Reservacao_Planejado.geojson) | [embed](https://github.com/nucleo-digital/sp-mapas/blob/master/mapas/06_Centro_Reservacao_Planejado.geojson) |
|06_Elevatoria_Planejada| [http](https://nucleo-digital.github.io/sp-mapas/06_Elevatoria_Planejada.geojson) | [embed](https://github.com/nucleo-digital/sp-mapas/blob/master/mapas/06_Elevatoria_Planejada.geojson) |
|06_Estacao_Tratamento_Agua_Existente| [http](https://nucleo-digital.github.io/sp-mapas/06_Estacao_Tratamento_Agua_Existente.geojson) | [embed](https://github.com/nucleo-digital/sp-mapas/blob/master/mapas/06_Estacao_Tratamento_Agua_Existente.geojson) |
|06_Sistema_Abastecimento_Agua_Isolado_Planejado| [http](https://nucleo-digital.github.io/sp-mapas/06_Sistema_Abastecimento_Agua_Isolado_Planejado.geojson) | [embed](https://github.com/nucleo-digital/sp-mapas/blob/master/mapas/06_Sistema_Abastecimento_Agua_Isolado_Planejado.geojson) |
|06_Sistema_Adutor_Metropolitano_Existente| [http](https://nucleo-digital.github.io/sp-mapas/06_Sistema_Adutor_Metropolitano_Existente.geojson) | [embed](https://github.com/nucleo-digital/sp-mapas/blob/master/mapas/06_Sistema_Adutor_Metropolitano_Existente.geojson) |
|07_Coletor_Tronco_Existente| [http](https://nucleo-digital.github.io/sp-mapas/07_Coletor_Tronco_Existente.geojson) | [embed](https://github.com/nucleo-digital/sp-mapas/blob/master/mapas/07_Coletor_Tronco_Existente.geojson) |
|07_Coletor_Tronco_Planejado_2015| [http](https://nucleo-digital.github.io/sp-mapas/07_Coletor_Tronco_Planejado_2015.geojson) | [embed](https://github.com/nucleo-digital/sp-mapas/blob/master/mapas/07_Coletor_Tronco_Planejado_2015.geojson) |
|07_Coletor_Tronco_Planejado_2018| [http](https://nucleo-digital.github.io/sp-mapas/07_Coletor_Tronco_Planejado_2018.geojson) | [embed](https://github.com/nucleo-digital/sp-mapas/blob/master/mapas/07_Coletor_Tronco_Planejado_2018.geojson) |
|07_Coletor_Tronco_Planejado_pos_2018| [http](https://nucleo-digital.github.io/sp-mapas/07_Coletor_Tronco_Planejado_pos_2018.geojson) | [embed](https://github.com/nucleo-digital/sp-mapas/blob/master/mapas/07_Coletor_Tronco_Planejado_pos_2018.geojson) |
|07_Estacao_Tratamento_Esgoto_Existente| [http](https://nucleo-digital.github.io/sp-mapas/07_Estacao_Tratamento_Esgoto_Existente.geojson) | [embed](https://github.com/nucleo-digital/sp-mapas/blob/master/mapas/07_Estacao_Tratamento_Esgoto_Existente.geojson) |
|07_Interceptor_Existente| [http](https://nucleo-digital.github.io/sp-mapas/07_Interceptor_Existente.geojson) | [embed](https://github.com/nucleo-digital/sp-mapas/blob/master/mapas/07_Interceptor_Existente.geojson) |
|07_Interceptor_Planejado_2015| [http](https://nucleo-digital.github.io/sp-mapas/07_Interceptor_Planejado_2015.geojson) | [embed](https://github.com/nucleo-digital/sp-mapas/blob/master/mapas/07_Interceptor_Planejado_2015.geojson) |
|07_Interceptor_Planejado_2018| [http](https://nucleo-digital.github.io/sp-mapas/07_Interceptor_Planejado_2018.geojson) | [embed](https://github.com/nucleo-digital/sp-mapas/blob/master/mapas/07_Interceptor_Planejado_2018.geojson) |
|07_Sist_Esgotamento_Sanitario_Isolado_Planejado| [http](https://nucleo-digital.github.io/sp-mapas/07_Sist_Esgotamento_Sanitario_Isolado_Planejado.geojson) | [embed](https://github.com/nucleo-digital/sp-mapas/blob/master/mapas/07_Sist_Esgotamento_Sanitario_Isolado_Planejado.geojson) |
|08_Melhoramentos_Viarios_abrir| [http](https://nucleo-digital.github.io/sp-mapas/08_Melhoramentos_Viarios_abrir.geojson) | [embed](https://github.com/nucleo-digital/sp-mapas/blob/master/mapas/08_Melhoramentos_Viarios_abrir.geojson) |
|08_Melhoramentos_Viarios_melhorar| [http](https://nucleo-digital.github.io/sp-mapas/08_Melhoramentos_Viarios_melhorar.geojson) | [embed](https://github.com/nucleo-digital/sp-mapas/blob/master/mapas/08_Melhoramentos_Viarios_melhorar.geojson) |
|08_Melhoramentos_Viarios_pontual| [http](https://nucleo-digital.github.io/sp-mapas/08_Melhoramentos_Viarios_pontual.geojson) | [embed](https://github.com/nucleo-digital/sp-mapas/blob/master/mapas/08_Melhoramentos_Viarios_pontual.geojson) |
|08_Rodoanel| [http](https://nucleo-digital.github.io/sp-mapas/08_Rodoanel.geojson) | [embed](https://github.com/nucleo-digital/sp-mapas/blob/master/mapas/08_Rodoanel.geojson) |
|09_Corredor_Onibus_Intermunicipal_Existente| [http](https://nucleo-digital.github.io/sp-mapas/09_Corredor_Onibus_Intermunicipal_Existente.geojson) | [embed](https://github.com/nucleo-digital/sp-mapas/blob/master/mapas/09_Corredor_Onibus_Intermunicipal_Existente.geojson) |
|09_Corredor_Onibus_Intermunicipal_Planejado_2016| [http](https://nucleo-digital.github.io/sp-mapas/09_Corredor_Onibus_Intermunicipal_Planejado_2016.geojson) | [embed](https://github.com/nucleo-digital/sp-mapas/blob/master/mapas/09_Corredor_Onibus_Intermunicipal_Planejado_2016.geojson) |
|09_Corredor_onibus_municipal_existente| [http](https://nucleo-digital.github.io/sp-mapas/09_Corredor_onibus_municipal_existente.geojson) | [embed](https://github.com/nucleo-digital/sp-mapas/blob/master/mapas/09_Corredor_onibus_municipal_existente.geojson) |
|09_Corredor_onibus_municipal_planejado_2016| [http](https://nucleo-digital.github.io/sp-mapas/09_Corredor_onibus_municipal_planejado_2016.geojson) | [embed](https://github.com/nucleo-digital/sp-mapas/blob/master/mapas/09_Corredor_onibus_municipal_planejado_2016.geojson) |
|09_Corredor_Onibus_Planejado_2025| [http](https://nucleo-digital.github.io/sp-mapas/09_Corredor_Onibus_Planejado_2025.geojson) | [embed](https://github.com/nucleo-digital/sp-mapas/blob/master/mapas/09_Corredor_Onibus_Planejado_2025.geojson) |
|09_Metro_Estacao_Existente| [http](https://nucleo-digital.github.io/sp-mapas/09_Metro_Estacao_Existente.geojson) | [embed](https://github.com/nucleo-digital/sp-mapas/blob/master/mapas/09_Metro_Estacao_Existente.geojson) |
|09_Metro_Estacao_Planejada_2016| [http](https://nucleo-digital.github.io/sp-mapas/09_Metro_Estacao_Planejada_2016.geojson) | [embed](https://github.com/nucleo-digital/sp-mapas/blob/master/mapas/09_Metro_Estacao_Planejada_2016.geojson) |
|09_Metro_Linha_Existente| [http](https://nucleo-digital.github.io/sp-mapas/09_Metro_Linha_Existente.geojson) | [embed](https://github.com/nucleo-digital/sp-mapas/blob/master/mapas/09_Metro_Linha_Existente.geojson) |
|09_Metro_Linha_Planejada_2016| [http](https://nucleo-digital.github.io/sp-mapas/09_Metro_Linha_Planejada_2016.geojson) | [embed](https://github.com/nucleo-digital/sp-mapas/blob/master/mapas/09_Metro_Linha_Planejada_2016.geojson) |
|09_Metro_Linha_Planejada_2025| [http](https://nucleo-digital.github.io/sp-mapas/09_Metro_Linha_Planejada_2025.geojson) | [embed](https://github.com/nucleo-digital/sp-mapas/blob/master/mapas/09_Metro_Linha_Planejada_2025.geojson) |
|09_Modal_a_ser_definido_2025| [http](https://nucleo-digital.github.io/sp-mapas/09_Modal_a_ser_definido_2025.geojson) | [embed](https://github.com/nucleo-digital/sp-mapas/blob/master/mapas/09_Modal_a_ser_definido_2025.geojson) |
|09_Monotriho_Linha_Planejada_2016| [http](https://nucleo-digital.github.io/sp-mapas/09_Monotriho_Linha_Planejada_2016.geojson) | [embed](https://github.com/nucleo-digital/sp-mapas/blob/master/mapas/09_Monotriho_Linha_Planejada_2016.geojson) |
|09_Monotrilho_Estacao_Planejada_2016| [http](https://nucleo-digital.github.io/sp-mapas/09_Monotrilho_Estacao_Planejada_2016.geojson) | [embed](https://github.com/nucleo-digital/sp-mapas/blob/master/mapas/09_Monotrilho_Estacao_Planejada_2016.geojson) |
|09_Monotrilho_Linha_Planejada_2025| [http](https://nucleo-digital.github.io/sp-mapas/09_Monotrilho_Linha_Planejada_2025.geojson) | [embed](https://github.com/nucleo-digital/sp-mapas/blob/master/mapas/09_Monotrilho_Linha_Planejada_2025.geojson) |
|09_Terminal_onibus_existente| [http](https://nucleo-digital.github.io/sp-mapas/09_Terminal_onibus_existente.geojson) | [embed](https://github.com/nucleo-digital/sp-mapas/blob/master/mapas/09_Terminal_onibus_existente.geojson) |
|09_Terminal_onibus_planejado_2016| [http](https://nucleo-digital.github.io/sp-mapas/09_Terminal_onibus_planejado_2016.geojson) | [embed](https://github.com/nucleo-digital/sp-mapas/blob/master/mapas/09_Terminal_onibus_planejado_2016.geojson) |
|09_Terminal_Onibus_Planejado_2025| [http](https://nucleo-digital.github.io/sp-mapas/09_Terminal_Onibus_Planejado_2025.geojson) | [embed](https://github.com/nucleo-digital/sp-mapas/blob/master/mapas/09_Terminal_Onibus_Planejado_2025.geojson) |
|09_Trem_Estacao_Existente| [http](https://nucleo-digital.github.io/sp-mapas/09_Trem_Estacao_Existente.geojson) | [embed](https://github.com/nucleo-digital/sp-mapas/blob/master/mapas/09_Trem_Estacao_Existente.geojson) |
|09_Trem_Linha_Existente| [http](https://nucleo-digital.github.io/sp-mapas/09_Trem_Linha_Existente.geojson) | [embed](https://github.com/nucleo-digital/sp-mapas/blob/master/mapas/09_Trem_Linha_Existente.geojson) |
|09_Trem_Linha_Planejada_2025| [http](https://nucleo-digital.github.io/sp-mapas/09_Trem_Linha_Planejada_2025.geojson) | [embed](https://github.com/nucleo-digital/sp-mapas/blob/master/mapas/09_Trem_Linha_Planejada_2025.geojson) |
|10_Areas_Risco_Geologico_Assentamento_Precario| [http](https://nucleo-digital.github.io/sp-mapas/10_Areas_Risco_Geologico_Assentamento_Precario.geojson) | [embed](https://github.com/nucleo-digital/sp-mapas/blob/master/mapas/10_Areas_Risco_Geologico_Assentamento_Precario.geojson) |
|11_Cupece| [http](https://nucleo-digital.github.io/sp-mapas/11_Cupece.geojson) | [embed](https://github.com/nucleo-digital/sp-mapas/blob/master/mapas/11_Cupece.geojson) |
|11_Fernao_Dias| [http](https://nucleo-digital.github.io/sp-mapas/11_Fernao_Dias.geojson) | [embed](https://github.com/nucleo-digital/sp-mapas/blob/master/mapas/11_Fernao_Dias.geojson) |
|11_Jacu_Pessego| [http](https://nucleo-digital.github.io/sp-mapas/11_Jacu_Pessego.geojson) | [embed](https://github.com/nucleo-digital/sp-mapas/blob/master/mapas/11_Jacu_Pessego.geojson) |
|11_Raimundo| [http](https://nucleo-digital.github.io/sp-mapas/11_Raimundo.geojson) | [embed](https://github.com/nucleo-digital/sp-mapas/blob/master/mapas/11_Raimundo.geojson) |
|12_Em_avaliacao| [http](https://nucleo-digital.github.io/sp-mapas/12_Em_avaliacao.geojson) | [embed](https://github.com/nucleo-digital/sp-mapas/blob/master/mapas/12_Em_avaliacao.geojson) |
|12_Existentes| [http](https://nucleo-digital.github.io/sp-mapas/12_Existentes.geojson) | [embed](https://github.com/nucleo-digital/sp-mapas/blob/master/mapas/12_Existentes.geojson) |
|12_Planejados| [http](https://nucleo-digital.github.io/sp-mapas/12_Planejados.geojson) | [embed](https://github.com/nucleo-digital/sp-mapas/blob/master/mapas/12_Planejados.geojson) |
|13_Atendimento_ao_Cidadao| [http](https://nucleo-digital.github.io/sp-mapas/13_Atendimento_ao_Cidadao.geojson) | [embed](https://github.com/nucleo-digital/sp-mapas/blob/master/mapas/13_Atendimento_ao_Cidadao.geojson) |
|13_Cultura| [http](https://nucleo-digital.github.io/sp-mapas/13_Cultura.geojson) | [embed](https://github.com/nucleo-digital/sp-mapas/blob/master/mapas/13_Cultura.geojson) |
|13_Desenvolvimento_Economico| [http](https://nucleo-digital.github.io/sp-mapas/13_Desenvolvimento_Economico.geojson) | [embed](https://github.com/nucleo-digital/sp-mapas/blob/master/mapas/13_Desenvolvimento_Economico.geojson) |
|13_Desenvolvimento_Social| [http](https://nucleo-digital.github.io/sp-mapas/13_Desenvolvimento_Social.geojson) | [embed](https://github.com/nucleo-digital/sp-mapas/blob/master/mapas/13_Desenvolvimento_Social.geojson) |
|13_Desenvolvimento_Urbano| [http](https://nucleo-digital.github.io/sp-mapas/13_Desenvolvimento_Urbano.geojson) | [embed](https://github.com/nucleo-digital/sp-mapas/blob/master/mapas/13_Desenvolvimento_Urbano.geojson) |
|13_Direitos_Humanos_e_Cidadania| [http](https://nucleo-digital.github.io/sp-mapas/13_Direitos_Humanos_e_Cidadania.geojson) | [embed](https://github.com/nucleo-digital/sp-mapas/blob/master/mapas/13_Direitos_Humanos_e_Cidadania.geojson) |
|13_Drenagem| [http](https://nucleo-digital.github.io/sp-mapas/13_Drenagem.geojson) | [embed](https://github.com/nucleo-digital/sp-mapas/blob/master/mapas/13_Drenagem.geojson) |
|13_Educacao| [http](https://nucleo-digital.github.io/sp-mapas/13_Educacao.geojson) | [embed](https://github.com/nucleo-digital/sp-mapas/blob/master/mapas/13_Educacao.geojson) |
|13_Espacos_Publicos| [http](https://nucleo-digital.github.io/sp-mapas/13_Espacos_Publicos.geojson) | [embed](https://github.com/nucleo-digital/sp-mapas/blob/master/mapas/13_Espacos_Publicos.geojson) |
|13_Esporte_e_Lazer| [http](https://nucleo-digital.github.io/sp-mapas/13_Esporte_e_Lazer.geojson) | [embed](https://github.com/nucleo-digital/sp-mapas/blob/master/mapas/13_Esporte_e_Lazer.geojson) |
|13_Habitacao| [http](https://nucleo-digital.github.io/sp-mapas/13_Habitacao.geojson) | [embed](https://github.com/nucleo-digital/sp-mapas/blob/master/mapas/13_Habitacao.geojson) |
|13_Meio_Ambiente| [http](https://nucleo-digital.github.io/sp-mapas/13_Meio_Ambiente.geojson) | [embed](https://github.com/nucleo-digital/sp-mapas/blob/master/mapas/13_Meio_Ambiente.geojson) |
|13_Mobilidade| [http](https://nucleo-digital.github.io/sp-mapas/13_Mobilidade.geojson) | [embed](https://github.com/nucleo-digital/sp-mapas/blob/master/mapas/13_Mobilidade.geojson) |
|13_Participacao_e_Transparencia| [http](https://nucleo-digital.github.io/sp-mapas/13_Participacao_e_Transparencia.geojson) | [embed](https://github.com/nucleo-digital/sp-mapas/blob/master/mapas/13_Participacao_e_Transparencia.geojson) |
|13_Pessoas_com_Deficiencia| [http](https://nucleo-digital.github.io/sp-mapas/13_Pessoas_com_Deficiencia.geojson) | [embed](https://github.com/nucleo-digital/sp-mapas/blob/master/mapas/13_Pessoas_com_Deficiencia.geojson) |
|13_Populacao_Idosa| [http](https://nucleo-digital.github.io/sp-mapas/13_Populacao_Idosa.geojson) | [embed](https://github.com/nucleo-digital/sp-mapas/blob/master/mapas/13_Populacao_Idosa.geojson) |
|13_Residuos_Solidos| [http](https://nucleo-digital.github.io/sp-mapas/13_Residuos_Solidos.geojson) | [embed](https://github.com/nucleo-digital/sp-mapas/blob/master/mapas/13_Residuos_Solidos.geojson) |
|13_Saude| [http](https://nucleo-digital.github.io/sp-mapas/13_Saude.geojson) | [embed](https://github.com/nucleo-digital/sp-mapas/blob/master/mapas/13_Saude.geojson) |
|13_Seguranca| [http](https://nucleo-digital.github.io/sp-mapas/13_Seguranca.geojson) | [embed](https://github.com/nucleo-digital/sp-mapas/blob/master/mapas/13_Seguranca.geojson) |
|13_Tecnologia_e_Inovacao| [http](https://nucleo-digital.github.io/sp-mapas/13_Tecnologia_e_Inovacao.geojson) | [embed](https://github.com/nucleo-digital/sp-mapas/blob/master/mapas/13_Tecnologia_e_Inovacao.geojson) |
|14_APA_Bobore_Colonia| [http](https://nucleo-digital.github.io/sp-mapas/14_APA_Bobore_Colonia.geojson) | [embed](https://github.com/nucleo-digital/sp-mapas/blob/master/mapas/14_APA_Bobore_Colonia.geojson) |
|14_APA_Capivari_Monos| [http](https://nucleo-digital.github.io/sp-mapas/14_APA_Capivari_Monos.geojson) | [embed](https://github.com/nucleo-digital/sp-mapas/blob/master/mapas/14_APA_Capivari_Monos.geojson) |
|14_APA_Estadual| [http](https://nucleo-digital.github.io/sp-mapas/14_APA_Estadual.geojson) | [embed](https://github.com/nucleo-digital/sp-mapas/blob/master/mapas/14_APA_Estadual.geojson) |
|14_Area_Protecao_Recuperacao_Mananciais_RMSP| [http](https://nucleo-digital.github.io/sp-mapas/14_Area_Protecao_Recuperacao_Mananciais_RMSP.geojson) | [embed](https://github.com/nucleo-digital/sp-mapas/blob/master/mapas/14_Area_Protecao_Recuperacao_Mananciais_RMSP.geojson) |
|15_RPPN| [http](https://nucleo-digital.github.io/sp-mapas/15_RPPN.geojson) | [embed](https://github.com/nucleo-digital/sp-mapas/blob/master/mapas/15_RPPN.geojson) |
|15_Terra_Indigena_Existente| [http](https://nucleo-digital.github.io/sp-mapas/15_Terra_Indigena_Existente.geojson) | [embed](https://github.com/nucleo-digital/sp-mapas/blob/master/mapas/15_Terra_Indigena_Existente.geojson) |
|15_Terra_Indigena_Homologacao_RMSP| [http](https://nucleo-digital.github.io/sp-mapas/15_Terra_Indigena_Homologacao_RMSP.geojson) | [embed](https://github.com/nucleo-digital/sp-mapas/blob/master/mapas/15_Terra_Indigena_Homologacao_RMSP.geojson) |
|15_Viario_Estrutural_N1| [http](https://nucleo-digital.github.io/sp-mapas/15_Viario_Estrutural_N1.geojson) | [embed](https://github.com/nucleo-digital/sp-mapas/blob/master/mapas/15_Viario_Estrutural_N1.geojson) |
|perimetro-expansao| [http](https://nucleo-digital.github.io/sp-mapas/arco-tiete/perimetro-expansao.geojson) | [embed](https://github.com/nucleo-digital/sp-mapas/blob/master/mapas/arco-tiete/perimetro-expansao.geojson) |
|Operacoes_Urbanas| [http](https://nucleo-digital.github.io/sp-mapas/Operacoes_Urbanas.geojson) | [embed](https://github.com/nucleo-digital/sp-mapas/blob/master/mapas/Operacoes_Urbanas.geojson) |

> A lista de mapas é gerada com o build -> `npm run build`<br> Isto deve criar o arquivo `dist/README.md`


## Contribua incluindo novos mapas
1. Crie um fork deste projeto
2. Adicione um arquivo `.geojson` dentro do diretório `mapas`
3. Envie um pull request

## Fonte
 - [Gestão Urbana SP](https://gestaourbana.prefeitura.sp.gov.br/)
 - [GeoSampa SP](http://geosampa.prefeitura.sp.gov.br/)

Inspirado na iniciativa de [Washington-DC](https://github.com/benbalter/dc-maps).
