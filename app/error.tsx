"use client"

import EmptyState from "@/components/EmptyState";
import { useEffect } from "react";

interface ErrorStateProps {
  error: Error;
}

export default function ErrorState({
  error
}: ErrorStateProps): JSX.Element {
  
  useEffect(() => {
    console.log(error);
  }, [error]);

  return (
    <EmptyState
      title="Uh Oh"
      subtitle="Something went wrong!"
    />
  )
}