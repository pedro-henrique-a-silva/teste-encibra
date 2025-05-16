export type TimeLineItemType = {
  id: number;
  title: string;
  date: string;
  imageUrl: string;
}

export type SelectedEventType = {
  eventOne?: TimeLineItemType,
  eventTwo?: TimeLineItemType,
}