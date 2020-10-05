# taller-react

Debería funcionar simplemente usando 'npm install'

Actualmente hay 5 vistas, login, register, productList, productDetail y cart, todas con cabecera y footer.
Login funciona usando los clientes del mock src\App\objects\Client.js. Si hay clientes en el localStorage, se cogen de ahí en vez del mock.
En register se pueden crear nuevos clientes, que se almacenan en el localStorage, por lo que son funcionales.
ProductList muestra la lista de productos del mock src\App\objects\Product.
ProductDetail muestra el producto seleccionado en la lista de productos, con la posibilidad de añadirlo al carrito (funcionalidad aun no implementada correctamente, estoy con ella, pero se almacenarían en el localStorage para después mostrarlos)
En el carrito se muestran los productos añadidos al carro. Esta vista está inacabada porque la estaba cambiando para adaptarla correctamente con la funcionalidad de ProductDetail para ver los productos.

En la cabecera hay 2 botones que nos llevan a la lista de productos y al carrito. El menú desplegable lleva a las vistas indicadas en el propio menú.

El footer muestra mi nombre, un icono de copyright y dos iconos en los que si se hace click, llevan a dos canciones de yt.

Se puede acceder a estas vistas añadiendo a la url /login, /productList, /register y /cart. A la vista de productDetail se accede pulsando uno de los nombres de producto, que rellenará automáticamente la url con el id de producto