import React, { useState } from 'react'

function BarRow(props) {

    return (
        <>
            <tr>
                <td>
                    <input value={props.article} />
                </td>
                <td>
                    <input value={props.price} />
                </td>
            </tr>
        </>
    );
};

export default BarRow;

