"use client";
import Typography from "@/components/atoms/Typography";

export default function Home() {

  return (
    <main>
      <Typography as="h1" >main </Typography>
      <Typography as="h2">main </Typography>
      <Typography as="h3">main </Typography>
      <Typography as="h4">main </Typography>
      <Typography as="h5">main </Typography>
      <Typography as="h6">main </Typography>
      <Typography as="h1" >hello</Typography>
      <Typography as="p">saja  shoaib branch</Typography>
      <Typography as="p" variant={"default"}>
        main{" "}
      </Typography>
      <Typography as="p" variant={"default-muted"}>
        main{" "}
      </Typography>
      <Typography as="p" variant={"small"}>
        main{" "}
      </Typography>
      <Typography as="p" variant={"small-muted"}>
        main{" "}
      </Typography>
      <Typography as="p" variant={"micro"}>
        main{" "}
      </Typography>
      <Typography as="p" variant={"micro-muted"}>
        main{" "}
      </Typography>

      <Typography as="a" variant={"default-muted"} href="/hhh">
        main{" "}
      </Typography>
      <Typography as="a" variant={"small-muted"} href="/hhh">
        main{" "}
      </Typography>
      <Typography as="a" variant={"micro-muted"} href="/hhh">
        main{" "}
      </Typography>
    </main>
  );
}
