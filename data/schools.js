// Single source of truth. Add a school = add an object here.
// Facts are drawn from each college's official sites + recent admissions reporting.
// Verify current figures on the official pages before relying on them.

const schools = {
  williams: {
    slug: "williams",
    name: "Williams College",
    shortName: "Williams",
    mascot: "Ephs",
    town: "Williamstown, Massachusetts",
    setting: "Rural — the Berkshire mountains, northwest corner of the state",
    nearbyFood: {
      mcdonalds: { addr: "17 Union St, North Adams, MA", miles: "~4.9 mi" },
      dominos: { addr: "1 River St, North Adams, MA", miles: "~4.9 mi" },
      chickfila: { addr: "502 N Greenbush Rd, Rensselaer, NY", miles: "~45 mi" },
    },
    accent: "#500082",
    accentDeep: "#36005a",
    founded: 1793,
    tagline: "A tutorial system modeled on Oxford, in the Berkshire hills.",
    summary:
      "Williams is a residential liberal arts college of roughly 2,000 undergraduates in the far northwest corner of Massachusetts. Its defining academic feature is the Oxford-style tutorial; its setting is rural and mountainous.",
    stats: [
      { n: "~2,000", l: "Undergraduates" },
      { n: "7:1", l: "Student–faculty ratio" },
      { n: "65+", l: "Tutorials / year" },
      { n: "~8.5%", l: "Admit rate, Class of '29" },
    ],
    // For the compare table — keep keys identical across schools.
    compare: {
      "Undergrad enrollment": "~2,000",
      "Student–faculty ratio": "7:1",
      "Academic structure": "Distribution requirements across 3 divisions",
      "Signature feature": "Oxford-style tutorials (2 students + 1 professor)",
      "Calendar": "4-1-4 (fall, Winter Study in Jan, spring)",
      "Setting": "Rural — Berkshire mountains",
      "Consortium": "None (standalone)",
      "Admit rate (Class of '29)": "~8.5%",
      "Testing policy": "Test-optional",
      "Financial aid": "Meets 100% of need; all-grant (no loans)",
      "Need-blind": "Domestic applicants",
      "Athletics": "NCAA Division III, NESCAC — 32 varsity teams",
    },
    video: {
      id: "PAQ5ZvSJtSY",
      title: "Williams College Virtual Tour",
      caption: "Williams College official YouTube channel.",
    },
    video2: {
      id: "YgT9kbovplk",
      title: "Intro to Williams College",
      caption: '"Intro to Williams College" — Williams College official YouTube channel.',
    },
    sections: [
      {
        id: "academics",
        num: "01",
        eyebrow: "Academics",
        h: "The curriculum and how it's taught",
        body: [
          "Williams is undergraduate-focused. All classes are taught by professors rather than teaching assistants, and the student–faculty ratio is 7:1, among the lowest of any college. The college lists more than 700 courses annually across roughly 36 majors and a set of concentrations (its term for minors).",
          "The calendar is unusual. Williams runs a <strong>4-1-4 schedule</strong>: a fall semester, a three-week January term called <strong>Winter Study</strong> in which you take a single subject (often pass/fail, sometimes a trip, internship, or independent project), and a spring semester.",
        ],
        subhead: "What to look at",
        list: [
          "Whether the majors you're considering are actually offered, and how large their introductory classes are.",
          "The distribution requirements — Williams asks students to take courses across three divisions.",
          "Research opportunities: the college reports that roughly 40% of students do funded research at some point.",
        ],
        links: [
          { href: "https://www.williams.edu/academics/", t: "Academics at Williams", d: "Official overview" },
          { href: "https://catalog.williams.edu/", t: "Course Catalog", d: "Majors, courses, requirements" },
          { href: "https://winterstudy.williams.edu/", t: "Winter Study", d: "The January term" },
        ],
      },
      {
        id: "signature",
        num: "02",
        eyebrow: "The signature feature",
        h: "The Oxford-style tutorial system",
        body: [
          "This is the thing most often cited as distinctive about Williams. In a tutorial, a small number of students — frequently just two — meet weekly with a single professor. Each week, students alternate: one presents independent work (an essay, a problem set, a lab report, an art critique) while the other responds to it, then they switch.",
          "Williams introduced the format in 1988, modeled on Oxford's. The college offers 65 or more tutorials each year across the curriculum. If close, discussion-heavy, writing-intensive work appeals to you, this is a feature to weigh heavily.",
        ],
        callout: {
          h: "Related: a year at Oxford",
          body:
            'Juniors can apply to the <a href="https://exeter.williams.edu/">Williams-Exeter Programme at Oxford</a>, spending a full year studying under the actual Oxford tutorial system at Exeter College. It requires a 3.5 GPA to apply.',
        },
        links: [
          { href: "https://www.williams.edu/academics/", t: "Tutorials overview", d: "How the format works" },
          { href: "https://exeter.williams.edu/", t: "Williams-Exeter at Oxford", d: "The junior-year program" },
        ],
      },
      {
        id: "aid",
        num: "03",
        eyebrow: "Cost & financial aid",
        h: "What it costs, and what it might actually cost you",
        body: [
          'The published "sticker price" and the price a given family pays are usually very different. Williams meets 100% of demonstrated financial need, and has moved to an "all-grant" aid model — need-based aid is awarded as grants rather than loans. Williams also practices need-blind admission for domestic applicants.',
          "Two things to do, in order: run the <strong>Net Price Calculator</strong> with your family's actual numbers, then compare that estimate against other schools on your list. The sticker price tells you very little on its own.",
        ],
        links: [
          { href: "https://www.williams.edu/admission-aid/", t: "Admission & Financial Aid", d: "Official hub" },
          { href: "https://npc.collegeboard.org/app/williams", t: "Net Price Calculator", d: "Estimate your real cost" },
        ],
      },
      {
        id: "life",
        num: "04",
        eyebrow: "Campus life",
        h: "Where you'll live, and what there is to do",
        body: [
          "Williams is residential — nearly all students live on campus all four years, in a house/residential system rather than fraternities, which the college phased out decades ago. The setting is rural: Williamstown sits in the Berkshire mountains.",
        ],
        subhead: "Athletics, outdoors, and arts",
        body2: [
          "Williams competes in NCAA Division III in the NESCAC conference, with 32 varsity teams plus extensive club and intramural sports. The <strong>Williams Outing Club</strong> is one of the most active student organizations, running trips into the surrounding mountains.",
          'The college is connected to notable art institutions including the <a href="https://www.clarkart.edu/">Clark Art Institute</a> and MASS MoCA nearby — unusual resources for a school this size.',
        ],
        links: [
          { href: "https://student-life.williams.edu/", t: "Student Life", d: "Housing, clubs, dining" },
          { href: "https://ephsports.williams.edu/", t: "Williams Athletics (Ephs)", d: "Varsity and club sports" },
        ],
      },
      {
        id: "visit",
        num: "05",
        eyebrow: "Seeing it for yourself",
        h: "Visiting, virtually or in person",
        body: [
          "A campus visit is the single best way to judge fit, and Williams runs regular tours and hour-long information sessions with an admission officer and a current student.",
          "One program worth knowing about: <strong>Windows on Williams (WOW)</strong> is a free three-day fly-in for rising seniors. Williams covers transportation, meals, and overnight housing in a dorm, and you attend classes and meet faculty.",
        ],
        useVideo2: true,
        links: [
          { href: "https://www.williams.edu/admission-aid/visit-and-connect/", t: "Visit & Connect", d: "Tours and info sessions" },
          { href: "https://welcome.williams.edu/", t: "Welcome to Williams", d: "For prospective students" },
          { href: "https://www.youtube.com/williamscollege", t: "Official YouTube channel", d: "More video" },
        ],
      },
      {
        id: "apply",
        num: "06",
        eyebrow: "Applying",
        h: "What the application looks like",
        body: [
          "Williams is highly selective: it admitted about 8.5% of applicants to the Class of 2029. It accepts the Common Application, the Coalition Application, and QuestBridge. The college is currently test-optional.",
          'A practical note: Williams does not consider "demonstrated interest," so visiting or emailing won\'t change your odds. Decide early between Early Decision (binding) and Regular Decision, and confirm current deadlines on the official page — they change year to year.',
        ],
        callout: {
          h: "Before you apply, ask yourself",
          body:
            "Does the tutorial system genuinely appeal to you? Are you comfortable in a small, rural, residential community? Did the Net Price Calculator produce a number that works?",
        },
        links: [
          { href: "https://www.williams.edu/admission-aid/", t: "Admission & Financial Aid", d: "Deadlines & requirements" },
          { href: "https://admission.williams.edu/", t: "Office of Admission", d: "Apply & connect" },
        ],
      },
    ],
  },

  amherst: {
    slug: "amherst",
    name: "Amherst College",
    shortName: "Amherst",
    mascot: "Mammoths",
    town: "Amherst, Massachusetts",
    setting: "Small town — the Pioneer Valley, central-western Massachusetts",
    nearbyFood: {
      mcdonalds: { addr: "374 Russell St, Hadley, MA", miles: "~1.9 mi" },
      dominos: { addr: "459 Russell St, Hadley, MA", miles: "~1.1 mi" },
      chickfila: { addr: "501 Memorial Dr, Chicopee, MA", miles: "~17 mi" },
    },
    accent: "#3f1d70",
    accentDeep: "#2a1250",
    founded: 1821,
    tagline: "An open curriculum and five colleges within reach.",
    summary:
      "Amherst is a residential liberal arts college of roughly 1,900 undergraduates in the Pioneer Valley. Its defining academic feature is the open curriculum — almost no required courses — and membership in the Five College Consortium.",
    stats: [
      { n: "~1,900", l: "Undergraduates" },
      { n: "7:1", l: "Student–faculty ratio" },
      { n: "0", l: "Distribution requirements" },
      { n: "~7%", l: "Admit rate, Class of '29" },
    ],
    compare: {
      "Undergrad enrollment": "~1,900",
      "Student–faculty ratio": "7:1",
      "Academic structure": "Open curriculum — no distribution requirements",
      "Signature feature": "Open curriculum + Five College Consortium",
      "Calendar": "Semester (fall, spring)",
      "Setting": "Small town — Pioneer Valley",
      "Consortium": "Five Colleges (Smith, Mt Holyoke, Hampshire, UMass)",
      "Admit rate (Class of '29)": "~7%",
      "Testing policy": "Test-optional",
      "Financial aid": "Meets 100% of need; no-loan packages",
      "Need-blind": "Domestic and international applicants",
      "Athletics": "NCAA Division III, NESCAC",
    },
    video: {
      id: "sHI82M5JBJo",
      title: "Quick Campus Tour of Amherst College",
      caption: "Amherst College official YouTube channel.",
    },
    sections: [
      {
        id: "academics",
        num: "01",
        eyebrow: "Academics",
        h: "The open curriculum",
        body: [
          "Amherst's defining academic feature is its <strong>open curriculum</strong>: there are no distribution requirements and no core curriculum. Apart from a first-year seminar and the courses required for your major, you choose everything you take. The college offers the B.A. across roughly 40+ majors.",
          "This freedom is real, and it cuts both ways. Amherst's own admissions office signals that successful applicants embrace it — meaning you're expected to arrive with some sense of what you want to explore. A student who wants more structure may find an open curriculum harder to navigate, not easier.",
        ],
        subhead: "What to look at",
        list: [
          "Whether you actually want curricular freedom, or whether you'd benefit from required breadth. This is the central question with Amherst.",
          "Double majoring is common — with no core requirements, many students pursue two.",
          "The Five College Consortium: you can cross-register at Smith, Mount Holyoke, Hampshire, and UMass Amherst, adding thousands of courses.",
        ],
        links: [
          { href: "https://www.amherst.edu/academiclife/open-curriculum", t: "Our Open Curriculum", d: "Official explanation" },
          { href: "https://www.amherst.edu/academiclife", t: "Academics at Amherst", d: "Overview" },
          { href: "https://www.fivecolleges.edu/", t: "Five College Consortium", d: "Cross-registration" },
        ],
      },
      {
        id: "signature",
        num: "02",
        eyebrow: "The signature feature",
        h: "Five colleges, one valley",
        body: [
          "Amherst belongs to the <strong>Five College Consortium</strong> alongside Smith, Mount Holyoke, Hampshire, and the University of Massachusetts Amherst. A free bus connects the campuses, and Amherst students can register for courses at any of them.",
          "For a college of 1,900, this is a meaningful multiplier: it pairs the intimacy of a small school with access to the course breadth of a large university next door. If a department at Amherst is small in an area you care about, the consortium may fill the gap.",
        ],
        callout: {
          h: "One caveat to check",
          body:
            "Hampshire College has faced serious financial difficulty and announced plans to wind down. Confirm the current state of the consortium's members on the official Five College site before weighing it heavily.",
        },
        links: [
          { href: "https://www.fivecolleges.edu/", t: "Five Colleges", d: "How cross-registration works" },
        ],
      },
      {
        id: "aid",
        num: "03",
        eyebrow: "Cost & financial aid",
        h: "What it costs, and what it might actually cost you",
        body: [
          "Like Williams, Amherst meets 100% of demonstrated financial need and structures aid to avoid loans. A notable difference: Amherst is <strong>need-blind for international applicants as well as domestic ones</strong>, which is rare even among wealthy colleges and matters if you're applying from abroad with financial need.",
          "Run the <strong>Net Price Calculator</strong> with your family's real numbers before drawing any conclusion from the sticker price.",
        ],
        links: [
          { href: "https://www.amherst.edu/admission/financial-aid", t: "Financial Aid", d: "Official hub" },
          { href: "https://www.amherst.edu/admission/financial-aid/net-price-calculator", t: "Net Price Calculator", d: "Estimate your real cost" },
        ],
      },
      {
        id: "life",
        num: "04",
        eyebrow: "Campus life",
        h: "Where you'll live, and what there is to do",
        body: [
          "Amherst is residential, with most students living on campus on a 1,000-acre campus near the center of the town of Amherst. The town itself is a small college town in the Pioneer Valley — more of a walkable town setting than Williams's mountain isolation, and lively partly because of the other four colleges nearby.",
        ],
        subhead: "Athletics and the rivalry",
        body2: [
          "Amherst competes in NCAA Division III in the NESCAC. Its rivalry with Williams is the oldest in the conference; the annual football game is nicknamed the \"Biggest Little Game in America.\" If you're choosing between the two, know that you're choosing a side of a very old rivalry.",
          "Amherst also maintains a wildlife sanctuary with wetlands and woodlands adjoining campus.",
        ],
        links: [
          { href: "https://www.amherst.edu/campuslife", t: "Campus Life", d: "Housing, clubs, dining" },
          { href: "https://athletics.amherst.edu/", t: "Amherst Athletics (Mammoths)", d: "Varsity and club sports" },
        ],
      },
      {
        id: "visit",
        num: "05",
        eyebrow: "Seeing it for yourself",
        h: "Visiting, virtually or in person",
        body: [
          "Amherst runs information sessions and student-led campus tours. Admitted students are invited to \"Be a Mammoth\" days in April. If you can't get to the valley, the official channels below show a lot from a distance.",
        ],
        links: [
          { href: "https://www.amherst.edu/admission/visit", t: "Campus Visits", d: "Tours and info sessions" },
          { href: "https://www.amherst.edu/admission", t: "Admission & Financial Aid", d: "For prospective students" },
          { href: "https://www.youtube.com/user/amherstcollege", t: "Official YouTube channel", d: "More video" },
        ],
      },
      {
        id: "apply",
        num: "06",
        eyebrow: "Applying",
        h: "What the application looks like",
        body: [
          "Amherst is among the most selective liberal arts colleges, admitting roughly 7% of applicants to the Class of 2029. It accepts the Common Application and QuestBridge, and is test-optional. It offers binding Early Decision, whose admit rate is meaningfully higher than Regular Decision — but ED is a commitment, so only use it if Amherst is a clear first choice and the Net Price Calculator works for your family.",
          "Amherst no longer gives preference to legacy status. Its supplement rewards applicants who can speak specifically to why the open curriculum suits them.",
        ],
        callout: {
          h: "Before you apply, ask yourself",
          body:
            "Do you want to design your own course of study, or would you rather have required breadth? Does the five-college setting appeal more than a self-contained campus? Those are the questions that separate Amherst from its peers.",
        },
        links: [
          { href: "https://www.amherst.edu/admission", t: "Admission & Financial Aid", d: "Deadlines & requirements" },
          { href: "https://www.amherst.edu/admission/apply", t: "How to Apply", d: "Application steps" },
        ],
      },
    ],
  },

  wesleyan: {
    slug: "wesleyan",
    name: "Wesleyan University",
    shortName: "Wesleyan",
    mascot: "Cardinals",
    town: "Middletown, Connecticut",
    setting: "Small city — central Connecticut, on the Connecticut River",
    nearbyFood: {
      mcdonalds: { addr: "611 S Main St, Middletown, CT", miles: "~1.1 mi" },
      dominos: { addr: "370 S Main St, Middletown, CT", miles: "~0.8 mi" },
      chickfila: { addr: "3240 Berlin Tpke, Newington, CT", miles: "~10 mi" },
    },
    accent: "#8a1c1c",
    accentDeep: "#5e1010",
    founded: 1831,
    tagline: "An open curriculum with a strong arts and film culture.",
    summary:
      "Wesleyan is a residential liberal arts university of roughly 3,000 undergraduates in Middletown, Connecticut. It pairs an open curriculum with a distinctive arts, film, and social-engagement culture — and is notably larger than its Little Three rivals, Williams and Amherst.",
    stats: [
      { n: "~3,000", l: "Undergraduates" },
      { n: "8:1", l: "Student–faculty ratio" },
      { n: "0", l: "Distribution requirements" },
      { n: "~16%", l: "Admit rate, Class of '29" },
    ],
    compare: {
      "Undergrad enrollment": "~3,000",
      "Student–faculty ratio": "8:1",
      "Academic structure": "Open curriculum — expected (not required) breadth",
      "Signature feature": "Open curriculum + arts/film culture",
      "Calendar": "Semester (fall, spring)",
      "Setting": "Small city — Middletown, CT",
      "Consortium": "None (standalone)",
      "Admit rate (Class of '29)": "~16%",
      "Testing policy": "Test-optional (since 2014)",
      "Financial aid": "Meets 100% of need",
      "Need-blind": "Domestic applicants",
      "Athletics": "NCAA Division III, NESCAC",
    },
    video: {
      id: "F91nYGi8Ot0",
      title: "Wesleyan University Campus Tour",
      caption: "Wesleyan University official YouTube channel.",
    },
    sections: [
      {
        id: "academics",
        num: "01",
        eyebrow: "Academics",
        h: "The open curriculum, Wesleyan's version",
        body: [
          "Like Amherst, Wesleyan has an <strong>open curriculum</strong>: no required core and no distribution requirements. But Wesleyan frames it slightly differently — students are <em>expected</em> to pursue breadth across three broad areas (humanities, sciences/math, and social sciences), and the registration system nudges you toward it, even though nothing is strictly mandated outside your major.",
          "Wesleyan is also a <strong>university</strong>, not just a college: it grants some master's and doctoral degrees and is larger than Williams or Amherst, with roughly 3,000 undergraduates. That scale shows up as a deeper course catalog and more specialized offerings, particularly in the arts.",
        ],
        subhead: "What to look at",
        list: [
          "Whether you want the freedom of an open curriculum — the same central question as Amherst, but here paired with a larger course catalog.",
          "Strength in the arts: film, music, theater, and creative writing are signature areas. The College of Film and the Moving Image is unusually strong for a school this size.",
          "Interdisciplinary 'Colleges' (e.g. the College of Social Studies, College of Letters) — selective, intensive programs within the university.",
        ],
        links: [
          { href: "https://www.wesleyan.edu/academics/", t: "Academics at Wesleyan", d: "Official overview" },
          { href: "https://www.wesleyan.edu/academics/curriculum.html", t: "The Wesleyan Curriculum", d: "How the open curriculum works" },
        ],
      },
      {
        id: "signature",
        num: "02",
        eyebrow: "The signature feature",
        h: "A creative and social-engagement culture",
        body: [
          "Wesleyan's distinguishing trait isn't a single program — it's an institutional identity. It has an outsized reputation in film and the arts (its alumni are well represented in the entertainment industry), a politically engaged and activist student body, and a culture that values creative and intellectual seriousness over conventional polish.",
          "This is the axis on which Wesleyan separates itself from Williams and Amherst. The three are academic peers, but Wesleyan self-selects for a particular kind of student. If that creative, socially engaged identity resonates, it's a strong signal of fit; if it doesn't, that matters too.",
        ],
        callout: {
          h: "One thing to verify",
          body:
            "Wesleyan eliminated legacy preference in admissions in 2023, one of the first selective universities to do so. If that policy matters to you either way, confirm the current state on the official admission site.",
        },
        links: [
          { href: "https://www.wesleyan.edu/admission/", t: "Admission overview", d: "Identity and culture" },
        ],
      },
      {
        id: "aid",
        num: "03",
        eyebrow: "Cost & financial aid",
        h: "What it costs, and what it might actually cost you",
        body: [
          "Wesleyan meets 100% of demonstrated financial need for admitted students. Around 44% of a recent entering class applied for need-based aid. As at any of these schools, the published cost of attendance — approaching $90,000 a year — is not what most aided families actually pay.",
          "Run the <strong>Net Price Calculator</strong> with your real numbers first. This matters especially at Wesleyan because a large share of the class is admitted through binding Early Decision, and you should only apply ED once you've confirmed the aid math works.",
        ],
        links: [
          { href: "https://www.wesleyan.edu/finaid/", t: "Financial Aid", d: "Official hub" },
          { href: "https://www.wesleyan.edu/finaid/calculator.html", t: "Net Price Calculator", d: "Estimate your real cost" },
        ],
      },
      {
        id: "life",
        num: "04",
        eyebrow: "Campus life",
        h: "Where you'll live, and what there is to do",
        body: [
          "Wesleyan is residential, on a 316-acre campus in Middletown, a small Connecticut city on the Connecticut River roughly midway between New York and Boston. The setting is more town-and-city than Williams's mountains or Amherst's valley, and program housing — themed houses organized around shared interests — is a notable part of residential life.",
        ],
        subhead: "Athletics and the Little Three",
        body2: [
          "Wesleyan competes in NCAA Division III in the NESCAC. With Williams and Amherst, it forms the <strong>\"Little Three,\"</strong> a rivalry dating to the 19th century. Athletically Wesleyan is the least dominant of the three, consistent with its more arts-and-activism-forward identity.",
          "The arts scene is a defining part of campus life: student films, theater, and music are central rather than peripheral.",
        ],
        links: [
          { href: "https://www.wesleyan.edu/studentaffairs/", t: "Student Affairs", d: "Housing, clubs, dining" },
          { href: "https://athletics.wesleyan.edu/", t: "Wesleyan Athletics (Cardinals)", d: "Varsity and club sports" },
        ],
      },
      {
        id: "visit",
        num: "05",
        eyebrow: "Seeing it for yourself",
        h: "Visiting, virtually or in person",
        body: [
          "Wesleyan runs campus tours, information sessions, and day-visit programs. Admitted students are invited to <strong>WesFest</strong>, a multi-day April program with classes, performances, and panels; a Travel Assistance Program helps students with the greatest financial need attend.",
        ],
        links: [
          { href: "https://www.wesleyan.edu/admission/visit.html", t: "Visit Wesleyan", d: "Tours and info sessions" },
          { href: "https://www.wesleyan.edu/admission/", t: "Office of Admission", d: "For prospective students" },
          { href: "https://www.youtube.com/user/wesleyanu", t: "Official YouTube channel", d: "More video" },
        ],
      },
      {
        id: "apply",
        num: "06",
        eyebrow: "Applying",
        h: "What the application looks like",
        body: [
          "Wesleyan admitted about 16% of applicants to the Class of 2029 — the most accessible of the Little Three on paper, though its pool self-selects heavily. It accepts the Common Application and QuestBridge, and has been test-optional since 2014. A majority of the entering class is admitted through binding Early Decision (two rounds, ED I and ED II), so ED carries a real statistical advantage — but only use it if Wesleyan is a clear first choice and the aid math works.",
          "Wesleyan eliminated legacy preference in 2023. Its supplement rewards applicants who can speak authentically to why Wesleyan's particular culture fits them.",
        ],
        callout: {
          h: "Before you apply, ask yourself",
          body:
            "Does Wesleyan's creative, socially engaged identity match yours? Do you want an open curriculum, but at a larger school than Amherst? Is Early Decision the right strategic move, given how much of the class is filled that way?",
        },
        links: [
          { href: "https://www.wesleyan.edu/admission/apply.html", t: "How to Apply", d: "Deadlines & requirements" },
          { href: "https://www.wesleyan.edu/admission/class-profile.html", t: "Class Profile", d: "Who gets in" },
        ],
      },
    ],
  },

  cmu: {
    slug: "cmu",
    name: "Carnegie Mellon University",
    shortName: "Carnegie Mellon",
    mascot: "Tartans",
    town: "Pittsburgh, Pennsylvania",
    setting: "Urban — the Oakland neighborhood of Pittsburgh",
    nearbyFood: {
      mcdonalds: { addr: "3708 Forbes Ave, Pittsburgh, PA", miles: "~0.7 mi" },
      dominos: { addr: "4631 Centre Ave, Pittsburgh, PA", miles: "~0.7 mi" },
      chickfila: { addr: "480 E Waterfront Dr, Homestead, PA", miles: "~4 mi" },
    },
    accent: "#a6192e",
    accentDeep: "#6f1020",
    founded: 1900,
    tagline: "A research university where you apply to one of seven colleges.",
    summary:
      "Carnegie Mellon is a private research university of roughly 7,800 undergraduates in Pittsburgh. Unlike a liberal arts college, it is a collection of seven schools and colleges — and you apply directly into one, which is the single most important thing to understand about it.",
    virtualTour: "https://admission.cmu.edu/portal/virtual_tours",
    stats: [
      { n: "~7,800", l: "Undergraduates" },
      { n: "6:1", l: "Student–faculty ratio" },
      { n: "7", l: "Schools & colleges" },
      { n: "~11%", l: "Admit rate, Class of '29" },
    ],
    compare: {
      "Undergrad enrollment": "~7,800",
      "Student–faculty ratio": "6:1",
      "Academic structure": "Apply directly into 1 of 7 colleges; admission is by college",
      "Signature feature": "Specialized colleges (CS, engineering, drama, art, business)",
      "Calendar": "Semester (fall, spring)",
      "Setting": "Urban — Pittsburgh",
      "Consortium": "None (standalone research university)",
      "Admit rate (Class of '29)": "~11% overall (varies sharply by college)",
      "Testing policy": "Varies by college (SCS requires; most test-flexible; CFA test-optional)",
      "Financial aid": "Meets need for admitted students; not need-blind",
      "Need-blind": "No",
      "Athletics": "NCAA Division III, University Athletic Association",
    },
    sections: [
      {
        id: "academics",
        num: "01",
        eyebrow: "Academics",
        h: "Seven colleges, and you pick one to apply to",
        body: [
          "The defining fact about Carnegie Mellon is that you don't apply to the university at large — you apply directly into one of its <strong>seven undergraduate schools and colleges</strong>: the School of Computer Science, the College of Engineering, the Dietrich College of Humanities and Social Sciences, the Mellon College of Science, the Tepper School of Business, the College of Fine Arts, and the Heinz College's Information Systems program. Each admits its own class with its own criteria.",
          "This makes CMU more like a set of specialized professional schools than a unified liberal arts college. It is best known for programs that are among the strongest in the country — computer science, engineering, robotics, drama, and design — often paired across disciplines (the famous example being the overlap of technology and the arts).",
        ],
        subhead: "What to look at",
        list: [
          "Which college fits you — this is the central decision. A strong applicant to one college may not be competitive for another, and switching after enrollment (especially into Computer Science) is difficult.",
          "The intensity. CMU has a reputation for a demanding, high-workload culture, particularly in its STEM colleges.",
          "Whether you want depth in a specialized field over the breadth of a general liberal arts education — that's the core tradeoff versus a school like Williams or Amherst.",
        ],
        links: [
          { href: "https://www.cmu.edu/admission/academics", t: "Colleges & Programs", d: "The seven colleges" },
          { href: "https://www.cmu.edu/", t: "Carnegie Mellon", d: "University overview" },
        ],
      },
      {
        id: "signature",
        num: "02",
        eyebrow: "The signature feature",
        h: "Admission is by college — and that changes everything",
        body: [
          "Because admission is by individual college, CMU's overall admit rate (around 11% for the Class of 2029) is misleading. The School of Computer Science admits well under 5% — on par with the most selective universities in the country — while some humanities and science programs admit a much larger share. The college you choose largely determines the bar you face.",
          "You can typically apply to up to two CMU colleges, but most applicants are admitted to one at most. Picking the right college (and a sensible second choice) is the single most strategic decision in a CMU application — far more so than at a school with one undivided admissions process.",
        ],
        callout: {
          h: "Verify before you apply",
          body:
            "Admit rates, the two-college application rules, and internal-transfer policies change. Confirm the current rules on the official admission site, and check the specific college you're targeting — the university-wide number won't tell you what you actually face.",
        },
        links: [
          { href: "https://www.cmu.edu/admission/admission/undergraduate-admission-requirements", t: "Admission Requirements", d: "By college" },
        ],
      },
      {
        id: "aid",
        num: "03",
        eyebrow: "Cost & financial aid",
        h: "What it costs, and what it might actually cost you",
        body: [
          "Carnegie Mellon meets the demonstrated financial need of admitted students, but — unlike the Little Three schools — it is <strong>not need-blind</strong>, meaning ability to pay can factor into admission decisions at the margins. Aid packages may include loans as well as grants. Around 39% of first-year students receive need-based aid.",
          "Run the <strong>Net Price Calculator</strong> with your family's real numbers before drawing conclusions from the roughly $90,000 published cost. Note that CMU requires the CSS Profile (not just the FAFSA) for institutional aid.",
        ],
        links: [
          { href: "https://www.cmu.edu/sfs/", t: "Student Financial Aid", d: "Official hub" },
          { href: "https://www.cmu.edu/sfs/financial-aid/estimate/index.html", t: "Net Price Calculator", d: "Estimate your real cost" },
        ],
      },
      {
        id: "life",
        num: "04",
        eyebrow: "Campus life",
        h: "Where you'll live, and what there is to do",
        body: [
          "CMU sits on a compact 140-acre urban campus in Pittsburgh's Oakland neighborhood, next to the University of Pittsburgh and the Carnegie museums. Roughly half of undergraduates live in university housing. Pittsburgh is a real, affordable city, which gives campus life a different texture than a self-contained rural or small-town college.",
        ],
        subhead: "Athletics, traditions, and culture",
        body2: [
          "CMU competes in NCAA Division III (the University Athletic Association), so athletics is present but not the center of gravity — this is not a big-sports school. Its traditions instead include things like <strong>The Fence</strong> (reputedly the world's most-painted object) and the annual Spring Carnival with student-built buggy races.",
          "The culture is widely described as intense and academically driven, strongest for self-directed students who came for a specific field. Social life can take more effort to find than at a small residential college.",
        ],
        links: [
          { href: "https://www.cmu.edu/student-experience/", t: "Student Experience", d: "Housing, clubs, life" },
          { href: "https://athletics.cmu.edu/", t: "CMU Athletics (Tartans)", d: "Varsity and club sports" },
        ],
      },
      {
        id: "visit",
        num: "05",
        eyebrow: "Seeing it for yourself",
        h: "Visiting, virtually or in person",
        body: [
          "CMU runs student-led campus tours, information sessions, and one-on-one admission counseling sessions. If you can't get to Pittsburgh, it offers live virtual tours and an official self-guided 360° virtual tour you can explore online.",
          "Worth knowing: CMU explicitly does <strong>not</strong> consider demonstrated interest, so visiting won't affect your odds — go because it helps you judge fit, not to signal interest.",
        ],
        links: [
          { href: "https://www.cmu.edu/visit/", t: "Visit CMU", d: "Tours and info sessions" },
          { href: "https://admission.cmu.edu/portal/virtual_tours", t: "Virtual Tours", d: "Official 360° tour" },
          { href: "https://www.cmu.edu/admission/", t: "Office of Admission", d: "For prospective students" },
        ],
      },
      {
        id: "apply",
        num: "06",
        eyebrow: "Applying",
        h: "What the application looks like",
        body: [
          "CMU admitted about 11% of applicants to the Class of 2029 overall, but remember that figure hides enormous variation by college. It accepts the Common Application, plus a CMU-specific supplement, and offers binding Early Decision (which carries a modest statistical advantage). Testing requirements depend on the college: the School of Computer Science requires the SAT or ACT, most other colleges are test-flexible (you choose which scores to submit), and the College of Fine Arts is test-optional but requires a portfolio or audition.",
          "Fine Arts applicants face an earlier timeline and portfolio/audition requirements, so check those dates carefully. As at any binding-ED school, only apply ED if CMU is a clear first choice and you've confirmed the cost works.",
        ],
        callout: {
          h: "Before you apply, ask yourself",
          body:
            "Which of the seven colleges is genuinely the right fit — and is it one you'd commit to? Do you want specialized depth over liberal arts breadth? Are you comfortable in an intense, high-workload, urban research-university environment?",
        },
        links: [
          { href: "https://www.cmu.edu/admission/apply", t: "How to Apply", d: "Deadlines & requirements" },
          { href: "https://www.cmu.edu/admission/", t: "Office of Admission", d: "Apply & connect" },
        ],
      },
    ],
  },

  bowdoin: {
    slug: "bowdoin",
    name: "Bowdoin College",
    shortName: "Bowdoin",
    mascot: "Polar Bears",
    town: "Brunswick, Maine",
    setting: "Small town — coastal Maine, half an hour from Portland",
    nearbyFood: {
      mcdonalds: { addr: "154 Pleasant St, Brunswick, ME", miles: "~1.2 mi" },
      dominos: { addr: "208 Maine St, Brunswick, ME", miles: "~0.3 mi" },
    },
    accent: "#0a5c8a",
    accentDeep: "#063f5f",
    founded: 1794,
    tagline: "A coastal-Maine liberal arts college famous for its food and the outdoors.",
    summary:
      "Bowdoin is a residential liberal arts college of roughly 2,000 undergraduates in Brunswick, on the coast of Maine. It pairs a structured liberal arts curriculum with an outdoors-and-place-driven culture, an unusually strong arts and sciences faculty, and dining consistently ranked among the best in the country.",
    stats: [
      { n: "~1,950", l: "Undergraduates" },
      { n: "9:1", l: "Student–faculty ratio" },
      { n: "5", l: "Distribution areas" },
      { n: "~6.8%", l: "Admit rate, Class of '29" },
    ],
    compare: {
      "Undergrad enrollment": "~1,950",
      "Student–faculty ratio": "9:1",
      "Academic structure": "First-year writing seminar + 5 distribution areas",
      "Signature feature": "Coastal-Maine setting, outdoors culture, top-ranked dining",
      "Calendar": "Semester (fall, spring)",
      "Setting": "Small town — coastal Maine",
      "Consortium": "CBB (Colby–Bates–Bowdoin) — athletics & library exchange",
      "Admit rate (Class of '29)": "~6.8%",
      "Testing policy": "Test-optional (since 1969 — the first in the U.S.)",
      "Financial aid": "Meets 100% of need; no-loan packages",
      "Need-blind": "Domestic applicants",
      "Athletics": "NCAA Division III, NESCAC",
    },
    virtualTour: "https://www.bowdoin.edu/admissions/visit/virtual-tour/index.html",
    sections: [
      {
        id: "academics",
        num: "01",
        eyebrow: "Academics",
        h: "A structured liberal arts curriculum",
        body: [
          "Bowdoin is not an open-curriculum school like Amherst or Wesleyan, but its requirements are light. Every student takes one <strong>first-year writing seminar</strong> — a small, writing-intensive class of about 16 students on a focused topic — and at least one course in each of <strong>five distribution areas</strong>: quantitative reasoning; inquiry in the natural sciences; difference, power, and inequity; international perspectives; and the visual and performing arts. Beyond that and your major, you choose freely. The degree is 32 credits.",
          "Students declare a major in the spring of sophomore year, choosing from roughly 40+ programs. For a college this size, several departments punch above their weight — Earth and oceanographic science, neuroscience, government, economics, and digital/computational studies among them — and undergraduate research with faculty is a core part of the experience.",
        ],
        subhead: "What to look at",
        list: [
          "Whether you want a little structure (Bowdoin's distribution model) versus a fully open curriculum (Amherst, Wesleyan) versus tutorials (Williams).",
          "The first-year writing seminars — pick one that interests you, not necessarily your intended major; the small-class start is a real feature.",
          "Bowdoin's coastal-science assets: the Schiller Coastal Studies Center and the Kent Island field station are unusual research resources for an undergraduate college.",
        ],
        links: [
          { href: "https://www.bowdoin.edu/academics/", t: "Academics at Bowdoin", d: "Official overview" },
          { href: "https://www.bowdoin.edu/academics/the-bowdoin-curriculum/", t: "The Bowdoin Curriculum", d: "Requirements & distribution areas" },
          { href: "https://www.bowdoin.edu/academics/the-bowdoin-curriculum/first-year-seminars/", t: "First-Year Writing Seminars", d: "How the first-year start works" },
        ],
      },
      {
        id: "signature",
        num: "02",
        eyebrow: "The signature feature",
        h: "Place, the outdoors, and a culture of community",
        body: [
          "Bowdoin's distinguishing trait is its relationship to <strong>place</strong>. The campus sits in coastal Maine, minutes from the Atlantic and a short drive from mountains, lakes, and rivers — and the college's identity is built around that. The <strong>Bowdoin Outing Club</strong>, one of the oldest in the country, runs well over a hundred trips a year, and pre-orientation outdoor trips are how many students begin college.",
          "Two other things stand out. Bowdoin's <strong>dining</strong> is routinely ranked the best of any U.S. college — not a trivial point when you eat there for four years. And the culture is consistently described as collaborative rather than cutthroat, organized around the college's informal motto, \"the common good.\"",
        ],
        callout: {
          h: "The Polar Bear, and the CBB rivalry",
          body:
            'Bowdoin\'s mascot honors alumnus Robert Peary\'s North Pole expedition. Athletically, Bowdoin competes in the NESCAC and shares the historic <strong>CBB</strong> rivalry and library exchange with Colby and Bates — Maine\'s three elite liberal arts colleges. If you\'re weighing Bowdoin, you\'re often weighing it against those two.',
        },
        links: [
          { href: "https://www.bowdoin.edu/outing-club/", t: "Bowdoin Outing Club", d: "Trips and the outdoors" },
          { href: "https://www.bowdoin.edu/dining/", t: "Bowdoin Dining", d: "The award-winning food" },
        ],
      },
      {
        id: "aid",
        num: "03",
        eyebrow: "Cost & financial aid",
        h: "What it costs, and what it might actually cost you",
        body: [
          "Like its peers, Bowdoin meets 100% of demonstrated financial need and meets it with grants rather than loans — admitted students graduate without need-based debt from the college. Bowdoin is need-blind for domestic applicants. About half of each class receives need-based aid. One distinctive extra: through its Digital Excellence Commitment, the college provides every enrolled student a MacBook Pro, iPad, and Apple Pencil.",
          "As always, the published cost of attendance — approaching $90,000 — is not what most aided families pay. Run the <strong>Net Price Calculator</strong> with your real numbers before drawing any conclusion, and do it before applying Early Decision.",
        ],
        links: [
          { href: "https://www.bowdoin.edu/admissions/financial-aid/", t: "Financial Aid", d: "Official hub" },
          { href: "https://www.bowdoin.edu/admissions/financial-aid/calculators/", t: "Net Price Calculator", d: "Estimate your real cost" },
        ],
      },
      {
        id: "life",
        num: "04",
        eyebrow: "Campus life",
        h: "Where you'll live, and what there is to do",
        body: [
          "Bowdoin is residential, on a roughly 215-acre campus known for its New England architecture and Maine foliage. First-years live in dorms grouped into a college-house system that anchors social life; the college phased out fraternities in 2000. The town of Brunswick is a walkable Maine college town with a working main street, and Portland is about a half-hour away by car, bus, or Amtrak.",
        ],
        subhead: "Athletics, the outdoors, and the arts",
        body2: [
          "Bowdoin competes in NCAA Division III in the NESCAC, with 30+ varsity teams plus strong club and intramural programs and a nationally competitive sailing team — fitting for a coastal school. The Outing Club is central to campus life rather than peripheral.",
          'The college also houses two notable museums — the <a href="https://www.bowdoin.edu/art-museum/">Bowdoin College Museum of Art</a> and the <a href="https://www.bowdoin.edu/arctic-museum/">Peary-MacMillan Arctic Museum</a> — unusual cultural resources for a school this size.',
        ],
        links: [
          { href: "https://www.bowdoin.edu/student-life/", t: "Student Life", d: "Housing, clubs, dining" },
          { href: "https://athletics.bowdoin.edu/", t: "Bowdoin Athletics (Polar Bears)", d: "Varsity and club sports" },
        ],
      },
      {
        id: "visit",
        num: "05",
        eyebrow: "Seeing it for yourself",
        h: "Visiting, virtually or in person",
        body: [
          "A campus visit is the best way to judge fit, and Bowdoin runs information sessions and student-led tours, plus optional evaluative interviews (which Bowdoin recommends). Admitted students are invited to spring yield events — Bowdoin Bearings and the one-day Polar Preview.",
          "If you can't get to Maine, the college's official self-guided virtual tour, linked above, mirrors the on-campus tour and is a good substitute from a distance.",
        ],
        links: [
          { href: "https://www.bowdoin.edu/admissions/visit/", t: "Visit Bowdoin", d: "Tours and info sessions" },
          { href: "https://www.bowdoin.edu/admissions/visit/virtual-tour/index.html", t: "Virtual Tour", d: "Official self-guided tour" },
          { href: "https://www.youtube.com/c/bowdoincollege", t: "Official YouTube channel", d: "More video" },
        ],
      },
      {
        id: "apply",
        num: "06",
        eyebrow: "Applying",
        h: "What the application looks like",
        body: [
          "Bowdoin is highly selective: it admitted about 6.8% of applicants to the Class of 2029, a record low, from a pool of roughly 14,000. It accepts the Common Application and QuestBridge. Bowdoin was the first college in the country to go test-optional, back in 1969, and remains so — about half of recent admitted classes submitted no scores.",
          "Bowdoin offers two binding Early Decision rounds (ED I and ED II), and the ED admit rate (~15%) runs far above Regular Decision (~5%), so ED carries a real statistical advantage — but only use it if Bowdoin is a clear first choice and the Net Price Calculator works for your family. Bowdoin recommends an evaluative interview, so plan for that.",
        ],
        callout: {
          h: "Before you apply, ask yourself",
          body:
            "Does coastal Maine and an outdoors-forward culture appeal to you year-round, including the winters? Do you want some curricular structure rather than a fully open curriculum? Is Early Decision the right move, given how much advantage it carries here?",
        },
        links: [
          { href: "https://www.bowdoin.edu/admissions/", t: "Admissions", d: "Deadlines & requirements" },
          { href: "https://www.bowdoin.edu/admissions/apply/", t: "How to Apply", d: "Application steps" },
        ],
      },
    ],
  },
};

// Order schools appear in lists/compare.
const order = ["williams", "amherst", "wesleyan", "cmu", "bowdoin"];

module.exports = { schools, order };
