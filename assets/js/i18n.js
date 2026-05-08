const translations = {
    pt: {
        // Shared / Nav
        "nav_back": "← VOLTAR_AO_PORTFOLIO",
        "view_case": "VER_ESTUDO_DE_CASO →",
        "view_lab": "EXPLORAR_LAB_TÉCNICO →",
        "footer_disclaimer": "Propriedade Intelectual Protegida - Projetos e Pesquisas para Demonstração",
        
        // Index Hero
        "hero_badge": "Cybersecurity & AI Solutions Orchestrator",
        "hero_title": "Arquitetura Resiliente,<br>Defesa Proativa",
        "hero_desc": "Estrategista focado em orquestração de soluções seguras, unindo pensamento sistêmico e automação inteligente para proteger ativos críticos.",
        "hero_cta": "Explorar Portfólio",
        
        // Expertise
        "expertise_title": "CORE EXPERTISE",
        "expertise_01_title": "Security Architecture",
        "expertise_01_desc": "Design de sistemas imunes a falhas e protegidos contra vulnerabilidades críticas (OWASP/NIST).",
        "expertise_02_title": "IA em Cyber Intelligence",
        "expertise_02_desc": "Implementação de agentes de IA para monitoramento e detecção proativa de ameaças em tempo real.",
        "expertise_03_title": "Security Automation (DevSecOps)",
        "expertise_03_desc": "Pipelines automatizados de QA e Segurança para garantir integridade contínua do código.",

        // Projects Section
        "projects_title": "Projetos em Destaque",
        "project_websecops_title": "WebSecOps Dashboard",
        "project_sentinel_title": "Sentinel Login Intelligence",
        "project_attiva_title": "Attiva Gym",
        "project_neon_title": "Neon Loop",
        "project_vanessa_title": "Vanessa Santuccione",

        "project_websecops_desc": "Plataforma de inteligência que automatiza a detecção de vulnerabilidades e correlação DAST em tempo real.",
        "project_sentinel_desc": "Pipeline de dados de alta performance para monitoramento de sessões e auditoria em sistemas críticos.",
        "project_attiva_desc": "Gestão SaaS com foco em Row Level Security (RLS) e integridade de dados via Supabase.",
        "project_neon_desc": "Motor de alto desempenho focado em otimização de recursos e execução segura em sandbox.",
        "project_vanessa_desc": "Arquitetura web otimizada com foco em proteção de identidade e performance global.",

        // Labs Section
        "labs_title": "Advanced Labs & Research",
        "labs_desc": "Explorações técnicas profundas desenvolvidas durante o Mestrado em Cibersegurança (UOC).",
        "lab_nac_title": "Zero Trust & NAC Architecture",
        "lab_nac_desc": "Technical Paper sobre estratégias de controle de acesso, 802.1X e resposta automatizada via Radius CoA.",
        "lab_hardening_title": "Enterprise Hardening Lab",
        "lab_hardening_desc": "Estudo de caso focado em Hardening de sistemas legados, IDS (Suricata) e auditoria forense.",
        "lab_container_title": "Container Security & DevSecOps",
        "lab_container_desc": "Manual técnico sobre securitização de Docker, mTLS em Proxy Reverso e escaneamento de CVEs.",
        "lab_pentest_title": "Hospital Pentest: OffSec Lab",
        "lab_pentest_desc": "Auditoria ofensiva explorando LFI, Pivoting de rede e exfiltração de dados em ambiente hospitalar simulado.",

        // Footer
        "footer_text": "© 2025 Paulo Oliveira. Especialização em Cibersegurança na UOC."
    },
    en: {
        // Shared / Nav
        "nav_back": "← BACK_TO_PORTFOLIO",
        "view_case": "VIEW_CASE_STUDY →",
        "view_lab": "EXPLORE_TECHNICAL_LAB →",
        "footer_disclaimer": "Protected Intellectual Property - Projects and Research for Demonstration Only",

        // Index Hero
        "hero_badge": "Cybersecurity & AI Solutions Orchestrator",
        "hero_title": "Resilient Architecture,<br>Proactive Defense",
        "hero_desc": "Strategist focused on orchestrating secure solutions, merging systems thinking and intelligent automation to protect critical assets.",
        "hero_cta": "Explore Portfolio",

        // Expertise
        "expertise_title": "CORE EXPERTISE",
        "expertise_01_title": "Security Architecture",
        "expertise_01_desc": "Designing fault-tolerant systems protected against critical vulnerabilities (OWASP/NIST).",
        "expertise_02_title": "AI Cyber Intelligence",
        "expertise_02_desc": "Implementing AI agents for real-time proactive monitoring and threat detection.",
        "expertise_03_title": "Security Automation (DevSecOps)",
        "expertise_03_desc": "Automated QA and Security pipelines to ensure continuous code integrity.",

        // Projects Section
        "projects_title": "Featured Projects",
        "project_websecops_title": "WebSecOps Dashboard",
        "project_sentinel_title": "Sentinel Login Intelligence",
        "project_attiva_title": "Attiva Gym",
        "project_neon_title": "Neon Loop",
        "project_vanessa_title": "Vanessa Santuccione",

        "project_websecops_desc": "Intelligence platform automating vulnerability detection and real-time DAST correlation.",
        "project_sentinel_desc": "High-performance data pipeline for session monitoring and audit in mission-critical systems.",
        "project_attiva_desc": "SaaS management focused on Row Level Security (RLS) and data integrity via Supabase.",
        "project_neon_desc": "High-performance engine focused on resource optimization and secure sandbox execution.",
        "project_vanessa_desc": "Optimized web architecture focused on identity protection and global performance.",

        // Labs Section
        "labs_title": "Advanced Labs & Research",
        "labs_desc": "Deep technical explorations developed during the Master's in Cybersecurity (UOC).",
        "lab_nac_title": "Zero Trust & NAC Architecture",
        "lab_nac_desc": "Technical Paper on access control strategies, 802.1X, and automated response via Radius CoA.",
        "lab_hardening_title": "Enterprise Hardening Lab",
        "lab_hardening_desc": "Case study focused on legacy system hardening, IDS (Suricata), and forensic auditing.",
        "lab_container_title": "Container Security & DevSecOps",
        "lab_container_desc": "Technical manual on Docker securitization, mTLS in Reverse Proxy, and CVE scanning.",
        "lab_pentest_title": "Hospital Pentest: OffSec Lab",
        "lab_pentest_desc": "Offensive audit exploring LFI, Network Pivoting, and data exfiltration in a simulated hospital environment.",

        // Footer
        "footer_text": "© 2025 Paulo Oliveira. Cybersecurity Specialization at UOC."
    }
};

function setLanguage(lang) {
    localStorage.setItem('preferred_lang', lang);
    document.documentElement.lang = lang;
    
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            el.innerHTML = translations[lang][key];
        }
    });

    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('opacity-40', btn.getAttribute('data-lang') !== lang);
        btn.classList.toggle('font-bold', btn.getAttribute('data-lang') === lang);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('preferred_lang') || 'en';
    setLanguage(savedLang);
});
