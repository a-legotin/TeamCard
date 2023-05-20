import { ThunkDispatch } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { UserAction } from './actions/user';
import configureAppStore from './configureStore';

export const store = configureAppStore();

export type AppState = ReturnType<typeof store.getState>;
export type thunkDispatch = ThunkDispatch<AppState, any, UserAction<any>>;
export type AppDispatch = typeof store.dispatch;
