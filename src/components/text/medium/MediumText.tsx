import React                           from "react";
import { Typography, TypographyProps } from "@mui/material";


const MediumText: React.FC<TypographyProps> = ({ children, ...rest }) => {
    return <Typography fontSize={ "medium" } { ...rest }>{ children }</Typography>
}

export default MediumText;