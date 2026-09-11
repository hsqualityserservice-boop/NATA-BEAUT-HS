import Link from 'next/link'
import { ArrowRight, Download, FileText, ShieldCheck, Sparkles } from 'lucide-react'

const services = [
  { title: 'Onglerie', text: 'Manucure, gel et nail art', items: ['Manucure classique — 35 CHF', 'Pose gel — 65 CHF', 'Pose gel + nail art — 85 CHF'] },
  { title: 'Massage', text: 'Relaxant et pierres chaudes', items: ['30 minutes — 55 CHF', '60 minutes — 95 CHF', 'Pierres chaudes — 120 CHF'] },
  { title: 'Épilation cire', text: 'Cire chaude premium', items: ['Maillot — 45 CHF', 'Jambes complètes — 55 CHF', 'Aisselles — 20 CHF'] },
]

export default function Home() {
  return <main>
    <nav className="nav container"><Link href="/" className="brand">Mery <span>Key</span></Link><div className="navlinks"><a href="#services">Prestations</a><a href="#pro">Espace pro</a><Link className="nav-login" href="/connexion">Mon espace <ArrowRight size={15} /></Link></div></nav>
    <section className="hero"><div className="hero-inner container"><div className="eyebrow"><Sparkles size={14} /> INSTITUT DE BEAUTÉ · GENÈVE</div><h1>Votre beauté,<br /><em>notre signature.</em></h1><p>Un espace confidentiel pour prendre soin de vous, suivre vos documents et retrouver vos factures en toute simplicité.</p><div className="hero-actions"><Link className="button button-gold" href="/connexion">Accéder à mon espace <ArrowRight size={17} /></Link><a className="button button-ghost" href="#services">Découvrir nos soins</a></div><div className="trust"><ShieldCheck size={18} /><span>Vos documents sont privés et sécurisés</span></div></div><div className="hero-orb" /></section>
    <section className="portal-strip"><div className="container portal-grid"><div><div className="eyebrow">ESPACE CLIENT</div><h2>Vos documents,<br /><em>toujours à portée de main.</em></h2></div><div className="portal-features"><div><Download /><strong>Téléchargements</strong><span>Factures et documents en un clic</span></div><div><FileText /><strong>Suivi clair</strong><span>Historique de vos téléchargements</span></div></div><Link href="/connexion" className="circle-link"><ArrowRight size={21} /></Link></div></section>
    <section className="services container" id="services"><div className="section-heading"><div><div className="eyebrow">NOS EXPERTISES</div><h2>Des soins pensés<br /><em>pour vous.</em></h2></div><p>Une expérience personnalisée dans un cadre chaleureux au cœur de Genève.</p></div><div className="service-grid">{services.map((service) => <article className="service-card" key={service.title}><div className="card-number">0{services.indexOf(service)+1}</div><h3>{service.title}</h3><p>{service.text}</p><ul>{service.items.map(item => <li key={item}>{item}</li>)}</ul></article>)}</div></section>
    <section className="pro-section" id="pro"><div className="container pro-inner"><div><div className="eyebrow">ESPACE PROFESSIONNEL</div><h2>Un lieu pour<br /><em>faire grandir vos talents.</em></h2></div><div><p>Cabines équipées, salles de réunion et flexibilité horaire pour les professionnels de la beauté.</p><Link href="/connexion" className="text-link">Découvrir l’espace pro <ArrowRight size={16} /></Link></div></div></section>
    <footer><div className="container footer-inner"><span className="brand">Mery <span>Key</span></span><span>© 2026 Mery Key · Genève</span><span>contact@merykey.ch</span></div></footer>
  </main>
}
