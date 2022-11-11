import React from "react";
import { Routes, Route } from "react-router-dom";

import Create from '../pages/Create';
import Update from '../pages/Update';
import Delete from '../pages/Delete';
import GetByEmail from '../pages/GetByEmail';
import ListAll from '../pages/ListAll';

export default function Routers() {
    return (
        <Routes>
            <Route exact path="/" element={<Create />} />
            <Route exact path="/update" element={<Update />} />
            <Route exact path="/delete" element={<Delete />} />
            <Route exact path="/getByEmail" element={<GetByEmail />} />
            <Route exact path="/listall" element={<ListAll />} />
        </Routes>
    )
}