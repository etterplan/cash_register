import React, { useState, useEffect, useCallback } from 'react';
import BarRow from './bar_row';

const BarTable = ({articles, onChange}) => {
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Vara</th>                        
                        <th>Pris</th>                        
                        <th>Antal</th>                        
                    </tr>
                </thead>
                <tbody>
                    {articles.map((element, index) =>
                        <BarRow key={index} 
                            article={element} 
                            onChange={onChange} />
                    )}
                </tbody>
            </table>
        </div>        
    );
};

export default BarTable;