export interface IPreviewCarouselModal {
  selectedIndex: number;
  thumbnailListState: Array<string>;
  handleLeftClick: () => void;
  handleRightClick: () => void;
  handleModalClose: () => void;
}
