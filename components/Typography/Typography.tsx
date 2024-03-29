// @ts-nocheck
import { GetProps, SizableText, styled } from "tamagui";

export const Paragraph = styled(SizableText, {
  name: "Paragraph",
  tag: "p",
  userSelect: "auto",
  color: "$color",
  size: "$true",
});

const Heading = styled(Paragraph, {
  tag: "span",
  name: "Heading",
  accessibilityRole: "header",
  fontFamily: "$heading",
  size: "$8",
  margin: 0,
});

const H1 = styled(Heading, {
  name: "H1",
  tag: "h1",
  size: "$h1",
  lineHeight: "$h1",
  height: "$h1",
  fontWeight: "$extraBold",
  letterSpacing: "$1",
});

const H2 = styled(Heading, {
  name: "H2",
  tag: "h2",
  size: "$h2",
  lineHeight: "$h2",
  height: "$h2",
  fontWeight: "$medium",
  letterSpacing: "$2",
});

const H3 = styled(Heading, {
  name: "H3",
  tag: "h3",
  size: "$h3",
  lineHeight: "$h3",
  height: "$h3",
  fontWeight: "$bold",
  letterSpacing: "$3",
});

const H4 = styled(Heading, {
  name: "H4",
  tag: "h4",
  size: "$h4",
  lineHeight: "$h4",
  height: "$h4",
  fontWeight: "$medium",
  letterSpacing: "$4",
});

const UIText = styled(Heading, {
  name: "UIText",
  tag: "p",
  size: "$ui",
  lineHeight: "$ui",
  height: "$ui",
  fontWeight: "$medium",
});

const Large = styled(Heading, {
  name: "H6",
  tag: "h6",
  size: "$large",
  lineHeight: "$large",
  height: "$large",
  fontWeight: "$bold",
});
const Medium = styled(Heading, {
  name: "H6",
  tag: "h6",
  size: "$medium",
  lineHeight: "$medium",
  height: "$medium",
  fontWeight: "$medium",
});
const Small = styled(Heading, {
  name: "H6",
  size: "$small",
  lineHeight: "$small",
  height: "$small",
  fontWeight: "$light",
});

type SizableTextProps = GetProps<typeof SizableText>;
type TypographyProps = {
  type?:
    | "paragraph"
    | "heading"
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "ui"
    | "large"
    | "medium"
    | "small";
  children?: SizableTextProps["children"];
  underlined?: boolean;
} & SizableTextProps;

const typographyMap = {
  paragraph: Paragraph,
  heading: Heading,
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  ui: UIText,
  large: Large,
  medium: Medium,
  small: Small,
};

export function Typography({
  type = "medium",
  color = "$text--dark",
  children,
  underlined = false,
  ...props
}: TypographyProps) {
  const Component = typographyMap[type];
  return (
    <Component
      color={color}
      {...props}
      textDecorationLine={underlined ? "underline" : "unset"}
      underlineColor={color}
    >
      {children}
    </Component>
  );
}
