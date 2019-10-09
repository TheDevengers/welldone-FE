import React, { Component, Fragment } from 'react';
import { Nav } from './components/commons/index';
import styles from './home.module.css';

import ProfileComponent from './components/ProfileComponent/ProfileComponent';
import ListItems from './components/ListItems/ListItems';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

class App extends Component {

  // eslint-disable-next-line class-methods-use-this
  render() {
    return(
      <Fragment>
        <Nav />
        <div className={styles.profile_container}>
          <ProfileComponent />
          <Tabs>
            <TabList>
              <Tab>Articles</Tab>
              <Tab>Favourites</Tab>
            </TabList>

            <TabPanel>
              <ListItems />
            </TabPanel>
            <TabPanel>
              <h2>Here will be the favorite articles</h2>
            </TabPanel>
          </Tabs>
        </div>
      </Fragment>
    );
  }
}

export default App;
