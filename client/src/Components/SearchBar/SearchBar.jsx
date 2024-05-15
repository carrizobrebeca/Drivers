import React, { useState } from "react";
import style from "./searchBar.moludes.css";
import {useDispatch} from "react-redux";
import { searchDriver } from "../../Redux/Actions/actions";

const SearchBar = () => {
    const dispatch = useDispatch();

    const [state, setState] = useState("");

    const handleChange = (e) => {
        setState(e.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(searchDriver(state))
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input onChange={handleChange} type="text" />
                <input type="submit" />
            </form>
        </div>
    )
}
