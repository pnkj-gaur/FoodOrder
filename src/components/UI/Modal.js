import { Fragment } from 'react';
import classes from './Modal.module.css';

const BackDrop=(props)=>{
    const cartHide=()=>{
        props.onHide();
    }
    return(
        <div className={classes.backdrop} onClick={cartHide}/>
    );
}

const ModalOverlay=(props)=>{
    return(
        <div className={classes.modal}>
            <div className={classes.content}>{props.children}</div>
        </div>
    )
}

const Modal=(props)=>{
    return(
        <Fragment>
            <BackDrop onHide={props.onHide}/>
            <ModalOverlay >{props.children}</ModalOverlay>
        </Fragment>
    );
}

export default Modal;