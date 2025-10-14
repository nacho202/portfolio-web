// Sistema de traducciones para el portfolio
// Soporta: Español (es), Inglés (en), Portugués (pt)

export type Language = 'es' | 'en' | 'pt';

export const translations = {
  // Navegación
  nav: {
    portfolio: {
      es: 'Portfolio',
      en: 'Portfolio',
      pt: 'Portfolio'
    },
    home: {
      es: 'Inicio',
      en: 'Home',
      pt: 'Início'
    },
    projects: {
      es: 'Proyectos',
      en: 'Projects',
      pt: 'Projetos'
    },
    about: {
      es: 'Sobre mí',
      en: 'About me',
      pt: 'Sobre mim'
    },
    contact: {
      es: 'Contacto',
      en: 'Contact',
      pt: 'Contato'
    }
  },

  // Página de inicio
  home: {
    greeting: {
      es: 'Hola, soy',
      en: 'Hi, I\'m',
      pt: 'Olá, sou'
    },
    name: {
      es: 'Nacho',
      en: 'Nacho',
      pt: 'Nacho'
    },
    description: {
      es: 'Desarrollador Full Stack apasionado por crear experiencias digitales excepcionales. Especializado en HTML, CSS, JavaScript y tecnologías modernas.',
      en: 'Full Stack Developer passionate about creating exceptional digital experiences. Specialized in HTML, CSS, JavaScript and modern technologies.',
      pt: 'Desenvolvedor Full Stack apaixonado por criar experiências digitais excepcionais. Especializado em HTML, CSS, JavaScript e tecnologias modernas.'
    },
    viewProjects: {
      es: 'Ver Proyectos',
      en: 'View Projects',
      pt: 'Ver Projetos'
    },
    contactMe: {
      es: 'Contactar',
      en: 'Contact',
      pt: 'Contato'
    },
    latestProjects: {
      es: 'Últimos Proyectos',
      en: 'Latest Projects',
      pt: 'Últimos Projetos'
    },
    latestProjectsDesc: {
      es: 'Algunos de mis trabajos más recientes y destacados',
      en: 'Some of my most recent and featured work',
      pt: 'Alguns dos meus trabalhos mais recentes e destacados'
    },
    allProjects: {
      es: 'Ver Todos los Proyectos',
      en: 'View All Projects',
      pt: 'Ver Todos os Projetos'
    },
    workTogether: {
      es: '¿Trabajamos juntos?',
      en: 'Let\'s work together?',
      pt: 'Vamos trabalhar juntos?'
    },
    workTogetherDesc: {
      es: 'Siempre estoy interesado en nuevos retos y oportunidades. ¡Hablemos sobre eso que querés hacer realidad!',
      en: 'I\'m always interested in new challenges and opportunities. Let\'s talk about bringing your ideas to life!',
      pt: 'Sempre estou interessado em novos desafios e oportunidades. Vamos conversar sobre como tornar suas ideias realidade!'
    },
    startConversation: {
      es: 'Empezar Conversación',
      en: 'Start Conversation',
      pt: 'Começar Conversa'
    }
  },

  // Página de proyectos
  projects: {
    title: {
      es: 'Mis Proyectos',
      en: 'My Projects',
      pt: 'Meus Projetos'
    },
    description: {
      es: 'Una colección de proyectos que muestran mi experiencia y pasión por el desarrollo',
      en: 'A collection of projects showcasing my experience and passion for development',
      pt: 'Uma coleção de projetos que mostram minha experiência e paixão pelo desenvolvimento'
    },
    all: {
      es: 'Todos',
      en: 'All',
      pt: 'Todos'
    },
    viewProject: {
      es: 'Ver proyecto',
      en: 'View project',
      pt: 'Ver projeto'
    },
    noProjects: {
      es: 'No hay proyectos disponibles en este momento.',
      en: 'No projects available at this time.',
      pt: 'Não há projetos disponíveis no momento.'
    },
    backToProjects: {
      es: 'Volver a Proyectos',
      en: 'Back to Projects',
      pt: 'Voltar aos Projetos'
    },
    workTogether: {
      es: 'Trabajar Juntos',
      en: 'Work Together',
      pt: 'Trabalhar Juntos'
    },
    viewCode: {
      es: 'Ver Código',
      en: 'View Code',
      pt: 'Ver Código'
    },
    viewDemo: {
      es: 'Ver Demo',
      en: 'View Demo',
      pt: 'Ver Demo'
    }
  },

  // Página sobre mí
  about: {
    title: {
      es: 'Sobre mí',
      en: 'About me',
      pt: 'Sobre mim'
    },
    subtitle: {
      es: 'Conoce mi historia y experiencia',
      en: 'Get to know my story and experience',
      pt: 'Conheça minha história e experiência'
    },
    role: {
      es: 'Desarrollador',
      en: 'Developer',
      pt: 'Desenvolvedor'
    },
    fullStack: {
      es: 'Full Stack',
      en: 'Full Stack',
      pt: 'Full Stack'
    },
    description1: {
      es: 'Con 1 año de experiencia en desarrollo web, me especializo en crear aplicaciones modernas y escalables. Mi pasión es transformar ideas complejas en soluciones elegantes y funcionales.',
      en: 'With 1 year of experience in web development, I specialize in creating modern and scalable applications. My passion is transforming complex ideas into elegant and functional solutions.',
      pt: 'Com 1 ano de experiência em desenvolvimento web, me especializo em criar aplicações modernas e escaláveis. Minha paixão é transformar ideias complexas em soluções elegantes e funcionais.'
    },
    description2: {
      es: 'Cuando no estoy programando, dedico mi tiempo a explorar nuevas tecnologías y frameworks que están revolucionando el desarrollo web. Me apasiona aprender continuamente, ya sea experimentando con nuevas herramientas, estudiando arquitecturas modernas o manteniéndome actualizado con las últimas tendencias del ecosistema de desarrollo.',
      en: 'When I\'m not coding, I spend my time exploring new technologies and frameworks that are revolutionizing web development. I\'m passionate about continuous learning, whether experimenting with new tools, studying modern architectures or staying up to date with the latest trends in the development ecosystem.',
      pt: 'Quando não estou programando, dedico meu tempo a explorar novas tecnologias e frameworks que estão revolucionando o desenvolvimento web. Sou apaixonado por aprender continuamente, seja experimentando novas ferramentas, estudando arquiteturas modernas ou me mantendo atualizado com as últimas tendências do ecossistema de desenvolvimento.'
    },
    technicalSkills: {
      es: 'Habilidades Técnicas',
      en: 'Technical Skills',
      pt: 'Habilidades Técnicas'
    },
    frontend: {
      es: 'Frontend',
      en: 'Frontend',
      pt: 'Frontend'
    },
    backend: {
      es: 'Backend',
      en: 'Backend',
      pt: 'Backend'
    },
    tools: {
      es: 'Herramientas',
      en: 'Tools',
      pt: 'Ferramentas'
    },
    timeline: {
      es: 'Timeline Profesional',
      en: 'Professional Timeline',
      pt: 'Timeline Profissional'
    },
    timelineDescription: {
      es: 'Desarrollo de soluciones web completas incluyendo landing pages optimizadas, sistemas de acortamiento de URLs y plataformas de certificados automáticos. Especialización en crear experiencias digitales que combinan funcionalidad y diseño para maximizar la conversión y eficiencia operativa.',
      en: 'Development of complete web solutions including optimized landing pages, URL shortening systems and automated certificate platforms. Specialization in creating digital experiences that combine functionality and design to maximize conversion and operational efficiency.',
      pt: 'Desenvolvimento de soluções web completas incluindo landing pages otimizadas, sistemas de encurtamento de URLs e plataformas de certificados automáticos. Especialização em criar experiências digitais que combinam funcionalidade e design para maximizar a conversão e eficiência operacional.'
    },
    workTogether: {
      es: 'Trabajemos Juntos',
      en: 'Let\'s Work Together',
      pt: 'Vamos Trabalhar Juntos'
    }
  },

  // Página de contacto
  contact: {
    title: {
      es: 'Contacto',
      en: 'Contact',
      pt: 'Contato'
    },
    subtitle: {
      es: '¿Tienes un proyecto en mente? ¡Hablemos!',
      en: 'Have a project in mind? Let\'s talk!',
      pt: 'Tem um projeto em mente? Vamos conversar!'
    },
    info: {
      es: 'Información de Contacto',
      en: 'Contact Information',
      pt: 'Informações de Contato'
    },
    email: {
      es: 'Email',
      en: 'Email',
      pt: 'Email'
    },
    location: {
      es: 'Ubicación',
      en: 'Location',
      pt: 'Localização'
    },
    locationValue: {
      es: 'Córdoba, Argentina',
      en: 'Córdoba, Argentina',
      pt: 'Córdoba, Argentina'
    },
    availability: {
      es: 'Disponibilidad',
      en: 'Availability',
      pt: 'Disponibilidade'
    },
    availabilityValue: {
      es: 'Lunes a Viernes, 9:00 - 18:00',
      en: 'Monday to Friday, 9:00 AM - 6:00 PM',
      pt: 'Segunda a Sexta, 9:00 - 18:00'
    },
    whatsapp: {
      es: 'WhatsApp',
      en: 'WhatsApp',
      pt: 'WhatsApp'
    },
    socialMedia: {
      es: 'Redes Sociales',
      en: 'Social Media',
      pt: 'Redes Sociais'
    },
    sendMessage: {
      es: 'Envíame un Mensaje',
      en: 'Send me a Message',
      pt: 'Envie-me uma Mensagem'
    },
    name: {
      es: 'Nombre',
      en: 'Name',
      pt: 'Nome'
    },
    subject: {
      es: 'Asunto',
      en: 'Subject',
      pt: 'Assunto'
    },
    message: {
      es: 'Mensaje',
      en: 'Message',
      pt: 'Mensagem'
    },
    sendButton: {
      es: 'Enviar Mensaje',
      en: 'Send Message',
      pt: 'Enviar Mensagem'
    },
    sending: {
      es: 'Enviando...',
      en: 'Sending...',
      pt: 'Enviando...'
    },
    successMessage: {
      es: '¡Mensaje enviado exitosamente! Te responderé pronto.',
      en: 'Message sent successfully! I\'ll get back to you soon.',
      pt: 'Mensagem enviada com sucesso! Responderei em breve.'
    },
    errorMessage: {
      es: 'Hubo un error al enviar el mensaje. Por favor, intenta nuevamente o envía un email directo a contact.novateam.dev@gmail.com',
      en: 'There was an error sending the message. Please try again or send a direct email to contact.novateam.dev@gmail.com',
      pt: 'Houve um erro ao enviar a mensagem. Por favor, tente novamente ou envie um email direto para contact.novateam.dev@gmail.com'
    }
  },

  // Footer
  footer: {
    rights: {
      es: '© 2025 Portfolio. Todos los derechos reservados.',
      en: '© 2025 Portfolio. All rights reserved.',
      pt: '© 2025 Portfolio. Todos os direitos reservados.'
    }
  },

  // Descripciones de proyectos
  projectDescriptions: {
    'acortador-urls': {
      title: {
        es: 'Acortador de URLs Serverless con Códigos QR',
        en: 'Serverless URL Shortener with QR Codes',
        pt: 'Encurtador de URLs Serverless com Códigos QR'
      },
      description: {
        es: 'Aplicación web serverless para acortar URLs con generación automática de códigos QR y gestión de enlaces personalizados, desplegada en Vercel con arquitectura Edge.',
        en: 'Serverless web application for shortening URLs with automatic QR code generation and custom link management, deployed on Vercel with Edge architecture.',
        pt: 'Aplicação web serverless para encurtar URLs com geração automática de códigos QR e gerenciamento de links personalizados, implantada na Vercel com arquitetura Edge.'
      }
    },
    'conversor-imagen': {
      title: {
        es: 'ImageOptimize - Conversor de Imágenes',
        en: 'ImageOptimize - Image Converter',
        pt: 'ImageOptimize - Conversor de Imagens'
      },
      description: {
        es: 'Aplicación web moderna para convertir y optimizar imágenes en múltiples formatos (WebP, AVIF, JPEG, PNG) con procesamiento 100% en el cliente, sin necesidad de servidor.',
        en: 'Modern web application to convert and optimize images in multiple formats (WebP, AVIF, JPEG, PNG) with 100% client-side processing, no server needed.',
        pt: 'Aplicação web moderna para converter e otimizar imagens em vários formatos (WebP, AVIF, JPEG, PNG) com processamento 100% no cliente, sem necessidade de servidor.'
      }
    },
    'tienda-componentes': {
      title: {
        es: 'TechStore - E-commerce Completo',
        en: 'TechStore - Complete E-commerce',
        pt: 'TechStore - E-commerce Completo'
      },
      description: {
        es: 'Tienda online full-stack con panel de administración para venta de componentes de PC. Incluye gestión de productos, sistema de ventas, cupones de descuento, seguimiento UTM y confirmación por email.',
        en: 'Full-stack online store with admin panel for selling PC components. Includes product management, sales system, discount coupons, UTM tracking and email confirmation.',
        pt: 'Loja online full-stack com painel de administração para venda de componentes de PC. Inclui gestão de produtos, sistema de vendas, cupons de desconto, rastreamento UTM e confirmação por email.'
      }
    }
  }
};

// Función helper para obtener traducciones
export function getTranslation(path: string, lang: Language = 'es'): string {
  const keys = path.split('.');
  let value: any = translations;
  
  for (const key of keys) {
    value = value[key];
    if (!value) return path;
  }
  
  return value[lang] || value['es'] || path;
}

// Función para obtener el idioma desde localStorage o detectar del navegador
export function getLanguage(): Language {
  if (typeof window === 'undefined') return 'es';
  
  // First, check localStorage
  const savedLang = localStorage.getItem('portfolio-language');
  if (savedLang && ['es', 'en', 'pt'].includes(savedLang)) {
    return savedLang as Language;
  }
  
  // If no saved language, detect browser language
  const browserLang = navigator.language || navigator.languages?.[0] || 'es';
  let detectedLang: Language = 'es'; // Default
  
  // Map browser language codes to our supported languages
  if (browserLang.startsWith('es')) {
    detectedLang = 'es'; // Español
  } else if (browserLang.startsWith('en')) {
    detectedLang = 'en'; // English
  } else if (browserLang.startsWith('pt')) {
    detectedLang = 'pt'; // Português
  }
  
  // Save detected language to localStorage for next time
  localStorage.setItem('portfolio-language', detectedLang);
  
  return detectedLang;
}

// Función para guardar el idioma
export function setLanguage(lang: Language): void {
  if (typeof window === 'undefined') return;
  localStorage.setItem('portfolio-language', lang);
}

