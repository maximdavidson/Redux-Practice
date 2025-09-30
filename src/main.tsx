import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { CatalogPage } from "./pages/CatalogPage";
import { Provider } from "react-redux";
import store, { persistor } from "./store";
import { PersistGate } from "redux-persist/integration/react";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <CatalogPage />
      </PersistGate>
    </Provider>
  </StrictMode>
);
