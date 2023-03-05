const iscrtajVjezbu = (vjezbe_kontejner, podaci_o_vjezbama) => {
    if(!vjezbe_kontejner || !podaci_o_vjezbama) return;
    if( !(vjezbe_kontejner instanceof HTMLElement)  ) return;
    if( !podaci_o_vjezbama.hasOwnProperty('brojVjezbi') || !podaci_o_vjezbama.hasOwnProperty('brojZadatakaPoVjezbi') ) return;
    if( !Number.isInteger(podaci_o_vjezbama.brojVjezbi) || !Array.isArray(podaci_o_vjezbama.brojZadatakaPoVjezbi) ) return;
    for(let i = 0; i < podaci_o_vjezbama.brojZadatakaPoVjezbi.length; i++) {
        if( !Number.isInteger(podaci_o_vjezbama.brojZadatakaPoVjezbi[i]) ) return;
    }
    const broj_vjezbi = podaci_o_vjezbama.brojVjezbi;
    const broj_zadataka_po_vjezbi = podaci_o_vjezbama.brojZadatakaPoVjezbi;
    if( broj_vjezbi !== broj_zadataka_po_vjezbi.length ) return;
    for(let i = 1; i <= broj_vjezbi; i++) {
        const vjezba_kontejner_div = document.createElement("div");
        vjezba_kontejner_div.classList.add("vjezbaKontejner")
        const vjezba_div = document.createElement("div");
        vjezba_div.classList.add("vjezba");
        vjezba_div.innerHTML = "VJEŽBA " + i;
        const zadaci_div = document.createElement("div");
        zadaci_div.classList.add("zadaciKontejner");
        vjezba_div.onclick = () => iscrtajZadatke(zadaci_div, broj_zadataka_po_vjezbi[i-1]);
        vjezba_kontejner_div.appendChild(vjezba_div);
        vjezba_kontejner_div.appendChild(zadaci_div);
        vjezbe_kontejner.appendChild(vjezba_kontejner_div);
    }
}

const iscrtajZadatke = (zadaci_kontejner, broj_zadataka) => {
    if(!zadaci_kontejner) return;
    if( !(zadaci_kontejner instanceof  HTMLElement) || !Number.isInteger(broj_zadataka) ) return;
    zadaci_kontejner.innerHTML = "";
    if(broj_zadataka <= 0) {
        const nema_zadataka_div = document.createElement("div");
        nema_zadataka_div.classList.add("nema-zadataka");
        nema_zadataka_div.innerHTML = "NEMA ZADATAKA";
        zadaci_kontejner.appendChild(nema_zadataka_div);
        return;
    }
    for(let i = 1; i <= broj_zadataka; i++) {
        const zadatak_div = document.createElement("div");
        zadatak_div.classList.add("zadatak");
        zadatak_div.innerHTML = "ZADATAK " + i;
        zadaci_kontejner.appendChild(zadatak_div);
    }
}