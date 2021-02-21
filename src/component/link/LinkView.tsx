import React from 'react';
import {RootStateOrAny, useSelector} from "react-redux";
import {Grid} from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const dummyData = [
    {
        id: 1,
        title: "H",
        path: "https://yahoo.co.jp",
        detail: "detail string.",
    },
    {
        id: 2,
        title:"e",
        path: "https://yahoo.co.jp",
            detail: "detail string.",
    },
    {
        id: 3,
        title: "l",
        path: "https://yahoo.co.jp",
            detail: "detail string.",
    },
    {
        id: 4,
        title: "l",
        path: "https://yahoo.co.jp",
            detail: "detail string.",
    },
    {
        id: 5,
        title: "o",
        path: "https://yahoo.co.jp",
            detail: "detail string.",
    },
];

const LinkView: React.FC = () => {
    const screen = useSelector((state: RootStateOrAny) => state.screenReducer);

    return (
      <>
        <span>
            nav bar component
        </span>
        <hr />
        <Grid container spacing={3}>
            {   dummyData.map(obj => {
                    return (
                        <Grid item xs sm md lg xl>
                            <Card  variant="outlined">
                                <CardContent>
                                    <Typography  color="textSecondary" gutterBottom>
                                        {
                                            obj.title
                                        }
                                    </Typography>
                                    <Typography  color="textSecondary" gutterBottom>
                                        {
                                            obj.detail
                                        }
                                    </Typography>
                                    <Typography  color="textSecondary" gutterBottom>
                                        {
                                            <a href={obj.path} target='_blank'>{obj.path}</a>
                                        }
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    )
                })
            };
        </Grid>
      </>
    );
};

export default LinkView;