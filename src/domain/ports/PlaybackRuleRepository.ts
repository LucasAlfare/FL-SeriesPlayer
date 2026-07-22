import { PlaybackRule, PlaybackRuleId } from "../entities/PlaybackRule";

export interface PlaybackRuleRepository {
  findById(id: PlaybackRuleId): Promise<PlaybackRule | null>;
  findAll(): Promise<ReadonlyArray<PlaybackRule>>;
  save(rule: PlaybackRule): Promise<void>;
  delete(id: PlaybackRuleId): Promise<void>;
}
