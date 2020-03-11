import React from 'react';
import {useDispatch} from "react-redux";
import {loadData} from "../../actions/notes";

function NotesList() {

    const dispatch = useDispatch();
    const onClick = () => dispatch(loadData())

    return (
        <div>
            <button onClick={onClick}>
                load data
            </button>
        </div>
    );

}

export default NotesList;