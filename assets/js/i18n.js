const translations = {
    pt: {
        "nav_back": "← VOLTAR_AO_PORTFOLIO",
        "view_case": "VER_ESTUDO_DE_CASO →",
        "view_lab": "EXPLORAR_LAB_TÉCNICO →",
        "footer_disclaimer": "Propriedade Intelectual Protegida - Pesquisa e Projetos Técnicos",
        "footer_text": "© 2025 Paulo Oliveira. Especialização em Cibersegurança na UOC.",
        
        // HERO & NAV
        "hero_badge": "Cybersecurity & AI Solutions Orchestrator",
        "hero_title": "Arquitetura Resiliente,<br>Defesa Proativa",
        "hero_desc": "Estrategista focado em orquestração de soluções seguras, unindo pensamento sistêmico e automação inteligente para proteger ativos críticos.",
        "hero_cta": "Explorar Portfólio",
        
        "expertise_title": "CORE EXPERTISE",
        "expertise_01_title": "Security Architecture",
        "expertise_01_desc": "Design de sistemas imunes a falhas e protegidos contra vulnerabilidades críticas (OWASP/NIST).",
        "expertise_02_title": "IA em Cyber Intelligence",
        "expertise_02_desc": "Implementação de agentes de IA para monitoramento e detecção proativa de ameaças em tempo real.",
        "expertise_03_title": "Security Automation (DevSecOps)",
        "expertise_03_desc": "Pipelines automatizados de QA e Segurança para garantir integridade contínua do código.",

        // PROJECT GRID
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

        // WEBSECOPS CASE
        "ws_badge": "Cyber Security & IA",
        "ws_title": "WebSecOps <br> Automated Intelligence",
        "ws_hero_desc": "Orquestração de testes de segurança DAST e correlação automática de CVEs utilizando IA para proteger ativos digitais em larga escala.",
        "ws_challenge_title": "O Desafio",
        "ws_challenge_desc": "O desafio era automatizar o escaneamento de vulnerabilidades e cruzar os achados com bases de CVEs conhecidas em tempo real.",
        "ws_deepdive_title": "Deep-Dive: Correlação de Vulnerabilidades",
        "ws_deepdive_desc": "Visualização em tempo real do motor de scan identificando falhas críticas e correlacionando-as diretamente com a base de dados de CVEs.",
        "ws_stack_title": "Security Stack",
        "ws_stack_01_title": "Engine",
        "ws_stack_01_desc": "FastAPI (Python) orquestrando ferramentas de DAST e integração com APIs de Threat Intelligence.",
        "ws_stack_02_title": "Dashboard",
        "ws_stack_02_desc": "Next.js & Tailwind CSS para uma visualização rápida de ativos e status de segurança.",
        "ws_stack_03_title": "IA Integration",
        "ws_stack_03_desc": "Utilização de LLMs para explicar vulnerabilidades encontradas e sugerir correções imediatas.",

        // SENTINEL CASE
        "sn_badge": "Infrastructure & Security",
        "sn_title": "Observabilidade & Inteligência de Acessos",
        "sn_hero_desc": "Engenharia de dados para monitoramento de sessões em tempo real, utilizando Prometheus, Grafana e um pipeline ETL assíncrono em Python.",
        "sn_challenge_title": "O Desafio",
        "sn_challenge_desc": "O desafio era extrair métricas de sessões de bancos de dados legados de alto tráfego sem impactar a performance do sistema principal.",
        "sn_eng_title": "A Engenharia",
        "sn_eng_desc": "Implementação de um pipeline agnóstico. O sistema consome métricas via Prometheus e processa alertas críticos em Python com isolamento total.",
        "sn_stack_title": "Stack de Observabilidade",
        "sn_stack_01_title": "Monitoring",
        "sn_stack_01_desc": "Prometheus & Oracledb-Exporter para coleta de métricas brutas.",
        "sn_stack_02_title": "Dashboards",
        "sn_stack_02_desc": "Grafana para visualização analítica e alertas de segurança.",
        "sn_stack_03_title": "Pipeline",
        "sn_stack_03_desc": "Python (Async) para extração e transformação de dados (ETL).",
        "sn_stack_04_title": "Container",
        "sn_stack_04_desc": "Docker Compose para orquestração de toda a stack.",

        // ATTIVA CASE
        "at_badge": "SaaS / Security",
        "at_title": "Attiva Gym: Ecosystem Architecture",
        "at_hero_desc": "Desenvolvimento de um ecossistema SaaS robusto com foco em Row Level Security (RLS), automação de pagamentos e análise de retenção.",
        "at_challenge_title": "Arquitetura de Dados",
        "at_challenge_desc": "O foco principal foi garantir a integridade dos dados e o isolamento entre tenants utilizando políticas de RLS no Supabase (PostgreSQL).",
        "at_eng_title": "Orquestração de IA",
        "at_eng_desc": "Integração de agentes de IA para análise de churn e automação de comunicação, reduzindo a carga administrativa manual em 40%.",

        // NEON/VIRALIZANTE CASE
        "nv_badge": "Performance / Security",
        "nv_title": "Neon Loop: Engine Optimization",
        "nv_hero_desc": "Otimização de motor de jogo web com foco em performance de renderização e execução segura de scripts em ambiente sandbox.",
        "nv_challenge_title": "O Desafio Técnico",
        "nv_challenge_desc": "Maximizar FPS em dispositivos mobile mantendo uma camada de segurança contra injeção de scripts maliciosos durante a execução.",

        // VANESSA CASE
        "vs_badge": "Technical Case Study",
        "vs_title": "Arquitetura Web Orquestrada por IA",
        "vs_hero_desc": "Como utilizei Engenharia de Prompts e Automação de QA para construir um ecossistema digital de luxo para uma artista plástica global.",
        "vs_challenge_title": "O Desafio",
        "vs_challenge_desc": "Refletir o 'Luxo Surrealista' através de uma stack técnica: entrega ultra-rápida (WebP), SEO internacional e responsividade visual absoluta.",
        "vs_eng_title": "A Engenharia",
        "vs_eng_desc": "Ciclo de desenvolvimento orquestrado por IA, codificação semântica e regressão visual automatizada com Playwright.",

        // LABS
        "labs_title": "Advanced Labs & Research",
        "labs_desc": "Explorações técnicas profundas desenvolvidas durante o Mestrado em Cibersegurança (UOC).",
        "lab_nac_title": "Zero Trust & NAC Architecture",
        "lab_nac_desc": "Technical Paper sobre estratégias de controle de acesso, 802.1X e resposta automatizada via Radius CoA.",
        "lab_hardening_title": "Enterprise Hardening Lab",
        "lab_hardening_desc": "Estudo de caso focado em Hardening de sistemas legados, IDS (Suricata) e auditoria forense.",
        "lab_pentest_title": "Hospital Pentest: OffSec Lab",
        "lab_pentest_desc": "Auditoria ofensiva explorando LFI, Pivoting de rede e exfiltração de dados em ambiente hospitalar simulado.",
        "lab_container_title": "Container Security & DevSecOps",
        "lab_container_desc": "Manual técnico sobre securitização de Docker, mTLS em Proxy Reverso e escaneamento de CVEs.",

        // LAB DETAILS
        "hosp_def_hero_desc": "A resposta técnica ao incidente: Implementação de Suricata IPS, Patch Management e Auditoria Forense.",
        "hosp_def_diag_title": "1. Diagnóstico Inicial",
        "hosp_def_diag_p": "A auditoria externa revelou softwares legados (Apache 2.4.52) e vazamento de informações sensíveis via Server Tokens.",
        "hosp_def_suricata_title": "2. Defesa de Rede (IDS/IPS)",
        "hosp_def_suricata_p": "Implementação do Suricata para detecção e bloqueio ativo de DoS e Fuzzing.",
        "hosp_def_apache_title": "3. Web Server Hardening",
        "hosp_def_apache_p": "Atualização via PPA externa e ofuscação de headers sensíveis.",
        "hosp_def_ssh_title": "4. SSH & Obscuridade",
        "hosp_def_ssh_p": "Bloqueio de root remoto e mitigação de Brute Force via config.",
        "hosp_def_forensics_title": "5. Forense de Rede (PCAP)",
        "hosp_def_forensics_p": "Captura de tráfego para análise de padrões de ataque e exfiltração.",
        "hosp_def_lynis_title": "6. Auditoria Local (Lynis)",
        "hosp_def_lynis_p": "Scan de conformidade e correção de diretórios World Readable.",
        "hosp_def_results_title": "7. Resultados & Compliance",
        "hosp_def_results_p": "Ambiente blindado: IPS ativo e índice Lynis elevado para 85+.",

        "hosp_pent_hero_desc": "Auditoria técnica estilo White/Grey Box focada na avaliação de defesas de perímetro e movimentação lateral.",
        "hosp_pent_recon_title": "1. Attack Surface Mapping",
        "hosp_pent_recon_p": "Mapeamento da superfície de ataque e identificação de Open Relay (SMTP).",
        "hosp_pent_lfi_title": "2. Initial Breach (Web LFI)",
        "hosp_pent_lfi_p": "Fuzzing de parâmetros revelou vulnerabilidade de Local File Inclusion no index.php.",
        "hosp_pent_privesc_title": "3. Privilege Escalation",
        "hosp_pent_privesc_p": "Escalada horizontal via quebra de hashes e roubo de chaves SSH.",
        "hosp_pent_pivot_title": "4. Network Pivoting",
        "hosp_pent_pivot_p": "Criação de túnel SOCKS5 para acessar a rede interna isolada.",
        "hosp_pent_rce_title": "5. Remote Code Execution",
        "hosp_pent_rce_p": "Exploração de SMB para upload de Web Shell e RCE.",
        "hosp_pent_data_title": "6. Data Exfiltration",
        "hosp_pent_data_p": "Exfiltração de registros sensíveis e impacto ao compliance (LGPD).",

        "nac_hero_desc": "Análise crítica sobre estratégias de controle de acesso: do inventário de ativos à resposta automatizada a incidentes via Radius CoA.",
        "nac_perim_title": "1. O Fim do Perímetro",
        "nac_perim_p": "A segurança baseada em perímetro físico tornou-se obsoleta. Em um cenário híbrido, a Identidade é o novo firewall.",
        "nac_vis_title": "2. Visibilidade & Profiling",
        "nac_vis_p": "Você não pode proteger o que não vê. O NAC moderno utiliza técnicas passivas e ativas para o inventário dinâmico.",
        "nac_enf_title": "3. Enforcement (802.1X)",
        "nac_enf_p": "Controle na camada física. Bloqueio da porta do switch antes mesmo da atribuição de IP.",
        "nac_resp_title": "4. Resposta Automatizada",
        "nac_resp_p": "A integração entre EDR e NAC reduz o MTTR através do mecanismo Radius CoA.",
        "nac_conc_title": "5. Conclusão Estratégica",
        "nac_conc_p": "NAC integrado é resiliência cibernética e conformidade real.",

        "cont_hero_desc": "Securitização from scratch de infraestrutura Docker: de imagens limpas a controle de acesso mTLS.",
        "cont_image_title": "1. A Imagem Base",
        "cont_image_p": "Construção do Nginx a partir de um S.O. limpo (Ubuntu), garantindo previsibilidade e o Princípio do Menor Privilégio.",
        "cont_iso_title": "2. Isolamento & Limites",
        "cont_iso_p": "Proteção contra exaustão de recursos (DoS) através de limites estritos de CPU e RAM.",
        "cont_mtls_title": "3. A Muralha (mTLS)",
        "cont_mtls_p": "Implementação de Proxy Reverso com Mutual TLS para autenticação criptográfica.",
        "cont_compose_title": "4. Orquestração Segura",
        "cont_compose_p": "Hardening de privilégios via Docker Compose com 'no-new-privileges' para impedir escalação de root.",
        "cont_audit_title": "5. Auditoria de Imagens (Grype)",
        "cont_audit_p": "Escaneamento de CVEs e parseamento customizado com Python.",
        "cont_conc_title": "6. Conclusão",
        "cont_conc_p": "Segurança em containers é uma barreira em camadas: da rede isolada ao controle de binários."
    },
    en: {
        "nav_back": "← BACK_TO_PORTFOLIO",
        "view_case": "VIEW_CASE_STUDY →",
        "view_lab": "EXPLORE_TECHNICAL_LAB →",
        "footer_disclaimer": "Protected Intellectual Property - Technical Research and Projects",
        "footer_text": "© 2025 Paulo Oliveira. Cybersecurity Specialization at UOC.",

        // HERO & NAV
        "hero_badge": "Cybersecurity & AI Solutions Orchestrator",
        "hero_title": "Resilient Architecture,<br>Proactive Defense",
        "hero_desc": "Strategist focused on orchestrating secure solutions, merging systems thinking and intelligent automation to protect critical assets.",
        "hero_cta": "Explore Portfolio",

        "expertise_title": "CORE EXPERTISE",
        "expertise_01_title": "Security Architecture",
        "expertise_01_desc": "Designing fault-tolerant systems protected against critical vulnerabilities (OWASP/NIST).",
        "expertise_02_title": "AI Cyber Intelligence",
        "expertise_02_desc": "Implementing AI agents for real-time proactive monitoring and threat detection.",
        "expertise_03_title": "Security Automation (DevSecOps)",
        "expertise_03_desc": "Automated QA and Security pipelines to ensure continuous code integrity.",

        // PROJECT GRID
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

        // WEBSECOPS CASE
        "ws_badge": "Cyber Security & AI",
        "ws_title": "WebSecOps <br> Automated Intelligence",
        "ws_hero_desc": "Orchestrating DAST security testing and automatic CVE correlation using AI to protect digital assets at scale.",
        "ws_challenge_title": "The Challenge",
        "ws_challenge_desc": "The challenge was to automate vulnerability scanning and cross-reference findings with known CVE databases in real-time.",
        "ws_deepdive_title": "Deep-Dive: Vulnerability Correlation",
        "ws_deepdive_desc": "Real-time visualization of the scan engine identifying critical flaws and correlating them directly with the CVE database.",
        "ws_stack_title": "Security Stack",
        "ws_stack_01_title": "Engine",
        "ws_stack_01_desc": "FastAPI (Python) orchestrating DAST tools and integration with Threat Intelligence APIs.",
        "ws_stack_02_title": "Dashboard",
        "ws_stack_02_desc": "Next.js & Tailwind CSS for a quick visualization of assets and security status.",
        "ws_stack_03_title": "AI Integration",
        "ws_stack_03_desc": "Using LLMs to explain found vulnerabilities and suggest immediate remediations.",

        // SENTINEL CASE
        "sn_badge": "Infrastructure & Security",
        "sn_title": "Observability & Access Intelligence",
        "sn_hero_desc": "Data engineering for real-time session monitoring using Prometheus, Grafana, and an asynchronous Python ETL pipeline.",
        "sn_challenge_title": "The Challenge",
        "sn_challenge_desc": "The challenge was to extract session metrics from high-traffic legacy databases without impacting the main system's performance.",
        "sn_eng_title": "The Engineering",
        "sn_eng_desc": "Implementation of an agnostic pipeline. The system consumes metrics via Prometheus and processes critical alerts in Python with total isolation.",
        "sn_stack_title": "Observability Stack",
        "sn_stack_01_title": "Monitoring",
        "sn_stack_01_desc": "Prometheus & Oracledb-Exporter for raw metric collection.",
        "sn_stack_02_title": "Dashboards",
        "sn_stack_02_desc": "Grafana for analytical visualization and security alerts.",
        "sn_stack_03_title": "Pipeline",
        "sn_stack_03_desc": "Python (Async) for data extraction and transformation (ETL).",
        "sn_stack_04_title": "Container",
        "sn_stack_04_desc": "Docker Compose for orchestrating the entire stack.",

        // ATTIVA CASE
        "at_badge": "SaaS / Security",
        "at_title": "Attiva Gym: Ecosystem Architecture",
        "at_hero_desc": "Developing a robust SaaS ecosystem focused on Row Level Security (RLS), payment automation, and retention analysis.",
        "at_challenge_title": "Data Architecture",
        "at_challenge_desc": "The main focus was ensuring data integrity and tenant isolation using RLS policies in Supabase (PostgreSQL).",
        "at_eng_title": "AI Orchestration",
        "at_eng_desc": "Integrating AI agents for churn analysis and communication automation, reducing manual administrative load by 40%.",

        // NEON/VIRALIZANTE CASE
        "nv_badge": "Performance / Security",
        "nv_title": "Neon Loop: Engine Optimization",
        "nv_hero_desc": "Optimizing a web game engine focused on rendering performance and secure script execution in a sandbox environment.",
        "nv_challenge_title": "The Technical Challenge",
        "nv_challenge_desc": "Maximize FPS on mobile devices while maintaining a security layer against malicious script injection during execution.",

        // VANESSA CASE
        "vs_badge": "Technical Case Study",
        "vs_title": "AI-Orchestrated Web Architecture",
        "vs_hero_desc": "How I utilized Prompt Engineering and QA Automation to build a luxury digital ecosystem for a global visual artist.",
        "vs_challenge_title": "The Challenge",
        "vs_challenge_desc": "Reflecting 'Surrealist Luxury' through a technical stack: ultra-fast delivery (WebP), international SEO, and absolute responsiveness.",
        "vs_eng_title": "The Engineering",
        "vs_eng_desc": "AI-orchestrated development cycle, semantic coding, and automated visual regression with Playwright.",

        // LABS
        "labs_title": "Advanced Labs & Research",
        "labs_desc": "Deep technical explorations developed during the Master's in Cybersecurity (UOC).",
        "lab_nac_title": "Zero Trust & NAC Architecture",
        "lab_nac_desc": "Technical Paper on access control strategies, 802.1X, and automated response via Radius CoA.",
        "lab_hardening_title": "Enterprise Hardening Lab",
        "lab_hardening_desc": "Case study focused on legacy system hardening, IDS (Suricata), and forensic auditing.",
        "lab_pentest_title": "Hospital Pentest: OffSec Lab",
        "lab_pentest_desc": "Offensive audit exploring LFI, Network Pivoting, and data exfiltration in a simulated hospital environment.",
        "lab_container_title": "Container Security & DevSecOps",
        "lab_container_desc": "Technical manual on Docker securitization, mTLS in Reverse Proxy, and CVE scanning.",

        // LAB DETAILS
        "hosp_def_hero_desc": "Technical response to the incident: Implementation of Suricata IPS, Patch Management, and Forensic Auditing.",
        "hosp_def_diag_title": "1. Initial Diagnosis",
        "hosp_def_diag_p": "External audit revealed legacy software (Apache 2.4.52) and sensitive info leakage via Server Tokens.",
        "hosp_def_suricata_title": "2. Network Defense (IDS/IPS)",
        "hosp_def_suricata_p": "Suricata implementation for active detection and blocking of DoS and Fuzzing.",
        "hosp_def_apache_title": "3. Web Server Hardening",
        "hosp_def_apache_p": "External PPA update and sensitive header obfuscation.",
        "hosp_def_ssh_title": "4. SSH & Obscurity",
        "hosp_def_ssh_p": "Remote root blocking and Brute Force mitigation via config.",
        "hosp_def_forensics_title": "5. Network Forensics (PCAP)",
        "hosp_def_forensics_p": "Traffic capture for attack pattern analysis and exfiltration evidence.",
        "hosp_def_lynis_title": "6. Local Audit (Lynis)",
        "hosp_def_lynis_p": "Compliance scan and remediation of World Readable directories.",
        "hosp_def_results_title": "7. Results & Compliance",
        "hosp_def_results_p": "Hardened environment: Active IPS and Lynis score increased to 85+.",

        "hosp_pent_hero_desc": "White/Grey Box technical audit focused on perimeter defense assessment and lateral movement.",
        "hosp_pent_recon_title": "1. Attack Surface Mapping",
        "hosp_pent_recon_p": "Attack surface mapping and identification of SMTP Open Relay.",
        "hosp_pent_lfi_title": "2. Initial Breach (Web LFI)",
        "hosp_pent_lfi_p": "Parameter fuzzing on index.php revealed Local File Inclusion vulnerability.",
        "hosp_pent_privesc_title": "3. Privilege Escalation",
        "hosp_pent_privesc_p": "Horizontal escalation via hash cracking and SSH key theft.",
        "hosp_pent_pivot_title": "4. Network Pivoting",
        "hosp_pent_pivot_p": "SOCKS5 tunnel creation to access the isolated internal network.",
        "hosp_pent_rce_title": "5. Remote Code Execution",
        "hosp_pent_rce_p": "SMB exploitation for Web Shell upload and RCE.",
        "hosp_pent_data_title": "6. Data Exfiltration",
        "hosp_pent_data_p": "Sensitive record exfiltration and compliance impact (GDPR).",

        "nac_hero_desc": "Critical analysis of access control strategies: from asset inventory to automated incident response via Radius CoA.",
        "nac_perim_title": "1. The End of the Perimeter",
        "nac_perim_p": "Physical perimeter security is obsolete. In a hybrid scenario, Identity is the new firewall.",
        "nac_vis_title": "2. Visibility & Profiling",
        "nac_vis_p": "You cannot protect what you cannot see. Modern NAC uses passive and active techniques for dynamic inventory.",
        "nac_enf_title": "3. Enforcement (802.1X)",
        "nac_enf_p": "Control at the physical layer. Blocking the switch port before IP assignment.",
        "nac_resp_title": "4. Automated Response",
        "nac_resp_p": "EDR and NAC integration reduces MTTR through the Radius CoA mechanism.",
        "nac_conc_title": "5. Strategic Conclusion",
        "nac_conc_p": "Integrated NAC is cyber resilience and real compliance.",

        "cont_hero_desc": "Securitization from scratch of Docker infrastructure: from clean images to mTLS access control.",
        "cont_image_title": "1. The Base Image",
        "cont_image_p": "Building Nginx from a clean OS (Ubuntu), ensuring predictability and the Principle of Least Privilege.",
        "cont_iso_title": "2. Isolation & Limits",
        "cont_iso_p": "Protection against resource exhaustion (DoS) through strict CPU and RAM limits.",
        "cont_mtls_title": "3. The Wall (mTLS)",
        "cont_mtls_p": "Implementation of Reverse Proxy with Mutual TLS for cryptographic authentication.",
        "cont_compose_title": "4. Secure Orchestration",
        "cont_compose_p": "Hardening privileges via Docker Compose with 'no-new-privileges' to prevent root escalation.",
        "cont_audit_title": "5. Image Auditing (Grype)",
        "cont_audit_p": "CVE scanning and custom Python parsing.",
        "cont_conc_title": "6. Conclusion",
        "cont_conc_p": "Container security is a layered barrier: from isolated network to binary control."
    }
};

function setLanguage(lang) {
    localStorage.setItem('preferred_lang', lang);
    document.documentElement.lang = lang;
    
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            el.innerHTML = translations[lang][key];
        } else {
            console.warn(`Translation key missing: ${key} for lang: ${lang}`);
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
