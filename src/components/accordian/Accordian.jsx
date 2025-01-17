import React, { useState } from 'react'
import data from './data'
import './styles.css'

function Accordian() {

    const [selected, setSelected] = useState(null);
    const [enableMulti, setEnableMulti] = useState(false);
    const [multiple, setMultiple] = useState([]);

    const handleSingleSelection = (getCurrentId) => {
        setSelected(getCurrentId === selected ? null : getCurrentId)
    }

    const handleMultiSelection = (getCurrentId) => {
        let cpyMultiple = [...multiple];
        const findIndexOfCurrentId = cpyMultiple.indexOf(getCurrentId);
        if (findIndexOfCurrentId === -1) cpyMultiple.push(getCurrentId);
        else cpyMultiple.splice(findIndexOfCurrentId, 1);
        setMultiple(cpyMultiple);
    }

    return (
        <div className='wrapper'>
            <button onClick={() => setEnableMulti(!enableMulti)}>
                {
                    enableMulti ? 'Multi Selection' : 'Single Selection'
                }
            </button>
            <div className="accordian">
                {
                    data && data.length > 0
                        ? data.map((dataItem, i) => (<div key={i} className='item'>
                            <div onClick={enableMulti
                                ? () => handleMultiSelection(dataItem.id)
                                : () => handleSingleSelection(dataItem.id)} className='title'>
                                <h3>{dataItem.question}</h3>
                                <span>+</span>
                            </div>
                            {
                                enableMulti
                                    ? multiple.indexOf(dataItem.id) !== -1
                                    && (<div className='content'>{dataItem.answer}</div>)
                                    : selected === dataItem.id && (<div className='content'>{dataItem.answer}</div>)
                            }

                        </div>))
                        : <div>No data</div>
                }
            </div>
        </div>
    )
}

export default Accordian