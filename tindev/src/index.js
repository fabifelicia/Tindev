/* eslint-disable prettier/prettier */
import React from 'react';
import { YellowBox } from 'react-native';
import Routes from './routes.js';

YellowBox.ignoreWarnings([
  'Unrecognized WebSocket',
  'Possible Unhandled Promise Rejection',
]);

export default function App() {
  return (
    <Routes />
  );
}

