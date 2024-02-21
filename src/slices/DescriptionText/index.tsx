import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `DescriptionText`.
 */
export type DescriptionTextProps =
  SliceComponentProps<Content.DescriptionTextSlice>;

/**
 * Component for "DescriptionText" Slices.
 */
const DescriptionText = ({ slice }: DescriptionTextProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for description_text (variation: {slice.variation})
      Slices
    </section>
  );
};

export default DescriptionText;
