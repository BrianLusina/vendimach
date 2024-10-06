import { nanoid } from "https://deno.land/x/nanoid@v3.0.0/mod.ts"
import ID from "./ID.ts";

export default class EntityId extends ID<string> {
  constructor(id?: string) {
    super(id ? id : nanoid());
  }
}