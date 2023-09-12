import React from 'react';
import Icon from '../components/Icon';
function PublicationsCard() {
    return (
        <>
            <div className='container bg-dark pb-2 mb-4 rounded'>
                <div className='row  d-flex justify-content-between'>
                    <div className='text-white col-3 display-1 align-self-center text-center'>
                        <Icon type={'solid'} symbol={'user'} />
                    </div>
                    <div className='col-9'>
                        <div className='d-flex justify-content-between'>
                            <span className='text-primary text-opacity-50 fs-6'>ljavierrodriguez</span>
                            <span className='text-primary fw-bold '>$250.000</span>
                        </div>
                        <h5 className='text-white'>Luis Rodríguez</h5>
                        <p className='textcardlocation text-secondary pt-2'> <Icon type={'solid'} symbol={'location-dot'} /> Santiago,Chile </p>

                    </div>
                </div>
                <div className='d-flex justify-content-around'>
                    <div className=''>
                        <span className='textcard text-primary text-opacity-50 bg-black m-1 rounded px-1'>Negociable</span>
                        <span className='textcard text-primary text-opacity-75 bg-black m-1 rounded px-1'>1 Transacción</span>
                    </div>
                    <div className=''>
                        <span className='text-white'>  <Icon type={'regular'} symbol={'pen-to-square'} /></span>
                        <span className='text-white'>  <Icon type={'solid'} symbol={'trash'} /></span>
                    </div>
                </div>
                <div>
                </div>
            </div>
        </>
    )
}
export default PublicationsCard;