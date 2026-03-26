export type Lang = "en" | "ka";

export const translations: Record<string, Record<Lang, string>> = {
  // Navbar
  "nav.platform": { en: "Platform", ka: "პლატფორმა" },
  "nav.dashboard": { en: "Dashboard", ka: "დეშბორდი" },
  "nav.modules": { en: "Modules", ka: "მოდულები" },
  "nav.commandCenter": { en: "Command Center", ka: "ბრძანებათა ცენტრი" },

  // Hero
  "hero.title1": { en: "The Future of", ka: "უსაფრთხოების" },
  "hero.titleHighlight": { en: "Safety", ka: "მართვის" },
  "hero.title2": { en: "Management", ka: "მომავალი" },
  "hero.subtitle": {
    en: "Safe-Man unifies industrial safety, cybersecurity, and environmental intelligence into a single command platform.",
    ka: "Safe-Man აერთიანებს ინდუსტრიულ უსაფრთხოებას, კიბერუსაფრთხოებას და გარემოსდაცვით ინტელექტს ერთ სამართავ პლატფორმაში.",
  },
  "hero.cta": { en: "Enter the Safety Command Center", ka: "შედით უსაფრთხოების ბრძანებათა ცენტრში" },

  // System section
  "system.title1": { en: "One Platform.", ka: "ერთი პლატფორმა." },
  "system.titleHighlight": { en: "Four Domains.", ka: "ოთხი მიმართულება." },
  "system.desc": {
    en: "A central safety intelligence engine connected to four integrated safety modules, replacing fragmented tools with unified command and control.",
    ka: "ცენტრალური უსაფრთხოების ინტელექტუალური ძრავა, რომელიც დაკავშირებულია ოთხ ინტეგრირებულ მოდულთან.",
  },
  "system.realtime": { en: "Real-time Intelligence", ka: "რეალურ დროში" },
  "system.security": { en: "Enterprise Security", ka: "კორპორატიული უსაფრთხოება" },
  "system.analytics": { en: "Advanced Analytics", ka: "გაფართოებული ანალიტიკა" },

  // Pillars
  "pillars.title1": { en: "Core Safety", ka: "უსაფრთხოების" },
  "pillars.titleHighlight": { en: "Pillars", ka: "საყრდენები" },
  "pillars.subtitle": {
    en: "FOUR INTEGRATED DOMAINS • ONE UNIFIED PLATFORM",
    ka: "ოთხი ინტეგრირებული მიმართულება • ერთი პლატფორმა",
  },

  // Pillar cards
  "pillar.process.title": { en: "Process Safety", ka: "პროცესის უსაფრთხოება" },
  "pillar.process.subtitle": { en: "Industrial Operations", ka: "ინდუსტრიული ოპერაციები" },
  "pillar.process.desc": {
    en: "Intelligent workflow automation for permits, risk assessments, and incident reporting across all industrial operations.",
    ka: "ინტელექტუალური სამუშაო ნაკადების ავტომატიზაცია ნებართვების, რისკის შეფასებისა და ინციდენტების რეპორტინგისთვის.",
  },
  "pillar.physical.title": { en: "Physical Safety", ka: "ფიზიკური უსაფრთხოება" },
  "pillar.physical.subtitle": { en: "Workplace Protection", ka: "სამუშაო ადგილის დაცვა" },
  "pillar.physical.desc": {
    en: "Comprehensive HSE management covering equipment inspections, maintenance monitoring, and safety training.",
    ka: "სრულყოფილი HSE მართვა, რომელიც მოიცავს აღჭურვილობის ინსპექტირებას, ტექნიკურ მონიტორინგსა და უსაფრთხოების ტრენინგებს.",
  },
  "pillar.network.title": { en: "Network Safety", ka: "ქსელის უსაფრთხოება" },
  "pillar.network.subtitle": { en: "Cyber Defense", ka: "კიბერდაცვა" },
  "pillar.network.desc": {
    en: "Enterprise-grade cybersecurity with real-time threat monitoring, data isolation, and security event intelligence.",
    ka: "კორპორატიული დონის კიბერუსაფრთხოება რეალურ დროში საფრთხეების მონიტორინგით.",
  },
  "pillar.env.title": { en: "Environmental Safety", ka: "გარემოს უსაფრთხოება" },
  "pillar.env.subtitle": { en: "Sustainability Intelligence", ka: "მდგრადობის ინტელექტი" },
  "pillar.env.desc": {
    en: "Climate-aware monitoring for emissions, waste management, and environmental compliance reporting.",
    ka: "კლიმატისადმი მგრძნობიარე მონიტორინგი ემისიების, ნარჩენების მართვისა და გარემოსდაცვითი შესაბამისობისთვის.",
  },

  // Pillar features
  "feat.permit": { en: "Permit-to-work systems", ka: "ნებართვების სისტემა" },
  "feat.risk": { en: "Risk assessments", ka: "რისკის შეფასება" },
  "feat.incident": { en: "Incident reporting", ka: "ინციდენტების რეპორტინგი" },
  "feat.audit": { en: "Audit trails", ka: "აუდიტის კვალი" },
  "feat.equipment": { en: "Equipment inspections", ka: "აღჭურვილობის ინსპექტირება" },
  "feat.maintenance": { en: "Maintenance tracking", ka: "ტექნიკური მონიტორინგი" },
  "feat.training": { en: "Safety training", ka: "უსაფრთხოების ტრენინგი" },
  "feat.investigations": { en: "Investigations", ka: "გამოძიებები" },
  "feat.threat": { en: "Threat monitoring", ka: "საფრთხეების მონიტორინგი" },
  "feat.isolation": { en: "Data isolation", ka: "მონაცემთა იზოლაცია" },
  "feat.securityEvents": { en: "Security events", ka: "უსაფრთხოების მოვლენები" },
  "feat.infraAudit": { en: "Infrastructure audit", ka: "ინფრასტრუქტურის აუდიტი" },
  "feat.emissions": { en: "Emissions tracking", ka: "ემისიების თვალყურისდევნება" },
  "feat.carbon": { en: "Carbon metrics", ka: "ნახშირბადის მეტრიკები" },
  "feat.waste": { en: "Waste management", ka: "ნარჩენების მართვა" },
  "feat.compliance": { en: "Compliance reports", ka: "შესაბამისობის ანგარიშები" },

  // CTA
  "cta.title": { en: "Ready to Transform Safety Operations?", ka: "მზად ხართ უსაფრთხოების ოპერაციების ტრანსფორმაციისთვის?" },
  "cta.desc": {
    en: "Deploy Safe-Man across your organization and gain unified visibility into every safety dimension.",
    ka: "განათავსეთ Safe-Man თქვენს ორგანიზაციაში და მიიღეთ ერთიანი ხედვა ყველა უსაფრთხოების მიმართულებაზე.",
  },
  "cta.button": { en: "Launch Command Center", ka: "ბრძანებათა ცენტრის გაშვება" },

  // Training page
  "nav.training": { en: "Training", ka: "ტრენინგი" },
  "training.title1": { en: "Training", ka: "ტრენინგ" },
  "training.titleHighlight": { en: "Academy", ka: "აკადემია" },
  "training.subtitle": { en: "WORKFORCE DEVELOPMENT • CERTIFICATION MANAGEMENT • LIVE", ka: "პერსონალის განვითარება • სერტიფიცირების მართვა • პირდაპირ" },
  "training.enrolled": { en: "Total Enrolled", ka: "სულ ჩარიცხული" },
  "training.certified": { en: "Certified", ka: "სერტიფიცირებული" },
  "training.courses": { en: "Active Courses", ka: "აქტიური კურსები" },
  "training.hours": { en: "Training Hours", ka: "ტრენინგის საათები" },
  "training.activeCourses": { en: "Active Courses", ka: "აქტიური კურსები" },
  "training.progress": { en: "Completion", ka: "შესრულება" },
  "training.upcoming": { en: "Upcoming Sessions", ka: "მომავალი სესიები" },
  "training.certifications": { en: "Certifications", ka: "სერტიფიკატები" },
  "training.holders": { en: "holders", ka: "მფლობელი" },
  "training.expiring": { en: "expiring", ka: "ვადა იწურება" },
  "training.quickActions": { en: "Quick Actions", ka: "სწრაფი მოქმედებები" },
  "training.action.assign": { en: "Assign Training", ka: "ტრენინგის მინიჭება" },
  "training.action.report": { en: "Generate Report", ka: "ანგარიშის გენერაცია" },
  "training.action.create": { en: "Create Course", ka: "კურსის შექმნა" },
  "training.cat.process": { en: "Process Safety", ka: "პროცესის უსაფრთხოება" },
  "training.cat.physical": { en: "Physical Safety", ka: "ფიზიკური უსაფრთხოება" },
  "training.cat.network": { en: "Network Safety", ka: "ქსელის უსაფრთხოება" },
  "training.cat.environment": { en: "Environmental", ka: "გარემოსდაცვითი" },
  "training.course.hazmat": { en: "Hazardous Materials Handling", ka: "საშიში მასალების მართვა" },
  "training.course.ppe": { en: "PPE Compliance & Usage", ka: "PPE შესაბამისობა და გამოყენება" },
  "training.course.cyber": { en: "Cybersecurity Awareness", ka: "კიბერუსაფრთხოების ცნობიერება" },
  "training.course.emissions": { en: "Emissions Monitoring Protocol", ka: "ემისიების მონიტორინგის პროტოკოლი" },
  "training.course.emergency": { en: "Emergency Response Basics", ka: "საგანგებო რეაგირების საფუძვლები" },
  "training.course.lockout": { en: "Lockout/Tagout Procedures", ka: "ჩაკეტვის/მარკირების პროცედურები" },
  "training.session.fireDrill": { en: "Fire Drill — Building A", ka: "სახანძრო წვრთნა — შენობა A" },
  "training.session.isoAudit": { en: "ISO Audit Preparation", ka: "ISO აუდიტის მომზადება" },
  "training.session.firstAid": { en: "First Aid Refresher", ka: "პირველადი დახმარების განახლება" },
  "training.session.dataPrivacy": { en: "Data Privacy Workshop", ka: "მონაცემთა კონფიდენციალურობის სემინარი" },
  "training.cert.osha": { en: "OSHA 30-Hour", ka: "OSHA 30-საათიანი" },
  "training.cert.iso45001": { en: "ISO 45001", ka: "ISO 45001" },
  "training.cert.nist": { en: "NIST Cybersecurity", ka: "NIST კიბერუსაფრთხოება" },
  "training.cert.iso14001": { en: "ISO 14001", ka: "ISO 14001" },

  // Footer
  "footer.copyright": { en: "© 2026 SAFE-MAN • SAFETY MANAGEMENT PLATFORM", ka: "© 2026 SAFE-MAN • უსაფრთხოების მართვის პლატფორმა" },

  // Dashboard
  "dash.title": { en: "Command", ka: "ბრძანებათა" },
  "dash.titleHighlight": { en: "Dashboard", ka: "დეშბორდი" },
  "dash.subtitle": { en: "SAFETY OPERATIONS CENTER • LIVE", ka: "უსაფრთხოების ოპერაციების ცენტრი • პირდაპირ" },
  "dash.systemsOnline": { en: "SYSTEMS ONLINE", ka: "სისტემები ონლაინ" },
  "dash.globalScore": { en: "Global Safety Score", ka: "გლობალური უსაფრთხოების ქულა" },
  "dash.activeAlerts": { en: "Active Alerts", ka: "აქტიური გაფრთხილებები" },
  "dash.activePersonnel": { en: "Active Personnel", ka: "აქტიური პერსონალი" },
  "dash.complianceRate": { en: "Compliance Rate", ka: "შესაბამისობის მაჩვენებელი" },
  "dash.moduleHealth": { en: "Module Health", ka: "მოდულის ჯანმრთელობა" },
  "dash.liveAlerts": { en: "Live Alert Feed", ka: "პირდაპირი გაფრთხილებები" },
  "dash.safetyTrend": { en: "Safety Trend", ka: "უსაფრთხოების ტრენდი" },
  "dash.complianceStatus": { en: "Compliance Status", ka: "შესაბამისობის სტატუსი" },
  "dash.quickActions": { en: "Quick Actions", ka: "სწრაფი მოქმედებები" },
  "dash.process": { en: "Process", ka: "პროცესი" },
  "dash.physical": { en: "Physical", ka: "ფიზიკური" },
  "dash.network": { en: "Network", ka: "ქსელი" },
  "dash.environment": { en: "Environment", ka: "გარემო" },

  // Alerts
  "alert.gasLeak": { en: "Gas leak detected — Facility B3", ka: "გაზის გაჟონვა აღმოჩენილია — ობიექტი B3" },
  "alert.maintenance": { en: "Equipment maintenance overdue — Crane #12", ka: "აღჭურვილობის ტექნიკური მოვლა ვადაგადასული — ამწე #12" },
  "alert.cyberScan": { en: "Cybersecurity scan completed — All clear", ka: "კიბერუსაფრთხოების სკანირება დასრულებულია — ყველაფერი წესრიგშია" },
  "alert.emissions": { en: "Emissions threshold approaching — Plant A", ka: "ემისიების ზღვარი მიახლოებულია — ქარხანა A" },
  "alert.training": { en: "Safety training completed — Batch 47", ka: "უსაფრთხოების ტრენინგი დასრულებულია — ჯგუფი 47" },

  // Quick actions
  "action.reportIncident": { en: "Report Incident", ka: "ინციდენტის რეპორტი" },
  "action.requestPermit": { en: "Request Permit", ka: "ნებართვის მოთხოვნა" },
  "action.scheduleInspection": { en: "Schedule Inspection", ka: "ინსპექტირების დაგეგმვა" },
  "action.runScan": { en: "Run Security Scan", ka: "უსაფრთხოების სკანირება" },
};
