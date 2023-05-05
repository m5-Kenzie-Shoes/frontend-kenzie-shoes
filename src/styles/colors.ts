import { createGlobalStyle } from "styled-components";

export const StyledColors = createGlobalStyle`
    :root {
        --color-primary: #00a999;
        --color-primary-50: #93d7af;
        --color-secondary: #eb5757;

        --color-gray-100: #333333;
        --color-gray-50: #00a999;
        --color-gray-30: #aaaaaa;
        --color-gray-20: #e0e0e0;
        --color-gray-0: #f5f5f5;
        --color-white: #ffffff;

        --color-negative: #e60000;
        --color-warning: #ffcd07;
        --color-success: #168821;
        --color-information: #155bcb;
    }
`;
