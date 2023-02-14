import { createContext, useCallback, useContext, useEffect, useRef } from "react";

export const LogContext = createContext({});

export const useLog = () => {
    const context = useContext(LogContext);
    const eventListenerNode = useRef(null);
    const reportMessage = useCallback((data, type) => {
        switch (type) {
            case 'click':
                console.log("event type is click, from ", context, "target is ", data);
                break;
            case 'mouseOver':
                console.log("event type is mouseOver, from ", context, "target is ", data);
                break;
            default:
                console.log("event type is unknown, from ", context, "target is ", data);
        }
    }, [context]);

    useEffect(() => {
        const handleEvent = (e) => {
            reportMessage(e.target, 'click');
        }
        if (eventListenerNode.current) {
            eventListenerNode.current.addEventListener("click", handleEvent);
        }
        return () => {
            eventListenerNode.current?.removeEventListener("click", handleEvent);
        }
    }, [reportMessage]);

    return [eventListenerNode, reportMessage];

}