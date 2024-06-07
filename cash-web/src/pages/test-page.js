import React from 'react';
import './test-page.css';
//import UpperSection from './UpperSection';
//import LowerSection from './LowerSection';

function UpperSection() {
    return (
        <div className="upper-section">
            <h1 className="headline">This is the Headline</h1>
            <div className="button-label-container">
                <div className="button-label">
                    <button>Button 1</button>
                    <label>Label 1</label>
                </div>
                <div className="button-label">
                    <button>Button 2</button>
                    <label>Label 2</label>
                </div>
            </div>
        </div>
    );
}

function LowerSection() {
    return (
        <div className="lower-section">
            <table className="centered-table">
                <thead>
                    <tr>
                        <th>Header 1</th>
                        <th>Header 2</th>
                        <th>Header 3</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Data 1</td>
                        <td>Data 2</td>
                        <td>Data 3</td>
                    </tr>
                    <tr>
                        <td>Data 4</td>
                        <td>Data 5</td>
                        <td>Data 6</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

function TestPage() {
    return (
        <div className="test-page">
            <UpperSection />
            <LowerSection />
        </div>
    );
}

export default TestPage;
