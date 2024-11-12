import React from "react";
import { Modal as ResponsiveModal } from "react-responsive-modal";
import Button from "./Button";

// styles
import "react-responsive-modal/styles.css";
import styles from "./Modal.module.css";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  actionButton?: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  children,
  actionButton,
}) => {
  return (
    <ResponsiveModal
      open={isOpen}
      onClose={onClose}
      center
      classNames={{
        modal: styles.modal,
        overlay: styles.overlay,
        closeButton: styles.closeButton,
      }}
    >
      {title && (
        <h2 className="text-white text-lg font-semibold mb-4 font-mono">
          {title}
        </h2>
      )}
      <div>{children}</div>
      <div className="flex flex-row w-100 justify-end align-middle gap-2">
        <Button variant="outline_error" onClick={onClose}>
          Close
        </Button>
        {actionButton}
      </div>
    </ResponsiveModal>
  );
};

export default Modal;
