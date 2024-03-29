import { faEnvelope, faLocationDot, faPhone, faTruckFast } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer p-10 bg-slate-100 text-base-content">
      <aside>
        <a className="btn btn-ghost text-xl text-orange-700 font-bold hover:bg-transparent" href="/">Galvez SRL</a>
      </aside>
      <nav>
        <h6 className="footer-title">Servicios</h6>
        <Link href="/" className="link link-hover">Construcción de casas a medida</Link>
        <Link href="/" className="link link-hover">Construcción de edificios</Link>
        <Link href="/" className="link link-hover">Construcción de proyectos comerciales</Link>
        <Link href="/" className="link link-hover">Reformas y ampliaciones</Link>
        <Link href="/" className="link link-hover">Asesoramiento y gestión de proyectos</Link>
      </nav>
      <nav>
        <h6 className="footer-title">Navegación</h6>
        <Link href="/" className="link link-hover">Sobre nosotros</Link>
        <Link href="/" className="link link-hover">Servicios</Link>
        <Link href="/" className="link link-hover">FAQ</Link>
        <a className="link link-hover">Contacto</a>
      </nav>
      <nav>
        <h6 className="footer-title">Ponte en contacto</h6>
        <a className="link link-hover flex"><FontAwesomeIcon className="w-4 mr-2 text-gray-500" icon={faLocationDot} />Av. Mitre 9999, CABA, Argentina.</a>
        <a className="link link-hover flex"><FontAwesomeIcon className="w-4 mr-2 text-gray-500" icon={faPhone} />(+54) 11 888 888 888</a>
        <a className="link link-hover flex"><FontAwesomeIcon className="w-4 mr-2 text-gray-500" icon={faEnvelope} />galvezsrl@info.com</a>
      </nav>
    </footer>
  )
}
