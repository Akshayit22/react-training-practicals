
export const WrapperComponent = (Component: any) => {

    return (props: any) => {
        if (props.isLoading)
            return <div className="flex text-2xl h-screen justify-center items-center dark:text-white">"Loading..."</div>;

        if (props.isError)
            return (
                <div className="min-h-screen flex justify-center items-center dark:text-white">
                    <h4 className="text-3xl font-semibold">Something Went Wrong....</h4>
                </div>
            );

        return <Component {...props} />;
    }
}

export default WrapperComponent