import { configureStore } from "@reduxjs/toolkit";
import carousel from './reducerCarousel';
import Accordion from './reducerCounter';

const reducer = {
    carousel,
    Accordion
}
const store = configureStore({ reducer });
console.log("store?/", store.getState())
export default store;
