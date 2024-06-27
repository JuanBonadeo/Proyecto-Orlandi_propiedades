import React from 'react'
import './Admin.css'
import { useState, useEffect } from 'react'
import { collection, addDoc, setDoc, doc } from 'firebase/firestore'
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { db, storage } from '../../services/firebase/firebaseConfig'
import Swal from 'sweetalert2';


export const Admin = () => {
    const [image1, setImg1] = useState(null);
    const [image2, setImg2] = useState(null);
    const [image3, setImg3] = useState(null);
    const [image4, setImg4] = useState(null);
    const [image5, setImg5] = useState(null);
    const [image6, setImg6] = useState(null);
    const [image7, setImg7] = useState(null);
    const [category, setCategory] = useState('casas');
    const [nombre, setNombre] = useState('');
    const [imagePreview1, setImagePreview1] = useState('');
    const [imagePreview2, setImagePreview2] = useState('');
    const [imagePreview3, setImagePreview3] = useState('');
    const [imagePreview4, setImagePreview4] = useState('');
    const [imagePreview5, setImagePreview5] = useState('');
    const [imagePreview6, setImagePreview6] = useState('');
    const [imagePreview7, setImagePreview7] = useState('');

    const handleNombre = (e) => {
        setNombre(e.target.value);
    }

    const handleCategory = (e) => {
        const selectedCategory = e.target.value;
        setCategory(selectedCategory);
    }


    const handleImage1Change = (e) => {
        const file = e.target.files[0];
        setImg1(file);
        // Mostrar la vista previa de la imagen
        const reader = new FileReader();
        reader.onload = () => {
            setImagePreview1(reader.result);
        };
        reader.readAsDataURL(file);
    }

    const handleImage2Change = (e) => {
        const file = e.target.files[0];
        setImg2(file);
        // Mostrar la vista previa de la imagen
        const reader = new FileReader();
        reader.onload = () => {
            setImagePreview2(reader.result);
        };
        reader.readAsDataURL(file);
    }
    const handleImage3Change = (e) => {
        const file = e.target.files[0];
        setImg3(file);
        // Mostrar la vista previa de la imagen
        const reader = new FileReader();
        reader.onload = () => {
            setImagePreview3(reader.result);
        };
        reader.readAsDataURL(file);
    }
    const handleImage4Change = (e) => {
        const file = e.target.files[0];
        setImg4(file);
        // Mostrar la vista previa de la imagen
        const reader = new FileReader();
        reader.onload = () => {
            setImagePreview4(reader.result);
        };
        reader.readAsDataURL(file);
    }
    const handleImage5Change = (e) => {
        const file = e.target.files[0];
        setImg5(file);
        // Mostrar la vista previa de la imagen
        const reader = new FileReader();
        reader.onload = () => {
            setImagePreview5(reader.result);
        };
        reader.readAsDataURL(file);
    }
    const handleImage6Change = (e) => {
        const file = e.target.files[0];
        setImg6(file);
        // Mostrar la vista previa de la imagen
        const reader = new FileReader();
        reader.onload = () => {
            setImagePreview6(reader.result);
        };
        reader.readAsDataURL(file);
    }
    const handleImage7Change = (e) => {
        const file = e.target.files[0];
        setImg7(file);
        // Mostrar la vista previa de la imagen
        const reader = new FileReader();
        reader.onload = () => {
            setImagePreview7(reader.result);
        };
        reader.readAsDataURL(file);
    }


    const addProduct = async (e) => {
        e.preventDefault();
        const nombre = document.getElementById('nombre').value;
        const descripcion = document.getElementById('descripcion').value;
        const precio = parseInt(document.getElementById('precio').value);
        const stock = document.getElementById('stock').checked;
        const destacados = document.getElementById('destacados').checked;
        const ubicacion = document.getElementById('ubicacion').value;
        const superficie = parseInt(document.getElementById('superficie').value);
        const zona = document.getElementById('zona').value;
        let ambientes = 0;
        let banios = 0;
        let dormitorios = 0;
        let subcategoria = '';
        if (category === 'casas' || category === 'departamentos' || category === 'locales') {
            ambientes = parseInt(document.getElementById('ambientes').value);
            banios = parseInt(document.getElementById('banios').value);
            dormitorios = parseInt(document.getElementById('dormitorios').value);
            subcategoria = document.getElementById('subcategoria').value;
        }
        if (category === 'terrenos') {
            subcategoria = document.getElementById('subcategoria').value;
        }

        const nombreProducto = nombre.toUpperCase().replace(/\s+/g, '-');
        const productFolderRef = ref(storage, `propiedades/${category}/${nombre}`);

        let imageUrl1 = '';
        if (image1) {
            const image1Ref = ref(productFolderRef, image1.name);
            await uploadBytesResumable(image1Ref, image1);
            imageUrl1 = await getDownloadURL(image1Ref);
        }
        let imageUrl2 = '';
        if (image2) {
            const image2Ref = ref(productFolderRef, image2.name);
            await uploadBytesResumable(image2Ref, image2);
            imageUrl2 = await getDownloadURL(image2Ref);
        }
        let imageUrl3 = '';
        if (image3) {
            const image3Ref = ref(productFolderRef, image3.name);
            await uploadBytesResumable(image3Ref, image3);
            imageUrl3 = await getDownloadURL(image3Ref);
        }
        let imageUrl4 = '';
        if (image4) {
            const image4Ref = ref(productFolderRef, image4.name);
            await uploadBytesResumable(image4Ref, image4);
            imageUrl4 = await getDownloadURL(image4Ref);
        }
        let imageUrl5 = '';
        if (image5) {
            const image5Ref = ref(productFolderRef, image5.name);
            await uploadBytesResumable(image5Ref, image5);
            imageUrl5 = await getDownloadURL(image5Ref);
        }
        let imageUrl6 = '';
        if (image6) {
            const image6Ref = ref(productFolderRef, image6.name);
            await uploadBytesResumable(image6Ref, image6);
            imageUrl6 = await getDownloadURL(image6Ref);
        }
        let imageUrl7 = '';
        if (image7) {
            const image7Ref = ref(productFolderRef, image7.name);
            await uploadBytesResumable(image7Ref, image7);
            imageUrl7 = await getDownloadURL(image7Ref);
        }







        const nuevoProducto = {
            nombre: nombre,
            stock: stock,
            destacados: destacados,
            precio: precio,
            categoria: category,
            descripcion: descripcion,
            ubicacion: ubicacion,
            superficie: superficie,
            zona: zona,
            ambientes: ambientes,
            banios: banios,
            dormitorios: dormitorios,
            subcategoria: subcategoria,
            img1: imageUrl1,
            img2: imageUrl2,
            img3: imageUrl3,
            img4: imageUrl4,
            img5: imageUrl5,
            img6: imageUrl6,
            img7: imageUrl7
        }
        // Replace 'your-desired-id' with the desired ID for the document
        const productRef = doc(db, 'propiedades', nombreProducto);
        setDoc(productRef, nuevoProducto)

            .then(() => {
                Swal.fire({
                    icon: 'success',
                    title: 'Producto agregado',
                    showConfirmButton: false,
                    timer: 1500
                })
            })
            .catch((error) => {
                Swal.fire({
                    icon: 'error',
                    title: 'Error al agregar producto',
                    showConfirmButton: false,
                    timer: 1500
                })
            })

    }
    return (
        <div className="adminContainer">
            <form className="adminForm" onSubmit={(e) => { e.preventDefault(); addProduct(e); }}>
                <h1>Administrar Productos</h1>
                <div className="form-group">
                    <label htmlFor="name">Nombre:</label>
                    <input type="text" id="nombre" name="nombre" required value={nombre} onChange={handleNombre} />

                </div>

                <div className="form-group">
                    <label htmlFor="descripcion">Descripcion:</label>
                    <textarea type="" id="descripcion" name="descripcion" />
                </div>
                <div className="form-group">
                    <label htmlFor="precio">Precio:</label>
                    <input type="number" id="precio" name="precio" required />
                </div>
                <div className="form-group">
                    <label htmlFor="stock">Stock:</label>
                    <input type="checkbox" id="stock" name="stock" className='stock' />
                    <label htmlFor="destacados">Destacados:</label>
                    <input type="checkbox" id="destacados" name="destacados" className='destacados' />
                </div>
                <div className="form-group">

                    <label htmlFor="category">Categoría:</label>
                    <select name="category" id="category" required value={category} onChange={handleCategory}>
                        <option value="casas">Casas</option>
                        <option value="departamentos">Departamentos</option>
                        <option value="locales">Locales</option>
                        <option value="terrenos">Terrenos</option>
                        <option value="campos">Campos</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="ubicacion">Ubicación:</label>
                    <input type="text" id="ubicacion" name="ubicacion" required />
                    <label htmlFor='zona'>Zona:</label>
                    <input type="text" id="zona" name="zona" required />
                </div>

                <div className="form-group category">
                    {(category === 'casas' || category === 'departamentos') && (<>
                        <label htmlFor="superficie">Superficie en m2:</label>
                        <input type="number" id="superficie" name="superficie" required />
                        <label htmlFor="ambientes">Ambientes:</label>
                        <input type="number" id="ambientes" name="ambientes" required />
                        <label htmlFor="dormitorios">Dormitorios:</label>
                        <input type="number" id="dormitorios" name="dormitorios" required />
                        <label htmlFor="banios">Baños:</label>
                        <input type="number" id="banios" name="banios" required />
                    </>)}
                    {category === 'casas' && (<>
                        <label htmlFor='subcategoria'>Subcategoría:</label>
                        <select name="subcategoria" id="subcategoria" required>
                            <option value="casas">Casas</option>
                            <option value="duplex">Duplex</option>
                            <option value="quintas">Quintas</option>
                            <option value="chacras">Chacras</option>
                        </select>
                    </>)}
                    {category === 'departamentos' && (<>
                        <label htmlFor='subcategoria'>Subcategoría:</label>
                        <select name="subcategoria" id="subcategoria" required>
                            <option value="departamentos">Departamentos</option>
                            <option value="monoambientes">Monoambientes</option>
                            <option value="ph">PH</option>
                        </select>
                    </>)}

                    {category === 'campos' && (<>
                        <div className="form-group">
                            <label htmlFor="superficie">Superficie en Ha:</label>
                            <input type="number" id="superficie" name="superficie" required />
                        </div>

                    </>)}
                    {category === 'terrenos' && (<>
                        <div className="form-group">
                            <label htmlFor="superficie">Superficie en m2:</label>
                            <input type="number" id="superficie" name="superficie" required />
                        </div>
                        <label htmlFor='subcategoria'>Subcategoría:</label>
                        <select name="subcategoria" id="subcategoria" required>
                            <option value="barrioscerrados">Barrios Cerrados</option>
                            <option value="barriosabiertos">Barrios Abiertos</option>
                            <option value="paraedificios">Para Edificios</option>
                        </select>
                    </>)}
                    {category === 'locales' && (<>
                        <div className="form-group">
                            <label htmlFor="superficie">Superficie en m2:</label>
                            <input type="number" id="superficie" name="superficie" required />
                        </div>
                        <label htmlFor="ambientes">Ambientes:</label>
                        <input type="number" id="ambientes" name="ambientes" required />
                        <label htmlFor="banios">Baños:</label>
                        <input type="number" id="banios" name="banios" required />
                        <label htmlFor='subcategoria'>Subcategoría:</label>
                        <select name="subcategoria" id="subcategoria" required>
                            <option value="locales">Locales</option>
                            <option value="oficinas">Oficinas</option>
                            <option value="galpones">Galpones</option>
                        </select>
                    </>)}
                </div>

                <label htmlFor="imagen">Imagen 1:</label>
                <input type="file" id="img1" name="imagen1" onChange={handleImage1Change} />
                {imagePreview1 && <img src={imagePreview1} alt="Preview" style={{ maxWidth: '100px' }} />}
                <label htmlFor="imagen">Imagen 2:</label>
                <input type="file" id="img2" name="imagen2" onChange={handleImage2Change} />
                {imagePreview2 && <img src={imagePreview2} alt="Preview" style={{ maxWidth: '100px' }} />}


                <label htmlFor="imagen">Imagen 3:</label>
                <input type="file" id="img3" name="imagen3" onChange={handleImage3Change} />
                {imagePreview3 && <img src={imagePreview3} alt="Preview" style={{ maxWidth: '100px' }} />}

                <label htmlFor="imagen">Imagen 4:</label>
                <input type="file" id="img4" name="imagen4" onChange={handleImage4Change} />
                {imagePreview4 && <img src={imagePreview4} alt="Preview" style={{ maxWidth: '100px' }} />}
                <label htmlFor="imagen">Imagen 5:</label>
                <input type="file" id="img5" name="imagen5" onChange={handleImage5Change} />
                {imagePreview5 && <img src={imagePreview5} alt="Preview" style={{ maxWidth: '100px' }} />}
                <label htmlFor="imagen">Imagen 6:</label>
                <input type="file" id="img6" name="imagen6" onChange={handleImage6Change} />
                {imagePreview6 && <img src={imagePreview6} alt="Preview" style={{ maxWidth: '100px' }} />}
                <label htmlFor="imagen">Imagen 7:</label>
                <input type="file" id="img7" name="imagen7" onChange={handleImage7Change} />
                {imagePreview7 && <img src={imagePreview7} alt="Preview" style={{ maxWidth: '100px' }} />}

                <button className="Button" type='submit'>Agregar</button>
            </form>
        </div>
    )
}

export default Admin
