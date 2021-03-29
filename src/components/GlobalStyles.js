import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
*{
    margin: 0;
    padding:0;
    box-sizing:border-box;
}

html{
    &::--webkit-scrollbar{
        width: 0.5rem;
    }
    &::--webkit-scrollbar-thumb{

      background-color:darkgray
    }
}


body{
    font-family: "Montserrat",sans-serif;
}
h2{
    font-family: "Abril Fatface" ,cursive;
    font-weight: lighter;
    font-size: 3rem;
    color: #FF7676
}

h3{
    font-size:1.3rem;
    color: #333;
    padding: 1.5rem;
}


`;

export default GlobalStyles;