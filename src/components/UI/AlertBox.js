import { Fragment } from 'react';
import classes from './AlertBox.module.css';

const BackDrop=(props)=>{
    const BoxHide=()=>{
        props.onHide();
    }
    return(
        <div className={classes.backdrop} onClick={BoxHide}/>
    );
}

const AlertBoxOverlay=(props)=>{
    return(
        <div className={classes.modal}>
            <div className={classes.content}>{props.children}</div>
        </div>
    )
}

const AlertBox=(props)=>{
    return(
        <Fragment>
            <BackDrop onHide={props.onHide}/>
            <AlertBoxOverlay >{props.children}</AlertBoxOverlay>
        </Fragment>
    );
}

export default AlertBox;