// import original module declarations
import "styled-components";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    borderRadius: string;

    colors: {
      main: string;
      background: string;
      secondary: string;
      label: string;
      gameNumbers: string;
      error: string;
      card: string;
      focus: string;
    };
  }
}
