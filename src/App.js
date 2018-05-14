import React from 'react';
import { AppBar, Drawer, MenuItem } from 'material-ui';

import { Frame } from './components';

import sites from './sites.js';

const styles = {
    drawer: {
        container: {
            top: "64px",
        },
        overlay: {
            top: "64px",
        },
    },
}
export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            url: "https://jasonwarta.github.io/home",
            drawerOpen: false
        }

        this.changeUrl = this.changeUrl.bind(this);
        this.toggleDrawer = this.toggleDrawer.bind(this);
    }

    changeUrl(url) {
        this.closeDrawer();
        this.setState({url: url});
    }

    toggleDrawer() {
        this.setState({drawerOpen:!this.state.drawerOpen});
    }

    closeDrawer() {
        this.setState({ drawerOpen: false });
    }

    render() {
        return (
            <div>
            <AppBar 
                title="Jason Warta" 
                iconClassNameRight="muidocs-icon-navigation-expand-more" 
                onLeftIconButtonClick={this.toggleDrawer}
            />
            <Drawer
                docked={false}
                open={this.state.drawerOpen}
                containerStyle={styles.drawer.container}
                onRequestChange={(drawerOpen) => this.setState({drawerOpen})}
                overlayStyle={styles.drawer.overlay}
            >
                {
                    sites.map(({title,url}) => <MenuItem key={title} onClick={() => this.changeUrl(url)}>{title}</MenuItem>)
                }
            </Drawer>
            <Frame url={this.state.url} />
            </div>
        )
    }
}