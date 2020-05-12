import { useParams } from "react-router";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import HotelClick from './../components/hotelSpecific';
import { GET_ESTABLISHMENTS } from './../constants/constants';
import Modal from './../components/testModal';
import ModalSuccess from './../components/testModalSuccess';


export default function HotelSpecific() {
    let { id } = useParams();
    const [hotelResult, setHotelResult] = useState(undefined);
    const [openModal, setOpenModal] = useState(false);
    const [modalSuccess, setModalSuccess] = useState(false);

    useEffect(() => {
        axios.get(GET_ESTABLISHMENTS)
            .then((result) => {
                setHotelResult(result.data[id]);
            })
    }, [id])

/*     console.log(hotelResult)
    console.log({ id }); */


    const showModalss = (e) => {
        setOpenModal(true);   
    }
    const closeModalss = () => {
        setOpenModal(false);
    }
    const openSuccessModal = (e) => {
        setOpenModal(false);
        setModalSuccess(true);
        e.preventDefault();  
    }
    const closeSuccessModal = (e) => {
        setModalSuccess(false); 
    }
    return (
        <div>
            {openModal && <Modal
                establishmentName={hotelResult.establishmentName}
                closeModal={closeModalss}
                showSuccess={openSuccessModal}
            />}
            {
          
            modalSuccess && <ModalSuccess
                establishmentName={hotelResult.establishmentName}
                closeSuccessModal={closeSuccessModal}
            />}

            <div className=' [ container mb-5 ] '>

                <div className=' [ row ] '>
                    <div className=' [ col-md-12 ] '>

                    </div>
                    <div className=' [ col-md-12 ] '>
                        {
                            (hotelResult !== undefined) ?
                                <HotelClick
                                    establishmentName={hotelResult.establishmentName}
                                    imageUrl={hotelResult.imageUrl}
                                    id={hotelResult.id}
                                    price={hotelResult.price}
                                    description={hotelResult.description}
                                    maxGuests={hotelResult.maxGuests}
                                    establishmentEmail={hotelResult.establishmentEmail}
                                    googleLat={hotelResult.googleLat}
                                    googleLong={hotelResult.googleLong}
                                    selfCatering={hotelResult.selfCatering}
                                    showModal={showModalss}
                                /> :
                                <div className=' [ d-flex justify-content-center col-md-6 ] '>
                                    <img className=' [ w-100 ] ' src='https://flevix.com/wp-content/uploads/2019/07/Bubble-Preloader-1.gif' alt='loading' />
                                </div>
                        }
                    </div>
                </div>
                {/*                 <div className=' [ d-flex justify-content-center mt-5 ] '>
                    <button className=' [ btn btn-primary ] '><Link to='/' className=' [ btn-primary-a ] '>{'Back to Homepage'}</Link></button>
                </div> */}
            </div>
        </div>
    )
}