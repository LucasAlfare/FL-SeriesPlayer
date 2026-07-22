import {
  ConflictDomainError,
  Duration,
  EntityId,
  FilePath,
  IdGenerator,
  InvalidDomainValueError,
  TextValue,
  Video,
  VideoRepository,
  VideoStatus,
} from "../../domain";
import { deriveTitleFromFilePath } from "../shared/videoQuery";
import { VideoView } from "../shared/VideoView";
import { toVideoView } from "../shared/videoViewMapper";

export interface AddVideoInput {
  readonly filePath: string;
  readonly title?: string;
  readonly durationSeconds?: number | null;
  readonly thumbnailPath?: string | null;
  readonly fileSizeBytes?: number | null;
}

export interface AddVideoDependencies {
  readonly videoRepository: VideoRepository;
  readonly idGenerator: IdGenerator;
}

export class AddVideoUseCase {
  constructor(private readonly dependencies: AddVideoDependencies) {}

  async execute(input: AddVideoInput): Promise<VideoView> {
    const filePath = FilePath.create(input.filePath);
    const existingVideo = await this.dependencies.videoRepository.findByFilePath(filePath);

    if (existingVideo) {
      throw new ConflictDomainError(`A video already exists for file path ${filePath.value}.`);
    }

    const titleSource = input.title ?? deriveTitleFromFilePath(filePath.value);

    if (!titleSource) {
      throw new InvalidDomainValueError("title", "could not be derived from the file path");
    }

    const duration = input.durationSeconds == null ? null : Duration.create(input.durationSeconds);
    const thumbnailPath =
      input.thumbnailPath == null ? null : FilePath.create(input.thumbnailPath);
    const now = new Date();
    const video = Video.create({
      id: EntityId.create("video", this.dependencies.idGenerator.next()),
      title: TextValue.create(titleSource),
      filePath,
      duration,
      status: VideoStatus.Available,
      createdAt: now,
      updatedAt: now,
      thumbnailPath,
      fileSizeBytes: input.fileSizeBytes ?? null,
    });

    await this.dependencies.videoRepository.save(video);

    return toVideoView(video);
  }
}
