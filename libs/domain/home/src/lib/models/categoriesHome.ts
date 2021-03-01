import { CategoryHome } from './categoryHome';
import { viewModes } from './viewModes';

export interface CategoriesHome {
  categories: CategoryHome[];
  viewMode: viewModes;
  loaded: boolean;
  fullFilled: boolean;
}
