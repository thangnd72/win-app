import CheckedIcon from './Checked.svg';
import UncheckIcon from './Uncheck.svg';
import CheckedAroundIcon from './CheckedAround.svg';
import ErrorAroundIcon from './ErrorAround.svg';
import CalendarIcon from './Calendar.svg';
import ArrowDownIcon from './ArrowDown.svg';
import EyeIcon from './Eye.svg';
import EyeOffIcon from './EyeOff.svg';

const ShowHidePasswordIcon = ({ show = false }: { show: boolean }) =>
  show ? <EyeIcon /> : <EyeOffIcon />;

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
};
