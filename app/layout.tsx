import type {Metadata} from "next";import "./globals.css";
export const metadata:Metadata={metadataBase:new URL(process.env.SITE_URL??"http://localhost:3000"),title:"Monitora | Vejho",description:"Plataforma de gestão de monitoramentos agrícolas desenvolvida pela Vejho",openGraph:{title:"Monitora",description:"Monitoramentos agrícolas, do planejamento à execução. Desenvolvida pela Vejho.",images:["/og-v2.png"]},twitter:{card:"summary_large_image",title:"Monitora",description:"Monitoramentos agrícolas, do planejamento à execução. Desenvolvida pela Vejho.",images:["/og-v2.png"]}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="pt-BR"><body>{children}</body></html>}

