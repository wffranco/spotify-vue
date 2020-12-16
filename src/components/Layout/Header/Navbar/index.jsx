import Brand from './Brand'
import Menu from './Menu'

export default function Navbar() {
  return (
    <nav class="navbar navbar-expand-md navbar-dark bg-dark">
      <Brand />
      <Menu />
    </nav>
  );
}
