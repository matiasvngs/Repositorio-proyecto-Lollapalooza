 (function(vegaEmbed) {
      var spec = {"config": {"view": {"continuousWidth": 300, "continuousHeight": 300}}, "layer": [{"mark": {"type": "arc", "outerRadius": 120}, "encoding": {"color": {"field": "G\u00e9nero", "legend": null, "scale": {"domain": ["Masculino", "Femenino", "Mixto"], "range": ["#58b4cb", "#e85343", "#c9d849"]}, "type": "nominal"}, "theta": {"field": "Cantidad", "stack": true, "type": "quantitative"}}}, {"mark": {"type": "text", "radius": 140, "size": 14}, "encoding": {"color": {"field": "G\u00e9nero", "legend": null, "scale": {"domain": ["Masculino", "Femenino", "Mixto"], "range": ["#58b4cb", "#e85343", "#c9d849"]}, "type": "nominal"}, "text": {"field": "G\u00e9nero", "type": "nominal"}, "theta": {"field": "Cantidad", "stack": true, "type": "quantitative"}}}], "data": {"name": "data-1cb7b051dfd54d4f40a56c01473263f5"}, "height": 400, "title": "Distribuci\u00f3n de G\u00e9nero en el Escenario Principal", "width": 400, "$schema": "https://vega.github.io/schema/vega-lite/v5.20.1.json", "background": "rgba(245,151,148,0)", "datasets": {"data-1cb7b051dfd54d4f40a56c01473263f5": [{"G\u00e9nero": "Masculino", "Cantidad": 130}, {"G\u00e9nero": "Femenino", "Cantidad": 19}, {"G\u00e9nero": "Mixto", "Cantidad": 14}]}};
      var embedOpt = {"mode": "vega-lite"};

      function showError(el, error){
          el.innerHTML = ('<div style="color:red;">'
                          + '<p>JavaScript Error: ' + error.message + '</p>'
                          + "<p>This usually means there's a typo in your chart specification. "
                          + "See the javascript console for the full traceback.</p>"
                          + '</div>');
          throw error;
      }
      const el = document.getElementById('graficoMV4');
      vegaEmbed("#graficoMV4", spec, embedOpt)
        .catch(error => showError(el, error));
    })(vegaEmbed);
