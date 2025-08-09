import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Phone, MessageCircle, Code, Users, Target, Eye, ArrowRight, Star, Globe, Smartphone, Zap } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Header */}
            <header className="px-4 lg:px-6 h-16 flex items-center border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50">
                <Link href="/" className="flex items-center justify-center">
                    {/* <Code className="h-8 w-8 text-blue-600" /> */}
                    <Image src="/imgs/smallLogoPage.png" alt="Hack Nova Logo" width={40} height={40} className="h-8 w-8" />
                    <span className="ml-2 text-xl font-bold text-gray-900">Hack Nova</span>
                </Link>
                <nav className="ml-auto flex gap-4 sm:gap-6">
                    <Link href="#servicios" className="text-sm font-medium hover:text-blue-600 transition-colors">
                        Servicios
                    </Link>
                    <Link href="#planes" className="text-sm font-medium hover:text-blue-600 transition-colors">
                        Planes
                    </Link>
                    <Link href="#nosotros" className="text-sm font-medium hover:text-blue-600 transition-colors">
                        Nosotros
                    </Link>
                    <Link href="/acerca" className="text-sm font-medium hover:text-blue-600 transition-colors">
                        Acerca de
                    </Link>
                </nav>
            </header>

            <main className="flex-1">
                {/* Hero Section */}
                <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-blue-50 via-white to-purple-50">
                    <div className="flex justify-center md:px-6 px-4">
                        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
                            <div className="flex flex-col justify-center space-y-4">
                                <div className="space-y-2">
                                    <Badge variant="outline" className="w-fit">
                                        🚀 Soluciones Web Innovadoras
                                    </Badge>
                                    <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">Hack Nova Web Solutions</h1>
                                    <p className="text-xl text-blue-600 font-semibold mb-4">"Somos el click que impulsa tu negocio"</p>
                                    <p className="max-w-[600px] text-gray-600 md:text-xl">Acercamos la tecnología a quienes más la necesitan. Diseñamos páginas web personalizadas para emprendedores y pequeños negocios con asesoría continua y acompañamiento humano.</p>
                                </div>
                                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                                    <Button size="lg" className="bg-emerald-400 hover:bg-emerald-700" asChild>
                                        <Link href="#planes">
                                            Ver Planes
                                            <ArrowRight className="ml-2 h-4 w-4" />
                                        </Link>
                                    </Button>
                                    <Button variant="outline" size="lg" asChild>
                                        <Link href="https://wa.me/18297724268" target="_blank">
                                            <MessageCircle className="mr-2 h-4 w-4" />
                                            WhatsApp
                                        </Link>
                                    </Button>
                                </div>
                                <div className="flex items-center gap-4 text-sm text-gray-600">
                                    <div className="flex items-center gap-1">
                                        <Phone className="h-4 w-4" />
                                        <span>+1 (829) 772-4268</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <Globe className="h-4 w-4" />
                                        <span>Santo Domingo, RD</span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center justify-center">
                                <div className="relative">
                                    <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-green-600 rounded-lg blur opacity-75"></div>
                                    <Image src="/imgs/HackNovaFullLogo.png" width="600" height="400" alt="Hack Nova Web Solutions" className="relative rounded-lg shadow-2xl" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Servicios Section */}
                <section id="servicios" className="w-full py-12 md:py-24 lg:py-32">
                    <div className="px-4 md:px-6">
                        <div className="flex flex-col items-center justify-center space-y-4 text-center">
                            <div className="space-y-2">
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Nuestros Servicios</h2>
                                <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">Ofrecemos soluciones digitales completas adaptadas a las necesidades de cada emprendedor</p>
                            </div>
                        </div>
                        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
                            <Card className="border-2 hover:border-blue-200 transition-colors">
                                <CardHeader>
                                    <Globe className="h-12 w-12 text-blue-600 mb-2" />
                                    <CardTitle>Desarrollo Web</CardTitle>
                                    <CardDescription>Páginas web personalizadas con diseño responsivo y funcionalidades modernas</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-2 text-sm">
                                        <li className="flex items-center gap-2">
                                            <Check className="h-4 w-4 text-green-500" />
                                            Diseño responsivo
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <Check className="h-4 w-4 text-green-500" />
                                            Integración con redes sociales
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <Check className="h-4 w-4 text-green-500" />
                                            Formularios de contacto
                                        </li>
                                    </ul>
                                </CardContent>
                            </Card>

                            <Card className="border-2 hover:border-blue-200 transition-colors">
                                <CardHeader>
                                    <Users className="h-12 w-12 text-blue-600 mb-2" />
                                    <CardTitle>Asesoría Digital</CardTitle>
                                    <CardDescription>Acompañamiento personalizado y capacitación para el manejo de tu sitio web</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-2 text-sm">
                                        <li className="flex items-center gap-2">
                                            <Check className="h-4 w-4 text-green-500" />
                                            Capacitación personalizada
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <Check className="h-4 w-4 text-green-500" />
                                            Soporte técnico
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <Check className="h-4 w-4 text-green-500" />
                                            Mantenimiento web
                                        </li>
                                    </ul>
                                </CardContent>
                            </Card>

                            <Card className="border-2 hover:border-blue-200 transition-colors">
                                <CardHeader>
                                    <Zap className="h-12 w-12 text-blue-600 mb-2" />
                                    <CardTitle>Soluciones Avanzadas</CardTitle>
                                    <CardDescription>Comercio electrónico, sistemas de pago y funcionalidades especializadas</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-2 text-sm">
                                        <li className="flex items-center gap-2">
                                            <Check className="h-4 w-4 text-green-500" />
                                            Tiendas en línea
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <Check className="h-4 w-4 text-green-500" />
                                            Sistemas de pago
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <Check className="h-4 w-4 text-green-500" />
                                            SEO básico
                                        </li>
                                    </ul>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>

                {/* Planes Section */}
                <section id="planes" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
                    <div className="px-4 md:px-6">
                        <div className="flex flex-col items-center justify-center space-y-4 text-center">
                            <div className="space-y-2">
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Nuestros Planes</h2>
                                <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">Planes diseñados para adaptarse a diferentes necesidades y presupuestos</p>
                            </div>
                        </div>
                        <div className="mx-auto grid max-w-6xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-8">
                            {/* Plan Básico */}
                            <Card className="relative border-2 hover:border-blue-200 transition-all hover:shadow-lg">
                                <CardHeader>
                                    <CardTitle className="text-center">Plan Básico</CardTitle>
                                    <div className="text-center">
                                        <span className="text-4xl font-bold">$1,000</span>
                                        <span className="text-gray-600"> USD</span>
                                    </div>
                                    <CardDescription className="text-center">Perfecto para emprendedores que inician</CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <ul className="space-y-3">
                                        <li className="flex items-center gap-2">
                                            <Check className="h-4 w-4 text-green-500" />
                                            <span className="text-sm">1 página web con hasta 3 secciones</span>
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <Check className="h-4 w-4 text-green-500" />
                                            <span className="text-sm">Diseño responsivo</span>
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <Check className="h-4 w-4 text-green-500" />
                                            <span className="text-sm">Formulario de contacto</span>
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <Check className="h-4 w-4 text-green-500" />
                                            <span className="text-sm">Botón de WhatsApp</span>
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <Check className="h-4 w-4 text-green-500" />
                                            <span className="text-sm">Dominio por 1 año</span>
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <Check className="h-4 w-4 text-green-500" />
                                            <span className="text-sm">Hosting por 3 meses</span>
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <Check className="h-4 w-4 text-green-500" />
                                            <span className="text-sm">Soporte gratuito 1 mes</span>
                                        </li>
                                    </ul>
                                    <Button className="w-full" asChild>
                                        <Link href="https://wa.me/18297724268?text=Hola, me interesa el Plan Básico">Elegir Plan</Link>
                                    </Button>
                                </CardContent>
                            </Card>

                            {/* Plan Estándar */}
                            <Card className="relative border-2 border-emerald-500 hover:border-emerald-600 transition-all hover:shadow-lg">
                                <Badge className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-emerald-500">Más Popular</Badge>
                                <CardHeader>
                                    <CardTitle className="text-center">Plan Estándar</CardTitle>
                                    <div className="text-center">
                                        <span className="text-4xl font-bold">$1,400</span>
                                        <span className="text-gray-600"> USD</span>
                                    </div>
                                    <CardDescription className="text-center">Ideal para negocios en crecimiento</CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <ul className="space-y-3">
                                        <li className="flex items-center gap-2">
                                            <Check className="h-4 w-4 text-green-500" />
                                            <span className="text-sm">1 página con hasta 6 secciones</span>
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <Check className="h-4 w-4 text-green-500" />
                                            <span className="text-sm">Diseño personalizado</span>
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <Check className="h-4 w-4 text-green-500" />
                                            <span className="text-sm">Galería de productos</span>
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <Check className="h-4 w-4 text-green-500" />
                                            <span className="text-sm">Integración con redes y mapas</span>
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <Check className="h-4 w-4 text-green-500" />
                                            <span className="text-sm">Hosting y dominio por 1 año</span>
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <Check className="h-4 w-4 text-green-500" />
                                            <span className="text-sm">Soporte gratuito por 2 meses</span>
                                        </li>
                                    </ul>
                                    <Button className="w-full bg-emerald-400 hover:bg-emerald-700" asChild>
                                        <Link href="https://wa.me/18297724268?text=Hola, me interesa el Plan Estándar">Elegir Plan</Link>
                                    </Button>
                                </CardContent>
                            </Card>

                            {/* Plan Avanzado */}
                            <Card className="relative border-2 hover:border-purple-200 transition-all hover:shadow-lg">
                                <CardHeader>
                                    <CardTitle className="text-center">Plan Avanzado</CardTitle>
                                    <div className="text-center">
                                        <span className="text-4xl font-bold">$2,000</span>
                                        <span className="text-gray-600"> USD</span>
                                    </div>
                                    <CardDescription className="text-center">Para negocios que buscan lo mejor</CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <ul className="space-y-3">
                                        <li className="flex items-center gap-2">
                                            <Check className="h-4 w-4 text-green-500" />
                                            <span className="text-sm">Página web con hasta 10 secciones</span>
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <Check className="h-4 w-4 text-green-500" />
                                            <span className="text-sm">Catálogo dinámico</span>
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <Check className="h-4 w-4 text-green-500" />
                                            <span className="text-sm">Sistema de pagos en línea</span>
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <Check className="h-4 w-4 text-green-500" />
                                            <span className="text-sm">Reservas o cotizaciones</span>
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <Check className="h-4 w-4 text-green-500" />
                                            <span className="text-sm">SEO básico</span>
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <Check className="h-4 w-4 text-green-500" />
                                            <span className="text-sm">Soporte por 3 meses</span>
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <Check className="h-4 w-4 text-green-500" />
                                            <span className="text-sm">Capacitación completa</span>
                                        </li>
                                    </ul>
                                    <Button className="w-full bg-purple-600 hover:bg-purple-700" asChild>
                                        <Link href="https://wa.me/18297724268?text=Hola, me interesa el Plan Avanzado">Elegir Plan</Link>
                                    </Button>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>

                {/* Misión y Visión */}
                <section id="nosotros" className="w-full py-12 md:py-24 lg:py-32">
                    <div className="px-4 md:px-6">
                        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
                            <Card className="border-2 border-blue-100 bg-blue-50/50">
                                <CardHeader>
                                    <div className="flex items-center gap-2">
                                        <Target className="h-8 w-8 text-blue-600" />
                                        <CardTitle className="text-2xl">Nuestra Misión</CardTitle>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-gray-700 leading-relaxed">Nuestra misión es acercar la tecnología a quienes más la necesitan, facilitando su crecimiento y posicionamiento en el mundo digital a través del diseño de páginas web, asesoría continua y acompañamiento humano.</p>
                                </CardContent>
                            </Card>

                            <Card className="border-2 border-purple-100 bg-purple-50/50">
                                <CardHeader>
                                    <div className="flex items-center gap-2">
                                        <Eye className="h-8 w-8 text-purple-600" />
                                        <CardTitle className="text-2xl">Nuestra Visión</CardTitle>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-gray-700 leading-relaxed">Ser una empresa líder en soluciones digitales para emprendedores de comunidades emergentes, reconocida por su cercanía, compromiso social y capacidad de transformar realidades mediante la tecnología.</p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>

                {/* Tecnologías */}
                <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
                    <div className="px-4 md:px-6">
                        <div className="flex flex-col items-center justify-center space-y-4 text-center">
                            <div className="space-y-2">
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Tecnologías que Utilizamos</h2>
                                <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">Trabajamos con las tecnologías más modernas y confiables del mercado</p>
                            </div>
                        </div>
                        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
                            {[
                                { name: "HTML", icon: "/icons/icons8-html-96.png" },
                                { name: "CSS", icon: "/icons/icons8-css-96.png" },
                                { name: "JavaScript", icon: "/icons/icons8-javascript-96.png" },
                                { name: "React.js", icon: "/icons/reactjs.svg" },
                                { name: "Node.js", icon: "/icons/icons8-nodejs-96.png" },
                                { name: "Next.js", icon: "/icons/Next.js.png" },
                                { name: "Firebase", icon: "/icons/Firebase.png" },
                                { name: "MySQL", icon: "/icons/MySQL.png" },
                                { name: "PostgreSQL", icon: "/icons/PostgresSQL.png" },
                            ].map((tech) => (
                                <div key={tech.name} className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow-sm border hover:shadow-md transition-shadow">
                                    <Image src={tech.icon} alt={`${tech.name} logo`} width={48} height={48} className="mb-2 object-contain" />
                                    <span className="text-sm font-medium">{tech.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-blue-400 to-green-400">
                    <div className="px-4 md:px-6">
                        <div className="flex flex-col items-center justify-center space-y-4 text-center text-white">
                            <div className="space-y-2">
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">¿Listo para impulsar tu negocio?</h2>
                                <p className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">Contáctanos hoy mismo y descubre cómo podemos ayudarte a tener presencia digital profesional</p>
                            </div>
                            <div className="flex flex-col gap-2 min-[400px]:flex-row">
                                <Button size="lg" variant="secondary" asChild>
                                    <Link href="https://wa.me/18297724268" target="_blank">
                                        <MessageCircle className="mr-2 h-5 w-5" />
                                        Contactar por WhatsApp
                                    </Link>
                                </Button>
                                <Button size="lg" variant="outline" className=" border-white hover:bg-white hover:text-blue-600 text-blue-600" asChild>
                                    <Link href="tel:+18297724268">
                                        <Phone className="mr-2 h-5 w-5" />
                                        Llamar Ahora
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-gray-50">
                <p className="text-xs text-gray-600">© {new Date().getFullYear()} Hack Nova Web Solutions. Todos los derechos reservados.</p>
                <nav className="sm:ml-auto flex gap-4 sm:gap-6">
                    <Link href="/acerca" className="text-xs hover:underline underline-offset-4 text-gray-600">
                        Acerca de Nosotros
                    </Link>
                    <Link href="https://wa.me/18297724268" className="text-xs hover:underline underline-offset-4 text-gray-600">
                        Contacto
                    </Link>
                </nav>
            </footer>
        </div>
    );
}
