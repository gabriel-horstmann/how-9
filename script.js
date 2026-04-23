const DATA = {
    empregos: {
      icon: '🤝',
      title: 'Empregos',
      items: [
        { label: 'SINE BC — Agência do Trabalhador', href: 'https://www.bc.sc.gov.br', tel: '(47) 3267-7000' },
        { label: 'Portal Vagas SC', href: 'https://vagas.sc/' },
        { label: 'CIEE Santa Catarina', href: 'https://portal.ciee.org.br' },
        { label: 'Secretaria de Desenvolvimento Econômico', href: 'https://www.bc.sc.gov.br' },
      ]
    },
    saude: {
      icon: '🏥',
      title: 'Saúde',
      items: [
        { label: 'UPA 24h — R. 4200, 1900', href: 'https://www.grupoimas.com.br/', tel: '(47) 3267-7200' },
        { label: 'Hospital Marieta Konder Bornhausen', href: 'https://www.hospitalmarieta.org.br/', tel: '(47) 3361-3000' },
        { label: 'UBS — Unidades Básicas de Saúde', href: 'https://www.gov.br/secom/pt-br/acesso-a-informacao/comunicabr/lista-de-acoes-e-programas/unidades-basicas-de-saude-do-governo-federal' },
        { label: 'SAMU', href: 'https://samues.com.br/', tel: '192' },
        { label: 'Vigilância Sanitária BC', href: 'https://www.bc.sc.gov.br/conteudo.cfm?caminho=vigilancia-sanitaria', tel: '(47) 3267-7080' },
      ]
    },
    social: {
      icon: '🤲',
      title: 'Assistência Social',
      items: [
        { label: 'CRAS — Centro de Ref. de Assistência Social', href: 'https://www.bc.sc.gov.br/imprensa_detalhe.cfm?codigo=25391', tel: '(47) 3267-7120' },
        { label: 'CREAS — Centro de Ref. Especializado', href: 'https://www.bc.sc.gov.br/conteudo.cfm?caminho=dp-inclusao-social', tel: '(47) 3267-7130' },
        { label: 'Conselho Tutelar', href: 'https://www.bc.sc.gov.br/conteudo.cfm?caminho=conselho-tutelar', tel: '(47) 3267-7140' },
        { label: 'Bolsa Família — CRAS', href: 'https://bc.sc.gov.br/imprensa_detalhe.cfm?codigo=14088' },
      ]
    },
    educacao: {
      icon: '🎓',
      title: 'Educação',
      items: [
        { label: 'Secretaria de Educação BC', href: 'https://www.bc.sc.gov.br/conteudo.cfm?caminho=educacao', tel: '(47) 3267-7050' },
        { label: 'GERED — Gerência Regional de Educação', href: 'https://www.sed.sc.gov.br/coordenadorias-regionais-de-educacao/' },
        { label: 'UNIASSELVI — Unidade BC', href: 'https://www.uniasselvi.com.br', tel: '(47) 3367-6000' },
        { label: 'IFC — Campus Camboriú', href: 'https://camboriu.ifc.edu.br', tel: '(47) 2104-0800' },
      ]
    },
    seguranca: {
      icon: '🚔',
      title: 'Segurança',
      items: [
        { label: 'Polícia Militar — 10ª BPM', href: 'https://www.pm.sc.gov.br/12bpm', tel: '190' },
        { label: 'Polícia Civil — Delegacia BC', href: 'https://pc.sc.gov.br/', tel: '(47) 3264-0042' },
        { label: 'Bombeiros', href: 'https://www.cbm.sc.gov.br/', tel: '193' },
        { label: 'Guarda Municipal BC', href: 'https://www.bc.sc.gov.br/conteudo.cfm?caminho=departamentos-da-seguranca', tel: '(47) 3267-7160' },
      ]
    },
    transporte: {
      icon: '🚌',
      title: 'Transporte',
      items: [
        { label: 'Translitorânea — Ônibus Urbano', href: 'https://www.translitoranea.com.br', tel: '(47) 3266-1515' },
        { label: 'Terminal Rodoviário BC', href: 'https://www.rodoviariabc.com.br/', tel: '(47) 3266-3868' },
        { label: 'DETRAN SC — Habilitação e Veículos', href: 'https://www.detran.sc.gov.br', tel: '0800 644 4444' },
        { label: 'COMTRAN', href: 'https://www.bc.sc.gov.br/conteudo.cfm?caminho=conselho-municipal-de-transito-_art-63-a-65_-comtran', tel: '(47) 3267-7170' },
      ]
    },
    prefeitura: {
      icon: '🏛️',
      title: 'Prefeitura',
      items: [
        { label: 'Site Oficial da Prefeitura', href: 'https://www.bc.sc.gov.br' },
        { label: 'Central de Atendimento ao Cidadão', href: 'https://www.bc.sc.gov.br/contato.cfm', tel: '(47) 3267-7000' },
        { label: 'Ouvidoria Municipal', href: 'https://www.bc.sc.gov.br/conteudo.cfm?caminho=dp-ouvidoria', tel: '(47) 3267-7010' },
        { label: 'IPTU e Tributos', href: 'https://cidadao.bc.sc.gov.br/cidadao/balneario_camboriu/portal/servicos/debitos?params=MjY%3D' },
      ]
    },
    turismo: {
      icon: '🌊',
      title: 'Turismo',
      items: [
        { label: 'Secretaria de Turismo BC', href: 'https://www.secturbc.com.br/turismo/pt-br/home', tel: '(47) 3267-7090' },
        { label: 'Bondinho Aéreo (Unipraias)', href: 'https://www.unipraias.com.br', tel: '(47) 3369-3000' },
        { label: 'Câmara de Comércio e Turismo', href: 'https://www.cacbr.com.br' },
        { label: 'Informações sobre praias e eventos', href: 'https://www.bc.sc.gov.br' },
      ]
    },
  };

  function openModal(key) {
    const d = DATA[key];
    if (!d) return;
    document.getElementById('modalIcon').textContent = d.icon;
    document.getElementById('modalTitle').textContent = d.title;
    const list = document.getElementById('modalList');
    list.innerHTML = d.items.map(item => `
      <li>
        <a href="${item.href}" target="_blank" rel="noopener">
          ${item.tel ? `📞 <strong>${item.tel}</strong> — ` : '🔗 '}${item.label}
        </a>
      </li>
    `).join('');
    document.getElementById('modalOverlay').classList.add('open');
  }

  function closeModal(e) {
    if (e.target === document.getElementById('modalOverlay'))
      document.getElementById('modalOverlay').classList.remove('open');
  }

  function closeModalBtn() {
    document.getElementById('modalOverlay').classList.remove('open');
  }

  // Search filter
  function filterCards() {
    const q = document.getElementById('searchInput').value.toLowerCase();
    document.querySelectorAll('.card').forEach(card => {
      const label = card.querySelector('.card-label').textContent.toLowerCase();
      card.style.display = label.includes(q) ? '' : 'none';
    });
  }

  // Mobile menu
  function toggleMenu() {
    document.getElementById('navLinks').classList.toggle('open');
  }
  function closeMenu() {
    document.getElementById('navLinks').classList.remove('open');
  }

  // Dropdown com delay — evita fechar ao passar pelo gap
  let dropdownTimer;
  const dropdown = document.getElementById('navDropdown');
  const dropdownMenu = document.getElementById('dropdownMenu');

  dropdown.addEventListener('mouseenter', () => {
    clearTimeout(dropdownTimer);
    dropdownMenu.classList.add('open');
  });

  dropdown.addEventListener('mouseleave', () => {
    dropdownTimer = setTimeout(() => {
      dropdownMenu.classList.remove('open');
    }, 120);
  });

  dropdownMenu.addEventListener('mouseenter', () => {
    clearTimeout(dropdownTimer);
  });

  dropdownMenu.addEventListener('mouseleave', () => {
    dropdownTimer = setTimeout(() => {
      dropdownMenu.classList.remove('open');
    }, 120);
  });