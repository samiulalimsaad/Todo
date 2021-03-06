import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Tooltip from "@material-ui/core/Tooltip";
import Typography from "@material-ui/core/Typography";
import React, { useState } from "react";
import { initialState } from "../pages/_app";

interface init {
    id: string;
    title: string;
    description: string;
}

interface T {
    open: boolean;
    updateState: init;
    close(): void;
    update(obj: init): void;
}
export default function UpdateTodo({ open, updateState, close, update }: T) {
    const [state, setState] = useState(updateState);
    const changeHandler = (e: { target: { name: string; value: string } }) => {
        setState((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    };
    const reset = () => {
        setState(updateState);
    };
    const reset2 = () => {
        setState(initialState);
    };
    const { title, description } = state;
    return (
        <div>
            <Dialog open={open} onClose={close}>
                <DialogTitle>Update Todo</DialogTitle>
                <DialogContent>
                    <Grid container spacing={1}>
                        <Grid item xs={6}>
                            <TextField
                                multiline
                                rowsMax={4}
                                label="Title"
                                color="secondary"
                                name="title"
                                value={title}
                                onChange={changeHandler}
                                style={{ width: "95%" }}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                multiline
                                rowsMax={4}
                                label="Description"
                                name="description"
                                color="secondary"
                                value={description}
                                onChange={changeHandler}
                                style={{ width: "95%" }}
                            />
                        </Grid>
                    </Grid>
                </DialogContent>
                <DialogActions>
                    <Tooltip title="Cancel">
                        <Button onClick={close} color="primary">
                            Cancel
                        </Button>
                    </Tooltip>
                    <Tooltip
                        title="Click to Reset Todo &
                                Double Click to Reset Default Value"
                    >
                        <Button
                            onClick={reset}
                            onDoubleClick={reset2}
                            color="primary"
                        >
                            Reset
                        </Button>
                    </Tooltip>
                    <Tooltip title="Update & Save Todo">
                        <Button onClick={() => update(state)} color="primary">
                            Update & Save
                        </Button>
                    </Tooltip>
                </DialogActions>
            </Dialog>
        </div>
    );
}
