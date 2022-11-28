import React from 'react';
import {MDBContainer, MDBCol, MDBRow, MDBBtn, MDBIcon, MDBInput, MDBCard, MDBCardBody} from 'mdb-react-ui-kit';

export const logIn = () => {
    return (
        <div>
            <MDBContainer fluid className='p-4'>

                <MDBRow>

                    <MDBCol md='6' className='text-center text-md-start d-flex flex-column justify-content-center'>

                        <h1 className="my-5 display-3 fw-bold ls-tight px-3">
                            The best offer <br />
                            <span className="text-primary">for your trades</span>
                        </h1>

                        <p className='px-3' style={{color: 'hsl(217, 10%, 50.8%)'}}>
                            <i>Buy and sell</i> provides an extensive list of items you can buy, as well as listing your own items for sale.
                        </p>

                    </MDBCol>

                    <MDBCol md='6'>

                        <MDBCard className='my-5'>
                            <MDBCardBody className='p-5'>

                                <MDBInput wrapperClass='mb-4' label='Email' id='form1' type='email'/>
                                <MDBInput wrapperClass='mb-4' label='Password' id='form1' type='password'/>

                                <MDBBtn className='w-100 mb-4' size='md'>sign up</MDBBtn>

                                <div className="text-center">

                                    <p>or sign up with:</p>

                                    <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                                        <MDBIcon fab icon='facebook-f' size="sm"/>
                                    </MDBBtn>

                                    <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                                        <MDBIcon fab icon='twitter' size="sm"/>
                                    </MDBBtn>

                                    <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                                        <MDBIcon fab icon='google' size="sm"/>
                                    </MDBBtn>

                                    <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                                        <MDBIcon fab icon='github' size="sm"/>
                                    </MDBBtn>

                                </div>

                            </MDBCardBody>
                        </MDBCard>

                    </MDBCol>

                </MDBRow>

            </MDBContainer>
        </div>
    );
}

export const register = () => {
    return (
        <div>
            <MDBContainer fluid className='p-4'>

                <MDBRow>

                    <MDBCol md='6' className='text-center text-md-start d-flex flex-column justify-content-center'>

                        <h1 className="my-5 display-3 fw-bold ls-tight px-3">
                            The best offer <br />
                            <span className="text-primary">for your trades</span>
                        </h1>

                        <p className='px-3' style={{color: 'hsl(217, 10%, 50.8%)'}}>
                            <i>Buy and sell</i> provides an extensive list of items you can buy, as well as listing your own items for sale.
                        </p>

                    </MDBCol>

                    <MDBCol md='6'>

                        <MDBCard className='my-5'>
                            <MDBCardBody className='p-5'>

                                <MDBRow>
                                    <MDBCol col='6'>
                                        <MDBInput wrapperClass='mb-4' label='First name' id='form1' type='text'/>
                                    </MDBCol>

                                    <MDBCol col='6'>
                                        <MDBInput wrapperClass='mb-4' label='Last name' id='form1' type='text'/>
                                    </MDBCol>
                                </MDBRow>

                                <MDBInput wrapperClass='mb-4' label='Email' id='form1' type='email'/>
                                <MDBInput wrapperClass='mb-4' label='Password' id='form1' type='password'/>

                                <MDBBtn className='w-100 mb-4' size='md'>sign up</MDBBtn>

                                <div className="text-center">

                                    <p>or sign up with:</p>

                                    <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                                        <MDBIcon fab icon='facebook-f' size="sm"/>
                                    </MDBBtn>

                                    <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                                        <MDBIcon fab icon='twitter' size="sm"/>
                                    </MDBBtn>

                                    <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                                        <MDBIcon fab icon='google' size="sm"/>
                                    </MDBBtn>

                                    <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                                        <MDBIcon fab icon='github' size="sm"/>
                                    </MDBBtn>

                                </div>

                            </MDBCardBody>
                        </MDBCard>

                    </MDBCol>

                </MDBRow>

            </MDBContainer>
        </div>
    );
}
