import React, { Component, Fragment } from 'react';
import { Nav } from './components/commons/index';
import styles from './home.module.css';

import Profile from './components/ProfileComponent/Index';
import ListItems from './components/ListItems/ListItems';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import { ErrorContext } from './context/ErrorProvider';

class App extends Component {

  // eslint-disable-next-line class-methods-use-this
  render() {
    return(
      <Fragment>
        <Nav />
        <div className={styles.home_container}>
          <ErrorContext.Consumer>
            {({ showError }) => (
              <Profile handleError={showError} />
            )}
          </ErrorContext.Consumer>
          <Tabs>
            <TabList>
              <Tab>Articles</Tab>
              <Tab>Favorites</Tab>
            </TabList>

            <TabPanel>
              <ErrorContext.Consumer>
                {({ showError }) => (
                  <ListItems handleError={showError} tab="articles"/>
                )}
              </ErrorContext.Consumer>
            </TabPanel>
            <TabPanel>
              <ErrorContext.Consumer>
                {({ showError }) => (
                  <ListItems handleError={showError} tab="favorites" />
                )}
              </ErrorContext.Consumer>
            </TabPanel>
          </Tabs>
        </div>
      </Fragment>
    );
  }
}

export default App;
