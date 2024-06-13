import React, { useState } from 'react'
import BarAmount from './baramount';

const BarRow = ({article, onChange}) => {

    return (
        <>
            <tr>
                <td>
                    <label>{article.article}</label>
                </td>
                <td style={{ textAlign: 'right' }}>
                    <label>{article.price}</label>
                </td>
                <td>
                    <BarAmount article={article} onChange={onChange}/>
                </td>
            </tr>
        </>
    );
};

export default BarRow;

