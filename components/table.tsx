import React from 'react';

type Props = {};

export const Table = (props: Props) => {
  return (
    <section>
    <table>
        {/* The Header */}
        <thead>
            <tr className='flex gap-4'>
                <th>Name</th>
                <th>address</th>
                <th>age</th>
            </tr>
        </thead>
        {/* The Body */}
        <tbody>
            <tr>
                <td>Kizz</td>
                <td>Esami</td>
                <td>100</td>
            </tr>
        </tbody>
        {/* The Footer */}
        {/* <tfoot>footer</tfoot> */}
    </table>
    </section>
  )
};
