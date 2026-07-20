// DATA
const gammes = [
  {
    ton: "C",
    rel: "A",
    alt: 0,
    altType: "",
    notes: ["C", "D", "E", "F", "G", "A", "B"],
  },
  {
    ton: "G",
    rel: "E",
    alt: 1,
    altType: "#",
    notes: ["G", "A", "B", "C", "D", "E", "F#"],
  },
  {
    ton: "D",
    rel: "B",
    alt: 2,
    altType: "#",
    notes: ["D", "E", "F#", "G", "A", "B", "C#"],
  },
  {
    ton: "A",
    rel: "F#",
    alt: 3,
    altType: "#",
    notes: ["A", "B", "C#", "D", "E", "F#", "G#"],
  },
  {
    ton: "E",
    rel: "C#",
    alt: 4,
    altType: "#",
    notes: ["E", "F#", "G#", "A", "B", "C#", "D#"],
  },
  {
    ton: "B",
    rel: "G#",
    alt: 5,
    altType: "#",
    notes: ["B", "C#", "D#", "E", "F#", "G#", "A#"],
  },
  {
    ton: "F#",
    rel: "D#",
    alt: 6,
    altType: "#",
    notes: ["F#", "G#", "A#", "B", "C#", "D#", "E#"],
  },
  {
    ton: "F",
    rel: "D",
    alt: 1,
    altType: "♭",
    notes: ["F", "G", "A", "B♭", "C", "D", "E"],
  },
  {
    ton: "B♭",
    rel: "G",
    alt: 2,
    altType: "♭",
    notes: ["B♭", "C", "D", "E♭", "F", "G", "A"],
  },
  {
    ton: "E♭",
    rel: "C",
    alt: 3,
    altType: "♭",
    notes: ["E♭", "F", "G", "A♭", "B♭", "C", "D"],
  },
  {
    ton: "A♭",
    rel: "F",
    alt: 4,
    altType: "♭",
    notes: ["A♭", "B♭", "C", "D♭", "E♭", "F", "G"],
  },
  {
    ton: "D♭",
    rel: "B♭",
    alt: 5,
    altType: "♭",
    notes: ["D♭", "E♭", "F", "G♭", "A♭", "B♭", "C"],
  },
  {
    ton: "G♭",
    rel: "E♭",
    alt: 6,
    altType: "♭",
    notes: ["G♭", "A♭", "B♭", "C♭", "D♭", "E♭", "F"],
  },
  {
    ton: "Am",
    rel: "C",
    alt: 0,
    altType: "",
    notes: ["A", "B", "C", "D", "E", "F", "G"],
  },
  {
    ton: "Em",
    rel: "G",
    alt: 1,
    altType: "#",
    notes: ["E", "F#", "G", "A", "B", "C", "D"],
  },
  {
    ton: "Bm",
    rel: "D",
    alt: 2,
    altType: "#",
    notes: ["B", "C#", "D", "E", "F#", "G", "A"],
  },
  {
    ton: "F#m",
    rel: "A",
    alt: 3,
    altType: "#",
    notes: ["F#", "G#", "A", "B", "C#", "D", "E"],
  },
  {
    ton: "C#m",
    rel: "E",
    alt: 4,
    altType: "#",
    notes: ["C#", "D#", "E", "F#", "G#", "A", "B"],
  },
  {
    ton: "G#m",
    rel: "B",
    alt: 5,
    altType: "#",
    notes: ["G#", "A#", "B", "C#", "D#", "E", "F#"],
  },
  {
    ton: "D#m",
    rel: "F#",
    alt: 6,
    altType: "#",
    notes: ["D#", "E#", "F#", "G#", "A#", "B", "C#"],
  },
  {
    ton: "Dm",
    rel: "F",
    alt: 1,
    altType: "♭",
    notes: ["D", "E", "F", "G", "A", "B♭", "C"],
  },
  {
    ton: "Gm",
    rel: "B♭",
    alt: 2,
    altType: "♭",
    notes: ["G", "A", "B♭", "C", "D", "E♭", "F"],
  },
  {
    ton: "Cm",
    rel: "E♭",
    alt: 3,
    altType: "♭",
    notes: ["C", "D", "E♭", "F", "G", "A♭", "B♭"],
  },
  {
    ton: "Fm",
    rel: "A♭",
    alt: 4,
    altType: "♭",
    notes: ["F", "G", "A♭", "B♭", "C", "D♭", "E♭"],
  },
  {
    ton: "B♭m",
    rel: "D♭",
    alt: 5,
    altType: "♭",
    notes: ["B♭", "C", "D♭", "E♭", "F", "G♭", "A♭"],
  },
  {
    ton: "E♭m",
    rel: "G♭",
    alt: 6,
    altType: "♭",
    notes: ["E♭", "F", "G♭", "A♭", "B♭", "C♭", "D♭"],
  },
];

// STATE
let current;
let selectedNotes = [];
let selectedRel = null;
let selectedAlt = null;
let selectedAltType = null;

let correct = 0;
let wrong = 0;

// UI INIT
function nextQuestion() {
  document.getElementById("result").innerText = "";

  selectedNotes = [];
  selectedRel = null;
  selectedAlt = null;
  selectedAltType = null;

  current = gammes[Math.floor(Math.random() * gammes.length)];

  document.getElementById("question").innerText = current.ton;

  console.log("QUESTION CHOISIE :", current);
  document.getElementById("btn-nextQuestion").style.display = "none";
  document.getElementById("btn-validate").style.display = "grid";
  renderOptions();
}

function renderOptions() {
  // relatives
  const relDiv = document.getElementById("relative");
  relDiv.innerHTML = "";

  const notesGroups = [
    ["A♭", "B♭", "C♭", "D♭", "E♭", "F♭", "G♭"],
    ["A", "B", "C", "D", "E", "F", "G"],
    ["A#", "B#", "C#", "D#", "E#", "F#", "G#"],
  ];

  notesGroups.forEach((group) => {
    const row = document.createElement("div");
    row.classList.add("notes-grid");

    group.forEach((note) => {
      const btn = document.createElement("button");
      btn.innerText = note;

      btn.onclick = () => {
        // ✅ on stocke la réponse
        selectedRel = note;

        console.log("Relative sélectionnée :", selectedRel);

        // ✅ reset visuel (une seule sélection)
        [...relDiv.querySelectorAll("button")].forEach((b) =>
          b.classList.remove("selected"),
        );

        btn.classList.add("selected");
      };

      row.appendChild(btn);
    });

    relDiv.appendChild(row);
  });

  // type altération
  const altTypeDiv = document.getElementById("alterationType");
  altTypeDiv.innerHTML = "";

  ["♭", "#"].forEach((type) => {
    const btn = document.createElement("button");
    btn.innerText = type;

    btn.onclick = () => {
      selectedAltType = type;

      // highlight
      [...altTypeDiv.children].forEach((b) => b.classList.remove("selected"));
      btn.classList.add("selected");
    };

    altTypeDiv.appendChild(btn);
  });

  // altérations
  const altDiv = document.getElementById("alterations");
  altDiv.innerHTML = "";
  for (let i = 0; i <= 6; i++) {
    let btn = document.createElement("button");
    btn.innerText = i;
    btn.onclick = () => {
      selectedAlt = i;
      highlight(altDiv, btn);
    };
    altDiv.appendChild(btn);
  }

  // notes
  const notesDiv = document.getElementById("notes");
  notesDiv.innerHTML = "";

  notesGroups.forEach((group) => {
    const row = document.createElement("div");
    row.classList.add("notes-grid");

    group.forEach((n) => {
      let btn = document.createElement("button");
      btn.innerText = n;

      btn.onclick = () => {
        if (selectedNotes.includes(n)) {
          selectedNotes = selectedNotes.filter((x) => x !== n);
          btn.classList.remove("selected");
        } else {
          selectedNotes.push(n);
          btn.classList.add("selected");
        }
      };

      row.appendChild(btn);
    });

    notesDiv.appendChild(row);
  });
}

function highlight(parent, selectedBtn) {
  [...parent.children].forEach((btn) => btn.classList.remove("selected"));
  selectedBtn.classList.add("selected");
}

// VALIDATION
function validate() {
  let ok = true;
  selectedNotes = [...new Set(selectedNotes)];

  // LOG des réponses utilisateur
  console.log("=== RÉPONSES UTILISATEUR ===");
  console.log("Relative :", selectedRel);
  console.log("Altérations (nombre) :", selectedAlt);
  console.log("Type altération :", selectedAltType);
  console.log("Notes :", selectedNotes);

  // LOG des bonnes réponses
  console.log("=== BONNES RÉPONSES ===");
  console.log("Relative :", current.rel);
  console.log("Altérations (nombre) :", current.alt);
  console.log("Type altération :", current.altType);
  console.log("Notes :", current.notes);

  // Vérifications
  if (selectedRel !== current.rel) ok = false;

  if (selectedAlt !== current.alt) ok = false;

  // type uniquement si alt > 0
  if (current.alt > 0) {
    if (selectedAltType !== current.altType) ok = false;
  }

  // comparaison des notes (triées)
  if (!sameNotes(selectedNotes, current.notes)) {
    ok = false;
  }

  // Résultat
  if (ok) {
    correct++;
    document.getElementById("result").innerText = "Correct !";
    document.getElementById("result").className = "correct";
    document.getElementById("btn-nextQuestion").style.display = "grid";
    document.getElementById("btn-validate").style.display = "none";
  } else {
    wrong++;
    document.getElementById("result").innerText = "Faux !";
    document.getElementById("result").className = "wrong";
  }

  document.getElementById("correct").innerText = correct;
  document.getElementById("wrong").innerText = wrong;
}

function sameNotes(a, b) {
  if (a.length !== b.length) return false;

  const sortedA = [...a].sort();
  const sortedB = [...b].sort();

  return sortedA.every((note, i) => note === sortedB[i]);
}

// START
nextQuestion();
