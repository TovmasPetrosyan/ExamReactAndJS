import React from 'react';
import Modal from 'react-modal';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import './modal.css';
import Button from '@mui/material/Button';




const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };
  const styleForClose = {
    position: 'absolute',
  }
  

function ModalItem() {
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    
    subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className='modal'>
     
      <Button className='centerButton' variant="contained"  onClick={openModal}>Open Modal</Button>
      <Modal 
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2>
        {/* <button className="close" onClick={closeModal}>close</button> */}
        <Button style={styleForClose} className='close' variant="contained"  onClick={closeModal} size="small"> close</Button>
        <Formik
       initialValues={{ email: '', password: '' }}
       validate={values => {
         const errors = {};
         if (!values.email) {
           errors.email = 'Required';
         } else if (
           !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
         ) {
           errors.email = 'Invalid email address';
         }
         if (!values.password) {
          errors.password = 'Required';
        } else if (values.password.length < 8) {
          errors.password = 'Password must be at least 8 characters long';
        } else if (!/(?=.*[a-z])/.test(values.password)) {
          errors.password = 'Password must contain at least one lowercase letter';
        } else if (!/(?=.*[A-Z])/.test(values.password)) {
          errors.password = 'Password must contain at least one uppercase letter';
        }
         return errors;
       }}
       onSubmit={(values, { setSubmitting }) => {
         setTimeout(() => {
           alert(JSON.stringify(values, null, 2));
           setSubmitting(false);
         }, 400);
       }}
     >
       {({ isSubmitting }) => (
         <Form>
          <label htmlFor="">Email<br/>
           <Field type="email" name="email" />  
           </label>         
           <ErrorMessage name="email" component="div" />
           <br/>
           <label htmlFor="">Password<br/>
           <Field type="password" name="password" />
           </label>
           <ErrorMessage name="password" component="div" />
         <br/><br/>
           <Button className='centerButton' variant="contained"  type="submit" disabled={isSubmitting} size="small"> Submit</Button>
         </Form>
       )}
     </Formik>
      </Modal>
    </div>
  );
}
  
  export default ModalItem;


