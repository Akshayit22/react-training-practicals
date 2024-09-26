import { QuoteGenerator } from "../components/QuoteGenerator";
import { useGetRandomQuote } from "../api/react-query";

export const Home = () => {


    const { isPending, error, data } = useGetRandomQuote();

    return (
        <QuoteGenerator isLoading={isPending} isError={error} data={data} />
    )
}
