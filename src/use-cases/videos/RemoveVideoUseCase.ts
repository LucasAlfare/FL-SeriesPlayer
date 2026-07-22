import { EntityId, NotFoundDomainError, VideoRepository } from "../../domain";

export interface RemoveVideoInput {
  readonly videoId: string;
}

export interface RemoveVideoDependencies {
  readonly videoRepository: VideoRepository;
}

export class RemoveVideoUseCase {
  constructor(private readonly dependencies: RemoveVideoDependencies) {}

  async execute(input: RemoveVideoInput): Promise<void> {
    const videoId = EntityId.create("video", input.videoId);
    const video = await this.dependencies.videoRepository.findById(videoId);

    if (!video) {
      throw new NotFoundDomainError("Video", videoId.value);
    }

    await this.dependencies.videoRepository.delete(videoId);
  }
}
