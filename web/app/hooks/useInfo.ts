import { Info } from "../types";
import { useFetch } from "./useFetch";

const INFO_URL = "/world.json";

export const useInfo = () => useFetch<Info>(INFO_URL);
