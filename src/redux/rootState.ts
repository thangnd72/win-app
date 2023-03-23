import { rootReducer } from '@src/redux/rootReducers';

type GetReducerState<T> = {
  [P in keyof T]: T[P] extends (...args: any[]) => infer Q ? Q : never;
};

export type RootState = GetReducerState<typeof rootReducer>;
