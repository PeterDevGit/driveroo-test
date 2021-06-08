import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../../Redux/action";

import './Form.scss';
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import moment from "moment";

import Inputitem from "./Inputitem/Inputitem";
import Selectitem from "./Selectitem/Selectitem";
import Button from "../Button/Button";
import Header from "../Header/Header";
import homeIcon from "../../img/home_icon.svg";
import Inputfile from "./Inputfile/Inputfile";
import Modal from "../Modal/Modal";

const Form = () => {
    const dispatch = useDispatch();

    const [open, setOpen] = useState(false);

    const [options, setOptions] = useState(['male', 'female']);

    const [picUrl, setPicUrl] = useState('');
    const [picError, setPicError] = useState('');

    const [name, setName] = useState('');
    const [nameError, setNameError] = useState('');

    const [birth, setBirth] = useState(new Date());

    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');

    const [gender, setGender] = useState('male');
    const [address, setAddress] = useState('');

    const statusModal = () => {
        setOpen(!open);
        successfulOperation();
    }

    const changePic = (file) => {
            if (file) {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => {
                setPicUrl(reader.result);
            };
        }
    }

    const modalCotent = () => {
        return (
            <>
                <h2 style={{color: 'green'}}>User added</h2>
                <span className="user-info">
                    <img src={picUrl} alt="user avatar"/>
                    <ul>
                        <li>{name}</li>
                        <li>{moment(birth).format('DD/MM/YYYY')}</li>
                        <li>{email}</li>
                        <li>{gender}</li>
                        {address && <li>{address}</li>}
                    </ul>
                </span>

                <div className="modal-btn">
                    <Button label="done" className="success" handleSubmit={statusModal} />
                </div>
            </>
        )
    }

    const successfulOperation = () => {
        setPicUrl('');
        setName('');
        setBirth(new Date());
        setEmail('');
        setGender('male');
        setAddress('');
    }

    const sumbitForm = (e) => {
        e.preventDefault();
        const paramsValid = {};

        if(!picUrl.trim()){
            setPicError('Require field');
            paramsValid.picUrl = false;
        } else {
            setPicError('');
            paramsValid.picUrl = true;
        }

        if(!name.trim()){
            setNameError('Require field');
            paramsValid.name = false;
        } else {
            setNameError('');
            paramsValid.name = true;
        }

        const emailValid = /^([a-z0-9_.-])+@[a-z0-9-]+.([a-z]{2,4}.)?[a-z]{2,4}$/i;
        if(!emailValid.test(email)){
            setEmailError('Email not valid');
            paramsValid.email = false;
        } else {
            setEmailError('');
            paramsValid.email = true;
        }

        let isValid = true;
        for(let key in paramsValid){
            if(!paramsValid[key]){
                isValid = false;
                break
            }
        }

        if(isValid) {
            const data = {
                id: Date.now(),
                avatar: picUrl,
                username: name,
                date_of_birth: birth,
                email: email,
                gender: gender,
                address: address
            };
            dispatch(addUser(data));
            console.log('Sumbit Form Data', data);
            setOpen(!open);
        }

    }

    return(
        <>
        <Header title="Create user" icon={homeIcon} />
            <div className="form-component">
                <form onSubmit={sumbitForm}>

                    <Inputfile
                        label="User picture"
                        name="user_pic"
                        url={picUrl}
                        error={picError}
                        changeValue={(e)=> changePic(e.target.files[0])}
                    />

                    <Inputitem
                        label="Name"
                        name="name"
                        type="text"
                        error={nameError}
                        value={name}
                        changeValue={(e)=> setName(e.target.value)}
                    />

                    <span className="label">
                        <label>Date of birth</label>
                        <DatePicker
                            selected={birth}
                            onChange={(date) => setBirth(date)}
                            dateFormat="dd/MM/yyyy"
                        />
                    </span>

                    <Inputitem
                        label="Email"
                        name="email"
                        type="text"
                        error={emailError}
                        value={email}
                        changeValue={(e)=> setEmail(e.target.value)}
                    />

                    <span className="label">
                         Gender
                         <Selectitem
                             value={gender}
                             options={options}
                             changeValue={(e)=> setGender(e.target.value)}
                         />
                    </span>

                    <Inputitem
                        label="Address"
                        name="address"
                        type="text"
                        value={address}
                        changeValue={(e)=> setAddress(e.target.value)}
                    />
                    <Button label="Save" className="success submit"/>
                </form>
                <Modal
                    open={open}
                    closeHandler={statusModal}
                >
                    {modalCotent()}
                </Modal>
            </div>
        </>
    )
}

export default Form;