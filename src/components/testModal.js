import React from 'react';
import { Link } from 'react-router-dom';


const Modal = ({ establishmentName,
    description,
    closeModal
}) => {
    return (
        <div className=" [ modal ] ">
            <div className=" [ modal-overlay ] ">
                <div className=" [ modal-box col-6 ] ">
                    <div className=" [ d-flex jc-end ] ">
                <i onClick={closeModal} className=" [ fa fa-times-circle closeModal ] "></i>
                </div>
                    <h1 className=" [ modal-box-h1 text-center ] ">{establishmentName}</h1>
                    <div className=" [ modal-box-form ] ">
                        <form method="POST" action="http://localhost/holidaze/enquiry-success.php" className=" [ enquiry-form col-10 m-auto ] ">
                            {/*   <!-- The name of establishment gets sent with the form so that only one JSON file is kept for all establishments.
                            This value must be updated for each establishment. --> */}
                            <label for="establishment">Establishment</label>
                            <br />
                            <input type="text" name="establishment" id="establishment" value={establishmentName} className=" [ form-input col-12 ] " readonly />
                            {/*   <!-- If additional fields are required, they must be handled in enquiry-success.php --> */}
                            <br />                            <br />
                            <label for="clientName">Full name</label>
                            <br />
                            <input type="text" name="clientName" id="clientName" className=" [ form-input col-12 ] " />
                            <br />                            <br />
                            <label for="email">Email Address</label>
                            <br />
                            <input type="text" name="email" id="email" className=" [ form-input col-12 ] " />
                            <br />                            <br />
                            <div className=" [ form-input-dflex ] ">
                                <div className=" [ col-5 ] ">
                                    <label for="checkin" className=" [ col-12 ] ">Check-in</label>
                                    <br />
                                    <input type="date" name="checkin" id="checkin" className=" [ form-input col-12 ] " />
                                    <br />
                                </div>
                                <div className=" [ col-5 ] ">
                                    <label for="checkout" className=" [ col-12 ] ">Check-out</label>
                                    <br />
                                    <input type="date" name="checkout" id="checkout" className=" [ form-input col-12 ] " />
                                </div>
                            </div>
                            <br />                            <br />
                            <input type="submit" className=" [ btn ] "/>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Modal;