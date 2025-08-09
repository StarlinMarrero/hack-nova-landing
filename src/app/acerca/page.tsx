import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Users, GraduationCap, MapPin, Phone, MessageCircle, ArrowLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function AcercaPage() {
    const teamMembers = [
        {
            name: "YULIANNI GARCIA",
            role: "UX/UI y Diseño Gráfico",
            description: "Especialista en diseño visual y experiencia de usuario",
            image: "/users/yulianny.jpg", // Add specific image path if available
        },
        {
            name: "STARLIN MARRERO",
            role: "Senior Software Engineer",
            description: "Full Stack, Experto en programación y estructura técnica",
            image: "/users/starlin.jpg", // Add specific image path if available
        },
        {
            name: "CHRISTOPHER MENDEZ",
            role: "DevOps",
            description: "Especialista en hosting, dominios y configuración técnica",
            image: "/users/cristopherMendez.jpg", // Add specific image path if available
        },
        {
            name: "FELIZ ISMAEL BELTRAN",
            role: "Project Manager",
            description: "Coordinación general y contacto con clientes",
            image: "/users/felixIsmael.jpg", // Add specific image path if available
        },
        {
            name: "ALBERT ONIEL ALVARADO",
            role: "Marketing Digital",
            description: "Especialista en publicidad, redes sociales y promoción online",
            image: "/users/AL.jpg", // Add specific image path if available
        },
    ];

    return (
        <div className="flex flex-col min-h-screen">
            {/* Header */}
            <header className="px-4 lg:px-6 h-16 flex items-center border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50">
                <Link href="/" className="flex items-center justify-center">
                    <Code className="h-8 w-8 text-blue-600" />
                    <span className="ml-2 text-xl font-bold text-gray-900">Hack Nova</span>
                </Link>
                <nav className="ml-auto flex gap-4 sm:gap-6">
                    <Link href="/" className="text-sm font-medium hover:text-blue-600 transition-colors">
                        <ArrowLeft className="h-4 w-4 inline mr-1" />
                        Volver al Inicio
                    </Link>
                </nav>
            </header>

            <main className="flex-1">
                {/* Hero Section */}
                <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-blue-50 via-white to-purple-50">
                    <div className="px-4 md:px-6">
                        <div className="flex flex-col items-center justify-center space-y-4 text-center">
                            <Badge variant="outline" className="w-fit">
                                <GraduationCap className="h-4 w-4 mr-2" />
                                Universidad Dominicana O&M
                            </Badge>
                            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">Acerca de Nosotros</h1>
                            <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">Conoce al equipo detrás de Hack Nova Web Solutions y nuestra formación académica</p>
                        </div>
                    </div>
                </section>

                {/* Información Académica */}
                <section className="w-full py-12 md:py-24 lg:py-32">
                    <div className="px-4 md:px-6">
                        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
                            <div className="space-y-4">
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Formación Académica</h2>
                                <div className="space-y-4">
                                    <Card className="border-2 border-blue-100 bg-blue-50/50">
                                        <CardHeader>
                                            <CardTitle className="flex items-center gap-2">
                                                <GraduationCap className="h-6 w-6 text-blue-600" />
                                                Universidad Dominicana O&M
                                            </CardTitle>
                                        </CardHeader>
                                        <CardContent className="space-y-2">
                                            <p>
                                                <strong>Facultad:</strong> Ingeniería
                                            </p>
                                            <p>
                                                <strong>Carrera:</strong> Ingeniería en Sistemas
                                            </p>
                                            <p>
                                                <strong>Año:</strong> 2025
                                            </p>
                                            <p>
                                                <strong>Ubicación:</strong> Santo Domingo, República Dominicana
                                            </p>
                                        </CardContent>
                                    </Card>

                                    <Card className="border-2 border-purple-100 bg-purple-50/50">
                                        <CardHeader>
                                            <CardTitle className="flex items-center gap-2">
                                                <MapPin className="h-6 w-6 text-purple-600" />
                                                Localización del Proyecto
                                            </CardTitle>
                                        </CardHeader>
                                        <CardContent className="space-y-2">
                                            <p>
                                                <strong>País:</strong> República Dominicana
                                            </p>
                                            <p>
                                                <strong>Municipio:</strong> Santo Domingo, Herrera
                                            </p>
                                            <p>
                                                <strong>Enfoque:</strong> Comunidades emergentes y emprendedores locales
                                            </p>
                                        </CardContent>
                                    </Card>
                                </div>
                            </div>

                            <div className="flex items-center justify-center">
                                <Image src="/imgs/HackNovaFullLogo.png" width="500" height="400" alt="Universidad Dominicana O&M" className="rounded-lg shadow-lg" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Equipo */}
                <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
                    <div className="px-4 md:px-6">
                        <div className="flex flex-col items-center justify-center space-y-4 text-center">
                            <div className="space-y-2">
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Nuestro Equipo</h2>
                                <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">Cinco profesionales de Ingeniería en Sistemas comprometidos con la innovación tecnológica</p>
                            </div>
                        </div>

                        <div className="mx-auto grid max-w-6xl items-center gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
                            {teamMembers.map((member, index) => (
                                <Card key={index} className="h-full border-2 hover:border-blue-200 transition-all hover:shadow-lg">
                                    <CardHeader>
                                        <div className="flex items-center justify-center mx-auto mb-4">
                                            <Image
                                                src={member.image}
                                                alt={`Foto de perfil de ${member.name}`}
                                                width={200}
                                                height={200}
                                                className="rounded-full object-cover border-4 border-blue-100"
                                                //disable height
                                                style={{ height: "200px" }}
                                            />
                                        </div>
                                        <CardTitle className="text-center text-lg">{member.name}</CardTitle>
                                        <CardDescription className="text-center font-semibold text-blue-600">{member.role}</CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-sm text-gray-600 text-center">{member.description}</p>
                                    </CardContent>
                                </Card>
                            ))}

                            {/* Card adicional para mostrar la matrícula del grupo */}
                            <Card className="border-2 border-green-200 bg-green-50/50 md:col-span-2 lg:col-span-3">
                                <CardHeader>
                                    <CardTitle className="text-center flex items-center justify-center gap-2">
                                        <Code className="h-6 w-6 text-green-600" />
                                        Información del Grupo
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="text-center space-y-2">
                                    <p>
                                        <strong>Nombre del Proyecto:</strong> Hack Nova Web Solutions
                                    </p>
                                    <p>
                                        <strong>Sustentantes:</strong> 5 estudiantes de Ingeniería en Sistemas
                                    </p>
                                    <p>
                                        <strong>Ciudad:</strong> Santo Domingo
                                    </p>
                                    <p>
                                        <strong>Año:</strong> 2025
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>

                {/* Historia del Proyecto */}
                <section className="w-full py-12 md:py-24 lg:py-32">
                    <div className="px-4 md:px-6">
                        <div className="max-w-4xl mx-auto space-y-8">
                            <div className="text-center space-y-4">
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Historia del Proyecto</h2>
                                <p className="text-gray-600 md:text-xl">Conoce los antecedentes y motivaciones que dieron origen a Hack Nova Web Solutions</p>
                            </div>

                            <div className="grid gap-6 md:grid-cols-2">
                                <Card>
                                    <CardHeader>
                                        <CardTitle>Motivación</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-gray-700 leading-relaxed">En Hack Nova Web Solutions, creemos firmemente que la tecnología debe estar al alcance de todos. Nuestra motivación surge de una combinación entre vocación técnica, compromiso social y visión de futuro como profesionales de Ingeniería en Sistemas.</p>
                                    </CardContent>
                                </Card>

                                <Card>
                                    <CardHeader>
                                        <CardTitle>Objetivo</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-gray-700 leading-relaxed">Aspiramos a ser un puente entre la tecnología y los emprendedores locales que, por falta de recursos o acompañamiento técnico, han quedado rezagados en la era digital, brindándoles una oportunidad real de crecimiento.</p>
                                    </CardContent>
                                </Card>

                                <Card>
                                    <CardHeader>
                                        <CardTitle>Enfoque Social</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-gray-700 leading-relaxed">Nuestra cercanía generacional y cultural nos permite comunicarnos de forma fluida con los emprendedores, generando empatía, confianza y colaboración en cada proyecto que desarrollamos.</p>
                                    </CardContent>
                                </Card>

                                <Card>
                                    <CardHeader>
                                        <CardTitle>Impacto Ambiental</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-gray-700 leading-relaxed">Nuestra propuesta se basa en soluciones digitales que reducen el uso de materiales físicos, como volantes y catálogos impresos, contribuyendo a una práctica más responsable y sostenible.</p>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-blue-400 to-emerald-600">
                    <div className="px-4 md:px-6">
                        <div className="flex flex-col items-center justify-center space-y-4 text-center text-white">
                            <div className="space-y-2">
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">¿Quieres conocer más?</h2>
                                <p className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">Contáctanos para conocer más sobre nuestro proyecto y cómo podemos ayudarte</p>
                            </div>
                            <div className="flex flex-col gap-2 min-[400px]:flex-row">
                                <Button size="lg" variant="secondary" asChild>
                                    <Link href="https://wa.me/18297724268" target="_blank">
                                        <MessageCircle className="mr-2 h-5 w-5" />
                                        WhatsApp: +1 (829) 772-4268
                                    </Link>
                                </Button>
                                <Button size="lg" variant="outline" className="text-black border-white hover:bg-white hover:text-blue-600" asChild>
                                    <Link href="/">Ver Nuestros Servicios</Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-gray-50">
                <p className="text-xs text-gray-600">© 2025 Hack Nova Web Solutions - Universidad Dominicana O&M. Todos los derechos reservados.</p>
                <nav className="sm:ml-auto flex gap-4 sm:gap-6">
                    <Link href="/" className="text-xs hover:underline underline-offset-4 text-gray-600">
                        Inicio
                    </Link>
                    <Link href="https://wa.me/18297724268" className="text-xs hover:underline underline-offset-4 text-gray-600">
                        Contacto
                    </Link>
                </nav>
            </footer>
        </div>
    );
}
