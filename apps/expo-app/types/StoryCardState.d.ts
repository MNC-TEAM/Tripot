interface StoryCardState {
  tag: string;
  title: string;
  desc: string;
  date: string;
  uri: string;
}

type PopularityCardState = Pick<
  StoryCardState,
  'date' | 'tag' | 'title' | 'uri'
>;

type NowStoryCardState = Pick<StoryCardState, 'tag' | 'title' | 'uri'>;
