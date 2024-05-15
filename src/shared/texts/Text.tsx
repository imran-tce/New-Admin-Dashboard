import styled from "styled-components";

interface TextProps {
  variant:
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "subtitle1"
    | "subtitle2"
    | "subtitle3"
    | "body1"
    | "body2"
    | "body3"
    | "body4"
    | "body5"
    | "caption"
    | "body6";
  children: React.ReactNode;
  color?: string;
}

const Text = styled.p<TextProps>`
  ${(props: TextProps) => {
    switch (props.variant) {
      case "h1":
        return `
          font-size: 36px;
          font-weight: 600;
          line-height:30px;
          font-family: "SF Pro Display Semibold";
          color: ${props.color || "#000"}
        `;
      case "h2":
        return `
            font-size: 30px;
            font-weight: 600;
            line-height:24px;
            font-family: "SF Pro Display Semibold";
            color: ${props.color || "#000"}
          `;
      case "h3":
        return `
            font-size: 30px;
            font-weight: 700;
            line-height:24px;
            font-family: "SF Pro Display Bold";
            color: ${props.color || "#000"}
              `;
      case "h4":
        return `
            font-size: 24px;
            font-weight: 600;
            line-height:20px;
            font-family: "SF Pro Display Semibold";
            color: ${props.color || "#000"}
          `;
      case "h5":
        return `
            font-size: 16px;
            font-weight: 600;
            line-height:14px;
            font-family: "SF Pro Display Semibold";
            color: ${props.color || "#000"}
          `;
      case "subtitle1":
        return `
                font-size: 16px;
                font-weight: 500;
                font-family: "SF Pro Display Medium";
                color: ${props.color || "#000"}
              `;
      case "subtitle2":
        return `
            font-size: 14px;
            font-weight: 600;
            font-family: "SF Pro Display Semibold";
            color: ${props.color || "#000"}
          `;
      case "subtitle3":
        return `
            font-size: 13px;
            font-weight: 600;
            font-family: "SF Pro Display Semibold";
            color: ${props.color || "#000"}
          `;
      case "body1":
        return `
            font-size: 20px;
            font-weight: 500;
            font-family: "SF Pro Display Medium";
            color: ${props.color || "#000"}
          `;
      case "body2":
        return `
            font-size: 20px;
            font-weight: 400;
            font-family: "SF Pro Display Regular";
            color: ${props.color || "#000"}
          `;
      case "body3":
        return `
            font-size: 16px;
            font-weight: 400;
            font-family: "SF Pro Display Regular";
            color: ${props.color || "#000"}
          `;
      case "body4":
        return `
            font-size: 14px;
            font-weight: 400;
            font-family: "SF Pro Display Regular";
            color: ${props.color || "#000"}
          `;
      case "body5":
        return `
            font-size: 14px;
            font-weight: 500;
            font-family: "SF Pro Display Medium";
            color: ${props.color || "#000"}
          `;
      case "body6":
        return `
            font-size: 14px;
            font-weight: 600;
            font-family: "SF Pro Display Semibold";
            color: ${props.color || "#000"}
          `;
      case "caption":
        return `
                font-size: 12px;
                font-weight: 400;
                font-family: "SF Pro Display Regular";
                color: ${props.color || "#000"}
              `;

      default:
        return;
    }
  }}
`;

export default Text;
