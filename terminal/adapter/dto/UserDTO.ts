import { UserProps } from "../../core/user/model/User";

export interface UserDTO extends UserProps {
    validationCode: string;
}