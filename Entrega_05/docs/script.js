(function (vegaEmbed) {
    const opt = {mode: 'vega-lite', actions: false};


    vegaEmbed('#graf-barras', 'js/graf_barras.json', opt)
    .catch(err => console.error('Error barras:', err));

    vegaEmbed('#graf-burbujas', 'js/graf_burbujas.json', opt)
    .catch(err => console.error('Error burbujas:', err));
})(vegaEmbed);
