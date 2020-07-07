import React from 'react';

// @ts-ignore
import Link from "react-router-dom/Link";
import {withRouter, RouteComponentProps} from "react-router-dom";

import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import withStyles from '@material-ui/core/styles/withStyles';
import {WithStyles} from "@material-ui/core";
import MenuItem from "@material-ui/core/MenuItem";
import Divider from "@material-ui/core/Divider";

import MenuList from "./MenuList";

import styles from './Menu.styles';

interface MenuProps extends WithStyles<typeof styles>, RouteComponentProps {
    isOpen: boolean
}

class Menu extends React.PureComponent<MenuProps>{
    render() {
        const {classes, isOpen} = this.props;
        const {pathname} = this.props.location;

        return(
            <Drawer
                variant="persistent"
                anchor="left"
                open={isOpen}
                classes={{
                    paper: classes.drawerPaper,
                }}
            >

                <List className={classes.menuList}>
                    {MenuList.map((group, groupIndex) =>
                        <>
                            {group.map((item, itemIndex) =>
                                <Link to={item.link}
                                      className={classes.link}
                                      key={`${groupIndex}-${itemIndex}`}
                                >
                                    <MenuItem
                                        selected={pathname === item.link}
                                        classes={{
                                            selected: classes.selectedMenuItem,
                                            root: classes.menuItem,
                                        }}
                                    >
                                        <img src={pathname === item.link ? item.selectedIcon : item.icon} className={classes.icon} alt="" />
                                        {item.title}
                                    </MenuItem>
                                </Link>
                            )}
                            <Divider />
                        </>
                    )}
                </List>

            </Drawer>
        );
    }
}

export default withStyles(styles)(withRouter(Menu));