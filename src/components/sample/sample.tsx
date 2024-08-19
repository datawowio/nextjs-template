"use client";

import { useEffect, useMemo, useState } from "react";

interface SampleComponentProps {
  // ...
}

export default function SampleComponent(props: SampleComponentProps) {
  // Initial value
  const intialData = {};

  // Hooks
  const [hasData, setHasData] = useState<boolean>(false);

  // Variables
  const isLoading = true;

  // Computed variables => useMemo()
  const expensiveVariable = useMemo(() => {}, []);

  // Event handlers
  function handleClick() {
    // ...
  }

  // Effect hooks
  useEffect(() => {}, []);

  // Conditional rendering
  if (isLoading) {
    return <div>loading...</div>;
  }

  return (
    <>
      <h1>Render Component</h1>
    </>
  );
}
