import React, { useState, useEffect, useCallback } from 'react';
import BarRow from './bar_row';

function BarTable({articles}) {
    
    return (
        <div>
            <table>
                <tbody>
                    {articles.map((element, index) =>
                        <BarRow key={index} article={element.article} 
                            price={element.price} />
                    )}
                </tbody>
            </table>
        </div>        
    );
};

export default BarTable;