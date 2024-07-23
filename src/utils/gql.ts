/* eslint-disable @typescript-eslint/no-explicit-any */
import { reduce } from "lodash-es";
import { removeUnnecessarySpaces } from "./removeUnnecessarySpaces";
import type { Dict } from "../types";

type GqlParams = Dict<any>;

interface GQL {
  (params: GqlParams): (strings: TemplateStringsArray, ...placeholders: any[]) => string;
  (params: TemplateStringsArray, ...placeholders: any[]): string;
}


const gql = ((params: GqlParams|TemplateStringsArray, ...placeholders: any[]) => {
  const constructGqlString = (strings: TemplateStringsArray, placeholders: any[]) => {
    return reduce(strings, (result, string, i) => {
      const placeholder = i < placeholders.length ? placeholders[i] : "";
      return result + string + placeholder;
    }, "");
  };

  if (Array.isArray(params)) {
    const query = constructGqlString(params as never, placeholders);
    return JSON.stringify({
      query: removeUnnecessarySpaces(query),
    });
  } else {
    return (strings: TemplateStringsArray, ...placeholders: any[]) => {
      const query = constructGqlString(strings, placeholders);
      return JSON.stringify({
        query: removeUnnecessarySpaces(query),
        variables: params,
      });
    };
  }
}) as GQL;


export { gql };
