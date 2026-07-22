import { Entity } from "../common/Entity";
import { EntityId } from "../common/EntityId";
import { TextValue } from "../value-objects/TextValue";
import { TimeRange } from "../value-objects/TimeRange";
import { PlaybackActionType } from "../enums/PlaybackActionType";
import { PlaybackRuleConditionField } from "../enums/PlaybackRuleConditionField";
import { PlaybackRuleConditionOperator } from "../enums/PlaybackRuleConditionOperator";
import { PlaybackRuleTrigger } from "../enums/PlaybackRuleTrigger";

export type PlaybackRuleId = EntityId<"playbackRule">;

export interface PlaybackRuleConditionProps {
  readonly field: PlaybackRuleConditionField;
  readonly operator: PlaybackRuleConditionOperator;
  readonly value: string | number | boolean;
}

export class PlaybackRuleCondition {
  constructor(public readonly props: PlaybackRuleConditionProps) {}

  get field(): PlaybackRuleConditionField {
    return this.props.field;
  }

  get operator(): PlaybackRuleConditionOperator {
    return this.props.operator;
  }

  get value(): string | number | boolean {
    return this.props.value;
  }
}

export interface PlaybackRuleActionProps {
  readonly type: PlaybackActionType;
  readonly value?: number;
}

export class PlaybackRuleAction {
  constructor(public readonly props: PlaybackRuleActionProps) {}

  get type(): PlaybackActionType {
    return this.props.type;
  }

  get value(): number | undefined {
    return this.props.value;
  }
}

export interface PlaybackSkipIntervalProps {
  readonly range: TimeRange;
}

export class PlaybackSkipInterval {
  constructor(public readonly props: PlaybackSkipIntervalProps) {}

  get range(): TimeRange {
    return this.props.range;
  }
}

export interface PlaybackRuleProps {
  readonly id: PlaybackRuleId;
  readonly name: TextValue;
  readonly trigger: PlaybackRuleTrigger;
  readonly enabled: boolean;
  readonly conditions: PlaybackRuleCondition[];
  readonly actions: PlaybackRuleAction[];
  readonly skipIntervals: PlaybackSkipInterval[];
  readonly createdAt: Date;
  readonly updatedAt: Date;
}

export class PlaybackRule extends Entity<PlaybackRuleId> {
  private props: PlaybackRuleProps;

  private constructor(props: PlaybackRuleProps) {
    super(props.id);
    this.props = {
      ...props,
      conditions: [...props.conditions],
      actions: [...props.actions],
      skipIntervals: [...props.skipIntervals],
      createdAt: new Date(props.createdAt),
      updatedAt: new Date(props.updatedAt),
    };
  }

  static create(props: PlaybackRuleProps): PlaybackRule {
    return new PlaybackRule(props);
  }

  get name(): TextValue {
    return this.props.name;
  }

  get trigger(): PlaybackRuleTrigger {
    return this.props.trigger;
  }

  get enabled(): boolean {
    return this.props.enabled;
  }

  get conditions(): readonly PlaybackRuleCondition[] {
    return [...this.props.conditions];
  }

  get actions(): readonly PlaybackRuleAction[] {
    return [...this.props.actions];
  }

  get skipIntervals(): readonly PlaybackSkipInterval[] {
    return [...this.props.skipIntervals];
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

  enable(): void {
    this.props = {
      ...this.props,
      enabled: true,
      updatedAt: new Date(),
    };
  }

  disable(): void {
    this.props = {
      ...this.props,
      enabled: false,
      updatedAt: new Date(),
    };
  }

  addCondition(condition: PlaybackRuleCondition): void {
    this.props = {
      ...this.props,
      conditions: [...this.props.conditions, condition],
      updatedAt: new Date(),
    };
  }

  addAction(action: PlaybackRuleAction): void {
    this.props = {
      ...this.props,
      actions: [...this.props.actions, action],
      updatedAt: new Date(),
    };
  }

  addSkipInterval(skipInterval: PlaybackSkipInterval): void {
    this.props = {
      ...this.props,
      skipIntervals: [...this.props.skipIntervals, skipInterval],
      updatedAt: new Date(),
    };
  }
}
