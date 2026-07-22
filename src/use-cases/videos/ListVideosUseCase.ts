import { VideoRepository } from "../../domain";
import { VideoView } from "../shared/VideoView";
import { toVideoView } from "../shared/videoViewMapper";

export interface ListVideosDependencies {
  readonly videoRepository: VideoRepository;
}

export class ListVideosUseCase {
  constructor(private readonly dependencies: ListVideosDependencies) {}

  async execute(): Promise<ReadonlyArray<VideoView>> {
    const videos = await this.dependencies.videoRepository.findAll();

    return videos
      .slice()
      .sort((left, right) => right.createdAt.getTime() - left.createdAt.getTime())
      .map(toVideoView);
  }
}
