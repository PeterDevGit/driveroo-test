import React, {useState, useEffect, Fragment} from "react";
import { useSelector, useDispatch } from "react-redux";
import { setDataUsers, removeUser } from "../../Redux/action";

import Useritem from "../Useritem/Useritem";
import Userfilter from "../Userfilter/Userfilter";

import Modal from "../Modal/Modal";
import Button from "../Button/Button";
import Loader from "../Loader/Loader";

import './Userlist.scss';

const Userslist = () => {

    const dispatch = useDispatch();
    const { users } = useSelector( store => store);

    const [open, setOpen] = useState(false);
    const [typeModal, setTypeModal] = useState('confirm');

    const [filteredList, setFilteredList] = useState('');

    const [deleteUserInfo, setDeleteUserInfo] = useState({});

    useEffect(() => {
        if (!users.length) {
            dispatch(setDataUsers())
        };
    }, [dispatch]);


    const statusModal = () => {
        setTypeModal('confirm');
        setOpen(!open);
    }

    const setConfirm = (userInfo) => {
        setDeleteUserInfo(userInfo);
        statusModal();
    }

    const chaneFilterValue = (value) => {
       const filteredUserList = users.filter((item) => item.username.toLowerCase().indexOf(value.toLowerCase()) !== -1);
        setFilteredList(filteredUserList);
    }

    const modalCotent = () => {
        switch (typeModal) {
            case 'confirm' :
                return (
                 <>
                    <h3>Do you want to delete user:
                        <span style={{color: 'red'}}> {deleteUserInfo.username} </span>?
                    </h3>
                     <div className="modal-btn">
                         <Button label="Yes" className="danger" handleSubmit={deleteHandler} />
                         <Button label="No" className="success" handleSubmit={statusModal} />
                     </div>
                 </>
                )
            default :
                return (
                    <>
                        <h3>
                            You have successfully deleted user: <span style={{color: 'green'}}> {deleteUserInfo.username} </span>
                        </h3>
                        <div className="modal-btn">
                            <Button label="Done" className="success" handleSubmit={statusModal} />
                        </div>
                    </>
                )
        }
    }

    const allUsers = filteredList.length ? filteredList : users;

    const deleteHandler = () => {
        dispatch(removeUser(deleteUserInfo.id));
        setTypeModal('');
    }

    return (
        <>
            {allUsers.length ?
                <div className="user-list">
                    <Userfilter filterValue={chaneFilterValue} />

                    {allUsers.length ? allUsers.map((user) => {
                        return (
                            <Fragment key={user.id} >
                                <Useritem
                                    data={user}
                                    deleteHandler={setConfirm}
                                />
                            </Fragment>
                        )
                    }) : null}

                    <Modal
                        open={open}
                        closeHandler={statusModal}
                    >
                        {modalCotent()}
                    </Modal>
                </div> : <Loader />
            }
        </>
    );
}

export default Userslist;