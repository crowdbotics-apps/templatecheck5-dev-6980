import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import EmailAuth7730Navigator from '../features/EmailAuth7730/navigator';
import CalendarView7729Navigator from '../features/CalendarView7729/navigator';
import BlankScreen57728Navigator from '../features/BlankScreen57728/navigator';
import BlankScreen47727Navigator from '../features/BlankScreen47727/navigator';
import UserProfile67726Navigator from '../features/UserProfile67726/navigator';
import MessengerNavigator from '../features/Messenger/navigator';
import CalendarNavigator from '../features/Calendar/navigator';
import EmailAuthNavigator from '../features/EmailAuth/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
    SplashScreen: {
      screen: SplashScreen
    },
    //@BlueprintNavigationInsertion
EmailAuth7730: { screen: EmailAuth7730Navigator },
CalendarView7729: { screen: CalendarView7729Navigator },
BlankScreen57728: { screen: BlankScreen57728Navigator },
BlankScreen47727: { screen: BlankScreen47727Navigator },
UserProfile67726: { screen: UserProfile67726Navigator },
Messenger: { screen: MessengerNavigator },
Calendar: { screen: CalendarNavigator },
EmailAuth: { screen: EmailAuthNavigator },

    /** new navigators can be added here */
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu,
    initialRouteName: 'SplashScreen',
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
