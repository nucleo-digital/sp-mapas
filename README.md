# SP Mapas

## Mapas de São Paulo no formato GeoJSON

## Embed de mapa pelo Github

1. Copie a URL completa do GeoJSON a ser utilizado, será como essa: `https://github.com/nucleo-digital/sp-mapas/blob/master/02A_Subsetores_Arco_Tiete.geojson`
2. URL base do mapa (sem /blob/): `/nucleo-digital/sp-mapas/master/02A_Subsetores_Arco_Tiete.geojson`
3. URL de embed do mapa: `https://embed.github.com/view/geojson/` + URL base do mapa + `?height=500&width=1000`
4. TAG completa: `<script src="https://embed.github.com/view/geojson/nucleo-digital/sp-mapas/master/02A_Subsetores_Arco_Tiete.geojson?height=450&width=450"></script>`

## Fonte

http://gestaourbana.prefeitura.sp.gov.br/aquivos-da-lei/

## Processo

1. Navegue por http://gestaourbana.prefeitura.sp.gov.br/aquivos-da-lei/
2. Encontre o arquivo no formato "ESRI Shapefile"
3. Baixe o arquivo .zip
4. Use ogr2ogr para converter para `.geojson` como o `crs:84` SRS

## Conversão em massa

1. Siga os passos acima e baixe um ou mais arquivos shapefiles zipados
2. Rode [este shell script](https://gist.github.com/benbalter/5858851)

## Necessário para o conversor funcionar

Para converter arquivos shapefiles para geojson, você irá precisar [ogr2ogr](http://www.gdal.org/ogr2ogr.html). No OS X,
o jeito mais fácil de conseguir ele é com o [Homebrew](http://mxcl.github.io/homebrew/), ao rodar o comando `brew install gdal`.

## Contribua com seu mapa

1. Crie um fork deste projeto
2. Adicione um arquivo `.geojson`
3. Envie um pull request

Inspirado na iniciativa de [Washington-DC](https://github.com/benbalter/dc-maps).
