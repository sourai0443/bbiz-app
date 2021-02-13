import {ThemeProvider} from "@material-ui/styles";
import React from "react";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import {RootStateOrAny, useSelector} from "react-redux";

const ThemeWrapper: React.FC = (props) => {
    const displayMode = useSelector((state: RootStateOrAny) => state.displayModeReducer);

    const theme = React.useMemo(() =>
            createMuiTheme({
                palette: {
                    type: displayMode.isDarkMode ? 'dark' : 'light',
                },
            }),
        [displayMode.isDarkMode],
    );

    return (
        <ThemeProvider theme={theme}>
            {
                props.children
            }
        </ThemeProvider>
    )
};

export default ThemeWrapper;