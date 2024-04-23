import { PasswordHash } from "../../../../terminal/core/shared/PasswordHash";
import { Email } from "../../../../terminal/core/shared/Email";
import { Entity, EntityProps } from "../../../../terminal/core/shared/Entity";
import { Name } from "../../../../terminal/core/shared/Name";

export interface UserProps extends EntityProps {
    name?: string;
    email?: string;
    password?: string;
}

export class User extends Entity<User, UserProps> {
    readonly name: Name
    readonly email: Email
    readonly password?: PasswordHash

    constructor(props: UserProps) {
        super(props)
        this.name = new Name(props.name!, "name", 3, 20)
        this.email = new Email(props.email!)
        this.password = new PasswordHash(props.password!)
    }
}