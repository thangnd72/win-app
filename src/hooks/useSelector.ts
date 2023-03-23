import { RootState } from '@src/redux/rootState';
import { createSelectorHook } from 'react-redux';

const useSelector = createSelectorHook();
export default useSelector;
