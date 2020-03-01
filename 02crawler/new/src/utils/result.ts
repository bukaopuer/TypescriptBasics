interface Result {
  code: number;
  errMsg?: string;
  data?: any;
}
export const getResponseData = (errMsg: string,data?: any): Result => {
  if (errMsg) {
    return {
      code:400,
      errMsg:errMsg,
      data
    };
  } else {
    return {
      code: 200,
      data
    }
  }
};
