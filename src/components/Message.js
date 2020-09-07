import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Modal, InputGroup, FormControl } from 'react-bootstrap';

function Message() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Send a Message
            </Button>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Send a Message</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <InputGroup>
                        <FormControl as="textarea" aria-label="With textarea" />
                    </InputGroup>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                </Button>
                    <Button variant="primary">Send</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default Message;