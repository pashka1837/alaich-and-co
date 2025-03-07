type ErrorResType = {
  success: false;
  data: {
    message: string;
  };
};

type SuccResType<T extends { data: unknown }> = {
  success: true;
  data: T["data"];
};

interface InfoDataType {
  data: {
    info: string;
  };
}

interface LoginDataType {
  data: {
    token: string;
  };
}

interface ProfileDataType {
  data: {
    fullname: string;
    email: string;
  };
}

interface AuthorDataType {
  data: {
    authorId: string;
    name: string;
  };
}

interface QuoteDataType {
  data: {
    authorId: string;
    quoteId: string;
    quote: string;
  };
}

interface LogoutDataType {
  data: null;
}
