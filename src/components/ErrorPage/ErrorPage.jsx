import { useNavigate, useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();
    console.log(error);
    const navigate = useNavigate();
    return (
        <div className=" flex flex-col justify-center text-center mt-32 gap-3">
            <h2 className="text-2xl font-extrabold">Oops!!!</h2>
            <p>Sorry, an unexpected error occurred.</p>
            {
                error.status === 404 && <div>
                    <p>Page is Not Found</p>
                    <p>Go back where are you from</p>
                    <button onClick={() => navigate(-1)} className="btn bg-blue-500 text-white">Go back</button>
                </div>
            }
        </div>
    );
};

export default ErrorPage;