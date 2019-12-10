# SP Mapas [![Build Status](https://travis-ci.org/nucleo-digital/sp-mapas.svg?branch=master)](https://travis-ci.org/nucleo-digital/sp-mapas)

## Mapas de São Paulo no formato GeoJSON
Este repositório disponibiliza em formato geojson os arquivos produzidos pela prefeitura de Sâo Paulo e publicado nos portais [Gestão Urbana SP](http://geosampa.prefeitura.sp.gov.br/) e [GeoSampa SP](https://gestaourbana.prefeitura.sp.gov.br/).

## Índice
 1. [Exemplo de utilização com requisição http](#requisição-http)
 2. [Exemplos de utlização com uma cópias locais](#cópia-local)
 3. [Criando embeds pelo github](#embed-de-mapa-pelo-github)
 4. [Lista de mapas](#lista-de-mapas)
 5. [Instruções para contribuir](#contribua-incluindo-novos-mapas)
 6. [Fonte](#fonte)
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

<!--
<!-- ## Processo
1. Navegue por http://gestaourbana.prefeitura.sp.gov.br/aquivos-da-lei/
2. Encontre o arquivo no formato "ESRI Shapefile"
3. Baixe o arquivo .zip
4. Use ogr2ogr para converter para `.geojson` como o `crs:84` SRS

## Conversão em massa
1. Siga os passos acima e baixe um ou mais arquivos shapefiles zipados
2. Rode [este shell script](https://gist.github.com/benbalter/5858851)

## Necessário para o conversor funcionar
Para converter arquivos shapefiles para geojson, você irá precisar [ogr2ogr](http://www.gdal.org/ogr2ogr.html). No OS X,
o jeito mais fácil de conseguir ele é com o [Homebrew](http://mxcl.github.io/homebrew/), ao rodar o comando `brew install gdal`. -->

<!-- 
### Processo de conversão shp -> geojson
Instruções para converter arquivos shp em geojson

> **Pré-requisitos**: nodejs e git

1. Clone este projeto e instale as dependências 
```bash
# Clone este repositório
git clone https://github.com/nucleo-digital/sp-mapas.git

# Vá para o diretório e instale as dependências deste projeto:
cd sp-mapas
npm install
```
2. Navegue em [Gestão Urbana SP](https://gestaourbana.prefeitura.sp.gov.br/) ou [GeoSampa SP](http://geosampa.prefeitura.sp.gov.br/)
3. Baixe arquivos `.zip` geralmente denominados `SHP` ou `ESRI Shapefile`.
4. Jogue os arquivos no diretório `shapes`
5. Rode o seguinte comando para converter os arquivos: 
```bash
npm run shp2geojson
``` -->

## Lista de mapas
| nome | json | embed |
| - |:-:|:-:|
|01A_Zona_Rural| [url](https://nucleo-digital.github.io/sp-mapas/01A_Zona_Rural.geojson) | [pré-visualização](https://github.com/nucleo-digital/sp-mapas/blob/master/mapas/01A_Zona_Rural.geojson) |
|01A_Zona_Urbana| [url](https://nucleo-digital.github.io/sp-mapas/01A_Zona_Urbana.geojson) | [pré-visualização](https://github.com/nucleo-digital/sp-mapas/blob/master/mapas/01A_Zona_Urbana.geojson) |
|01_Macrozona_Estruturacao_Qualificacao_Urbana| [url](https://nucleo-digital.github.io/sp-mapas/01_Macrozona_Estruturacao_Qualificacao_Urbana.geojson) | [pré-visualização](https://github.com/nucleo-digital/sp-mapas/blob/master/mapas/01_Macrozona_Estruturacao_Qualificacao_Urbana.geojson) |
|01_Macrozona_Protecao_Recuperacao_Ambiental| [url](https://nucleo-digital.github.io/sp-mapas/01_Macrozona_Protecao_Recuperacao_Ambiental.geojson) | [pré-visualização](https://github.com/nucleo-digital/sp-mapas/blob/master/mapas/01_Macrozona_Protecao_Recuperacao_Ambiental.geojson) |
|02A_Subsetores_Arco_Jacu-Pessego| [url](https://nucleo-digital.github.io/sp-mapas/02A_Subsetores_Arco_Jacu-Pessego.geojson) | [pré-visualização](https://github.com/nucleo-digital/sp-mapas/blob/master/mapas/02A_Subsetores_Arco_Jacu-Pessego.geojson) |
|02A_Subsetores_Arco_Jurubatuba| [url](https://nucleo-digital.github.io/sp-mapas/02A_Subsetores_Arco_Jurubatuba.geojson) | [pré-visualização](https://github.com/nucleo-digital/sp-mapas/blob/master/mapas/02A_Subsetores_Arco_Jurubatuba.geojson) |
|02A_Subsetores_Arco_Leste| [url](https://nucleo-digital.github.io/sp-mapas/02A_Subsetores_Arco_Leste.geojson) | [pré-visualização](https://github.com/nucleo-digital/sp-mapas/blob/master/mapas/02A_Subsetores_Arco_Leste.geojson) |
|02A_Subsetores_Arco_Pinheiros| [url](https://nucleo-digital.github.io/sp-mapas/02A_Subsetores_Arco_Pinheiros.geojson) | [pré-visualização](https://github.com/nucleo-digital/sp-mapas/blob/master/mapas/02A_Subsetores_Arco_Pinheiros.geojson) |
|02A_Subsetores_Arco_Tamanduatei| [url](https://nucleo-digital.github.io/sp-mapas/02A_Subsetores_Arco_Tamanduatei.geojson) | [pré-visualização](https://github.com/nucleo-digital/sp-mapas/blob/master/mapas/02A_Subsetores_Arco_Tamanduatei.geojson) |
|02A_Subsetores_Arco_Tiete| [url](https://nucleo-digital.github.io/sp-mapas/02A_Subsetores_Arco_Tiete.geojson) | [pré-visualização](https://github.com/nucleo-digital/sp-mapas/blob/master/mapas/02A_Subsetores_Arco_Tiete.geojson) |
|02A_Subsetores_Central| [url](https://nucleo-digital.github.io/sp-mapas/02A_Subsetores_Central.geojson) | [pré-visualização](https://github.com/nucleo-digital/sp-mapas/blob/master/mapas/02A_Subsetores_Central.geojson) |
|02A_Subsetores_Eixo_Cupece| [url](https://nucleo-digital.github.io/sp-mapas/02A_Subsetores_Eixo_Cupece.geojson) | [pré-visualização](https://github.com/nucleo-digital/sp-mapas/blob/master/mapas/02A_Subsetores_Eixo_Cupece.geojson) |
|02A_Subsetores_Eixo_FernaoDias| [url](https://nucleo-digital.github.io/sp-mapas/02A_Subsetores_Eixo_FernaoDias.geojson) | [pré-visualização](https://github.com/nucleo-digital/sp-mapas/blob/master/mapas/02A_Subsetores_Eixo_FernaoDias.geojson) |
|02A_Subsetores_Eixo_Noroeste| [url](https://nucleo-digital.github.io/sp-mapas/02A_Subsetores_Eixo_Noroeste.geojson) | [pré-visualização](https://github.com/nucleo-digital/sp-mapas/blob/master/mapas/02A_Subsetores_Eixo_Noroeste.geojson) |
|02A_Subsetores_FariaLima-AguasEspraiadas-ChucriZaidan| [url](https://nucleo-digital.github.io/sp-mapas/02A_Subsetores_FariaLima-AguasEspraiadas-ChucriZaidan.geojson) | [pré-visualização](https://github.com/nucleo-digital/sp-mapas/blob/master/mapas/02A_Subsetores_FariaLima-AguasEspraiadas-ChucriZaidan.geojson) |
|02_Macroarea_Contencao_Urbana_Uso_Sustentavel| [url](https://nucleo-digital.github.io/sp-mapas/02_Macroarea_Contencao_Urbana_Uso_Sustentavel.geojson) | [pré-visualização](https://github.com/nucleo-digital/sp-mapas/blob/master/mapas/02_Macroarea_Contencao_Urbana_Uso_Sustentavel.geojson) |
|02_Macroarea_Controle_Qualificacao_Urbana_Ambiental| [url](https://nucleo-digital.github.io/sp-mapas/02_Macroarea_Controle_Qualificacao_Urbana_Ambiental.geojson) | [pré-visualização](https://github.com/nucleo-digital/sp-mapas/blob/master/mapas/02_Macroarea_Controle_Qualificacao_Urbana_Ambiental.geojson) |
|02_Macroarea_Estruturacao_Metropolitana| [url](https://nucleo-digital.github.io/sp-mapas/02_Macroarea_Estruturacao_Metropolitana.geojson) | [pré-visualização](https://github.com/nucleo-digital/sp-mapas/blob/master/mapas/02_Macroarea_Estruturacao_Metropolitana.geojson) |
|02_Macroarea_Preservacao_Ecossistemas_Naturais| [url](https://nucleo-digital.github.io/sp-mapas/02_Macroarea_Preservacao_Ecossistemas_Naturais.geojson) | [pré-visualização](https://github.com/nucleo-digital/sp-mapas/blob/master/mapas/02_Macroarea_Preservacao_Ecossistemas_Naturais.geojson) |
|02_Macroarea_Qualificacao_Urbanizacao| [url](https://nucleo-digital.github.io/sp-mapas/02_Macroarea_Qualificacao_Urbanizacao.geojson) | [pré-visualização](https://github.com/nucleo-digital/sp-mapas/blob/master/mapas/02_Macroarea_Qualificacao_Urbanizacao.geojson) |
|02_Macroarea_Reducao_Vulnerabilidade_Urbana| [url](https://nucleo-digital.github.io/sp-mapas/02_Macroarea_Reducao_Vulnerabilidade_Urbana.geojson) | [pré-visualização](https://github.com/nucleo-digital/sp-mapas/blob/master/mapas/02_Macroarea_Reducao_Vulnerabilidade_Urbana.geojson) |
|02_Macroarea_Reducao_Vulnerabilidade_Urbana_Recuperacao_Ambiental| [url](https://nucleo-digital.github.io/sp-mapas/02_Macroarea_Reducao_Vulnerabilidade_Urbana_Recuperacao_Ambiental.geojson) | [pré-visualização](https://github.com/nucleo-digital/sp-mapas/blob/master/mapas/02_Macroarea_Reducao_Vulnerabilidade_Urbana_Recuperacao_Ambiental.geojson) |
|02_Macroarea_Urbanizacao_Consolidada| [url](https://nucleo-digital.github.io/sp-mapas/02_Macroarea_Urbanizacao_Consolidada.geojson) | [pré-visualização](https://github.com/nucleo-digital/sp-mapas/blob/master/mapas/02_Macroarea_Urbanizacao_Consolidada.geojson) |
|03A_Eixo_Previsto| [url](https://nucleo-digital.github.io/sp-mapas/03A_Eixo_Previsto.geojson) | [pré-visualização](https://github.com/nucleo-digital/sp-mapas/blob/master/mapas/03A_Eixo_Previsto.geojson) |
|03_Eixo_Existente| [url](https://nucleo-digital.github.io/sp-mapas/03_Eixo_Existente.geojson) | [pré-visualização](https://github.com/nucleo-digital/sp-mapas/blob/master/mapas/03_Eixo_Existente.geojson) |
|04A_ZEIS2| [url](https://nucleo-digital.github.io/sp-mapas/04A_ZEIS2.geojson) | [pré-visualização](https://github.com/nucleo-digital/sp-mapas/blob/master/mapas/04A_ZEIS2.geojson) |
|04A_ZEIS3| [url](https://nucleo-digital.github.io/sp-mapas/04A_ZEIS3.geojson) | [pré-visualização](https://github.com/nucleo-digital/sp-mapas/blob/master/mapas/04A_ZEIS3.geojson) |
|04A_ZEIS4| [url](https://nucleo-digital.github.io/sp-mapas/04A_ZEIS4.geojson) | [pré-visualização](https://github.com/nucleo-digital/sp-mapas/blob/master/mapas/04A_ZEIS4.geojson) |
|04A_ZEIS5| [url](https://nucleo-digital.github.io/sp-mapas/04A_ZEIS5.geojson) | [pré-visualização](https://github.com/nucleo-digital/sp-mapas/blob/master/mapas/04A_ZEIS5.geojson) |
|04_ZEIS1| [url](https://nucleo-digital.github.io/sp-mapas/04_ZEIS1.geojson) | [pré-visualização](https://github.com/nucleo-digital/sp-mapas/blob/master/mapas/04_ZEIS1.geojson) |
|05_Bacias_Hidrograficas| [url](https://nucleo-digital.github.io/sp-mapas/05_Bacias_Hidrograficas.geojson) | [pré-visualização](https://github.com/nucleo-digital/sp-mapas/blob/master/mapas/05_Bacias_Hidrograficas.geojson) |
|05_Hidrografia_Rios| [url](https://nucleo-digital.github.io/sp-mapas/05_Hidrografia_Rios.geojson) | [pré-visualização](https://github.com/nucleo-digital/sp-mapas/blob/master/mapas/05_Hidrografia_Rios.geojson) |
|05_Parques_Estaduais_Protecao_Integral| [url](https://nucleo-digital.github.io/sp-mapas/05_Parques_Estaduais_Protecao_Integral.geojson) | [pré-visualização](https://github.com/nucleo-digital/sp-mapas/blob/master/mapas/05_Parques_Estaduais_Protecao_Integral.geojson) |
|05_Parques_Estaduais_Urbanos| [url](https://nucleo-digital.github.io/sp-mapas/05_Parques_Estaduais_Urbanos.geojson) | [pré-visualização](https://github.com/nucleo-digital/sp-mapas/blob/master/mapas/05_Parques_Estaduais_Urbanos.geojson) |
|05_Parques_Municipais_existentes| [url](https://nucleo-digital.github.io/sp-mapas/05_Parques_Municipais_existentes.geojson) | [pré-visualização](https://github.com/nucleo-digital/sp-mapas/blob/master/mapas/05_Parques_Municipais_existentes.geojson) |
|05_Parques_Municipais_implantacao| [url](https://nucleo-digital.github.io/sp-mapas/05_Parques_Municipais_implantacao.geojson) | [pré-visualização](https://github.com/nucleo-digital/sp-mapas/blob/master/mapas/05_Parques_Municipais_implantacao.geojson) |
|05_Parques_Municipais_planejamento| [url](https://nucleo-digital.github.io/sp-mapas/05_Parques_Municipais_planejamento.geojson) | [pré-visualização](https://github.com/nucleo-digital/sp-mapas/blob/master/mapas/05_Parques_Municipais_planejamento.geojson) |
|06_Adutora_Planejada| [url](https://nucleo-digital.github.io/sp-mapas/06_Adutora_Planejada.geojson) | [pré-visualização](https://github.com/nucleo-digital/sp-mapas/blob/master/mapas/06_Adutora_Planejada.geojson) |
|06_Centro_Reservacao_Planejado| [url](https://nucleo-digital.github.io/sp-mapas/06_Centro_Reservacao_Planejado.geojson) | [pré-visualização](https://github.com/nucleo-digital/sp-mapas/blob/master/mapas/06_Centro_Reservacao_Planejado.geojson) |
|06_Elevatoria_Planejada| [url](https://nucleo-digital.github.io/sp-mapas/06_Elevatoria_Planejada.geojson) | [pré-visualização](https://github.com/nucleo-digital/sp-mapas/blob/master/mapas/06_Elevatoria_Planejada.geojson) |
|06_Estacao_Tratamento_Agua_Existente| [url](https://nucleo-digital.github.io/sp-mapas/06_Estacao_Tratamento_Agua_Existente.geojson) | [pré-visualização](https://github.com/nucleo-digital/sp-mapas/blob/master/mapas/06_Estacao_Tratamento_Agua_Existente.geojson) |
|06_Sistema_Abastecimento_Agua_Isolado_Planejado| [url](https://nucleo-digital.github.io/sp-mapas/06_Sistema_Abastecimento_Agua_Isolado_Planejado.geojson) | [pré-visualização](https://github.com/nucleo-digital/sp-mapas/blob/master/mapas/06_Sistema_Abastecimento_Agua_Isolado_Planejado.geojson) |
|06_Sistema_Adutor_Metropolitano_Existente| [url](https://nucleo-digital.github.io/sp-mapas/06_Sistema_Adutor_Metropolitano_Existente.geojson) | [pré-visualização](https://github.com/nucleo-digital/sp-mapas/blob/master/mapas/06_Sistema_Adutor_Metropolitano_Existente.geojson) |
|07_Coletor_Tronco_Existente| [url](https://nucleo-digital.github.io/sp-mapas/07_Coletor_Tronco_Existente.geojson) | [pré-visualização](https://github.com/nucleo-digital/sp-mapas/blob/master/mapas/07_Coletor_Tronco_Existente.geojson) |
|07_Coletor_Tronco_Planejado_2015| [url](https://nucleo-digital.github.io/sp-mapas/07_Coletor_Tronco_Planejado_2015.geojson) | [pré-visualização](https://github.com/nucleo-digital/sp-mapas/blob/master/mapas/07_Coletor_Tronco_Planejado_2015.geojson) |
|07_Coletor_Tronco_Planejado_2018| [url](https://nucleo-digital.github.io/sp-mapas/07_Coletor_Tronco_Planejado_2018.geojson) | [pré-visualização](https://github.com/nucleo-digital/sp-mapas/blob/master/mapas/07_Coletor_Tronco_Planejado_2018.geojson) |
|07_Coletor_Tronco_Planejado_pos_2018| [url](https://nucleo-digital.github.io/sp-mapas/07_Coletor_Tronco_Planejado_pos_2018.geojson) | [pré-visualização](https://github.com/nucleo-digital/sp-mapas/blob/master/mapas/07_Coletor_Tronco_Planejado_pos_2018.geojson) |
|07_Estacao_Tratamento_Esgoto_Existente| [url](https://nucleo-digital.github.io/sp-mapas/07_Estacao_Tratamento_Esgoto_Existente.geojson) | [pré-visualização](https://github.com/nucleo-digital/sp-mapas/blob/master/mapas/07_Estacao_Tratamento_Esgoto_Existente.geojson) |
|07_Interceptor_Existente| [url](https://nucleo-digital.github.io/sp-mapas/07_Interceptor_Existente.geojson) | [pré-visualização](https://github.com/nucleo-digital/sp-mapas/blob/master/mapas/07_Interceptor_Existente.geojson) |
|07_Interceptor_Planejado_2015| [url](https://nucleo-digital.github.io/sp-mapas/07_Interceptor_Planejado_2015.geojson) | [pré-visualização](https://github.com/nucleo-digital/sp-mapas/blob/master/mapas/07_Interceptor_Planejado_2015.geojson) |
|07_Interceptor_Planejado_2018| [url](https://nucleo-digital.github.io/sp-mapas/07_Interceptor_Planejado_2018.geojson) | [pré-visualização](https://github.com/nucleo-digital/sp-mapas/blob/master/mapas/07_Interceptor_Planejado_2018.geojson) |
|07_Sist_Esgotamento_Sanitario_Isolado_Planejado| [url](https://nucleo-digital.github.io/sp-mapas/07_Sist_Esgotamento_Sanitario_Isolado_Planejado.geojson) | [pré-visualização](https://github.com/nucleo-digital/sp-mapas/blob/master/mapas/07_Sist_Esgotamento_Sanitario_Isolado_Planejado.geojson) |
|08_Melhoramentos_Viarios_abrir| [url](https://nucleo-digital.github.io/sp-mapas/08_Melhoramentos_Viarios_abrir.geojson) | [pré-visualização](https://github.com/nucleo-digital/sp-mapas/blob/master/mapas/08_Melhoramentos_Viarios_abrir.geojson) |
|08_Melhoramentos_Viarios_melhorar| [url](https://nucleo-digital.github.io/sp-mapas/08_Melhoramentos_Viarios_melhorar.geojson) | [pré-visualização](https://github.com/nucleo-digital/sp-mapas/blob/master/mapas/08_Melhoramentos_Viarios_melhorar.geojson) |
|08_Melhoramentos_Viarios_pontual| [url](https://nucleo-digital.github.io/sp-mapas/08_Melhoramentos_Viarios_pontual.geojson) | [pré-visualização](https://github.com/nucleo-digital/sp-mapas/blob/master/mapas/08_Melhoramentos_Viarios_pontual.geojson) |
|08_Rodoanel| [url](https://nucleo-digital.github.io/sp-mapas/08_Rodoanel.geojson) | [pré-visualização](https://github.com/nucleo-digital/sp-mapas/blob/master/mapas/08_Rodoanel.geojson) |
|09_Corredor_Onibus_Intermunicipal_Existente| [url](https://nucleo-digital.github.io/sp-mapas/09_Corredor_Onibus_Intermunicipal_Existente.geojson) | [pré-visualização](https://github.com/nucleo-digital/sp-mapas/blob/master/mapas/09_Corredor_Onibus_Intermunicipal_Existente.geojson) |
|09_Corredor_Onibus_Intermunicipal_Planejado_2016| [url](https://nucleo-digital.github.io/sp-mapas/09_Corredor_Onibus_Intermunicipal_Planejado_2016.geojson) | [pré-visualização](https://github.com/nucleo-digital/sp-mapas/blob/master/mapas/09_Corredor_Onibus_Intermunicipal_Planejado_2016.geojson) |
|09_Corredor_onibus_municipal_existente| [url](https://nucleo-digital.github.io/sp-mapas/09_Corredor_onibus_municipal_existente.geojson) | [pré-visualização](https://github.com/nucleo-digital/sp-mapas/blob/master/mapas/09_Corredor_onibus_municipal_existente.geojson) |
|09_Corredor_onibus_municipal_planejado_2016| [url](https://nucleo-digital.github.io/sp-mapas/09_Corredor_onibus_municipal_planejado_2016.geojson) | [pré-visualização](https://github.com/nucleo-digital/sp-mapas/blob/master/mapas/09_Corredor_onibus_municipal_planejado_2016.geojson) |
|09_Corredor_Onibus_Planejado_2025| [url](https://nucleo-digital.github.io/sp-mapas/09_Corredor_Onibus_Planejado_2025.geojson) | [pré-visualização](https://github.com/nucleo-digital/sp-mapas/blob/master/mapas/09_Corredor_Onibus_Planejado_2025.geojson) |
|09_Metro_Estacao_Existente| [url](https://nucleo-digital.github.io/sp-mapas/09_Metro_Estacao_Existente.geojson) | [pré-visualização](https://github.com/nucleo-digital/sp-mapas/blob/master/mapas/09_Metro_Estacao_Existente.geojson) |
|09_Metro_Estacao_Planejada_2016| [url](https://nucleo-digital.github.io/sp-mapas/09_Metro_Estacao_Planejada_2016.geojson) | [pré-visualização](https://github.com/nucleo-digital/sp-mapas/blob/master/mapas/09_Metro_Estacao_Planejada_2016.geojson) |
|09_Metro_Linha_Existente| [url](https://nucleo-digital.github.io/sp-mapas/09_Metro_Linha_Existente.geojson) | [pré-visualização](https://github.com/nucleo-digital/sp-mapas/blob/master/mapas/09_Metro_Linha_Existente.geojson) |
|09_Metro_Linha_Planejada_2016| [url](https://nucleo-digital.github.io/sp-mapas/09_Metro_Linha_Planejada_2016.geojson) | [pré-visualização](https://github.com/nucleo-digital/sp-mapas/blob/master/mapas/09_Metro_Linha_Planejada_2016.geojson) |
|09_Metro_Linha_Planejada_2025| [url](https://nucleo-digital.github.io/sp-mapas/09_Metro_Linha_Planejada_2025.geojson) | [pré-visualização](https://github.com/nucleo-digital/sp-mapas/blob/master/mapas/09_Metro_Linha_Planejada_2025.geojson) |
|09_Modal_a_ser_definido_2025| [url](https://nucleo-digital.github.io/sp-mapas/09_Modal_a_ser_definido_2025.geojson) | [pré-visualização](https://github.com/nucleo-digital/sp-mapas/blob/master/mapas/09_Modal_a_ser_definido_2025.geojson) |
|09_Monotriho_Linha_Planejada_2016| [url](https://nucleo-digital.github.io/sp-mapas/09_Monotriho_Linha_Planejada_2016.geojson) | [pré-visualização](https://github.com/nucleo-digital/sp-mapas/blob/master/mapas/09_Monotriho_Linha_Planejada_2016.geojson) |
|09_Monotrilho_Estacao_Planejada_2016| [url](https://nucleo-digital.github.io/sp-mapas/09_Monotrilho_Estacao_Planejada_2016.geojson) | [pré-visualização](https://github.com/nucleo-digital/sp-mapas/blob/master/mapas/09_Monotrilho_Estacao_Planejada_2016.geojson) |
|09_Monotrilho_Linha_Planejada_2025| [url](https://nucleo-digital.github.io/sp-mapas/09_Monotrilho_Linha_Planejada_2025.geojson) | [pré-visualização](https://github.com/nucleo-digital/sp-mapas/blob/master/mapas/09_Monotrilho_Linha_Planejada_2025.geojson) |
|09_Terminal_onibus_existente| [url](https://nucleo-digital.github.io/sp-mapas/09_Terminal_onibus_existente.geojson) | [pré-visualização](https://github.com/nucleo-digital/sp-mapas/blob/master/mapas/09_Terminal_onibus_existente.geojson) |
|09_Terminal_onibus_planejado_2016| [url](https://nucleo-digital.github.io/sp-mapas/09_Terminal_onibus_planejado_2016.geojson) | [pré-visualização](https://github.com/nucleo-digital/sp-mapas/blob/master/mapas/09_Terminal_onibus_planejado_2016.geojson) |
|09_Terminal_Onibus_Planejado_2025| [url](https://nucleo-digital.github.io/sp-mapas/09_Terminal_Onibus_Planejado_2025.geojson) | [pré-visualização](https://github.com/nucleo-digital/sp-mapas/blob/master/mapas/09_Terminal_Onibus_Planejado_2025.geojson) |
|09_Trem_Estacao_Existente| [url](https://nucleo-digital.github.io/sp-mapas/09_Trem_Estacao_Existente.geojson) | [pré-visualização](https://github.com/nucleo-digital/sp-mapas/blob/master/mapas/09_Trem_Estacao_Existente.geojson) |
|09_Trem_Linha_Existente| [url](https://nucleo-digital.github.io/sp-mapas/09_Trem_Linha_Existente.geojson) | [pré-visualização](https://github.com/nucleo-digital/sp-mapas/blob/master/mapas/09_Trem_Linha_Existente.geojson) |
|09_Trem_Linha_Planejada_2025| [url](https://nucleo-digital.github.io/sp-mapas/09_Trem_Linha_Planejada_2025.geojson) | [pré-visualização](https://github.com/nucleo-digital/sp-mapas/blob/master/mapas/09_Trem_Linha_Planejada_2025.geojson) |
|10_Areas_Risco_Geologico_Assentamento_Precario| [url](https://nucleo-digital.github.io/sp-mapas/10_Areas_Risco_Geologico_Assentamento_Precario.geojson) | [pré-visualização](https://github.com/nucleo-digital/sp-mapas/blob/master/mapas/10_Areas_Risco_Geologico_Assentamento_Precario.geojson) |
|11_Cupece| [url](https://nucleo-digital.github.io/sp-mapas/11_Cupece.geojson) | [pré-visualização](https://github.com/nucleo-digital/sp-mapas/blob/master/mapas/11_Cupece.geojson) |
|11_Fernao_Dias| [url](https://nucleo-digital.github.io/sp-mapas/11_Fernao_Dias.geojson) | [pré-visualização](https://github.com/nucleo-digital/sp-mapas/blob/master/mapas/11_Fernao_Dias.geojson) |
|11_Jacu_Pessego| [url](https://nucleo-digital.github.io/sp-mapas/11_Jacu_Pessego.geojson) | [pré-visualização](https://github.com/nucleo-digital/sp-mapas/blob/master/mapas/11_Jacu_Pessego.geojson) |
|11_Raimundo| [url](https://nucleo-digital.github.io/sp-mapas/11_Raimundo.geojson) | [pré-visualização](https://github.com/nucleo-digital/sp-mapas/blob/master/mapas/11_Raimundo.geojson) |
|12_Em_avaliacao| [url](https://nucleo-digital.github.io/sp-mapas/12_Em_avaliacao.geojson) | [pré-visualização](https://github.com/nucleo-digital/sp-mapas/blob/master/mapas/12_Em_avaliacao.geojson) |
|12_Existentes| [url](https://nucleo-digital.github.io/sp-mapas/12_Existentes.geojson) | [pré-visualização](https://github.com/nucleo-digital/sp-mapas/blob/master/mapas/12_Existentes.geojson) |
|12_Planejados| [url](https://nucleo-digital.github.io/sp-mapas/12_Planejados.geojson) | [pré-visualização](https://github.com/nucleo-digital/sp-mapas/blob/master/mapas/12_Planejados.geojson) |
|13_Atendimento_ao_Cidadao| [url](https://nucleo-digital.github.io/sp-mapas/13_Atendimento_ao_Cidadao.geojson) | [pré-visualização](https://github.com/nucleo-digital/sp-mapas/blob/master/mapas/13_Atendimento_ao_Cidadao.geojson) |
|13_Cultura| [url](https://nucleo-digital.github.io/sp-mapas/13_Cultura.geojson) | [pré-visualização](https://github.com/nucleo-digital/sp-mapas/blob/master/mapas/13_Cultura.geojson) |
|13_Desenvolvimento_Economico| [url](https://nucleo-digital.github.io/sp-mapas/13_Desenvolvimento_Economico.geojson) | [pré-visualização](https://github.com/nucleo-digital/sp-mapas/blob/master/mapas/13_Desenvolvimento_Economico.geojson) |
|13_Desenvolvimento_Social| [url](https://nucleo-digital.github.io/sp-mapas/13_Desenvolvimento_Social.geojson) | [pré-visualização](https://github.com/nucleo-digital/sp-mapas/blob/master/mapas/13_Desenvolvimento_Social.geojson) |
|13_Desenvolvimento_Urbano| [url](https://nucleo-digital.github.io/sp-mapas/13_Desenvolvimento_Urbano.geojson) | [pré-visualização](https://github.com/nucleo-digital/sp-mapas/blob/master/mapas/13_Desenvolvimento_Urbano.geojson) |
|13_Direitos_Humanos_e_Cidadania| [url](https://nucleo-digital.github.io/sp-mapas/13_Direitos_Humanos_e_Cidadania.geojson) | [pré-visualização](https://github.com/nucleo-digital/sp-mapas/blob/master/mapas/13_Direitos_Humanos_e_Cidadania.geojson) |
|13_Drenagem| [url](https://nucleo-digital.github.io/sp-mapas/13_Drenagem.geojson) | [pré-visualização](https://github.com/nucleo-digital/sp-mapas/blob/master/mapas/13_Drenagem.geojson) |
|13_Educacao| [url](https://nucleo-digital.github.io/sp-mapas/13_Educacao.geojson) | [pré-visualização](https://github.com/nucleo-digital/sp-mapas/blob/master/mapas/13_Educacao.geojson) |
|13_Espacos_Publicos| [url](https://nucleo-digital.github.io/sp-mapas/13_Espacos_Publicos.geojson) | [pré-visualização](https://github.com/nucleo-digital/sp-mapas/blob/master/mapas/13_Espacos_Publicos.geojson) |
|13_Esporte_e_Lazer| [url](https://nucleo-digital.github.io/sp-mapas/13_Esporte_e_Lazer.geojson) | [pré-visualização](https://github.com/nucleo-digital/sp-mapas/blob/master/mapas/13_Esporte_e_Lazer.geojson) |
|13_Habitacao| [url](https://nucleo-digital.github.io/sp-mapas/13_Habitacao.geojson) | [pré-visualização](https://github.com/nucleo-digital/sp-mapas/blob/master/mapas/13_Habitacao.geojson) |
|13_Meio_Ambiente| [url](https://nucleo-digital.github.io/sp-mapas/13_Meio_Ambiente.geojson) | [pré-visualização](https://github.com/nucleo-digital/sp-mapas/blob/master/mapas/13_Meio_Ambiente.geojson) |
|13_Mobilidade| [url](https://nucleo-digital.github.io/sp-mapas/13_Mobilidade.geojson) | [pré-visualização](https://github.com/nucleo-digital/sp-mapas/blob/master/mapas/13_Mobilidade.geojson) |
|13_Participacao_e_Transparencia| [url](https://nucleo-digital.github.io/sp-mapas/13_Participacao_e_Transparencia.geojson) | [pré-visualização](https://github.com/nucleo-digital/sp-mapas/blob/master/mapas/13_Participacao_e_Transparencia.geojson) |
|13_Pessoas_com_Deficiencia| [url](https://nucleo-digital.github.io/sp-mapas/13_Pessoas_com_Deficiencia.geojson) | [pré-visualização](https://github.com/nucleo-digital/sp-mapas/blob/master/mapas/13_Pessoas_com_Deficiencia.geojson) |
|13_Populacao_Idosa| [url](https://nucleo-digital.github.io/sp-mapas/13_Populacao_Idosa.geojson) | [pré-visualização](https://github.com/nucleo-digital/sp-mapas/blob/master/mapas/13_Populacao_Idosa.geojson) |
|13_Residuos_Solidos| [url](https://nucleo-digital.github.io/sp-mapas/13_Residuos_Solidos.geojson) | [pré-visualização](https://github.com/nucleo-digital/sp-mapas/blob/master/mapas/13_Residuos_Solidos.geojson) |
|13_Saude| [url](https://nucleo-digital.github.io/sp-mapas/13_Saude.geojson) | [pré-visualização](https://github.com/nucleo-digital/sp-mapas/blob/master/mapas/13_Saude.geojson) |
|13_Seguranca| [url](https://nucleo-digital.github.io/sp-mapas/13_Seguranca.geojson) | [pré-visualização](https://github.com/nucleo-digital/sp-mapas/blob/master/mapas/13_Seguranca.geojson) |
|13_Tecnologia_e_Inovacao| [url](https://nucleo-digital.github.io/sp-mapas/13_Tecnologia_e_Inovacao.geojson) | [pré-visualização](https://github.com/nucleo-digital/sp-mapas/blob/master/mapas/13_Tecnologia_e_Inovacao.geojson) |
|14_APA_Bobore_Colonia| [url](https://nucleo-digital.github.io/sp-mapas/14_APA_Bobore_Colonia.geojson) | [pré-visualização](https://github.com/nucleo-digital/sp-mapas/blob/master/mapas/14_APA_Bobore_Colonia.geojson) |
|14_APA_Capivari_Monos| [url](https://nucleo-digital.github.io/sp-mapas/14_APA_Capivari_Monos.geojson) | [pré-visualização](https://github.com/nucleo-digital/sp-mapas/blob/master/mapas/14_APA_Capivari_Monos.geojson) |
|14_APA_Estadual| [url](https://nucleo-digital.github.io/sp-mapas/14_APA_Estadual.geojson) | [pré-visualização](https://github.com/nucleo-digital/sp-mapas/blob/master/mapas/14_APA_Estadual.geojson) |
|14_Area_Protecao_Recuperacao_Mananciais_RMSP| [url](https://nucleo-digital.github.io/sp-mapas/14_Area_Protecao_Recuperacao_Mananciais_RMSP.geojson) | [pré-visualização](https://github.com/nucleo-digital/sp-mapas/blob/master/mapas/14_Area_Protecao_Recuperacao_Mananciais_RMSP.geojson) |
|15_RPPN| [url](https://nucleo-digital.github.io/sp-mapas/15_RPPN.geojson) | [pré-visualização](https://github.com/nucleo-digital/sp-mapas/blob/master/mapas/15_RPPN.geojson) |
|15_Terra_Indigena_Existente| [url](https://nucleo-digital.github.io/sp-mapas/15_Terra_Indigena_Existente.geojson) | [pré-visualização](https://github.com/nucleo-digital/sp-mapas/blob/master/mapas/15_Terra_Indigena_Existente.geojson) |
|15_Terra_Indigena_Homologacao_RMSP| [url](https://nucleo-digital.github.io/sp-mapas/15_Terra_Indigena_Homologacao_RMSP.geojson) | [pré-visualização](https://github.com/nucleo-digital/sp-mapas/blob/master/mapas/15_Terra_Indigena_Homologacao_RMSP.geojson) |
|15_Viario_Estrutural_N1| [url](https://nucleo-digital.github.io/sp-mapas/15_Viario_Estrutural_N1.geojson) | [pré-visualização](https://github.com/nucleo-digital/sp-mapas/blob/master/mapas/15_Viario_Estrutural_N1.geojson) |
|perimetro-expansao| [url](https://nucleo-digital.github.io/sp-mapas/arco-tiete/perimetro-expansao.geojson) | [pré-visualização](https://github.com/nucleo-digital/sp-mapas/blob/master/mapas/perimetro-expansao.geojson) |

> A lista de mapas é gerada com o build -> `npm run build`<br> Isto deve criar o arquivo `dist/README.md`


## Contribua incluindo novos mapas
1. Crie um fork deste projeto
2. Adicione um arquivo `.geojson` dentro do diretório `mapas`
3. Envie um pull request

## Fonte
 - [Gestão Urbana SP](https://gestaourbana.prefeitura.sp.gov.br/)
 - [GeoSampa SP](http://geosampa.prefeitura.sp.gov.br/)

Inspirado na iniciativa de [Washington-DC](https://github.com/benbalter/dc-maps).
