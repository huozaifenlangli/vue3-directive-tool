import copy from "./copy";
import waterMarker from "./waterMarker";
import draggable from "./draggable";
import debounce from "./debounce";
import throttle from "./throttle";
import longpress from "./longpress";
import { debounceRest, isEvenOrOdd, isType } from "../utils";
const directivesList = {
    copy,
    waterMarker,
    draggable,
    debounce,
    throttle,
    longpress,
};
export const directives = {
    install: function (app) {
        Object.keys(directivesList).forEach((key) => {
            app.directive(key, directivesList[key]);
        });
    },
};
export { debounceRest, isEvenOrOdd, isType };
