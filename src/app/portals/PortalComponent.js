import { createPortal } from "react-dom";

const PortalComponent = ({ children }) => {
	const portalRoot = document.getElementById('modal-root');
	return createPortal(children, portalRoot);
}

export { PortalComponent };