import { Box, Text } from "@/components/ui";
import { Container } from "@/components/ui/index";
import { ContainerProps } from "@mui/material";
import { FC, ReactNode } from "react";

interface ContainerContainerProps extends ContainerProps {
  pageTitle?: string;
  disableBottomPadding?: boolean;
  children: ReactNode;
}

const ContentContainer: FC<ContainerContainerProps> = ({ pageTitle, disableBottomPadding, children, ...props }) => {
  return (
    <Container {...props} disableGutters>
      <Box paddingBottom={disableBottomPadding ? 0 : 8}>
        <Box paddingY={2} bgcolor={"background.body"} hidden={!pageTitle}>
          <Text variant={"h1"} component={"h1"} textAlign={"center"}>{pageTitle}</Text>
        </Box>
        <Box bgcolor={"background.container"} borderRadius={1} paddingY={{ md: 8, xs: 6 }} paddingX={{ md: 8, xs: 3 }}>
          <Container>
            <Box display={"flex"} flexDirection={"column"} gap={{ md: 8, xs: 3 }}>
              {children}
            </Box>
          </Container>
        </Box>
      </Box>
    </Container>
  );
};

export default ContentContainer;
