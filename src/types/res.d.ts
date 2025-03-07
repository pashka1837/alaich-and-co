type ErrorResType = {
  data: {
    message: string;
  };
  success: false;
};

type InfoGetResType = {
  data: {
    info: string;
  };
  success: true;
};

type LoginPostResType = {
  data: {
    token: string;
  };
  success: true;
};

type ProfileGetResType = {
  data: {
    fullname: string;
    email: string;
  };
  success: true;
};

type AuthoreGetResType = {
  data: {
    authorId: string;
    name: string;
  };
  success: true;
};

type QuoteGetResType = {
  data: {
    authorId: string;
    quoteId: string;
    quote: string;
  };
  success: true;
};

type LogotDeleteResType = {
  data: null;
  success: true;
};
