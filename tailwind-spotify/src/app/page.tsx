import { Sidebar } from './Components/Sidebar';
import { Footer } from './Components/Footer';
import { Main } from './Components/Main';
import { Homing } from './Components/Homing';

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <Sidebar/>
        <Main/>
      </div>
      <Footer/>
    </div>
  );
}
