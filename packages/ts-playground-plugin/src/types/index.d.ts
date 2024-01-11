import {ShowModal, FlashInfo} from '../index'

declare module "*.jpeg";
declare module "*.jpg";
declare module "*.png";
declare module '*.svg' {
  const content: any
  export default content;
}

declare global {
  interface Window {
    playground: {
      ui: {
        showModal: ShowModal;
        flashInfo: FlashInfo;
      };
    };
  }
}
