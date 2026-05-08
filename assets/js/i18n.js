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


        // NAC Zero Trust Lab
        "lab_nac_page_title": "Arquitetura NAC & Zero Trust",
        "lab_nac_page_desc": "Análise crítica sobre estratégias de controle de acesso: do inventário de ativos à resposta automatizada a incidentes.",
        "lab_nac_sec1_title": "1. O Fim do Perímetro",
        "lab_nac_sec1_desc": "A segurança baseada em perímetro físico tornou-se obsoleta. Em um cenário híbrido, a <strong>Identidade</strong> é o novo firewall. O NAC atua como o Policy Decision Point (PDP).",
        "lab_nac_sec2_title": "2. Enforcement (802.1X)",
        "lab_nac_sec2_desc": "Controle na camada física. Bloqueio da porta do switch antes mesmo da atribuição de IP, prevenindo movimentação lateral.",

        // Hospital Pentest Lab
        "hosp_pent_page_title": "Pentest em Infraestrutura<br><span class=\"text-tech-600 font-mono tracking-tighter\">Hospitalar (Simulada)</span>",
        "hosp_pent_hero_desc": "Auditoria técnica estilo White/Grey Box focada na avaliação de defesas de perímetro, movimentação lateral e impacto à proteção de dados (PII).",
        "hosp_pent_recon_title": "1. Attack Surface Mapping",
        "hosp_pent_recon_desc": "O reconhecimento inicial no gateway (<code>10.10.10.10</code>) identificou falhas clássicas de configuração que aumentam o risco de invasão.",
        "hosp_pent_lfi_title": "2. Initial Breach (Web LFI)",
        "hosp_pent_lfi_desc": "A execução de Fuzzing agressivo revelou um parâmetro oculto no <code>index.php</code>, resultando em uma vulnerabilidade de <strong>Local File Inclusion (LFI)</strong>.",
        "hosp_pent_privesc_title": "3. Privilege Escalation",
        "hosp_pent_privesc_desc": "Com o acesso inicial estabelecido, foi realizada a escalada horizontal de privilégios explorando permissões incorretas no sistema de arquivos.",
        "hosp_pent_pivot_title": "4. Network Pivoting",
        "hosp_pent_pivot_desc": "O gateway comprometido foi convertido em um roteador clandestino para acessar a rede interna isolada (<code>10.10.20.0/24</code>), burlando o firewall de perímetro.",
        "hosp_pent_rce_title": "5. Remote Code Execution",
        "hosp_pent_rce_desc": "O servidor interno alvo possuía um compartilhamento SMB com permissões incorretas de gravação, viabilizando um ataque de execução remota de código (RCE).",
        "hosp_pent_data_title": "6. Data Exfiltration",
        "hosp_pent_data_desc": "O último vetor consistiu em comprometer o banco de dados via script de permutação e exfiltrar registros sensíveis.",

        // Hospital Defense Lab
        "hosp_def_page_title": "Estudo de Caso: Hospital Esperanza Libre<br><span class=\"text-tech-600 font-mono tracking-tighter text-2xl md:text-4xl\">Parte 2 - Hardening & IDS</span>",
        "hosp_def_hero_desc": "A resposta ao incidente: Implementação de Suricata IPS, Patch Management e Auditoria Forense no ambiente previamente comprometido.",
        "hosp_def_diag_title": "1. Diagnóstico Inicial",
        "hosp_def_diag_desc": "A auditoria externa (feita do container Audit <code>10.10.10.50</code>) revelou um ambiente com softwares legados e vazamento de informações essenciais.",
        "hosp_def_ids_title": "2. Defesa de Rede (IDS/IPS)",
        "hosp_def_ids_desc": "Implementação do <strong>Suricata</strong> no Web Server para detecção e bloqueio ativo de scans e ataques de negação de serviço (DoS).",
        "hosp_def_web_title": "3. Web Server Hardening",
        "hosp_def_web_desc": "Mitigação das vulnerabilidades através de Patch Management (atualização via PPA externo) e ofuscação de headers no Apache.",
        "hosp_def_ssh_title": "4. SSH & Controle de Acesso",
        "hosp_def_ssh_desc": "A auditoria anterior revelou o uso de \"Porta Alta\" (40022) como medida de segurança. O hardening real precisa ser aplicado nas diretivas de acesso do serviço.",
        "hosp_def_pcap_title": "5. Forense de Rede (PCAP)",
        "hosp_def_pcap_desc": "Coleta e análise de tráfego (packet capture) para evidenciar conexões maliciosas vindas do container de auditoria na rede do hospital.",
        "hosp_def_lynis_title": "6. Auditoria Local (Lynis)",
        "hosp_def_lynis_desc": "Scan automatizado de conformidade detectou falha grave de privacidade nos diretórios de usuários, permitindo que chaves SSH fossem lidas (como ocorreu no ataque).",
        "hosp_def_results_title": "Resultados Obtidos",

        // Container Security Lab
        "cont_sec_page_title": "Container Security<br><span class=\"text-tech-600 font-mono tracking-tighter\">& Hardening</span>",
        "cont_sec_hero_desc": "Securitização <em>from scratch</em> de uma infraestrutura baseada em Docker. Foco em imagens seguras, isolamento de recursos e controle de acesso rigoroso (mTLS).",
        "cont_sec_img_title": "1. A Imagem Base",
        "cont_sec_img_desc": "Evitando caixas-pretas de imagens pré-configuradas: o servidor web (Nginx) foi construído a partir de um S.O. limpo (<code>ubuntu:latest</code>).",
        "cont_sec_iso_title": "2. Isolamento & Limites",
        "cont_sec_iso_desc": "Subindo a aplicação isolada da rede principal e protegida estruturalmente contra ataques de exaustão de recursos (DoS).",
        "cont_sec_mtls_title": "3. A Muralha (mTLS)",
        "cont_sec_mtls_desc": "Criação de um Proxy Reverso que só aceita conexões de clientes que possuam um certificado criptográfico válido (Mutual TLS).",
        "cont_sec_orch_title": "4. Orquestração Segura",
        "cont_sec_orch_desc": "Unificação do deploy via Docker Compose, garantindo a ordem lógica dos serviços e bloqueando escalação de privilégios.",
        "cont_sec_audit_title": "5. Auditoria de Imagens",
        "cont_sec_audit_desc": "Antes de aprovar para produção, a imagem Ubuntu-based construída foi escaneada em busca de CVEs utilizando o <strong>Grype</strong>.",
        "cont_sec_conc_title": "A Jornada Continua",

        // Footer
        "footer_text": "© 2025 Paulo Oliveira. Especialização em Cibersegurança na UOC."

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


        // NAC Zero Trust Lab
        "lab_nac_page_title": "NAC & Zero Trust Architecture",
        "lab_nac_page_desc": "Critical analysis of access control strategies: from asset inventory to automated incident response.",
        "lab_nac_sec1_title": "1. The End of the Perimeter",
        "lab_nac_sec1_desc": "Physical perimeter-based security has become obsolete. In a hybrid scenario, <strong>Identity</strong> is the new firewall. NAC acts as the Policy Decision Point (PDP).",
        "lab_nac_sec2_title": "2. Enforcement (802.1X)",
        "lab_nac_sec2_desc": "Physical layer control. Switch port blocking even before IP assignment, preventing lateral movement.",

        // Hospital Pentest Lab
        "hosp_pent_page_title": "Infrastructure Pentest<br><span class=\"text-tech-600 font-mono tracking-tighter\">Hospital (Simulated)</span>",
        "hosp_pent_hero_desc": "White/Grey Box style technical audit focused on evaluating perimeter defenses, lateral movement, and data protection impact (PII).",
        "hosp_pent_recon_title": "1. Attack Surface Mapping",
        "hosp_pent_recon_desc": "Initial reconnaissance on the gateway (<code>10.10.10.10</code>) identified classic misconfigurations that increase the risk of intrusion.",
        "hosp_pent_lfi_title": "2. Initial Breach (Web LFI)",
        "hosp_pent_lfi_desc": "Aggressive fuzzing revealed a hidden parameter in <code>index.php</code>, resulting in a <strong>Local File Inclusion (LFI)</strong> vulnerability.",
        "hosp_pent_privesc_title": "3. Privilege Escalation",
        "hosp_pent_privesc_desc": "With initial access established, horizontal privilege escalation was performed by exploiting incorrect permissions in the file system.",
        "hosp_pent_pivot_title": "4. Network Pivoting",
        "hosp_pent_pivot_desc": "The compromised gateway was converted into a clandestine router to access the isolated internal network (<code>10.10.20.0/24</code>), bypassing the perimeter firewall.",
        "hosp_pent_rce_title": "5. Remote Code Execution",
        "hosp_pent_rce_desc": "The target internal server had an SMB share with incorrect write permissions, enabling a remote code execution (RCE) attack.",
        "hosp_pent_data_title": "6. Data Exfiltration",
        "hosp_pent_data_desc": "The final vector consisted of compromising the database via a permutation script and exfiltrating sensitive records.",

        // Hospital Defense Lab
        "hosp_def_page_title": "Case Study: Esperanza Libre Hospital<br><span class=\"text-tech-600 font-mono tracking-tighter text-2xl md:text-4xl\">Part 2 - Hardening & IDS</span>",
        "hosp_def_hero_desc": "Incident response: Suricata IPS implementation, Patch Management, and Forensic Audit in the previously compromised environment.",
        "hosp_def_diag_title": "1. Initial Diagnosis",
        "hosp_def_diag_desc": "External audit (performed from the Audit container <code>10.10.10.50</code>) revealed an environment with legacy software and essential information leakage.",
        "hosp_def_ids_title": "2. Network Defense (IDS/IPS)",
        "hosp_def_ids_desc": "<strong>Suricata</strong> implementation on the Web Server for active detection and blocking of scans and Denial of Service (DoS) attacks.",
        "hosp_def_web_title": "3. Web Server Hardening",
        "hosp_def_web_desc": "Mitigation of vulnerabilities through Patch Management (update via external PPA) and header obfuscation in Apache.",
        "hosp_def_ssh_title": "4. SSH & Access Control",
        "hosp_def_ssh_desc": "Previous audit revealed the use of \"High Port\" (40022) as a security measure. Real hardening needs to be applied in the service's access directives.",
        "hosp_def_pcap_title": "5. Network Forensics (PCAP)",
        "hosp_def_pcap_desc": "Traffic collection and analysis (packet capture) to highlight malicious connections coming from the audit container into the hospital network.",
        "hosp_def_lynis_title": "6. Local Audit (Lynis)",
        "hosp_def_lynis_desc": "Automated compliance scan detected a severe privacy flaw in user directories, allowing SSH keys to be read (as occurred in the attack).",
        "hosp_def_results_title": "Results Achieved",

        // Container Security Lab
        "cont_sec_page_title": "Container Security<br><span class=\"text-tech-600 font-mono tracking-tighter\">& Hardening</span>",
        "cont_sec_hero_desc": "<em>From scratch</em> securitization of a Docker-based infrastructure. Focus on secure images, resource isolation, and strict access control (mTLS).",
        "cont_sec_img_title": "1. The Base Image",
        "cont_sec_img_desc": "Avoiding pre-configured image black boxes: the web server (Nginx) was built from a clean OS (<code>ubuntu:latest</code>).",
        "cont_sec_iso_title": "2. Isolation & Limits",
        "cont_sec_iso_desc": "Deploying the application isolated from the main network and structurally protected against resource exhaustion attacks (DoS).",
        "cont_sec_mtls_title": "3. The Wall (mTLS)",
        "cont_sec_mtls_desc": "Creation of a Reverse Proxy that only accepts connections from clients possessing a valid cryptographic certificate (Mutual TLS).",
        "cont_sec_orch_title": "4. Secure Orchestration",
        "cont_sec_orch_desc": "Unified deployment via Docker Compose, ensuring the logical order of services and blocking privilege escalation.",
        "cont_sec_audit_title": "5. Image Auditing",
        "cont_sec_audit_desc": "Before approval for production, the built Ubuntu-based image was scanned for CVEs using <strong>Grype</strong>.",
        "cont_sec_conc_title": "The Journey Continues",

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
