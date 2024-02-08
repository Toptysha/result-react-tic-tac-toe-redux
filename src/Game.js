import GameLayout from "./GameLayout";
import { configureStore } from '@reduxjs/toolkit';
import {  reducer } from './reducer';


export default function Game() {

  const store = configureStore({reducer})
    
    return (
      <GameLayout store = {store} />
    )
}