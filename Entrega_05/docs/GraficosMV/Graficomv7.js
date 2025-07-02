  (function(vegaEmbed) {
      var spec = {"config": {"view": {"continuousWidth": 300, "continuousHeight": 300}}, "layer": [{"mark": {"type": "arc", "outerRadius": 120}, "encoding": {"color": {"field": "G\u00e9nero", "legend": null, "scale": {"domain": ["Masculino", "Femenino", "Mixto"], "range": ["#58b4cb", "#e85343", "#c9d849"]}, "type": "nominal"}, "theta": {"field": "Cantidad", "stack": true, "type": "quantitative"}}}, {"mark": {"type": "text", "radius": 170, "size": 14}, "encoding": {"color": {"field": "G\u00e9nero", "legend": null, "scale": {"domain": ["Masculino", "Femenino", "Mixto"], "range": ["#58b4cb", "#e85343", "#c9d849"]}, "type": "nominal"}, "text": {"field": "G\u00e9nero", "type": "nominal"}, "theta": {"field": "Cantidad", "stack": true, "type": "quantitative"}}}], "data": {"name": "data-3dabcb310c56b3d31a784eb4dc81c863"}, "height": 500, "title": "Distribuci\u00f3n de G\u00e9nero en el Escenario Kidzapalooza", "width": 500, "$schema": "https://vega.github.io/schema/vega-lite/v5.20.1.json", "background": "rgba(245,151,148,0)", "datasets": {"data-3dabcb310c56b3d31a784eb4dc81c863": [{"G\u00e9nero": "Mixto", "Cantidad": 76}, {"G\u00e9nero": "Masculino", "Cantidad": 36}, {"G\u00e9nero": "Femenino", "Cantidad": 8}]}};
      var embedOpt = {"mode": "vega-lite"};

      function showError(el, error){
          el.innerHTML = ('<div style="color:red;">'
                          + '<p>JavaScript Error: ' + error.message + '</p>'
                          + "<p>This usually means there's a typo in your chart specification. "
                          + "See the javascript console for the full traceback.</p>"
                          + '</div>');
          throw error;
      }
      const el = document.getElementById('graficoMV7');
      vegaEmbed("#graficoMV7", spec, embedOpt)
        .catch(error => showError(el, error));
    })(vegaEmbed);