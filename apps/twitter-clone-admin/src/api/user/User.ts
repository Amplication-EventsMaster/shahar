import { Like } from "../like/Like";
import { JsonValue } from "type-fest";

export type User = {
  createdAt: Date;
  email: string | null;
  id: string;
  likes?: Array<Like>;
  password: string | null;
  profilePicture: JsonValue;
  updatedAt: Date;
  username: string | null;
};
