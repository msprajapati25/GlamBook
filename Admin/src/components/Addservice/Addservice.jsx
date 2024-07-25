import React, { useState } from 'react';
import './Addservice.css';
import upload_area from '../../assets/upload_area.svg';

const Addservice = () => {
    const [image, setImage] = useState(null);
    const [serviceDetails, setServiceDetails] = useState({
        name: '',
        new_price: '',
        old_price: '',
        category: 'women',
        image: null
    });

    const imageHandler = (e) => {
        setImage(e.target.files[0]);
    };

    const changeHandler = (e) => {
        setServiceDetails({
            ...serviceDetails,
            [e.target.name]: e.target.value
        });
    };

    const addService = async () => {
        try {
            if (!image) {
                throw new Error('Please select an image');
            }

            const formData = new FormData();
            formData.append('service', image);

            const responseImage = await fetch('http://localhost:4003/upload', {
                method: 'POST',
                body: formData
            });
            const responseData = await responseImage.json();

            if (responseImage.ok) {
                setServiceDetails({ ...serviceDetails, image: responseData.image_url });

                const responseService = await fetch('http://localhost:4003/addservice', {
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(serviceDetails)
                });
                const responseDataService = await responseService.json();

                if (responseDataService.success) {
                    alert('Service added successfully');
                } else {
                    alert('Failed to add service');
                }
            } else {
                throw new Error('Failed to upload image');
            }
        } catch (error) {
            console.error('Error:', error.message);
            alert('Error: ' + error.message);
        }
    };

    return (
        <div className='add-serv'>
            <div className='addservices-fields'>
                <p>Service title</p>
                <input
                    value={serviceDetails.name}
                    onChange={changeHandler}
                    type='text'
                    name='name'
                    placeholder='Enter service title'
                />
            </div>
            <div className='addservice-price'>
                <div className='addservices-fields'>
                    <p>Price</p>
                    <input
                        value={serviceDetails.old_price}
                        onChange={changeHandler}
                        type='text'
                        name='old_price'
                        placeholder='Enter regular price'
                    />
                </div>
                <div className='addservices-fields'>
                    <p>Offer Price</p>
                    <input
                        value={serviceDetails.new_price}
                        onChange={changeHandler}
                        type='text'
                        name='new_price'
                        placeholder='Enter offer price'
                    />
                </div>
            </div>
            <div className='addservices-fields'>
                <p>Service Category</p>
                <select
                    value={serviceDetails.category}
                    onChange={changeHandler}
                    name='category'
                    className='addserv-selecter'
                >
                    <option value='women'>Women</option>
                    <option value='men'>Men</option>
                </select>
            </div>
            <div className='addservices-fields'>
                <label htmlFor='file-input'>
                    <img
                        src={image ? URL.createObjectURL(image) : upload_area}
                        className='addserv-image'
                        alt=''
                    />
                </label>
                <input onChange={imageHandler} type='file' id='file-input' name='image' hidden />
            </div>
            <button onClick={addService} className='addserv-button'>
                ADD
            </button>
        </div>
    );
};

export default Addservice;
