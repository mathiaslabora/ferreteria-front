import React from 'react'
//import ReactTable from 'react-table'
import { useTable } from 'react-table'
import { useSelector } from "react-redux"

const Tabla = () => {

    const { list } = useSelector(state => state.inventario);
    const data =list;
    console.log(list)
 
    
      const columns = React.useMemo(
        () => [
          {
            Header: 'Articulo',
            accessor: 'articulo', // accessor is the "key" in the data
          },
          {
            Header: 'Stock',
            accessor: 'stock',
          },
          {
            Header: 'Stock Minimo',
            accessor: 'stockMinimo',
          },
          {
            Header: 'Stock Maximo',
            accessor: 'stockMaximo',
          },
          {
            Header: 'Proveedor',
            accessor: 'proveedor',
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
                      borderBottom: 'solid 3px red',
                      background: 'Lavender',
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
                          background: 'Thistle',
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


export default Tabla