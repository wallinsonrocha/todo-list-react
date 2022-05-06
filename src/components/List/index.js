import SemDataEHora from '../../pages/Sem-data-e-hora';
import {Routes, Route } from 'react-router-dom';

import Todos from '../../pages/Todos';

import { AreaList } from './style';

export default function List(){
    return(
        <AreaList>
            <Routes>
                <Route path="/" element={<Todos/>}/>
                <Route path="/sem-data-e-hora" element={<SemDataEHora/>}/>            
            </Routes>
        </AreaList>
    )
}