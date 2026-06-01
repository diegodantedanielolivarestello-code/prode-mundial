const WEB_APP_URL = "https://script.google.com/macros/s/AKfycbz0HwGTvqjTEDpzOLnwAMGwVNK2q8KFjK29EgG_K2lvL_7QvSdYCxPlHp10PBBlf-eE/exec";

// FIXTURE OFICIAL CON LAS RUTAS DE TU CARPETA BANDERAS
const FIXTURE_COMPLETO = {
    A: [
        { id: "A1", L: "México", LE: "banderas/mx.png", V: "Sudáfrica", VE: "banderas/za.png", fecha: "11 JUN - CIUDAD DE MÉXICO - 16:00" },
        { id: "A2", L: "Corea del Sur", LE: "banderas/kr.png", V: "Rep. Checa", VE: "banderas/cz.png", fecha: "11 JUN - GUADALAJARA - 23:00" },
        { id: "A3", L: "Rep. Checa", LE: "banderas/cz.png", V: "Sudáfrica", VE: "banderas/za.png", fecha: "18 JUN - ATLANTA - 13:00" },
        { id: "A4", L: "México", LE: "banderas/mx.png", V: "Corea del Sur", VE: "banderas/kr.png", fecha: "18 JUN - GUADALAJARA - 22:00" },
        { id: "A5", L: "Rep. Checa", LE: "banderas/cz.png", V: "México", VE: "banderas/mx.png", fecha: "24 JUN - CIUDAD DE MÉXICO - 22:00" },
        { id: "A6", L: "Sudáfrica", LE: "banderas/za.png", V: "Corea del Sur", VE: "banderas/kr.png", fecha: "24 JUN - MONTERREY - 22:00" }
    ],
    B: [
        { id: "B1", L: "Canadá", LE: "banderas/ca.png", V: "Bosnia", VE: "banderas/ba.png", fecha: "12 JUN - TORONTO - 16:00" },
        { id: "B2", L: "Qatar", LE: "banderas/qa.png", V: "Suiza", VE: "banderas/ch.png", fecha: "13 JUN - SAN FRANCISCO - 16:30" },
        { id: "B3", L: "Suiza", LE: "banderas/ch.png", V: "Bosnia", VE: "banderas/ba.png", fecha: "18 JUN - LOS ÁNGELES - 15:00" },
        { id: "B4", L: "Canadá", LE: "banderas/ca.png", V: "Qatar", VE: "banderas/qa.png", fecha: "18 JUN - VANCOUVER - 19:30" },
        { id: "B5", L: "Suiza", LE: "banderas/ch.png", V: "Canadá", LE: "banderas/ca.png", fecha: "24 JUN - VANCOUVER - 16:30" },
        { id: "B6", L: "Bosnia", LE: "banderas/ba.png", V: "Qatar", VE: "banderas/qa.png", fecha: "24 JUN - SEATTLE - 16:30" }
    ],
    C: [
        { id: "C1", L: "Brasil", LE: "banderas/br.png", V: "Marruecos", VE: "banderas/ma.png", fecha: "13 JUN - BOSTON - 19:00" },
        { id: "C2", L: "Haití", LE: "banderas/ht.png", V: "Escocia", VE: "banderas/gb-sct.png", fecha: "13 JUN - NEW YORK / NEW JERSEY - 22:00" },
        { id: "C3", L: "Brasil", LE: "banderas/br.png", V: "Haití", VE: "banderas/ht.png", fecha: "19 JUN - PHILADELPHIA - 19:00" },
        { id: "C4", L: "Escocia", LE: "banderas/gb-sct.png", V: "Marruecos", VE: "banderas/ma.png", fecha: "19 JUN - BOSTON - 22:00" },
        { id: "C5", L: "Escocia", LE: "banderas/gb-sct.png", V: "Brasil", LE: "banderas/br.png", fecha: "24 JUN - MIAMI - 19:00" },
        { id: "C6", L: "Marruecos", LE: "banderas/ma.png", V: "Haití", VE: "banderas/ht.png", fecha: "24 JUN - ATLANTA - 19:00" }
    ],
    D: [
        { id: "D1", L: "EE. UU.", LE: "banderas/us.png", V: "Turquía", VE: "banderas/tr.png", fecha: "12 JUN - LOS ÁNGELES - 22:00" },
        { id: "D2", L: "Australia", LE: "banderas/au.png", V: "Paraguay", VE: "banderas/py.png", fecha: "13 JUN - VANCOUVER - 01:00" },
        { id: "D3", L: "EE. UU.", LE: "banderas/us.png", V: "Australia", VE: "banderas/au.png", fecha: "19 JUN - SEATTLE - 01:00" },
        { id: "D4", L: "Turquía", LE: "banderas/tr.png", V: "Paraguay", VE: "banderas/py.png", fecha: "19 JUN - SAN FRANCISCO - 16:00" },
        { id: "D5", L: "Turquía", LE: "banderas/tr.png", V: "EE. UU.", LE: "banderas/us.png", fecha: "25 JUN - LOS ÁNGELES - 23:00" },
        { id: "D6", L: "Paraguay", LE: "banderas/py.png", V: "Australia", VE: "banderas/au.png", fecha: "25 JUN - SAN FRANCISCO - 23:00" }
    ],
    E: [
        { id: "E1", L: "Alemania", LE: "banderas/de.png", V: "Curazao", VE: "banderas/cw.png", fecha: "14 JUN - PHILADELPHIA - 14:00" },
        { id: "E2", L: "C. Marfil", LE: "banderas/ci.png", V: "Ecuador", VE: "banderas/ec.png", fecha: "14 JUN - HOUSTON - 20:00" },
        { id: "E3", L: "Alemania", LE: "banderas/de.png", V: "C. Marfil", VE: "banderas/ci.png", fecha: "20 JUN - TORONTO - 17:00" },
        { id: "E4", L: "Curazao", LE: "banderas/cw.png", V: "Ecuador", VE: "banderas/ec.png", fecha: "20 JUN - KANSAS CITY - 21:00" },
        { id: "E5", L: "Ecuador", LE: "banderas/ec.png", V: "Alemania", LE: "banderas/de.png", fecha: "25 JUN - PHILADELPHIA - 17:00" },
        { id: "E6", L: "Curazao", LE: "banderas/cw.png", V: "C. Marfil", VE: "banderas/ci.png", fecha: "25 JUN - NEW YORK / NEW JERSEY - 17:00" }
    ],
    F: [
        { id: "F1", L: "P. Bajos", LE: "banderas/nl.png", V: "Japón", VE: "banderas/jp.png", fecha: "14 JUN - DALLAS - 17:00" },
        { id: "F2", L: "Suecia", LE: "banderas/se.png", V: "Túnez", VE: "banderas/tn.png", fecha: "14 JUN - MONTERREY - 23:00" },
        { id: "F3", L: "Japón", LE: "banderas/jp.png", V: "Túnez", VE: "banderas/tn.png", fecha: "20 JUN - MONTERREY - 01:00" },
        { id: "F4", L: "P. Bajos", LE: "banderas/nl.png", V: "Suecia", LE: "banderas/se.png", fecha: "20 JUN - HOUSTON - 14:00" },
        { id: "F5", L: "Túnez", LE: "banderas/tn.png", V: "P. Bajos", LE: "banderas/nl.png", fecha: "25 JUN - DALLAS - 20:30" },
        { id: "F6", L: "Japón", LE: "banderas/jp.png", V: "Suecia", LE: "banderas/se.png", fecha: "25 JUN - KANSAS CITY - 20:30" }
    ],
    G: [
        { id: "G1", L: "Bélgica", LE: "banderas/be.png", V: "Egipto", VE: "banderas/eg.png", fecha: "15 JUN - LOS ÁNGELES - 18:00" },
        { id: "G2", L: "Irán", LE: "banderas/ir.png", V: "N. Zelanda", VE: "banderas/nz.png", fecha: "15 JUN - SEATTLE - 23:00" },
        { id: "G3", L: "Bélgica", LE: "banderas/be.png", V: "Irán", LE: "banderas/ir.png", fecha: "21 JUN - LOS ÁNGELES - 16:00" },
        { id: "G4", L: "Egipto", LE: "banderas/eg.png", V: "N. Zelanda", LE: "banderas/nz.png", fecha: "21 JUN - VANCOUVER - 21:00" },
        { id: "G5", L: "Egipto", LE: "banderas/eg.png", V: "Irán", LE: "banderas/ir.png", fecha: "26 JUN - VANCOUVER - 13:00" },
        { id: "G6", L: "N. Zelanda", LE: "banderas/nz.png", V: "Bélgica", VE: "banderas/be.png", fecha: "26 JUN - SEATTLE - 21:30" }
    ],
    H: [
        { id: "H1", L: "España", LE: "banderas/es.png", V: "C. Verde", VE: "banderas/cv.png", fecha: "15 JUN - MIAMI - 13:00" },
        { id: "H2", L: "Arabia S.", LE: "banderas/sa.png", V: "Uruguay", VE: "banderas/uy.png", fecha: "15 JUN - ATLANTA - 19:00" },
        { id: "H3", L: "España", LE: "banderas/es.png", V: "Arabia S.", LE: "banderas/sa.png", fecha: "21 JUN - MIAMI - 13:00" },
        { id: "H4", L: "C. Verde", LE: "banderas/cv.png", V: "Uruguay", VE: "banderas/uy.png", fecha: "21 JUN - ATLANTA - 19:00" },
        { id: "H5", L: "Uruguay", LE: "banderas/uy.png", V: "España", LE: "banderas/es.png", fecha: "26 JUN - HOUSTON - 21:00" },
        { id: "H6", L: "C. Verde", LE: "banderas/cv.png", V: "Arabia S.", LE: "banderas/sa.png", fecha: "26 JUN - GUADALAJARA - 21:30" }
    ],
    I: [
        { id: "I1", L: "Francia", LE: "banderas/fr.png", V: "Senegal", VE: "banderas/sn.png", fecha: "16 JUN - NEW YORK / NEW JERSEY - 16:30" },
        { id: "I2", L: "Irak", LE: "banderas/iq.png", V: "Noruega", VE: "banderas/no.png", fecha: "16 JUN - BOSTON - 19:00" },
        { id: "I3", L: "Francia", LE: "banderas/fr.png", V: "Irak", LE: "banderas/iq.png", fecha: "22 JUN - NEW YORK / NEW JERSEY - 18:30" },
        { id: "I4", L: "Noruega", LE: "banderas/no.png", V: "Senegal", LE: "banderas/sn.png", fecha: "22 JUN - PHILADELPHIA - 21:30" },
        { id: "I5", L: "Noruega", LE: "banderas/no.png", V: "Francia", LE: "banderas/fr.png", fecha: "26 JUN - BOSTON - 16:00" },
        { i6: "I6", L: "Senegal", LE: "banderas/sn.png", V: "Irak", LE: "banderas/iq.png", fecha: "26 JUN - TORONTO - 16:30" }
    ],
    J: [
        { id: "J1", L: "Austria", LE: "banderas/at.png", V: "Jordania", VE: "banderas/jo.png", fecha: "16 JUN - SAN FRANCISCO - 01:00" },
        { id: "J2", L: "Argentina", LE: "banderas/ar.png", V: "Argelia", VE: "banderas/dz.png", fecha: "16 JUN - KANSAS CITY - 22:00" },
        { id: "J3", L: "Jordania", LE: "banderas/jo.png", V: "Argelia", VE: "banderas/dz.png", fecha: "22 JUN - SAN FRANCISCO - 00:00" },
        { id: "J4", L: "Argentina", LE: "banderas/ar.png", V: "Austria", LE: "banderas/at.png", fecha: "22 JUN - DALLAS - 14:00" },
        { id: "J5", L: "Jordania", LE: "banderas/jo.png", V: "Argentina", LE: "banderas/ar.png", fecha: "27 JUN - DALLAS - 23:00" },
        { id: "J6", L: "Argelia", LE: "banderas/dz.png", V: "Austria", LE: "banderas/at.png", fecha: "27 JUN - KANSAS CITY - 23:00" }
    ],
    K: [
        { id: "K1", L: "Portugal", LE: "banderas/pt.png", V: "RD Congo", VE: "banderas/cd.png", fecha: "17 JUN - HOUSTON - 14:00" },
        { id: "K2", L: "Uzbekistán", LE: "banderas/uz.png", V: "Colombia", VE: "banderas/co.png", fecha: "17 JUN - CIUDAD DE MÉXICO - 23:00" },
        { id: "K3", L: "Portugal", LE: "banderas/pt.png", V: "Uzbekistán", LE: "banderas/uz.png", fecha: "23 JUN - HOUSTON - 14:00" },
        { id: "K4", L: "RD Congo", LE: "banderas/cd.png", V: "Colombia", VE: "banderas/co.png", fecha: "23 JUN - GUADALAJARA - 23:30" },
        { id: "K5", L: "Colombia", LE: "banderas/co.png", V: "Portugal", LE: "banderas/pt.png", fecha: "27 JUN - MIAMI - 20:30" },
        { id: "K6", L: "RD Congo", LE: "banderas/cd.png", V: "Uzbekistán", VE: "banderas/uz.png", fecha: "27 JUN - ATLANTA - 20:30" }
    ],
    L: [
        { id: "L1", L: "Inglaterra", LE: "banderas/gb-eng.png", V: "Croacia", VE: "banderas/hr.png", fecha: "17 JUN - TORONTO - 17:00" },
        { id: "L2", L: "Ghana", LE: "banderas/gh.png", V: "Panamá", VE: "banderas/pa.png", fecha: "17 JUN - DALLAS - 20:00" },
        { id: "L3", L: "Inglaterra", LE: "banderas/gb-eng.png", V: "Ghana", LE: "banderas/gh.png", fecha: "23 JUN - BOSTON - 17:00" },
        { id: "L4", L: "Croacia", LE: "banderas/hr.png", V: "Panamá", LE: "banderas/pa.png", fecha: "23 JUN - TORONTO - 20:30" },
        { id: "L5", L: "Panamá", LE: "banderas/pa.png", V: "Inglaterra", LE: "banderas/gb-eng.png", fecha: "27 JUN - NEW YORK / NEW JERSEY - 18:00" },
        { id: "L6", L: "Croacia", LE: "banderas/hr.png", V: "Ghana", LE: "banderas/gh.png", fecha: "27 JUN - PHILADELPHIA - 18:00" }
    ]
};

let currentUser = localStorage.getItem("prode_user") || null; 
let activeGroup = null;

let progresoProde = JSON.parse(localStorage.getItem('progresoProde')) || {
    A: false, B: false, C: false, D: false, E: false, F: false, G: false, H: false, I: false, J: false, K: false, L: false
};

document.addEventListener("DOMContentLoaded", () => {
    initApp();
    setupTermsModal();
    inyectarBotónEnvioFinal();
});

function initApp() {
    try {
        renderGroupsGrid();
        if (currentUser && currentUser !== "null" && currentUser !== "undefined") {
            showView("view-hub");
            setupUserBar();
            actualizarIndicadoresVisuales();
        } else {
            currentUser = null;
            localStorage.removeItem("prode_user");
            setupUserBar();
            showView("view-login");
        }
    } catch (e) {
        console.error("Fallo controlado en el arranque:", e);
        showView("view-login");
    }
}

function showView(viewId) {
    document.querySelectorAll(".view").forEach(v => { v.style.display = "none"; });
    const target = document.getElementById(viewId);
    if (target) target.style.display = "flex";
}

function switchAuthTab(type) {
    document.getElementById("tab-login-btn").classList.toggle("active", type === 'login');
    document.getElementById("tab-register-btn").classList.toggle("active", type === 'register');
    document.getElementById("form-login").classList.toggle("hidden", type !== 'login');
    document.getElementById("form-register").classList.toggle("hidden", type !== 'register');
}

function showToast(title, desc) {
    const toast = document.getElementById("push-notification");
    if (!toast) return;
    document.getElementById("push-title").innerText = title;
    document.getElementById("push-desc").innerText = desc;
    toast.classList.remove("hidden");
    setTimeout(() => { toast.classList.add("hidden"); }, 4000);
}

function setupUserBar() {
    const bar = document.getElementById("user-bar");
    if (currentUser && currentUser !== "null") {
        bar.classList.remove("hidden");
        document.getElementById("welcome-msg").innerText = `👤 Usuario: ${currentUser.toUpperCase()}`;
    } else {
        bar.classList.add("hidden");
    }
}

function handleLogin(e) {
    e.preventDefault();
    const user = document.getElementById("login-user").value.trim();
    const pass = document.getElementById("login-pass").value;

    showToast("Conectando", "Validando credenciales...");

    fetch(`${WEB_APP_URL}?action=login&user=${encodeURIComponent(user)}&pass=${encodeURIComponent(pass)}`, {
        method: "GET",
        mode: "cors"
    })
    .then(res => res.json())
    .then(data => {
        if (data.status === "success") {
            const nombreReal = data.nombreReal || user;
            currentUser = nombreReal;
            localStorage.setItem("prode_user", nombreReal);
            setupUserBar();
            showView("view-hub");
            actualizarIndicadoresVisuales();
            showToast("Éxito", `Bienvenido, ${nombreReal.toUpperCase()}`);
        } else {
            showToast("Error", data.message || "Credenciales incorrectas");
        }
    })
    .catch(err => {
        console.error(err);
        showToast("Error de Conexión", "Problema al enlazar el servidor.");
    });
}

function handleRegister(e) {
    e.preventDefault();
    const dni = document.getElementById("reg-dni").value.trim();
    const user = document.getElementById("reg-user").value.trim();
    const email = document.getElementById("reg-email").value.trim();
    const pass = document.getElementById("reg-pass").value;

    if (pass.length < 6) {
        showToast("Seguridad", "Clave mínimo de 6 dígitos.");
        return;
    }

    showToast("Registrando", "Enviando datos a la base...");

    const urlConParametros = `${WEB_APP_URL}?action=register&dni=${encodeURIComponent(dni)}&user=${encodeURIComponent(user)}&email=${encodeURIComponent(email)}&pass=${encodeURIComponent(pass)}`;

    fetch(urlConParametros, {
        method: "GET",
        mode: "cors"
    })
    .then(res => {
        if (!res.ok) throw new Error("Respuesta inválida");
        return res.json();
    })
    .then(data => {
        if (data.status === "success") {
            currentUser = user;
            localStorage.setItem("prode_user", user);
            setupUserBar();
            showView("view-hub");
            actualizarIndicadoresVisuales();
            showToast("¡Registrado!", "Cuenta configurada con éxito.");
        } else {
            showToast("Fallo", data.message || "El DNI o usuario ya existe.");
        }
    })
    .catch(err => {
        console.error("Error detectado en fetch de registro:", err);
        showToast("Error", "Problema al enlazar el servidor.");
    });
}

function logout() {
    currentUser = null;
    localStorage.removeItem("prode_user");
    localStorage.removeItem("progresoProde");
    Object.keys(FIXTURE_COMPLETO).forEach(g => localStorage.removeItem(`prode_grupo_${g}`));
    progresoProde = { A: false, B: false, C: false, D: false, E: false, F: false, G: false, H: false, I: false, J: false, K: false, L: false };
    setupUserBar();
    document.getElementById("form-login").reset();
    document.getElementById("form-register").reset();
    showView("view-login");
    showToast("Sesión Cerrada", "Saliste con éxito.");
}

function togglePolicies() {
    const accepted = document.getElementById("accept-policies").checked;
    const content = document.getElementById("hub-grupos-content");
    const msg = document.getElementById("lock-msg");
    if (accepted) {
        content.classList.remove("overlay-locked");
        msg.classList.add("hidden");
    } else {
        content.classList.add("overlay-locked");
        msg.classList.remove("hidden");
    }
}

// SWITCH DE TABS EN EL HUB PRINCIPAL
function switchHubTab(tab) {
    document.getElementById("btn-nav-grupos").classList.toggle("active", tab === 'grupos');
    document.getElementById("btn-nav-ranking").classList.toggle("active", tab === 'ranking');
    
    if (tab === 'grupos') {
        document.getElementById("hub-grupos-content").classList.remove("hidden");
        document.getElementById("hub-ranking-content").classList.add("hidden");
        actualizarIndicadoresVisuales();
    } else {
        document.getElementById("hub-grupos-content").classList.add("hidden");
        document.getElementById("hub-ranking-content").classList.remove("hidden");
        loadRanking();
    }
}

function renderGroupsGrid() {
    const grid = document.getElementById("groups-grid");
    if (!grid) return;
    grid.innerHTML = "";
    Object.keys(FIXTURE_COMPLETO).forEach(grupo => {
        const btn = document.createElement("button");
        btn.className = "group-card-btn";
        btn.id = `btn-grupo-${grupo}`; 
        btn.innerText = `Grupo ${grupo}`;
        btn.onclick = () => openGroup(grupo);
        grid.appendChild(btn);
    });
}

function actualizarIndicadoresVisuales() {
    Object.keys(FIXTURE_COMPLETO).forEach(grupo => {
        const btn = document.getElementById(`btn-grupo-${grupo}`);
        if (btn) {
            if (progresoProde[grupo]) {
                btn.style.background = "linear-gradient(135deg, #115e59 0%, #064e3b 100%)";
                btn.style.borderColor = "#10b981";
                btn.innerText = `Grupo ${grupo} ✓`;
            } else {
                btn.style.background = ""; 
                btn.style.borderColor = "";
                btn.innerText = `Grupo ${grupo}`;
            }
        }
    });
}

function openGroup(grupo) {
    activeGroup = grupo;
    document.getElementById("current-group-title").innerText = `Fixture Oficial - Grupo ${grupo}`;
    
    const localData = localStorage.getItem(`prode_grupo_${grupo}`);
    if (localData) {
        renderMatches(grupo, JSON.parse(localData));
        showView("view-group-detail");
    } else {
        showToast("Buscando", "Sincronizando con base central...");
        fetch(`${WEB_APP_URL}?action=getPredictions&user=${encodeURIComponent(currentUser)}&group=${grupo}`, {
            method: "GET",
            mode: "cors"
        })
        .then(res => res.json())
        .then(savedPredictions => {
            renderMatches(grupo, savedPredictions || {});
            showView("view-group-detail");
        })
        .catch(() => {
            renderMatches(grupo, {});
            showView("view-group-detail");
        });
    }
}

function renderMatches(grupo, savedPredictions) {
    const container = document.getElementById("matches-container");
    container.innerHTML = "";
    FIXTURE_COMPLETO[grupo].forEach(m => {
        const pred = savedPredictions[m.id] || { L: "", V: "" };
        const card = document.createElement("div");
        card.className = "match-card";
        card.innerHTML = `
            <div class="match-info">📅 ${m.fecha}</div>
            <div class="match-teams-row">
                <div class="team-block team-local">
                    <span class="team-name">${m.L}</span>
                    <img src="${m.LE}" class="flag-icon" alt="${m.L}" onerror="this.src='banderas/default.png'">
                </div>
                <div class="score-inputs">
                    <input type="number" min="0" class="input-score" data-match="${m.id}" data-team="L" value="${pred.L}">
                    <span class="vs-label">x</span>
                    <input type="number" min="0" class="input-score" data-match="${m.id}" data-team="V" value="${pred.V}">
                </div>
                <div class="team-block team-visitante">
                    <img src="${m.VE}" class="flag-icon" alt="${m.V}" onerror="this.src='banderas/default.png'">
                    <span class="team-name">${m.V}</span>
                </div>
            </div>
        `;
        container.appendChild(card);
    });
}

function goBackToHub() {
    showView("view-hub");
    activeGroup = null;
    actualizarIndicadoresVisuales();
}

function submitPredictions(e) {
    e.preventDefault();
    const inputs = document.querySelectorAll("#matches-container .input-score");
    const predictions = {};
    let incompleto = false;

    inputs.forEach(input => {
        const matchId = input.getAttribute("data-match");
        const team = input.getAttribute("data-team");
        const val = input.value;

        if (val === "") incompleto = true;

        if (!predictions[matchId]) predictions[matchId] = { L: "", V: "" };
        predictions[matchId][team] = val;
    });

    if (incompleto) {
        showToast("Atención", "Debes completar los goles de todos los partidos.");
        return;
    }

    localStorage.setItem(`prode_grupo_${activeGroup}`, JSON.stringify(predictions));
    progresoProde[activeGroup] = true;
    localStorage.setItem('progresoProde', JSON.stringify(progresoProde));

    showToast("Resguardo", `Grupo ${activeGroup} guardado en el teléfono.`);
    setTimeout(() => { goBackToHub(); }, 1200);
}

function inyectarBotónEnvioFinal() {
    const hubContent = document.getElementById("hub-grupos-content");
    if (!hubContent) return;
    if (document.getElementById("btn-enviar-todo-el-prode")) return;

    const btnFinal = document.createElement("button");
    btnFinal.id = "btn-enviar-todo-el-prode";
    btnFinal.innerText = "🏆 CONFIRMAR Y ENVIAR PRODE COMPLETO";
    
    btnFinal.style.width = "90%";
    btnFinal.style.margin = "25px auto 10px auto";
    btnFinal.style.padding = "16px";
    btnFinal.style.background = "linear-gradient(135deg, #ffd700 0%, #b8860b 100%)";
    btnFinal.style.color = "#0b2240";
    btnFinal.style.border = "none";
    btnFinal.style.borderRadius = "12px";
    btnFinal.style.fontWeight = "bold";
    btnFinal.style.fontSize = "1.1rem";
    btnFinal.style.cursor = "pointer";
    btnFinal.style.boxShadow = "0 4px 15px rgba(212, 175, 55, 0.3)";
    btnFinal.style.display = "block";

    btnFinal.onclick = () => enviarProdeCompletoA_Google();
    hubContent.parentNode.appendChild(btnFinal); 
}

function enviarProdeCompletoA_Google() {
    const grupos = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L'];
    let paqueteGlobal = {};
    let faltan = [];

    grupos.forEach(g => {
        let datos = localStorage.getItem(`prode_grupo_${g}`);
        if (!datos) {
            faltan.push(g);
        } else {
            paqueteGlobal[`Grupo_${g}`] = JSON.parse(datos);
        }
    });

    if (faltan.length > 0) {
        alert("⚠️ Falta rellenar o guardar los siguientes grupos: " + faltan.join(", "));
        return;
    }

    showToast("Sincronizando", "Enviando prode a Google Sheets...");

    // Enviar los datos por POST cruzando el parámetro de acción e usuario por URL
    const url = `${WEB_APP_URL}?action=saveFullProde&user=${encodeURIComponent(currentUser)}`;
    
    fetch(url, {
        method: "POST",
        mode: "cors",
        body: JSON.stringify(paqueteGlobal)
      })
    .then(res => res.json())
    .then(data => {
        if(data.status === "success") {
            alert("✅ ¡Excelente! Tu Prode completo fue sincronizado y el ticket oficial fue despachado a tu email.");
        } else {
            alert("Error del Servidor: " + data.message);
        }
    })
    .catch(err => {
        console.error("Error crítico de red:", err);
        alert("Sincronización enviada. Revisa tu hoja de cálculo para confirmar.");
    });
}

function loadRanking() {
    const tbody = document.getElementById("ranking-tbody");
    if (!tbody) return;
    tbody.innerHTML = "<tr><td colspan='3' style='text-align:center;'>Actualizando posiciones en vivo...</td></tr>";

    fetch(`${WEB_APP_URL}?action=getRanking`, { method: "GET", mode: "cors" })
        .then(res => res.json())
        .then(data => {
            tbody.innerHTML = "";
            if (!data || data.length === 0) {
                tbody.innerHTML = "<tr><td colspan='3' style='text-align:center;'>No hay registros aún.</td></tr>";
                return;
            }
            data.sort((a, b) => b.points - a.points);
            data.forEach((row, index) => {
                const tr = document.createElement("tr");
                if (index === 0) tr.className = "top-leader";
                tr.innerHTML = `
                    <td><strong>#${index + 1}</strong></td>
                    <td>👤 ${row.user.toUpperCase()}</td>
                    <td><span class="badge-points">${row.points} Pts</span></td>
                `;
                tbody.appendChild(tr);
            });
        })
        .catch(err => {
            console.error(err);
            tbody.innerHTML = "<tr><td colspan='3' style='text-align:center; color:#e53e3e;'>Error de sincronización con el ranking.</td></tr>";
        });
}

function setupTermsModal() {
    const btnVer = document.getElementById("btn-ver-terminos");
    const btnCerrar = document.getElementById("btn-cerrar-terminos");
    const modal = document.getElementById("modal-terminos");

    if (btnVer && modal && btnCerrar) {
        btnVer.addEventListener("click", (e) => {
            e.preventDefault();
            modal.style.display = "flex";
        });
        btnCerrar.addEventListener("click", () => { modal.style.display = "none"; });
        modal.addEventListener("click", (e) => { if (e.target === modal) modal.style.display = "none"; });
    }
}