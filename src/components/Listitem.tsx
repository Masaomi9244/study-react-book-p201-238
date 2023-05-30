import type { User } from "../types/users";
import type { FC } from "react";

export const ListItem: FC<User> = (props: User) => {
  const { id, name, age, personalColor, hobbies } = props;
  return (
    <p style={{ color: personalColor }}>
      {id}:{name}({age}) {hobbies?.join(" / ")}
    </p>
  );
};
