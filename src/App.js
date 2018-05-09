import React from 'react';
import { AppBar, Drawer, MenuItem } from 'material-ui';

import { Frame } from './components';

import sites from './sites.js';

const styles = {
    drawer: {
        width: "auto"
    }
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
        this.setState({url: url, drawerOpen: false});
    }

    toggleDrawer() {
        this.setState({drawerOpen:!this.state.drawerOpen});
    }

    render() {
        return (
            <div>
            <AppBar 
                title="Jason Warta" 
                iconClassNameRight="muidocs-icon-navigation-expand-more" 
                onLeftIconButtonClick={this.toggleDrawer}
            />
            <Drawer open={this.state.drawerOpen} style={styles.drawer}>
                {
                    sites.map(({title,url}) => <MenuItem key={title} onClick={() => this.changeUrl(url)}>{title}</MenuItem>)
                }
            </Drawer>
            <Frame url={this.state.url} />
            </div>
        )
    }
}