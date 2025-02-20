import { development } from "./knexfile";
import Knex from "knex";
const knexInstance = Knex(development);
export default knexInstance;