import "server-only";

import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

export default function HomeScreen() {
  return (
    <Container component="main">
      <Typography variant="h1">Welcome to the Next.js template!</Typography>
      <Typography variant="body1">
        This template is designed to help you kickstart your Next.js journey.
        It&apos;s equipped with everything you need to build modern, fast, and
        scalable web applications. Powered by React and enhanced with
        server-side rendering (SSR), static site generation (SSG), and API
        routes, this template gives you the flexibility to create
        high-performance web experiences effortlessly.
      </Typography>
      <Typography variant="body1">
        Explore the provided structure, dive into the documentation, and
        customize it to fit your project&apos;s needs. Whether you&apos;re
        building a simple website or a complex application, this template is
        your foundation for success. Enjoy building!
      </Typography>
    </Container>
  );
}
