import React, { Component, Fragment } from 'react';
import { Nav } from './components/commons/index';
import styles from './home.module.css';

import Profile from './components/ProfileComponent/Index';
import ListItems from './components/ListItems/ListItems';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

class App extends Component {

  // eslint-disable-next-line class-methods-use-this
  render() {
    return(
      <Fragment>
        <Nav />
        <div className={styles.home_container}>
          <Profile />
          <Tabs>
            <TabList>
              <Tab>Articles</Tab>
              <Tab>Favorites</Tab>
            </TabList>

            <TabPanel>
              <ListItems tab="articles"/>
            </TabPanel>
            <TabPanel>
              <ListItems tab="favorites" />
            </TabPanel>
          </Tabs>
        </div>
      </Fragment>
    );
  }
}

export default App;
