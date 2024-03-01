import { faEnvelope, faLocationDot, faPhone, faTruckFast } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer p-10 bg-slate-100 text-base-content">
      <aside>
        <a className="btn btn-ghost text-xl text-orange-700 font-bold hover:bg-transparent" href="/">Logistic<FontAwesomeIcon className="w-5 text-orange-700 font-bold" icon={faTruckFast} /></a>
      </aside>
      <nav>
        <h6 className="footer-title">Servicios</h6>
        <Link href="/services#almacenamiento" className="link link-hover">Almacenamiento</Link>
        <Link href="/services#distribucion" className="link link-hover">Distribución</Link>
        <Link href="/services#picking-and-packing" className="link link-hover">Picking & Packing</Link>
        <Link href="/services#gestion-de-inventario" className="link link-hover">Gestión de inventario</Link>
        <Link href="/services#logistica-inversa" className="link link-hover">Logística inversa</Link>
      </nav>
      <nav>
        <h6 className="footer-title">Navegación</h6>
        <Link href="/about" className="link link-hover">Sobre nosotros</Link>
        <Link href="/services" className="link link-hover">Servicios</Link>
        <Link href="/faq" className="link link-hover">FAQ</Link>
        <a className="link link-hover">Contacto</a>
      </nav>
      <nav>
        <h6 className="footer-title">Ponte en contacto</h6>
        <a className="link link-hover flex"><FontAwesomeIcon className="w-4 mr-2 text-gray-500" icon={faLocationDot} />Av. Mitre 9999, CABA, Argentina.</a>
        <a className="link link-hover flex"><FontAwesomeIcon className="w-4 mr-2 text-gray-500" icon={faPhone} />(+54) 11 888 888 888</a>
        <a className="link link-hover flex"><FontAwesomeIcon className="w-4 mr-2 text-gray-500" icon={faEnvelope} />logistic@info.com</a>
      </nav>
    </footer>
  )
}