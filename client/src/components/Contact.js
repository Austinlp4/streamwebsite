import React from 'react';
import ReactContactForm from 'react-mail-form';
import styled from 'styled-components';

const Contact = () => {
    return(
        <Form>
            <h1>Reach out!</h1>
            <ReactContactForm className='form' to="paladynzyro@gmail.com" />
        </Form>
    )
}

const Form = styled.div`
    padding-top: 100px;
    margin-bottom: 85px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    .form{
        height: 600px;
        background: rgb(23, 30, 42);
        color: white;
        width: 600px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        border-radius: 6px;
        border: none;
        textarea{
            width: 500px;
            height: 400px;
            border-radius: 6px;
            border: none;
            padding: 10px;
        }
        input{
            width: 500px;
            border-radius: 6px;
            height: 30px;
            border: none;
            padding-left: 10px;
        }
        a{
            background: white;
            height: 30px;
            width: 200px;
            border: none;
            border-radius: 6px;
            text-decoration: none;
            color: rgb(23, 30, 42);
            padding-top: 10px;
        }
    }
`;

export default Contact;