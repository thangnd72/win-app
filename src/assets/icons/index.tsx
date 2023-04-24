import { View } from 'react-native';
import theme from '@src/helpers/theme';

// ICONS
import CheckedIcon from './Checked.svg';
import UncheckIcon from './Uncheck.svg';
import CheckedAroundIcon from './CheckedAround.svg';
import ErrorAroundIcon from './ErrorAround.svg';
import CalendarIcon from './Calendar.svg';
import ArrowDownIcon from './ArrowDown.svg';
import EyeIcon from './Eye.svg';
import EyeOffIcon from './EyeOff.svg';
import HomeInactiveIcon from './HomeInactive.svg';
import HomeActiveIcon from './HomeActive.svg';
import NotificationInactiveIcon from './NotificationInactive.svg';
import NotificationActiveIcon from './NotificationActive.svg';
import ProfileActiveIcon from './ProfileActive.svg';
import ProfileInactiveIcon from './ProfileInactive.svg';
import EventActiveIcon from './EventActive.svg';
import EventInactiveIcon from './EventInactive.svg';
import AddEventIcon from './AddEvent.svg';
import SearchIcon from './Search.svg';
import FilterIcon from './Filter.svg';
import ArrowRightIcon from './ArrowRight.svg';
import ArrowRight2Icon from './ArrowRight2.svg';
import ArrowRight3Icon from './ArrowRight3.svg';
import ClockIcon from './Clock.svg';
import Calendar2Icon from './Calendar2.svg';
import ArrowLeftIcon from './ArrowLeft.svg';
import MoreIcon from './More.svg';
import LogoIcon from './Logo.svg';
import EmailIcon from './Email.svg';
import LockIcon from './Lock.svg';

const ShowHidePasswordIcon = ({ show = false }: { show: boolean }) =>
  show ? <EyeIcon /> : <EyeOffIcon />;

const HomeTabIcon = ({ focused }: { focused: boolean }) =>
  focused ? (
    <View style={{ padding: 10, backgroundColor: theme.colors.bgTabBar, borderRadius: 10 }}>
      <HomeActiveIcon />
    </View>
  ) : (
    <HomeInactiveIcon />
  );

const NotiTabIcon = ({ focused }: { focused: boolean }) =>
  focused ? (
    <View
      style={{
        padding: 10,
        backgroundColor: theme.colors.bgTabBar,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <NotificationActiveIcon style={{ marginLeft: 4, marginTop: 3, marginRight: -2 }} />
    </View>
  ) : (
    <NotificationInactiveIcon />
  );

const ProfileTabIcon = ({ focused }: { focused: boolean }) =>
  focused ? (
    <View
      style={{
        padding: 10,
        backgroundColor: theme.colors.bgTabBar,
        borderRadius: 10,
        alignItems: 'center',
      }}
    >
      <ProfileActiveIcon />
    </View>
  ) : (
    <ProfileInactiveIcon />
  );

const EventTabIcon = ({ focused }: { focused: boolean }) =>
  focused ? (
    <View
      style={{
        padding: 10,
        backgroundColor: theme.colors.bgTabBar,
        borderRadius: 10,
        alignItems: 'center',
      }}
    >
      <EventActiveIcon style={{ marginLeft: 4, marginTop: 3, marginRight: -2 }} />
    </View>
  ) : (
    <EventInactiveIcon />
  );

export {
  CheckedIcon,
  UncheckIcon,
  CheckedAroundIcon,
  ErrorAroundIcon,
  CalendarIcon,
  ArrowDownIcon,
  EyeIcon,
  EyeOffIcon,
  ShowHidePasswordIcon,
  HomeTabIcon,
  NotiTabIcon,
  ProfileTabIcon,
  EventTabIcon,
  AddEventIcon,
  SearchIcon,
  FilterIcon,
  ArrowRightIcon,
  ArrowRight2Icon,
  ClockIcon,
  Calendar2Icon,
  ArrowLeftIcon,
  MoreIcon,
  LogoIcon,
  EmailIcon,
  LockIcon,
  ArrowRight3Icon,
};
