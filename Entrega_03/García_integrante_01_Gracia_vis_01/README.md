# Documentación 

+ ¿Cómo se realizó el proceso de visualización?
1. Según los comentarios de la anterior entrega, primero arreglé el tema del formato que me habían dicho al abrir mi excel, y antes de hacer el gráfico con google colab revisé que ahora la visualización se vieran bien, además arreglé detalles como quitar espacios que sobraban en las casillas.
2. Luego, trate de informarme bien leyendo la entrega, lo que me pedían, y abriendo el material de las clases donde estaba la librería Pyhthon. Luego, pensé en que visualización quería crear y cómo mi base de datos era de las ediciones decidi hacer la gráfica donde se viera a través de los años la distribución por género de los solitas y los tres tipos de banda. Aquí estuve, un poco confusa porque no sabía si agregar a las bandas o no, pero después decidí que si, porque son gran parte de la parrilla de los Lollapalooza y luego puedo hacer otra solo de solitas, pero prefería tener una vista general primero.
3. Revisé la página de Vega-Altair para revisar los ejemplos y pensar qué gráfico sería mejor para lo que quería comunicar y me decidí por el gráfico de barras apiladas.
4. En Google Colab, primero instalé la librería de altair para crear la visualización.
5. Después cargué la base de datos y utilicé pandas para leer el archivo, además de hacer uno arreglos para que no me saltará error después, y ejecuté para ver si saliá bien mi visualización.
6. De aquí en adelante ya se me fue complicando y tuve que ver varios videos, e ir borrando códigos para intentar nuevas maneras, además, cuando me salía mucho error y no entendía le preguntaba a ChatGPT para que me explicara y buscaba en internet y en la página de pyhthon, lo que también me sirivió fue der los ejemplo de la clase con Harry Potter del archivo de pandas_altair. Pero transformé mi tabla de ancho a largo con df.melt y le dije las columnas que quería que se visualización y el nombre que la daría a la columna.
7. Luego, en un principio se me vio feo, así que busqué la manera de cambiar el nombre y lo logré con replace, y fui cambiando los nombres que quería ver en el gráfico final.
8. Aquí, luego de lograr que lo anterior estuviera bien me puse a crear el gráfico y me guié por lo que salía la página de Vega-Altair y lo fui modificando, además aquí al principio lo hice sin la interración y luego me acordé de hacerla con Tooltip.
9. Logré tener una primera versión, pero no eran colores que yo quería, así que de ahí tuve que buscar en internet para cambiarlos y buscar los códigos de los colores e ir probando hasta achuntar al tono exacto que quería, además me acordé de la clase de tratar de ocupar colores distintos "para romper el estereotipo del género", pero también quería que fuera fácil para el ojo dar cuenta rápido de los hombres y mujeres, además de los 3 tipos de bandas, fue un pequeño dilema que traté de innovar un poco.
10. Luego, cuando ya que terminé conformé aunque traté de que en el gráfico se vieran al último las bandas mixtas, pero no lo logré. Decidí guardar y exportar formato HTML, en formato jpg, me saliá error y no entendí por qué asi que decidí guardar el gráfico como PNG y de ahí convertirlo en JPG.

# ¿Qué base de datos use y por qué?
+ Decidí ocupar la base de datos que realicé la entrega pasada por que siento que es la base de datos que gráficaba mejor la disparidad de género por años, pues ya estaba el conteo.

# Preguntas que responde esta visualización
1.  ¿Cómo ha evolucionado la participación femenina en Lollapalooza Chile desde 2011?
2. ¿Existen años donde la brecha de género se reduce o aumenta?
3. ¿Cuál ha sido la tendencia de las bandas mixtas?
4. ¿En qué composición estan las mujeres en solistas o bandas?