import { Model } from 'redux-orm';

import {
  ADD_LINK,
  REMOVE_LINK
} from '../actions/actionTypes';


class Link extends Model {
  static reducer(action, Link, session) {
    switch (action.type) {
      case ADD_LINK:
        Link.create(action.payload);
        break;
      case REMOVE_LINK:
        const link = Link.withId(action.payload);
        Link.delete();
        break;
    }
    return undefined;
  }

}
Link.modelName = "Link";
Link.fields = {
}

export default Link;