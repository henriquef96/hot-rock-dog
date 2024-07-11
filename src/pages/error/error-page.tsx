import { useRouteError } from "react-router-dom";

interface RouteError {
    statusText?: string;
    message?: string;
}

export default function ErrorPage() {
    const error = useRouteError() as RouteError;
    console.error(error);

    return (
        <div className="h-screen flex flex-col items-center justify-center" id="error-page">
            <h1 className="text-2xl ">Oops!</h1>
            <p>Desculpe, ocorreu um erro inesperado.</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    );
}