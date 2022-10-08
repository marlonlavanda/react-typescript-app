import { Sub, SubsResponseFromApi } from "../types";

export const getAllSubs = () => {
  return fetchSubs().then(mapFromApiToSubs);
};

export const fetchSubs = (): Promise<SubsResponseFromApi> => {
  return fetch("http://localhost:3001/subs").then((res) => res.json());
};

export const mapFromApiToSubs = (
  apiResponse: SubsResponseFromApi
): Array<Sub> => {
  return apiResponse.map((subFromAPi) => {
    const {
      nick,
      months: subMonths,
      profileUrl: avatar,
      description,
    } = subFromAPi;
    return {
      nick,
      avatar,
      description,
      subMonths,
    };
  });
};
