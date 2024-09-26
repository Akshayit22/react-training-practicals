import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const getQuote = async () => {
    return axios.get(`https://dummyjson.com/quote/random`);
};

export const useGetRandomQuote = () => {
    return useQuery({

        queryFn: async () => {
            try {
                const data = await getQuote();
                return data.data;
            }
            catch (err) {
                console.log({ err });
            }
        },

        queryKey: ["RandomQuote"],

    });
};

