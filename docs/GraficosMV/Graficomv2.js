   (function(vegaEmbed) {
      var spec = {"config": {"view": {"continuousWidth": 300, "continuousHeight": 300}}, "data": {"name": "data-95226697be8bf16487d6e3dd92a088d2"}, "mark": {"type": "arc"}, "encoding": {"color": {"field": "G\u00e9nero", "legend": {"title": "G\u00e9nero"}, "scale": {"domain": ["Masculino", "Femenino", "Mixto"], "range": ["#58b4cb", "#e85343", "#c9d849"]}, "type": "nominal"}, "theta": {"field": "Cantidad", "type": "quantitative"}, "tooltip": [{"field": "G\u00e9nero", "type": "nominal"}, {"field": "Cantidad", "type": "quantitative"}]}, "height": 400, "title": "Distribuci\u00f3n de G\u00e9nero entre Headliners", "height": 420, "width": 820, "$schema": "https://vega.github.io/schema/vega-lite/v5.20.1.json", "background": "rgba(245,151,148,0)", "datasets": {"data-95226697be8bf16487d6e3dd92a088d2": [{"G\u00e9nero": "Masculino", "Cantidad": 46}, {"G\u00e9nero": "Femenino", "Cantidad": 9}, {"G\u00e9nero": "Mixto", "Cantidad": 3}]}};
      var embedOpt = {"mode": "vega-lite"};

      function showError(el, error){
          el.innerHTML = ('<div style="color:red;">'
                          + '<p>JavaScript Error: ' + error.message + '</p>'
                          + "<p>This usually means there's a typo in your chart specification. "
                          + "See the javascript console for the full traceback.</p>"
                          + '</div>');
          throw error;
      }
      const el = document.getElementById('graficoMV2');
      vegaEmbed("#graficoMV2", spec, embedOpt)
        .catch(error => showError(el, error));
    })(vegaEmbed);
