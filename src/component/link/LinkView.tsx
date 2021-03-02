import React, {ChangeEvent, useState} from 'react';
import {RootStateOrAny, useDispatch, useSelector} from "react-redux";
import {Grid} from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import makeStyles from "@material-ui/core/styles/makeStyles";
import Divider from "@material-ui/core/Divider";
import DialogWrapper from "../common/DialogWrapper";
import { setDisplayMode } from '../../store/slice/DisplayModeSlice';
import DialogContent from "@material-ui/core/DialogContent";
import LinkModel from "../../model/impl/LinkModel";
import AppDataInterface from "../../model/AppDataInterface";

const selectItems = [
    {
        value: "",
        label: ""
    },
    {
        value: "URL",
        label: "URL",
    },
    {
        value: "FILE",
        label: "FILE",
    }
];

const dummyData: LinkModel[] = [
    new LinkModel(
        1,
        "H",
        "detail string.",
        new Date(),
        new Date(),
        "",
        ""
    ),
];

const APP_BAR_HEIGHT = 64;
const CONTENT_HEADER_HEIGHT = 110;
const PADDING_TOP_BOTTOM = 32;
const PADDING_SIDE = 24;

let displayHeight = window.innerHeight;

const useStyle = makeStyles((theme) => ({
   mainContent: {
       overflow: "scroll",
       height: `${displayHeight - APP_BAR_HEIGHT - CONTENT_HEADER_HEIGHT - PADDING_TOP_BOTTOM * 2}px`,
       marginTop: "8px",
   }
}));

const LinkView: React.FC = () => {
    const dispatch = useDispatch();
    const screen = useSelector((state: RootStateOrAny) => state.screenReducer);
    const display = useSelector((state: RootStateOrAny) => state.displayModeReducer);
    const linkData = useSelector((state: RootStateOrAny) => state.linkReducer);

    const [regex, setRegex] = useState("");
    const [linkType, setLinkType] = useState("");

    const classes = useStyle();

    const inputLinkType = (e: ChangeEvent<HTMLInputElement>) => {
        setLinkType(e.currentTarget.value);
    };

    const inputRegexString = (e: ChangeEvent<HTMLInputElement>) => {
        setRegex(e.currentTarget.value);
    };

    const clickHandler = () => {
        dispatch(setDisplayMode({
            isOpenDialog: !display.isOpenDialog,
        }))
    };

    const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        // dummyData[0].detail = e.currentTarget.value;
    };

    return (
      <>
        <Grid container spacing={2}>
            <DialogWrapper title={"Title"}>
                <DialogContent>
                    {/*<input onChange={changeHandler} value={dummyData[0].detail}></input>*/}
                </DialogContent>
            </DialogWrapper>
            <Grid item xs={12} sm={3}>
                <TextField
                    id="standard-select-currency-native"
                    select
                    fullWidth
                    label="Link type"
                    style={{ marginTop: 8, marginBottom: 8 }}
                    value={linkType}
                    onChange={inputLinkType}
                    variant={"outlined"}
                    SelectProps={{
                        native: true,
                    }}
                >
                    {selectItems.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </TextField>
            </Grid>
            <Grid item xs={12} sm>
                <TextField
                    id="outlined-full-width"
                    label="Label"
                    style={{ marginTop: "8px" }}
                    placeholder="Please input keywords."
                    helperText="You can search by regex notation for title and detail."
                    fullWidth
                    margin="normal"
                    value={regex}
                    onChange={inputRegexString}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    variant="outlined"
                />
            </Grid>
            <Grid item xs={12} sm={3}>
                <Grid container spacing={1} alignItems="center">
                    <Grid item xs>
                        <TextField
                            id="standard-select-currency-native"
                            select
                            fullWidth
                            label="Sort by"
                            style={{ marginTop: 8, marginBottom: 8 }}
                            // value={currency}
                            // onChange={handleChange}
                            variant={"outlined"}
                            SelectProps={{
                                native: true,
                            }}
                        >
                            {selectItems.map((option) => (
                                <option key={option.value} value={option.value}>
                                    {option.label}
                                </option>
                            ))}
                        </TextField>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
        <hr />
        <Grid container spacing={3} className={classes.mainContent}>
            {   dummyData.map((obj: LinkModel, index: number) => {
                    return (
                        <>
                            <Grid item xs={12} md={8} key={`main_card_${index}`}>
                                <Card variant="outlined" draggable>
                                    {/* TODO: objがObject型になっている。 LinkModelクラスにする必要がある。ライフサイクルを確認？ */}
                                    <Link href={obj.getPath()} target={"_blank"} color={"inherit"} underline={"none"}>
                                        <CardContent style={{"paddingBottom": "4px"}}>
                                            <Typography  color="textSecondary" gutterBottom>
                                                {
                                                    obj.getTitle()
                                                }
                                            </Typography>
                                            <Divider />
                                            <Typography  color="textSecondary" gutterBottom>
                                                {
                                                    obj.getDetail()
                                                }
                                            </Typography>
                                            <Typography  color="textSecondary" gutterBottom>
                                                    {obj.getPath()}
                                            </Typography>
                                            <Grid container spacing={3} >
                                                <Grid item xs={7} ></Grid>
                                                <Grid item xs>
                                                    <Typography color={"textSecondary"} gutterBottom variant="caption">
                                                        作成日: {obj.getCreatedAt().toLocaleDateString()}
                                                    </Typography>
                                                </Grid>
                                                <Grid item xs>
                                                    <Typography color={"textSecondary"} gutterBottom variant="caption">
                                                        更新日: {obj.getUpdatedAt().toLocaleDateString()}
                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                        </CardContent>
                                    </Link>
                                </Card>
                            </Grid>
                            <Grid item xs sm md lg xl key={`sub_card_${obj.getId()}`}>
                                <CardContent>
                                    <Grid container spacing={3}>
                                        <button onClick={clickHandler}>onClick</button>
                                        <Grid item xs={12} md>
                                            <Button
                                                fullWidth={true}
                                                variant="contained"
                                                color="primary"
                                                startIcon={<EditIcon />}
                                                size="large"
                                            >
                                                Edit
                                            </Button>
                                            <Button
                                                fullWidth={true}
                                                style={{marginTop: '8px'}}
                                                variant="contained"
                                                color="secondary"
                                                startIcon={<DeleteIcon />}
                                                size="large"
                                            >
                                                Delete
                                            </Button>
                                        </Grid>
                                    </Grid>
                                </CardContent>
                            </Grid>
                        </>
                    )
                })
            }
        </Grid>
      </>
    );
};

export default LinkView;