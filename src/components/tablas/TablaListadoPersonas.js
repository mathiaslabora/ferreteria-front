import React from 'react'
import { useTable } from 'react-table'
import { useSelector } from "react-redux"

const TablaListadoPersonas = ()=>{

const { listP } = useSelector(state => state.personas);
    const data =listP;
    console.log(listP)

    
      const columns = React.useMemo(
        () => [
          {
            Header: 'Nombre',
            accessor: 'nombre', 
          },
          {
            Header: 'Documento Identidad',
            accessor: 'documentoIdentidad',
          },
          {
            Header: 'Cliente/Proveedor',
            accessor: 'tipo',
          },
          {
            Header: 'Nro telefono',
            accessor: 'telefono',
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
                      border: 'solid 1px blue',
                      background: 'yellow',
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
                          background: 'papayawhip',
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

export default TablaListadoPersonas;