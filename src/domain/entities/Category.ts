import { Entity } from "../common/Entity";
import { EntityId } from "../common/EntityId";
import { TextValue } from "../value-objects/TextValue";

export type CategoryId = EntityId<"category">;

export interface CategoryProps {
  readonly id: CategoryId;
  readonly name: TextValue;
  readonly createdAt: Date;
  readonly updatedAt: Date;
}

export class Category extends Entity<CategoryId> {
  private props: CategoryProps;

  private constructor(props: CategoryProps) {
    super(props.id);
    this.props = {
      ...props,
      createdAt: new Date(props.createdAt),
      updatedAt: new Date(props.updatedAt),
    };
  }

  static create(props: CategoryProps): Category {
    return new Category(props);
  }

  get name(): TextValue {
    return this.props.name;
  }

  get createdAt(): Date {
    return new Date(this.props.createdAt);
  }

  get updatedAt(): Date {
    return new Date(this.props.updatedAt);
  }

  rename(name: TextValue): void {
    this.props = {
      ...this.props,
      name,
      updatedAt: new Date(),
    };
  }
}
