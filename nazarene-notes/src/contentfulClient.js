import * as contentful from "contentful";

//intializes the contentfull client api by providing a the space ID and accessToken as required by contentful

export const client = contentful.createClient({
  space: process.env.REACT_APP_SPACE_ID,
  accessToken: process.env.REACT_APP_ACCESS_TOKEN,
});
