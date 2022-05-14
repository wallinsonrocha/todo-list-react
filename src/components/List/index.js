import {Routes, Route } from 'react-router-dom';

import Todos from '../../pages/Todos';
import Hoje from '../../pages/Hoje';
import Atrazados from '../../pages/Atrazados';
import P7Dias from '../../pages/7 dias';
import P30Dias from '../../pages/30 dias';
import P90Dias from '../../pages/90 dias';
import P180Dias from '../../pages/180 dias';
import P365Dias from '../../pages/365 dias';
import EsteAno from '../../pages/Este ano';
import Concluidos from '../../pages/Concluidos';
import NaoConcluidos from '../../pages/Nao concluidos';

import { AreaList } from './style';

export default function List(){
    return(
        <AreaList>
            <Routes>
                <Route path="/" element={<Todos/>}/>  
                <Route path="/hoje" element={<Hoje/>}/>
                <Route path="/atrazados" element={<Atrazados/>}/>
                <Route path="/7-dias" element={<P7Dias/>}/>
                <Route path="/30-dias" element={<P30Dias/>}/>
                <Route path="/90-dias" element={<P90Dias/>}/>
                <Route path="/180-dias" element={<P180Dias/>}/>
                <Route path="/365-dias" element={<P365Dias/>}/>
                <Route path="/este-ano" element={<EsteAno/>}/>
                <Route path="/concluidos" element={<Concluidos/>}/>
                <Route path="/nao-concluidos" element={<NaoConcluidos/>}/>
            </Routes>
        </AreaList>
    )
}