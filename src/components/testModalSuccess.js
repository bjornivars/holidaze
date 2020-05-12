import React from 'react';
import { Link } from 'react-router-dom';
//import {useDatepicker, useMonth, useDay} from '@datepicker-react/hooks';

const ModalSuccess = ({ establishmentName,
    closeSuccessModal,
    
}) => {
    return (
        <div className=" [ modal ] ">
            <div className=" [ modal-overlay ] ">
                <div className=" [ modal-box col-6 ] ">
                    <div className=" [ d-flex jc-end ] ">
                <i onClick={closeSuccessModal} className=" [ fa fa-times-circle closeModal ] "></i>
                </div>
                    <h1 className=" [ modal-box-h1 text-center ] ">Thank you for booking<br></br>{establishmentName}</h1>
                    <div className=" [ modal-box-form ] ">

                    </div>
                </div>
            </div>
        </div>

    )
}

export default ModalSuccess;