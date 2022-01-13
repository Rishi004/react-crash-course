import React from "react";
import Index from "./routes/Index";
import { Layout } from "./components";

function App() {
    return (
        <div>
            <Layout>
                <Index />
            </Layout>
        </div>
    );
}

export default App;
