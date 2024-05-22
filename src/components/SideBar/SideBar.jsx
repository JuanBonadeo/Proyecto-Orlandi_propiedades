import React from 'react'
import './SideBar.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Accordion } from 'react-bootstrap'
import Button from '../Button/Button'
import Modal from 'react-bootstrap/Modal';


export const SideBar = ({ filters, setFilters, categoria, show, setShow }) => {
    const { minPrice, maxPrice, minSup, maxSup, ambientes, tipo } = filters;
    const [minPriceValue, setMinPriceValue] = useState([]);
    const [maxPriceValue, setMaxPriceValue] = useState([]);
    const [minSupValue, setMinSupValue] = useState([]);
    const [maxSupValue, setMaxSupValue] = useState([]);
    const [minPricexhaValue, setMinPricexHa] = useState([]);
    const [maxPricexhaValue, setMaxPricexhaValue] = useState([]);
    const [selectedAmbientes, setSelectedAmbientes] = useState([]);
    const [selectedTipo, setSelectedTipo] = useState([]);

    const handleMinPrice = (e) => {
        setMinPriceValue(e.target.value);
    };
    const handleMaxPrice = (e) => {
        setMaxPriceValue(e.target.value);
    };
    const handleMinSup = (e) => {
        setMinSupValue(e.target.value);
    };
    const handleMaxSup = (e) => {
        setMaxSupValue(e.target.value);
    };
    const handleMinPricexHa = (e) => {
        setMinPricexHa(e.target.value);
    };
    const handleMaxPricexHa = (e) => {
        setMaxPricexhaValue(e.target.value);
    };
    const handleAmbientesChange = (e) => {
        const value = e.target.value;
        if (selectedAmbientes.includes(value)) {
            setSelectedAmbientes(selectedAmbientes.filter(option => option !== value));
        } else {
            setSelectedAmbientes([...selectedAmbientes, value]);
        }
    };
    const handleTipoChange = (e) => {
        const value = e.target.value;
        if (selectedTipo.includes(value)) {
            setSelectedTipo(selectedTipo.filter(option => option !== value));
        } else {
            setSelectedTipo([...selectedTipo, value]);
        }
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        setFilters({
            ...filters,
            minPrice: minPriceValue,
            maxPrice: maxPriceValue,
            minSup: minSupValue,
            maxSup: maxSupValue,
            ambientes: selectedAmbientes,
            tipo: selectedTipo

        });
    };
    const resetFilters = () => {
        setMinPriceValue([]);
        setMaxPriceValue([]);
        setMinSupValue([]);
        setMaxSupValue([]);
        setSelectedAmbientes([]);
        setSelectedTipo([]);
        setFilters({
            minPrice: 0,
            maxPrice: 0,
            minSup: 0,
            maxSup: 0,
            ambientes: [],
            tipo: []
        });
    };


    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <div className="SideBarContainer">
                <form>
                    <h4>Filtros</h4>
                    <Accordion >
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Precio</Accordion.Header>
                            <Accordion.Body className='rangeFilter'>
                                <input name="minPrice" type="number" placeholder="Precio Minimo" value={minPriceValue} onChange={handleMinPrice} />
                                <input name="maxPrice" type="number" placeholder="Precio Maximo" value={maxPriceValue} onChange={handleMaxPrice} />
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>Superficie</Accordion.Header>
                            <Accordion.Body className='rangeFilter'>
                                <input type="number" placeholder="Superficie Minima" value={minSupValue} onChange={handleMinSup} />
                                <input type="number" placeholder="Superficie Maxima" value={maxSupValue} onChange={handleMaxSup} />
                            </Accordion.Body>
                        </Accordion.Item>
                        {categoria === ('casas' || 'departamentos' || 'locales')  && (<>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header>Ambientes</Accordion.Header>
                                <Accordion.Body>
                                    <input type='checkbox' id='1ambiente' name='1' value='1' className='check' onChange={handleAmbientesChange} checked={selectedAmbientes.includes('1')} />
                                    <label htmlFor='1ambiente'>1 Ambiente</label><br />
                                    <input type='checkbox' id='2ambiente' name='2' value='2' className='check' onChange={handleAmbientesChange} checked={selectedAmbientes.includes('2')} />
                                    <label htmlFor='2ambiente'>2 Ambientes</label><br />
                                    <input type='checkbox' id='3ambiente' name='3' value='3' className='check' onChange={handleAmbientesChange} checked={selectedAmbientes.includes('3')} />
                                    <label htmlFor='3ambiente'>3 Ambientes</label><br />
                                    <input type='checkbox' id='4ambiente' name='4' value='4' className='check' onChange={handleAmbientesChange} checked={selectedAmbientes.includes('4')} />
                                    <label htmlFor='4ambiente'>4 Ambientes</label><br />
                                    <input type='checkbox' id='5ambiente' name='5' value='5' className='check' onChange={handleAmbientesChange} checked={selectedAmbientes.includes('5')} />
                                    <label htmlFor='5ambiente'>5 Ambientes</label><br />
                                </Accordion.Body>
                            </Accordion.Item>
                            
                        </>)}
                        {categoria === 'campos' && (<>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header>Precio x Hectarea</Accordion.Header>
                                <Accordion.Body className='rangeFilter'>
                                    <input name='minPricexHa' type='number' placeholder='Precio Min x Ha' value={minPricexhaValue} onChange={handleMinPricexHa} />
                                    <input name='maxPricexHa' type='number' placeholder='Precio Max x Ha' value={maxPricexhaValue} onChange={handleMaxPricexHa} />
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="3">
                                <Accordion.Header>Tipo</Accordion.Header>
                                <Accordion.Body>
                                    <input type="checkbox" id="campo" name="campos" value="campos" className='check' onChange={handleTipoChange} checked={selectedTipo.includes('campos')} />
                                    <label htmlFor="campos">Campos</label><br />
                                    <input type="checkbox" id="chacra" name="chacras" value="chacras" className='check' onChange={handleTipoChange} checked={selectedTipo.includes('chacras')} />
                                    <label htmlFor="chacras">Chacras</label><br />
                                    <input type='checkbox' id='estancia' name='estancias' value='estancias' className='check' onChange={handleTipoChange} checked={selectedTipo.includes('estancias')} />
                                    <label htmlFor='estancias'>Estancias</label><br />
                                </Accordion.Body>
                            </Accordion.Item>
                        </>)}
                        {!categoria && (
                            <>
                                <Accordion.Item eventKey="3">
                                    <Accordion.Header>Tipo</Accordion.Header>
                                    <Accordion.Body>
                                        <input type="checkbox" id="departamentos" name="departamentos" value="departamentos" className='check' onChange={handleTipoChange} checked={selectedTipo.includes('departamentos')} />
                                        <label htmlFor="departamento">Departamentos</label><br />
                                        <input type="checkbox" id="casa" name="casas" value="casas" className='check' onChange={handleTipoChange} checked={selectedTipo.includes('casas')} />
                                        <label htmlFor="casa">Casas</label><br />
                                        <input type='checkbox' id='terreno' name='terrenos' value='terrenos' className='check' onChange={handleTipoChange} checked={selectedTipo.includes('terrenos')} />
                                        <label htmlFor='terreno'>Terrenos</label><br />
                                        <input type="checkbox" id="local" name="locales" value="locales" className='check' onChange={handleTipoChange} checked={selectedTipo.includes('locales')} />
                                        <label htmlFor="local">Locales</label><br />
                                        <input type="checkbox" id="campo" name="campos" value="campos" className='check' onChange={handleTipoChange} checked={selectedTipo.includes('campos')} />
                                        <label htmlFor="campos">Campos</label><br />
                                        <input type="checkbox" id="chacra" name="chacras" value="chacras" className='check' onChange={handleTipoChange} checked={selectedTipo.includes('chacras')} />
                                        <label htmlFor="chacras">Chacras</label><br />
                                        <input type='checkbox' id='estancia' name='estancias' value='estancias' className='check' onChange={handleTipoChange} checked={selectedTipo.includes('estancias')} />
                                        <label htmlFor='estancias'>Estancias</label><br />

                                    </Accordion.Body>
                                </Accordion.Item>
                            </>)

                        }
                        {categoria  == 'terrenos' && (
                            <>
                                <Accordion.Item eventKey="4">
                                    <Accordion.Header>Uso</Accordion.Header>
                                    <Accordion.Body>
                                        <input type="checkbox" id="comercial" name="comercial" value="comercial" className='check' onChange={handleTipoChange} checked={selectedTipo.includes('comercial')} />
                                        <label htmlFor="comercial">Comercial</label><br />
                                        <input type="checkbox" id="industrial" name="industrial" value="industrial" className='check' onChange={handleTipoChange} checked={selectedTipo.includes('industrial')} />
                                        <label htmlFor="industrial">Industrial</label><br />
                                        <input type='checkbox' id='residencial' name='residencial' value='residencial' className='check' onChange={handleTipoChange} checked={selectedTipo.includes('residencial')} />
                                        <label htmlFor='residencial'>Residencial</label><br />
                                        <input type="checkbox" id="rural" name="rural" value="rural" className='check' onChange={handleTipoChange} checked={selectedTipo.includes('rural')} />
                                        <label htmlFor="rural">Rural</label><br />
                                    </Accordion.Body>
                                </Accordion.Item>
                            </>
                            )}
                        

                    </Accordion></form><br></br>
                <Button label="Limpiar" type='reset' action={resetFilters} /><br></br>
                <Button label="Filtrar" type='sumbit' action={handleFormSubmit} />
            </div>

            <div className="mobileSideBar">
                <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false} size="lg" centered className="modal-dark">
                <Modal.Header closeButton>
                    <Modal.Title>Filtros</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form>
                        <div className='rangeFilterModal'>
                            <h3>Precio</h3>
                            <input name="minPrice" type="number" placeholder="Precio Minimo" value={minPriceValue} onChange={handleMinPrice} />
                            <input name="maxPrice" type="number" placeholder="Precio Maximo" value={maxPriceValue} onChange={handleMaxPrice} />
                        </div>

                        <div className='rangeFilterModal'>
                            <h3>Superficie</h3>
                            <input type="number" placeholder="Superficie Minima" value={minSupValue} onChange={handleMinSup} />
                            <input type="number" placeholder="Superficie Maxima" value={maxSupValue} onChange={handleMaxSup} />
                        </div>

                        {categoria === 'casas' && (<>
                            <div className="modalCheck">
                                <h3>Ambientes</h3>
                                <input type='checkbox' id='1ambiente' name='1' value='1' className='check' onChange={handleAmbientesChange} checked={selectedAmbientes.includes('1')} />
                                <label htmlFor='1ambiente'>1 Ambiente</label><br />
                                <input type='checkbox' id='2ambiente' name='2' value='2' className='check' onChange={handleAmbientesChange} checked={selectedAmbientes.includes('2')} />
                                <label htmlFor='2ambiente'>2 Ambientes</label><br />
                                <input type='checkbox' id='3ambiente' name='3' value='3' className='check' onChange={handleAmbientesChange} checked={selectedAmbientes.includes('3')} />
                                <label htmlFor='3ambiente'>3 Ambientes</label><br />
                                <input type='checkbox' id='4ambiente' name='4' value='4' className='check' onChange={handleAmbientesChange} checked={selectedAmbientes.includes('4')} />
                                <label htmlFor='4ambiente'>4 Ambientes</label><br />
                                <input type='checkbox' id='5ambiente' name='5' value='5' className='check' onChange={handleAmbientesChange} checked={selectedAmbientes.includes('5')} />
                                <label htmlFor='5ambiente'>5 Ambientes</label><br />
                            </div>
                            

                        </>)}
                        {categoria === 'campos' && (<>
                            <div className='rangeFilterModal'>
                                <h3>Precio x Hectarea</h3>
                                <input name='minPricexHa' type='number' placeholder='Precio Min x Ha' value={minPricexhaValue} onChange={handleMinPricexHa} />
                                <input name='maxPricexHa' type='number' placeholder='Precio Max x Ha' value={maxPricexhaValue} onChange={handleMaxPricexHa} />
                            </div>

                        
                        </>)}
                        {!categoria && (
                            <>
                                <div className="modalCheck">
                                    <h3>Tipo</h3>
                                    <input type="checkbox" id="departamentos" name="departamentos" value="departamentos" className='check' onChange={handleTipoChange} checked={selectedTipo.includes('departamentos')} />
                                    <label htmlFor="departamento">Departamentos</label><br />
                                    <input type="checkbox" id="casa" name="casas" value="casas" className='check' onChange={handleTipoChange} checked={selectedTipo.includes('casas')} />
                                    <label htmlFor="casa">Casas</label><br />
                                    <input type='checkbox' id='terreno' name='terrenos' value='terrenos' className='check' onChange={handleTipoChange} checked={selectedTipo.includes('terrenos')} />
                                    <label htmlFor='terreno'>Terrenos</label><br />
                                    <input type="checkbox" id="local" name="locales" value="locales" className='check' onChange={handleTipoChange} checked={selectedTipo.includes('locales')} />
                                    <label htmlFor="local">Locales</label><br />
                                    <input type="checkbox" id="campo" name="campos" value="campos" className='check' onChange={handleTipoChange} checked={selectedTipo.includes('campos')} />
                                    <label htmlFor="campos">Campos</label><br />
                                    <input type="checkbox" id="chacra" name="chacras" value="chacras" className='check' onChange={handleTipoChange} checked={selectedTipo.includes('chacras')} />
                                    <label htmlFor="chacras">Chacras</label><br />
                                    <input type='checkbox' id='estancia' name='estancias' value='estancias' className='check' onChange={handleTipoChange} checked={selectedTipo.includes('estancias')} />
                                    <label htmlFor='estancias'>Estancias</label><br />
                                </div>
                            </>)

                        }

                    </form>









                </Modal.Body>
                <Modal.Footer>
                    <Button label="Filtrar" type='sumbit' action={handleFormSubmit} />
                    <Button label="Limpiar" type='reset' action={resetFilters} />
                </Modal.Footer>
            </Modal>
        </div >
        </>
    )
}


