import { Category, CategoryId } from "../entities/Category";

export interface CategoryRepository {
  findById(id: CategoryId): Promise<Category | null>;
  findAll(): Promise<ReadonlyArray<Category>>;
  save(category: Category): Promise<void>;
  delete(id: CategoryId): Promise<void>;
}
