import { VideoRepository } from "../../domain";
import { VideoView } from "../shared/VideoView";
import { normalizeQuery } from "../shared/videoQuery";
import { toVideoView } from "../shared/videoViewMapper";

export interface SearchVideosInput {
  readonly query: string;
}

export interface SearchVideosDependencies {
  readonly videoRepository: VideoRepository;
}

export class SearchVideoUseCase {
  constructor(private readonly dependencies: SearchVideosDependencies) {}

  async execute(input: SearchVideosInput): Promise<ReadonlyArray<VideoView>> {
    const query = normalizeQuery(input.query);
    const videos = await this.dependencies.videoRepository.findAll();

    if (!query) {
      return videos.map(toVideoView);
    }

    return videos
      .filter((video) => {
        const title = video.title.value.toLowerCase();
        const filePath = video.filePath.value.toLowerCase();
        return title.includes(query) || filePath.includes(query);
      })
      .sort((left, right) => right.createdAt.getTime() - left.createdAt.getTime())
      .map(toVideoView);
  }
}
