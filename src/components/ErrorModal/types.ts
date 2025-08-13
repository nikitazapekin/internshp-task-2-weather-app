import type { ModalProps } from "@components/Modal/types";

export interface ErrorModalProps extends Omit<ModalProps, "title" | "message" | "children"> {
  errorMessage: string;
  errorTitle?: string;
}
