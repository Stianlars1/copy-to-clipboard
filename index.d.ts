export declare type CopyCallback = () => void;

export declare const copy: (
  text: string,
  callback?: CopyCallback
) => Promise<boolean>;
