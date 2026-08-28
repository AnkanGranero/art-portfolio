export const CATEGORY_HEADING_SIZES = {
  small: 'text-2xl lg:text-4xl',
  medium: 'text-3xl lg:text-5xl',
  large: 'text-4xl lg:text-6xl',
} as const;

export const CATEGORY_BODY_SIZES = {
  small: 'text-base lg:text-lg',
  medium: 'text-lg lg:text-xl',
  large: 'text-xl lg:text-2xl',
} as const;

export type CategoryHeadingSizeKey = keyof typeof CATEGORY_HEADING_SIZES;
export type CategoryBodySizeKey = keyof typeof CATEGORY_BODY_SIZES;

export const DEFAULT_CATEGORY_HEADING_SIZE: CategoryHeadingSizeKey = 'medium';
export const DEFAULT_CATEGORY_BODY_SIZE: CategoryBodySizeKey = 'medium';
