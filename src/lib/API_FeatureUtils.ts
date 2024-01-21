import { ParsedUrlQuery } from "querystring";

class API_FeatureUtils {
  query: ParsedUrlQuery = {};

  constructor(query: ParsedUrlQuery) {
    this.query = query;
  }

  getQueryObject(keys: string[], arrayKeys: string[]) {
    let convertedFilter: { [key: string]: string | Array<string> | number } =
      {};

    Object.keys(this.query)
      .filter((key: string) => keys.includes(key))
      .forEach((key: string) => {
        if (this.query[key] !== undefined) {
          const value = this.query[key] as string;

          convertedFilter[key] = arrayKeys.includes(key)
            ? value.split(",")
            : value;
        }
      });

    convertedFilter = JSON.parse(
      JSON.stringify(convertedFilter).replace(
        /gt|gte|lt|lte/g,
        (match) => `$${match}`
      )
    );

    return convertedFilter;
  }

  getAggregationSortQueryObject(): Record<string, 1 | -1> {
    const sortQuery = this.query.sort as string;

    return sortQuery
      ? {
          [sortQuery.replace("-", "")]: sortQuery.startsWith("-") ? -1 : 1,
        }
      : { createdAt: -1 };
  }

  getPaginationInfo(max?: number) {
    const { page, limit } = this.query;

    const pageNum = page ? Number(page) : 1;
    const paginationLimit = limit ? Number(limit) : max ? max : 10;

    return {
      currentPage: pageNum,
      limit: paginationLimit,
      skip: (pageNum - 1) * paginationLimit,
    };
  }
}

export default API_FeatureUtils;
