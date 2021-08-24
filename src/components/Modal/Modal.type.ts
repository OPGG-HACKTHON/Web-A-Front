import React from "react";

export interface IModalProps {
  onClose: (e: React.MouseEvent) => void;
  visible: boolean;
}
