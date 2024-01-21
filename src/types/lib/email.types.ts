type SendForgotPasswordPinArgsT = {
  to: string;
  pin: number;
  username: string;
};

type SendWelcomeArgsT = {
  to: string;
  username: string;
};

type SendCustomArgsT = {
  to: string;
  subject: string;
  template: string;
  text?: string;
  username?: string;
  title?: string;
  subTitle?: string;
  titleSecondary?: string;
  list?: Array<string>;
};

export type { SendForgotPasswordPinArgsT, SendWelcomeArgsT, SendCustomArgsT };
