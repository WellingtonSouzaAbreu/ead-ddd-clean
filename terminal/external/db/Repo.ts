import { User } from '../../core/user/model/User';
import { DbProvider } from './../../core/user/provider/DbProvider';

export class UserRepo implements DbProvider {
    save(user: User): Promise<void> {
        return Promise.resolve();
    }
}