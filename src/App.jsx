import Router from "./routes/routes";
import { Toaster } from 'sonner';

export default function App() {
  return (
    <>
      <Router />
      <Toaster
      closeButton
      position="top-left"
      richColors
       />
    </>
  );
}
