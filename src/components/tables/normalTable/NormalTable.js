import React from "react";

const NormalTable = () => {
  return (
    <table class="responsive-table">
      <thead>
        <tr>
          <th>Faena</th>
          <th>Componente</th>
          <th>Actividad</th>
          <th>Fecha programada</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>Carossi</td>
          <td>Retro-excabadora</td>
          <td>Lubricar rueda</td>
          <td>02/12/2019</td>
        </tr>
        <tr>
          <td>Enap</td>
          <td>Manguera</td>
          <td>Regular filtro</td>
          <td>12/06/2019</td>
        </tr>
        <tr>
          <td>Villa</td>
          <td>Camionera</td>
          <td>Lubricar candado de repuesto</td>
          <td>23/08/2019</td>
        </tr>
      </tbody>
    </table>
  );
};

export { NormalTable };
