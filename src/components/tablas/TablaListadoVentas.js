import React from 'react'
import { useTable } from 'react-table'
import { useSelector } from "react-redux"

const TablaListadoVentas = ()=>{

const { listV } = useSelector(state => state.ventas);
    const data =listV;
    console.log(listV)

    
      const columns = React.useMemo(
        () => [
          {
            Header: 'Consecutivo-Factura',
            accessor: 'consecutivoFactura', 
          },
          {
            Header: 'Cliente',
            accessor: 'nombreCliente',
          },
          {
            Header: 'Fecha de Compra',
            accessor: 'fecha',
          },{
            Header: 'Vendedor',
            accessor: 'nombreVendedor',
          },
          {
            Header: 'Costo Total',
            accessor: 'costoTotal',
          },
          {
            Header: 'Datos',
            accessor: 'descripcion',
          },
          
          ],
        []
      )
    
      const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
      } = useTable({ columns, data })
    
      return (
        <table {...getTableProps()} style={{ border: 'solid 1px blue' }}>
          <thead>
            {headerGroups.map(headerGroup => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map(column => (
                  <th
                    {...column.getHeaderProps()}
                    style={{
                      border: 'solid 1px black',
                      background: 'Thistle',
                      color: 'black',
                      fontWeight: 'bold',
                    }}
                  >
                    {column.render('Header')}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map(row => {
              prepareRow(row)
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map(cell => {
                    return (
                      <td
                        {...cell.getCellProps()}
                        style={{
                          padding: '10px',
                          border: 'solid 1px gray',
                          background: 'Lavender',
                        }}
                      >
                        {cell.render('Cell')}
                      </td>
                    )
                  })}
                </tr>
              )
            })}
          </tbody>
        </table>
         )

}

export default TablaListadoVentas;