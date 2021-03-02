import React, {useEffect} from "react";
import { useState } from "react";
import {Button} from "@material-ui/core";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import TextField from "@material-ui/core/TextField";
import DialogActions from "@material-ui/core/DialogActions";
import Dialog from "@material-ui/core/Dialog";
import {RootStateOrAny, useDispatch, useSelector} from "react-redux";
import {setDisplayMode} from "../../store/slice/DisplayModeSlice";

const DialogWrapper: React.FC<{title?: String}> = (props) => {
    const dispatch = useDispatch();
    const display = useSelector((state: RootStateOrAny) => state.displayModeReducer);

    const handleClose = () => {
        dispatch(setDisplayMode({
            isOpenDialog: false
      }))
    };

    return (
        <div>
            <Dialog open={display.isOpenDialog} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">{props.title}</DialogTitle>
                <DialogContent>
                    {/*<DialogContentText>*/}
                    {/*    To subscribe to this website, please enter your email address here. We will send updates*/}
                    {/*    occasionally.*/}
                    {/*</DialogContentText>*/}
                    {/*<TextField*/}
                    {/*    autoFocus*/}
                    {/*    margin="dense"*/}
                    {/*    id="name"*/}
                    {/*    label="Email Address"*/}
                    {/*    type="email"*/}
                    {/*    fullWidth*/}
                    {/*/>*/}
                    {
                        props.children
                    }
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={handleClose} color="primary">
                        Subscribe
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default DialogWrapper;