import "./index.css";
import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import {
    BrowserRouter,
    useRoutes
} from "react-router-dom";

import routes from "~react-pages";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient()
function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <Suspense fallback={<p>Loading...</p>}>
                {useRoutes(routes)}
            </Suspense>
        </QueryClientProvider>
    );
}

const app = createRoot(document.getElementById("root"));

app.render(
    <StrictMode>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </StrictMode>
);