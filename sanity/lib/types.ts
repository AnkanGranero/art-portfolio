export type Category = {
  _id: string;
  title?: string;
  categoryImage?: {
    asset?: {
      _id: string;
      url: string;
      metadata?: {
        dimensions?: {
          width: number;
          height: number;
        };
      };
    };
    hotspot?: {
      x: number;
      y: number;
      width: number;
      height: number;
    };
  };
};
