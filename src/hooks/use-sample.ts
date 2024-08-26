import useSWR from "swr";
import SampleService from "@/services/sample-service";

export default function useSample() {
  const fetcher = (endpoint: string) =>
    new SampleService().getSamples(endpoint);
  const { data, error, isLoading } = useSWR("/api/v1/sample", fetcher);

  return {
    data,
    error,
    isLoading,
  };
}
