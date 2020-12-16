// import { useGlobals } from '@/store';
import Content from './Content';
import Footer from './Footer';
import Header from './Header';

export default function Layout() {
  // const {store} = useGlobals();
  // console.log(store);
  return (
    <div class="layout d-flex flex-column">
      <Header />
      <Content class="flex-fill" />
      <Footer />
    </div>
  );
}
