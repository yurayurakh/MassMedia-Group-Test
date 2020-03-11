import React from 'react';
import {useDispatch} from "react-redux";
import {putData} from "../../actions/notes";

function NotesList() {

    const dispatch = useDispatch();
    const onClick = () => {
        dispatch(putData())
    }

    return (
        <div>
            <button onClick={onClick}>
                load data
            </button>
        </div>
    );

}

export default NotesList;