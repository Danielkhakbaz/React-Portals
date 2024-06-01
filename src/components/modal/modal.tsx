import { useRef, useEffect } from "react";
import { createPortal } from "react-dom";

const Modal = ({ children }: { children: any }) => {
    const containerRef = useRef<HTMLElement>(document.createElement("div"));
    const windowRef = useRef<Window | null>(null);

    useEffect(() => {
        windowRef.current = window.open(
            "", "", `width=400,heigt=400,left=400,top=400`
        )
        
        windowRef.current?.document.body.appendChild(
            containerRef.current
        );

        return () => {
            windowRef.current?.close();
        };
    }, []);

    return createPortal(children, containerRef.current);
}

export default Modal;