export abstract class Entity<TId> {
  protected constructor(private readonly entityId: TId) {}

  get id(): TId {
    return this.entityId;
  }
}
