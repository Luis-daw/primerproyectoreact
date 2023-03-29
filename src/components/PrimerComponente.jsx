import React, { Component } from "react";

class PrimerComponente extends Component {


   render() {
      let datos = {
         nombre: "Luis",
         edad: 20,
         cosas: ["Prueba", "Prueba2"]
      }
      let cont = 0;
      return (
         <React.Fragment>
            {/*tambien puedo devolver un div*/}
            <h1> {datos.nombre} </h1>
            <hr />
            <h2> {datos.edad}  </h2>
            <hr />
            <h3>
               <ol>
                  <li>Probando</li>
               {
                  datos.cosas.map((dato, i) => {
                     return (
                        <li key={i}>
                           {dato}
                        </li>
                     );
                  })
                  // Creo que no funciona foreach xd
                  // datos.cosas.forEach(dato => {
                  //    return (
                  //       <li key={cont++}>
                  //          {dato}
                  //       </li>
                  //    );
                  // })
               }
               </ol>
            </h3>
         </React.Fragment>
      )
   }
}
export default PrimerComponente;