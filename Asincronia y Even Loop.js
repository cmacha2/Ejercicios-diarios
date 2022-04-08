/* 
Antes de explicar como funciona el modelo de JS esimportante entender algunos conceptos 

Procesamiento Single Threaded y Multi threaded  /// Javascript lenguaje de un solo hilo de ejecución
Operaciones de CPU y Operaciones de I/O
Operaciones concurrentes y paralelas  /// Cuando dos o mas tareas van progresando al mismo tiempo y paralelismo es que estas tareas se ejecutan a la misma ves
Operaciones Bloqueantes y No Bloqueantes  /// Las operaciones son bloqueantes cuando el procesador espera a que la operación termine para poder ejecutar otra operación 
Operaciones Sincronas y Asincronas /// Sincronas las operaciones suceden el presente de inmediato , mientras que asincronas las operaciones suceden en el futuro.
*/

const { ConsoleMessage } = require("puppeteer");

/* Codigo Sincrono Bloqueantes */ 
(()=>{
    console.log('Codigo Sincrono');
    console.log('Inicio');

    function dos(){
        console.log('Dos');
    }

    function uno(){
        console.log('Uno');
        dos();
        ConsoleMessage.log('Tres')
    }

    uno();
    console.log('Fin');

})();




/* Codigo Asincrono No bloqueante */
