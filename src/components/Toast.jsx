import React, { useEffect } from "react";
import "@cmsgov/design-system/css/index.css";
import "@cmsgov/design-system/css/core-theme.css";
const Toast = ({ message, type = "success", onClose }) => {
  useEffect(() => {
    const timer = setTimeout(onClose, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div
      className={`ds-c-alert ds-c-alert--${type}`}
      style={{ position: "fixed", top: "20px", right: "20px", zIndex: 1000 }}
    >
      {message}
      <button className="ds-c-alert__close" onClick={onClose}>
        ×
      </button>
    </div>
  );
};

export default Toast;
